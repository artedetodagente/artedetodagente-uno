import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

function HomeLandingEncontro() {
  return (
    <section id="landing" className="base landing">

      <div className="title-box">
        <h2><Link to="/#landing">Encontro um novo olhar de arte/educação + acessibilidade</Link></h2>
      </div>
      {/* 
      <div className="title">
        <h3>5 e 6 de agosto de 2020</h3>
      </div>
      */}
      <div className="cols">
        <div>
          <p>
            O Encontro Um Novo Olhar de Arte/Educação + Acessibilidade
            aconteceu entre os dias 5 e 6 de agosto, de forma virtual.
            A Conferência de abertura e as mesas do encontro estão
            disponíveis no canal Arte de Toda Gente, no <a href="https://youtube.com/artedetodagente" rel="noopener noreferrer" target="_blank" title="youtube">Youtube</a>.
          </p>
          <p>
            {/* <a
              className="link-box"
              href="https://forms.gle/knLRKvuzuqezeG6s5"
              title="Faça a sua inscrição"
              rel="noopener noreferrer"
              target="_blank" >
                Faça a sua inscrição
            </a>
            &nbsp; 
            <Link
              className="link-box"
              to="/encontro-programacao">
                Confira a programação
            </Link>
            */}
            <a
              className="link-box"
              href="https://www.youtube.com/playlist?list=PL5mP5ut65rSK5yHw6PsD2pjzic080HKEs"
              title="Saiba mais"
              rel="noopener noreferrer"
              target="_blank" >
                Saiba mais
            </a>
          </p>
          <p>&nbsp;</p>
          
        </div>
        <div>
          {/* <p><img src="/img/landing-libras.png" width="96" alt="libras" /></p> */}
        </div>
      </div>

      <div className="cols">
        <div>
          <p>Acompanhe:</p>
          <ul>
            <li>
              <a href="https://www.facebook.com/Um-Novo-Olhar-100828528394867/" rel="noopener noreferrer" target="_blank" title="facebook">
                <span><img src="/img/icons/facebook.svg" width="32px" alt="facebook" /></span>
                <span>facebook.com/Um-Novo-Olhar</span>
              </a>
            </li>
            <li>
              <a href="https://youtube.com/artedetodagente" rel="noopener noreferrer" target="_blank" title="youtube">
                <span><img src="/img/icons/youtube.svg" width="32px" alt="youtube" /></span>
                <span>youtube.com/artedetodagente</span>
              </a>
            </li>
            <li>
              <a href="https://instagram.com/umnovoolhar.art.br" rel="noopener noreferrer" target="_blank" title="facebook">
                <span><img src="/img/icons/instagram.svg" width="32px" alt="instagram" /></span>
                <span>instagram.com/umnovoolhar.art.br</span>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p>Realização:</p>
          <p><img src="/img/uno-marcas-amarelo.jpg" alt="UFRJ 100 anos, Escola de Música da UFRJ, Fundação Universitária José Bonifácio, FUNARTE, Ministério do Turismo, Governo Federal" /></p>
        </div>
      </div>

    </section>
  );
}

export default HomeLandingEncontro;
