import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

function HomeEncontro(props) {
  const formUrl = `https://docs.google.com/forms/u/3/d/1U0XH-6BDV0qIqz_Q-NTtVfqk4c3kLCOsPbfMsLBv3T8`

  return (
    <section id="encontro" className="base cursos" style={{ backgroundColor: 'rgb(253, 242, 4)' }}>
      <div className="title-box divider">
        <h2>
          <Link to="/#encontro">
            II ENCONTRO UM NOVO OLHAR DE ARTE/EDUCAÇÃO + ACESSIBILIDADE
          </Link>
        </h2>
      </div>
      <div className="inside-content">
        <div>
          <p>
            O II Encontro Um Novo Olhar de Arte/Educação + Acessibilidade acontece entre os dias 3 e 5 de agosto e as inscrições estão abertas aqui no site. Este ano, o evento integra a programação do Festival Arte de Toda Gente e acontece na forma de lives, transmitidas pelo canal do programa no Youtube, com tradução para Libras. O Com um é a formação, na arte/educação numa perspectiva acessível inclusiva e suas mesas proverão discussões sobre educação formal, não formal e informal e abordarão, também, a questão do decolonialismo na perspectiva da acessibilidade. 
          </p>
          <p>
            Destinado a professores, arte/educadores, estudantes, pesquisadores e profissionais de acessibilidade e aos demais interessados nos temas discutidos, o evento terá como convidados formadores, artistas e especialistas que têm atuado na promoção da cultura acessível, em diferentes regiões e instituições brasileiras, trazendo experiências, sotaques e perspectivas diferenciadas sobre o assunto. Para assistir, as inscrições não são obrigatórias – elas garantem, no entanto, a emissão de certificado para os que assistirem ao mínimo de quatro lives.
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
          <Link className="link-box" to="/noticias/II-Encontro-Um-Novo-Olhar-de-ArteEducacao-+-Acessibilidade-comeca-em-38-e-inscricoes-estao-abertas">
            Saiba mais
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HomeEncontro;
