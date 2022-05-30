import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';

function HomeGestao(props) {
  return (
    <section id="gestao" className="base cursos">
      <div className="title-box divider">
        <h2>
          <Link to="/#gestao">
            Curso de Acessibilidade Cultural: Arte de Toda Gente - Macapá
          </Link>
        </h2>
      </div>
      <div className="inside-content">
        <div>
          <p>
            Entre os dias 13 e 15 de junho de 2022, no SESC Araxá, em Macapá (AP), o Um Novo Olhar promove o evento presencial Acessibilidade Cultural: Arte de Toda Gente, com cursos e oficinas com professores e especialistas em acessibilidade, abordando os temas Gestão e Produção Cultural Acessível, Audiodescrição em Contextos Culturais e Tecnologias Assistivas Aplicadas em Cena. As inscrições são gratuitas e podem ser feitas aqui.
          </p>
          <a
            href='https://forms.gle/48WxB7boaysvozaq5'
            className="link-box"
            rel="noopener noreferrer"
            target="_blank"
          >
            Faça sua inscrição
          </a>

          &nbsp;
          <Link className="link-box" to="noticias/Acessibilidade-Cultural:-Arte-de-Toda-Gente-em-Macapa">
            Saiba mais
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HomeGestao;
