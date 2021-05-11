import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

function HomeCursos(props) {
  const formUrl = `https://docs.google.com/forms/d/e/1FAIpQLSdLjYhkvf4MmkXA08dgl3pCVpXMeapOrBvdvcPcXV507FR2TQ/viewform`

  return (
    <section id="cursos" className="base cursos">
      <div className="title-box divider">
        <h2>
          <Link to="/#cursos">
            Artes Integradas + Educação + Acessibilidade (2ª Turma)
          </Link>
        </h2>
      </div>
      <div className="inside-content">
        <div>
          <p>
          Já estão abertas as inscrições para a segunda turma do curso Artes Integradas + Educação + Acessibilidade, do projeto Um Novo Olhar. A coordenação de conteúdo é da professora Daina Leyton, que divide as aulas, assíncronas, com a professora Diele Pedrozo Santo. O curso será ministrado no Ambiente Virtual de Aprendizagem da UFRJ, entre 31/5 e 27/7 de 2021. Haverá emissão de certificado, com carga horária de 48 horas, para os cursistas que obtiverem aprovação por meio de uma avaliação sobre o conteúdo apresentado. Saiba mais sobre o curso aqui:
          </p>
          <p>&nbsp;</p>
          <a 
            href={formUrl} 
            className="link-box" 
            rel="noopener noreferrer" 
            target="_blank"
          >
            Faça sua inscrição
          </a>
          &nbsp;
          <Link className="link-box" to="/noticias/Arte-com-igualdade-para-todos">
            Saiba mais
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HomeCursos;
