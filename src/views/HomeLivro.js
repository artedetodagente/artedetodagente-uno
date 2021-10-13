import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

function HomeLivro(props) {
  const formUrl = `https://docs.google.com/forms/d/1UZZ1sTpgKVlUGvvP_QohEeveE24NQYvRXBWtTB0YZsc/viewform?edit_requested=true`

  function downloadEdital() {
    const link = document.createElement('a');
    link.href = require('../assets/docs/Livro_aprimorando meu coral infantil_diagramando_Final_V5_para publicação.pdf');
    link.setAttribute('download', 'Livro_aprimorando meu coral infantil_diagramando_Final_V5_para publicação.pdf');
    document.body.appendChild(link);
    link.click();
    link.parentNode.removeChild(link);
  }

  return (
    <section id="livro" className="base cursos" style={{ backgroundColor: 'rgb(253, 242, 4)' }}>
      <div className="title-box divider">
        <h2>
          <Link to="/#livro">
            Aprimorando Meu Coro Infantil: técnica e criatividade
          </Link>
        </h2>
      </div>
      <div className="grid lg:grid-cols-2 gap-x-5">
        <div className="hidden lg:block">
          <figure>
            <img src={require('../assets/images/CAPA-Livro.jpg')} />
          </figure>
        </div>
        <div>
          <div>
            <p>
              Organizado pela professora Maria José Chevitarese, o trabalho conta com a colaboração de várias regentes especialistas no tema e o aborda a partir de diferentes enfoques. O livro é uma publicação do projeto Um Novo Olhar, parceria da Fundação Nacional de Artes – Funarte com a Universidade Federal do Rio de Janeiro – UFRJ, com curadoria de sua Escola de Música, e estará disponível para download AQUI.
            </p>
            <button className="link-box" onClick={downloadEdital}>
              Download
            </button>
            {/* &nbsp;
            <a 
              href={formUrl} 
              className="link-box" 
              rel="noopener noreferrer" 
              target="_blank"
            >
              Faça sua inscrição
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeLivro;
