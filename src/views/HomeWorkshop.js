import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

function HomeWorkshop(props) {
  const formUrl = `https://docs.google.com/forms/d/1MLVvDDsCpKAt8FiC06peM8G1V5d9U-hrLZGAIxS0rM4/viewform?edit_requested=true`

  return (
    <section id="workshop" className="base cursos">
      <div className="title-box divider">
        <h2>
          <Link to="/#workshop">
            Workshop Teatro Musical Inclusivo
          </Link>
        </h2>
      </div>
      <div className="inside-content">
        <div>
          <p>
            Como parte da programação do Festival Arte de Toda Gente, o Projeto Um Novo Olhar promove em setembro o workshop gratuito Teatro musical inclusivo dos Menestreis. Com aulas ao vivo, online, a atividade é direcionada a jovens e adultos com Síndrome de Down e TEA (transtorno do espectro autista), com idade mínima de 12 anos, e será conduzida pelo ator e diretor Deto Montenegro. Serão quatro aulas online, ao vivo, marcadas para os dias 20, 22, 27 e 29/9, sempre de 10h às 11h30. Para participar, é preciso inscrever-se antecipadamente aqui no site, pois há limitação de 20 vagas para a atividade. Uma vez confirmada a inscrição, os participantes receberão um link de acesso e aqueles que assistirem a, pelo menos, três aulas receberão certificados de participação.
          </p>
          <a 
            href='https://docs.google.com/forms/u/3/d/1-3EkQJGRakKSgrGiupi7zk_xzUzbXrum_82l8JVpnIc/edit' 
            className="link-box pointer-events-none"
          >
            Inscrição
          </a>
        </div>
      </div>
    </section>
  );
}

export default HomeWorkshop;
