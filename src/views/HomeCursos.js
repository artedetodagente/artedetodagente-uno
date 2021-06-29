import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

function HomeCursos(props) {
  const formUrl = `https://docs.google.com/forms/d/e/1FAIpQLSdXVaN3qYt78FPGj_5334VGXHz4kKicZctgRm7xkwWSQVHkIA/viewform`

  return (
    <section id="cursos" className="base cursos">
      <div className="title-box divider">
        <h2>
          <Link to="/#cursos">
            Curso Música + Educação + Acessibilidade
          </Link>
        </h2>
      </div>
      <div className="inside-content">
        <div>
          <p>
            Estão abertas até o dia 12/7, aqui no site, as inscrições para a segunda turma do curso Música + Educação + Acessibilidade, do projeto Um Novo Olhar. A coordenação de conteúdo é da professora Thelma Alvares, que divide as aulas, assíncronas, com os professores  Viviane Louro e Fernando Guilhon. O curso será ministrado no Ambiente Virtual de Aprendizagem da UFRJ. Haverá emissão de certificado, com carga horária de 48 horas, para os cursistas que obtiverem aprovação por meio de uma avaliação sobre o conteúdo apresentado. Saiba mais sobre o curso aqui:
          </p>
          <p>
            O curso foi desenvolvido por professores de música, mas não tem como proposta a educação musical. Ele foi estruturado para professores que não são músicos – a partir do entendimento de que a música pode contribuir com o aprimoramento do ensino regular. 
          </p>
          <p>
            Na série, será discutida a relação profunda do homem com a música e, ainda, de que modo essa forma de expressão artística influencia no desenvolvimento humano. Os vídeos abordam temas como: o trabalho direcionado a pessoas deficiência; a música relacionada à inclusão desses cidadãos; as adaptações que facilitam o desenvolvimento dessa atividade; e o trabalho musical direcionado a pessoas com diferentes deficiências: intelectual, visual, auditiva, surdez e transtorno do espectro autista.
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
          <Link className="link-box" to="/noticias/Abertas-as-inscricoes-para-a-2a-turma-do-curso-Musica-+-Educacao-+-Acessibilidade">
            Saiba mais
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HomeCursos;
