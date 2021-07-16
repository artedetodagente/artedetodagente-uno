import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

function HomeFunarte(props) {
  const formUrl = `https://forms.gle/sPheV1xCstW7Txi46`

  return (
    <section id="funarte" className="base cursos" style={{ paddingRight: 0 }}>
      <div className="title-box divider" style={{ marginRight: 0 }}>
        <h2>
          <Link to="/#funarte">
            Funarte e UFRJ lançam Festival Arte de Toda Gente
          </Link>
        </h2>
      </div>
      <div className="grid lg:grid-cols-2">
        <div>
          <div>
            <p>
              Começa no próximo dia 21 de julho, com atividades que se estenderão pelos próximos meses, o Festival Arte de Toda Gente. O Evento vai reunir dezenas de professores, especialistas e artistas das mais diversas vertentes e origens geográficas em uma série de oficinas, mostras, encontros e apresentações, ao vivo e gravadas, transmitidas gratuitamente pela internet, promovendo capacitação, acessibilidade e difusão das diversas formas de arte produzidas no país. Pela primeira vez, em um só evento, estarão combinadas, de forma complementar, atividades promovidas pelos três projetos do programa Arte de Toda Gente: Bossa Criativa, Um Novo Olhar e Sistema Nacional de Orquestras Sociais – Sinos, lançados ao longo de 2020 pela parceria entre a Fundação Nacional de Artes – Funarte e a Universidade Federal do Rio de Janeiro – UFRJ, com curadoria de sua Escola de Música.
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
        <figure className="hidden lg:block">
          <img src={require('../assets/images/Funarte.png')} className="m-auto" width="40%" />
        </figure>
      </div>
    </section>
  );
}

export default HomeFunarte;
