import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom"
import {compiler} from 'markdown-to-jsx'

import Header from './Header'
import Footer from './Footer'
import DynamicPage from './DynamicPage'
import api from '../services/api'
import Palestrantes from './palestrantes'
import Button from '../components/Button'

function PageProject() {

  const [id, setId] = useState('projeto')
  const [page, setPage] = useState({page_title: `...`, page_text: `...`, Content: []})

  useEffect(()=>{
    async function fetchData(){
      const response = await api.get(`/page-builders?page_id=${id}`)
      setPage(response.data[0])
    }
    fetchData()
  },[id])


  return (
    <>
      <Header title={page.page_title} url={`/${id}`} />
      <main className="main-content page-content">
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 25 }}>
          <div style={{ marginRight: 15 }}>
            <Button
              text="Sobre o Projeto"
              click={() => setId('projeto')}
            />
          </div>
          <div>
            <Button
              text="Ficha Institucional"
              click={() => setId('projeto-ficha')}
            />
          </div>
        </div>
        {compiler(page.page_text)}
        <div className="page-zones">
        {page.Content.map( (component,i) => <DynamicPage key={i} data={component}/>)}
        </div>
        {id === 'congresso-internacional' ? <Palestrantes /> : null}
      </main>
      <Footer />
    </>
  );
}

export default PageProject;

