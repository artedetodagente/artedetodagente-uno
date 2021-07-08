import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

function HomeAcessibilifolia(props) {
  const formUrl = `https://docs.google.com/forms/d/1UZZ1sTpgKVlUGvvP_QohEeveE24NQYvRXBWtTB0YZsc/viewform?edit_requested=true`

  function downloadEdital() {
    const link = document.createElement('a');
    link.href = require('../assets/docs/Chamada Acessibilifolia_Projeto Um Novo Olhar.pdf');
    link.setAttribute('download', 'Chamada Acessibilifolia_Projeto Um Novo Olhar.pdf');
    document.body.appendChild(link);
    link.click();
    link.parentNode.removeChild(link);
  }

  return (
    <section id="acessibilifolia" className="base cursos" style={{ backgroundColor: 'rgb(253, 242, 4)' }}>
      <div className="title-box divider">
        <h2>
          <Link to="/#acessibilifolia">
            Acessibilifolia
          </Link>
        </h2>
      </div>
      <div className="grid lg:grid-cols-2">
        <figure className="hidden lg:block">
          <img src={require('../assets/images/Acessibilifolia.png')} />
        </figure>
        <div>
          <div>
            <p>
              Acessibilifolia: torne o seu vídeo acessível. Inscreva-se aqui
              O programa Acessibilifolia convoca os realizadores das diferentes festas e manifestações da cultura popular para que contribuam na democratização do acesso à alegria, à festa e à brincadeira popular, compartilhando conteúdos artísticos e culturais com a população com deficiência no Brasil. Ao todo, serão selecionados 12 vídeos, em duas categorias, que ganharão legendagem para surdos e ensurdecidos, interpretação em Libras e audiodescrição, sendo depois publicados no site e nas redes sociais do Um Novo Olhar e no canal Arte de Toda Gente. As inscrições estão abertas até o dia 7/8/2021. Confira todos os detalhes desta chamada lendo o edital.
            </p>
            <button className="link-box" onClick={downloadEdital}>
              Leia o Edital
            </button>
            &nbsp;
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
      </div>
    </section>
  );
}

export default HomeAcessibilifolia;
