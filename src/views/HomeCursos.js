import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

function HomeCursos(props) {
  const formUrl = `https://docs.google.com/forms/d/e/1FAIpQLSdXVaN3qYt78FPGj_5334VGXHz4kKicZctgRm7xkwWSQVHkIA/viewform`

  return (
    <section id="cursos" className="base cursos">
      <div className="title-box divider">
        <h2><Link to="/#cursos">CURSO MÚSICA + EDUCAÇÃO + ACESSIBILIDADE</Link></h2>
      </div>
      <div className="inside-content">
        <div>
          <p>
            Estão abertas as inscrições para o curso Música + Educação + Acessibilidade, curso de capacitação para educadores oferecido pelo projeto Um Novo Olhar e que faz parte da série de cursos Arte/Educação + Acessibilidade + Inclusão.
          </p>
          <p>
            O curso Música + Educação + Acessibilidade foi desenvolvido por professores de música, porém estruturado para professores que não são músicos devido ao entendimento de que a música pode contribuir com o aprimoramento do ensino regular. A proposta do curso difere-se da Educação Musical cujo objetivo é ensinar música. No curso será discutida a relação profunda do homem com a música e de que forma esta arte permeia o desenvolvimento humano, trazendo a discussão para o trabalho com pessoas com deficiência; música e inclusão – as adaptações que facilitam o desenvolvimento do trabalho; e o trabalho de música com pessoas com diferentes deficiências: intelectual, visual, auditiva, surdez e Transtorno do Espectro Autista.
          </p>
          <p>
            O curso será realizado através do Ambiente Virtual de Aprendizagem da UFRJ, terá início em 17 de maio e poderá ser concluído até 11 de julho de 2021. As aulas são assíncronas e haverá emissão de certificado, com carga horária de 48h, para os cursistas que obtiverem aprovação através de avaliação sobre o conteúdo apresentado.
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
          &nbsp;<Link className="link-box" to="/noticias/Um-Novo-Olhar-abre-inscricoes-para-o-curso-Musica-+-Educacao-+-Acessibilidade-para-professores">Saiba mais</Link>
        </div>
      </div>
    </section>
  );
}

export default HomeCursos;
