import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

function HomeCimuci(props) {
  const formUrl = `https://www.e-inscricao.com/cimuci/2021`

  return (
    <section id="cimuci" className="base cursos">
      <div className="title-box divider">
        <h2>
          <Link to="/#cimuci">
            II CIMUCI - CONGRESSO INTERNACIONAL DE MÚSICA CORAL INFANTOJUVENIL – UM NOVO OLHAR
          </Link>
        </h2>
      </div>
      <div className="inside-content">
        <div>
          <p>
            O Projeto Um Novo Olhar, realizado pela Universidade Federal do Rio de Janeiro – UFRJ e a Fundação Nacional das Artes (FUNARTE), o Governo do Estado do Espírito Santo, Faculdade de Música do Espírito Santo (FAMES), a Universidade Federal do Mato Grosso do Sul (UFMS), e o Lar Donato Flores, de Tatuí, São Paulo, em parceria com a Nova Associação Brasileira de Regentes Corais (ABRACO) e a Asociacion de Directores de Coro de la Republica Argentina (ADICORA) apresentam o II CIMUCI - CONGRESSO INTERNACIONAL DE MÚSICA CORAL INFANTOJUVENIL – Um Novo olhar, o qual será realizado em formato híbrido, nos dias 14, 15, 16 e 17 de outubro de 2021, transmitido pelo canal do YouTube Arte de Toda Gente.
          </p>
          <p>
            O Evento tem como principais objetivos, incentivar as reflexões sobre os caminhos plurais da atividade coral, voltada para o público infantojuvenil; dar a oportunidade de divulgação de trabalhos e pesquisas que vem sendo desenvolvidas; ampliar o intercâmbio entre as diferentes instituições que desenvolvem trabalhos voltados para esse público, em âmbito nacional e internacional. Nesta segunda edição estão previstas palestras, mesas redondas, oficinas e workshop, que contarão com a presença de destacados profissionais da música coral nacional e internacional, além de rica troca de experiências e saberes a partir das apresentações de trabalhos científicos, resultantes de pesquisas concluídas ou em andamento e de relatos de experiências resultante de atuação de professores, regentes, preparadores vocais, compositores e arranjadores para coros infantojuvenis.
          </p>
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
    </section>
  );
}

export default HomeCimuci;
