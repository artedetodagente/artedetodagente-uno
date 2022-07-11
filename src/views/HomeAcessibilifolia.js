import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

function HomeAcessibilifolia() {
  // function downloadEdital() {
  //   const link = document.createElement('a');
  //   link.href = require('../assets/docs/Chamada Acessibilifolia_Projeto Um Novo Olhar.pdf');
  //   link.setAttribute('download', 'Chamada Acessibilifolia_Projeto Um Novo Olhar.pdf');
  //   document.body.appendChild(link);
  //   link.click();
  //   link.parentNode.removeChild(link);
  // }

  return (
    <section id="acessibilifolia" className="base cursos" style={{ backgroundImage: `url(${require('../assets/images/220708-CantoCoral-Banner-v2.jpg')})`, backgroundPosition: 'left 95px', backgroundSize: '45%', backgroundRepeat: 'no-repeat' }}>
      <div className="title-box divider">
        <h2>
          <Link to="/#acessibilifolia">
            Festival Acessibilifolia
          </Link>
        </h2>
      </div>
      <div className="grid lg:grid-cols-5">
        <div className="col-span-3" style={{ paddingTop: '25%' }}>
          <p>
            O Festival Acessibilifolia traz para o Teatro Cacilda Becker, no Rio de Janeiro, durante o mês de abril de 2022, uma programação presencial e gratuita, destinada a pessoas com e sem deficiência, e que inclui rodas de conversa, apresentações e oficinas que têm como foco discutir a acessibilidade no carnaval carioca. Todas as atividades do festival contam com acessibilidade física, interpretação em libras e mediação acessível, e as apresentações contarão também com audiodescrição. As inscrições para as oficinas já estão abertas e podem ser feitas aqui no site, por meio dos botões ao lado.
          </p>
        </div>
        <div className="col-span-2 flex flex-col pl-8">
          <div>
            <p className="mt-4">Faça sua inscrição:</p>
          </div>
          <div>
            <a
              href="https://forms.gle/YSNSN9hoRKiVoypSA"
              className="link-box w-full mt-6 text-center"
              rel="noopener noreferrer"
              target="_blank"
            >
              Oficina de Adereços e Alegorias da Orquestra Voadora
            </a>
          </div>
          <div>
            <a
              href="https://forms.gle/wK8nA6qWDaj32CQN9"
              className="link-box w-full mt-6 text-center"
              rel="noopener noreferrer"
              target="_blank"
            >
              Oficina de Instrumentos da Alegria - Embaixadores da Alegria
            </a>
          </div>
          <div>
            <a
              href="https://forms.gle/uknezgk4Ro5jR1nG8"
              className="link-box w-full mt-6 text-center"
              rel="noopener noreferrer"
              target="_blank"
            >
              Oficina de Percussão e Iniciação Musical da Orquestra Voadora
            </a>
          </div>
          <div>
            <a
              href="https://umnovoolhar.art.br/noticias/Festival-Acessibilifolia-no-Rio"
              className="link-box link-box-featured w-full mt-6 text-center"
              rel="noopener noreferrer"
              target="_blank"
            >
              Veja toda Programação
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeAcessibilifolia;
