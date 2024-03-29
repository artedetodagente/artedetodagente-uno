import React from 'react'
// import HomeBanner from './HomeBanner'
import FormNewsletter from '../components/FormNewsletter'
import api from '../services/api'
import Footer from './Footer'
// import store from '../store'
import Header from './Header'
// import HomeCimuci from './HomeCimuci'
import HomeAcessibilifolia from './HomeAcessibilifolia'
// import HomeFunarte from './HomeFunarte'
// import HomeCursoGestao from './HomeCursoGestao'
// import HomeCursos from './HomeCursos'
import HomeEventos from './HomeEventos'
// import HomeLandingENAC from './HomeLandingENAC'
import HomeNews from './HomeNews'
import HomeProjetos from './HomeProjetos'
import HomeVideoEspecial from './HomeVideoEspecial'
// import HomeEncontro from './HomeEncontro'
import HomeVideos from './HomeVideos'
// import HomeWorkshop from './HomeWorkshop'
import HomeGestao from './HomeGestao'
import HomeLivro from './HomeLivro'


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
        <HomeGestao />
        {/* <HomeCimuci /> */}
        {/* <HomeAcessibilifolia /> */}
        <HomeLivro />
        {/* <HomeWorkshop /> */}
        {/* <HomeEncontro /> */}
        {/* <HomeCursoGestao /> */}
        {/* <HomeCursos /> */}
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
