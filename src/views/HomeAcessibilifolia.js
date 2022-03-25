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
    <section id="acessibilifolia" className="base cursos" style={{ backgroundImage: `url(${require('../assets/images/bg-acess.png')})`, backgroundPosition: 'left 95px', backgroundSize: '45%', backgroundRepeat: 'no-repeat' }}>
      <div className="title-box divider">
        <h2>
          <Link to="/#acessibilifolia">
            Acessibilifolia
          </Link>
        </h2>
      </div>
      <div className="grid lg:grid-cols-5">
        <div className="col-span-3" style={{ paddingTop: '25%' }}>
          <p>
            O programa Acessibilifolia tem como objetivo fomentar a acessibilidade e a inclusão de pessoas com deficiência nas festas populares que compõem o patrimônio cultural e imaterial do Brasil, como blocos de carnaval, grupos de frevo, boi e maracatu, entre outros. Para isso, gera conteúdo e direciona ações que buscam tornar nosso festejos populares mais democráticos e inclusivos – não só para as pessoas com deficiência, mas para todos que compartilham esses espaços, promovendo assim a convivência e a diversidade.
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
              Oficina de Instrumentos da Alegria
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
        </div>
      </div>
    </section>
  );
}

export default HomeAcessibilifolia;
