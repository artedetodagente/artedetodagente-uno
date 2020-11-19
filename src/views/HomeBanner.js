import React from 'react'

function HomeBanner(props) {

  return (
    <section id="banner" className="base banner" style={{backgroundColor: props.bgColor || '#000'}}>
      <a href={props.url} rel="noopener noreferrer" target="_blank" title={props.title}>
        <img src={props.img} alt={props.title}/>
      </a>
    </section>
  );
}

export default HomeBanner;
