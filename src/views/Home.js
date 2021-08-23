import React from 'react'
// import store from '../store'

import Header from './Header'
import Footer from './Footer'

import HomeLandingENAC from './HomeLandingENAC'
import HomeCursos from './HomeCursos'
import HomeEncontro from './HomeEncontro'
import HomeVideos from './HomeVideos'
import HomeProjetos from './HomeProjetos'
import HomeNews from './HomeNews'
import HomeVideoEspecial from './HomeVideoEspecial'
import HomeEventos from './HomeEventos'
import HomeBanner from './HomeBanner'
import FormNewsletter from '../components/FormNewsletter'
import api from '../services/api'
import HomeAcessibilifolia from './HomeAcessibilifolia'
import HomeFunarte from './HomeFunarte'

function Home() {
  async function sendEmail(e, data) {
    e.preventDefault();
    const res = await api.post('/email', data);
    console.log(res);
  }
  
  return (
    <>
      <Header />
      <main className="main-content home-content">
        <HomeNews />
        {/* <HomeLandingENAC /> */}
        <FormNewsletter submit={sendEmail} />
        <HomeVideoEspecial />
        {/* <HomeEncontro /> */}
        <HomeCursos />
        {/* <HomeAcessibilifolia /> */}
        {/* <HomeFunarte /> */}
        <HomeVideos id="apresentacoes" label="Acessar todas as apresentações" />
        <HomeVideos id="palestras" label="Acessar todas as palestras" />
        <HomeProjetos id="oficinas-de-regencia" />
        <HomeProjetos id="acessibilifolia" />
        <HomeProjetos id="repertorio-coral" />
        <HomeEventos />
        {/* <HomeBanner url={`http://www.ifcplp.org`} img={`/img/banners/banner-curso-fotografia.jpg`} /> */}
      </main>
      <Footer />
    </>
  );
}

export default Home;
