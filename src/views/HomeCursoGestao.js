import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

function HomeCursoGestao(props) {
  const formUrl = `https://docs.google.com/forms/d/1MLVvDDsCpKAt8FiC06peM8G1V5d9U-hrLZGAIxS0rM4/viewform?edit_requested=true`

  return (
    <section id="cursos-gestao" className="base cursos">
      <div className="title-box divider">
        <h2>
          <Link to="/#cursos-gestao">
            Curso de Gestão e Produção Cultural Acessível
          </Link>
        </h2>
      </div>
      <div className="inside-content">
        <div>
          <p>
            Já estão abertas as inscrições para o Curso de Gestão e Produção Cultural Acessível. Promovido pelo projeto Um Novo Olhar, como parte da programação do Festival Arte de Toda Gente, abordará a acessibilidade cultural para pessoas com deficiência, com foco na gestão e produção cultural acessível para projetos e ambientes culturais e tem como público-alvo produtores e gestores culturais.  Composto de seis aulas online, com duas horas de duração cada uma, o curso se inicia no dia 2 de setembro, às 10h, e será realizado ao vivo por meio da plataforma Zoom. Para participar, é necessário fazer inscrição prévia, sujeita a confirmação. Estão disponíveis 50 vagas e, ao final, será emitido um certificado para os alunos que estiverem presentes a, no mínimo, quatro aulas.
          </p>
          <a 
            href='#' 
            className="link-box pointer-events-none"
          >
            Inscrições Esgotadas
          </a>
        </div>
      </div>
    </section>
  );
}

export default HomeCursoGestao;
