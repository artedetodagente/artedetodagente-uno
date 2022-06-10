import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

function HomeGestao(props) {
  return (
    <section id="gestao" className="base cursos">
      <div className="title-box divider">
        <h2>
          <Link to="/#gestao">
            Curso de Regência de Corais Infantojuvenil em Campina Grande (PB)
          </Link>
        </h2>
      </div>
      <div className="inside-content">
        <div>
          <p>
            O Painel Funarte - UFRJ de Regência Coral oferece capacitação em direção de coros infantojuvenis e será oferecido de forma presencial em várias cidades brasileiras ao longo dos próximos meses. A primeira delas é Campina Grande (PB), onde o curso acontecerá entre os dias 05 a 08 de julho de 2022, no campus da Universidade Federal, e aborda temas como regência coral, dinâmica de ensaio, técnica vocal e leitura de repertório, em aulas ministradas pelas professoras Silmara Drezza e Juliana Melleiro. Estão disponíveis 100 vagas e as inscrições podem ser feitas aqui.
          </p>
          <a
            href='https://forms.gle/YffTA2USnU5gY33W6'
            className="link-box"
            rel="noopener noreferrer"
            target="_blank"
          >
            Faça sua inscrição
          </a>

          &nbsp;
          <Link className="link-box" to="noticias/Curso-de-regencia-de-corais-infantojuvenis-em-Campina-Grande-(PB)">
            Saiba mais
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HomeGestao;
