import React, { useState, useEffect } from 'react';
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import api from '../services/api';
import * as R from 'ramda';
import { fdate } from '../util';

const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

function PageAgenda() {

  let { path } = useRouteMatch()

  const [current_month, setCurrentMonth] = useState()
  const [schedules, setSchedules] = useState([])
  const [events, setEvents] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await api.get('/schedules?_sort=date:ASC')
      let schedules = response.data.map(item => new Date(item.date).getMonth())
      setSchedules(schedules)
      const todayMonth = new Date().getMonth()
      setCurrentMonth(schedules.indexOf(todayMonth) !== -1 ? todayMonth : R.last(schedules))
    }
    fetchData()
  }, [])

  useEffect(() => {
    async function fetchData() {
      const year = new Date().getFullYear();
      const response = await api.get(`/schedule-events?_sort=date:ASC&schedule.month=${months[current_month]}&date_gte=${year}-01-01&date_lte=${year}-12-31`);
      setEvents(response.data ?? [])
      console.log(response)
    }
    fetchData()
  }, [current_month])

  function nextMonth() {
    if (nextEnabled) setCurrentMonth(schedules[index + 1])
  }

  function prevMonth() {
    if (prevEnabled) setCurrentMonth(schedules[index - 1])
  }

  const index = schedules.indexOf(current_month)
  const prevEnabled = index > 0
  const nextEnabled = index < schedules.length - 1

  return (
    <>
      <Header title="Programação" url={'/agenda'} />
      <section className="page-content">
        <div className="page-view agenda-view">
          <Switch>
            <Route exact path={path}>
              <nav className="agenda-nav">
                <button
                  onClick={() => prevMonth()}
                  style={{ opacity: prevEnabled ? 1 : 0.5 }}
                >◀</button>
                <span>{months[current_month] || `...`}</span>
                <button
                  onClick={() => nextMonth()}
                  style={{ opacity: nextEnabled ? 1 : 0.5 }}
                >▶</button>
              </nav>
              <p>&nbsp;</p>
              <div className="agenda-feed" style={{ columnCount: events.length > 1 ? 2 : 1 }}>
                {events.map((evento, i) => {
                  const date = fdate(evento.date)
                  return (
                    <article key={`agenda-${current_month}-${i}`}>
                      <div className="agenda-item">
                        <div className="agenda-date">
                          <h3>{date.day}</h3>
                          <p>{date.month}</p>
                        </div>
                        <div className="agenda-content" >
                          <h3>{evento.time} | {evento.title}</h3>
                          &nbsp;
                          <p>{evento.description}</p>
                        </div>
                      </div>
                    </article>
                  )
                })}
              </div>
            </Route>
          </Switch>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default PageAgenda;