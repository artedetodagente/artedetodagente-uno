import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

function HomeCursos(props) {
  const formUrl = `https://docs.google.com/forms/d/e/1FAIpQLSeHHfAvFVgqc82Yahv7OVnOIbS8UuJjK789f2c8EYsL33_Ypw/viewform`

  return (
    <section id="cursos" className="base cursos">
      <div className="title-box divider">
        <h2>
          <Link to="/#cursos">
            Dança + Educação + Acessibilidade
          </Link>
        </h2>
      </div>
      <div className="inside-content">
        <div>
          <p>
            Estão abertas aqui no site, até 9/8, as inscrições para o curso Dança + Educação + Acessibilidade, destinado a professores do ensino fundamental e demais profissionais interessados em arte/educação e acessibilidade. Na pauta, temas que envolvem as relações entre os campos da dança, da dança-educação e da acessibilidade cultural, para fornecer ao professor maior capacitação para trabalhar com elementos da dança na diversidade. O curso é gratuito, terá aulas assíncronas e será realizado em ambiente virtual, com início em 16/8 e conclusão até 10/10. Estão disponíveis 600 vagas para todo o país.
          </p>
          <p>
            A atividade faz parte da série de Arte/Educação + Acessibilidade + Inclusão do projeto Um Novo Olhar, parceria da Fundação Nacional de Artes – Funarte com a Universidade Federal do Rio de Janeiro – UFRJ.
            Link inscrições:
          </p>
          <a 
            href={formUrl} 
            className="link-box" 
            rel="noopener noreferrer" 
            target="_blank"
          >
            Faça sua inscrição
          </a>
          
          &nbsp;
          <Link className="link-box" to="/noticias/Estao-abertas-(ate-98)-as-inscricoes-para-o-curso-Danca-+-Educacao-+-Acessibilidade">
            Saiba mais
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HomeCursos;
