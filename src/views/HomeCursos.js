import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

function HomeCursos(props) {
  const formUrl = `https://docs.google.com/forms/d/e/1FAIpQLScnIJQvQfIHnnexM9hy2qlVFQaMm7wNCaA0yX9ajL5fSi30eg/viewform`

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
            Estão abertas as inscrições para a segunda turma do curso Artes Visuais + Educação + Acessibilidade + Decolonialismo, curso de capacitação para educadores oferecido pelo projeto Um Novo Olhar e que faz parte da série de cursos Arte/Educação + Acessibilidade + Inclusão.
          </p>
          <p>&nbsp;</p>
          <p>
            O Curso Artes Visuais + Educação + Acessibilidade + Decolonialismo fomenta em seis módulos as relações entre a Acessibilidade Cultural e o Ensino das Artes Visuais no Brasil a partir de uma perspectiva não linear e não hegemônica. São abordadas questões como formação de públicos, acesso aos bens culturais, espaços de criação e protagonismo, possibilitando uma abordagem acessível e abrangente das concepções de educação formal, não formal e suas implicações no ensino das artes visuais na perspectiva decolonial, com foco nas implicações políticas da luta para a consolidação do ensino da arte na educação básica, valorização da arte como área de conhecimento e ampliação da acessibilidade cultural no Brasil.
          </p>
          <p>
            O curso será realizado através do Ambiente Virtual de Aprendizagem da UFRJ, terá início em 14 de junho e poderá ser concluído até 08 de agosto de 2021. As aulas são assíncronas e haverá emissão de certificado, com carga horária de 48h, para os cursistas que obtiverem aprovação através de avaliação sobre o conteúdo apresentado.
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
          <Link className="link-box" to="/noticias/Artes-Visuais-+-Educacao-+-Acessibilidade-+-Decolonialismo-(2a-Turma)">
            Saiba mais
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HomeCursos;
