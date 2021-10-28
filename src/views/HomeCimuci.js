import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

function HomeCimuci(props) {
  const formUrl = `https://docs.google.com/forms/d/e/1FAIpQLSeV25tK3ro1xvMYaREN0QRljsJiSIMa9mXXNiRHfpmq4owoVw/viewform`

  return (
    <section id="cimuci" className="base cursos">
      <div className="title-box divider">
        <h2>
          <Link to="/#cimuci">
            Curso Dança + Educação + Acessibilidade
          </Link>
        </h2>
      </div>
      <div className="inside-content">
        <div>
          <p>
          O curso Dança + Educação + Acessibilidade aborda as relações entre o campo da dança, da dança-educação e da acessibilidade cultural e discute tópicos como as linguagens artísticas e as forças históricas e políticas que acompanharam esta arte em sua trajetória no ocidente, incluindo uma apresentação e experimentações relacionadas ao tema. A intenção é fomentar reflexões e fornecer ao professor maior capacitação para trabalhar com elementos da dança na diversidade. As inscrições são gratuitas e estarão abertas aqui no site de 28/10 a 10/11 próximos. O curso será realizado no período de 16/11 a 16 de janeiro de 2022.
          </p>
          <div className="mt-10">
            <a 
              href={formUrl} 
              className="link-box" 
              rel="noopener noreferrer" 
              target="_blank"
            >
              Faça sua inscrição
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeCimuci;
