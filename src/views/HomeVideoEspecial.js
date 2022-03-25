import React from 'react'

function HomeVideoEspecial() {

  const url = "https://youtu.be/jB0rFfC-G8k"
  const vid = url.match(/(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/user\/\S+|\/ytscreeningroom\?v=))([\w-]{10,12})\b/)[1]

  return (
    <>
      <section className="base video-especial" style={{ backgroundColor: '#fdf204' }}>
        <div className="title-box divider">
          <h2>Cure o Mundo - Uma mensagem de esperança e cura</h2>
        </div>
        <div className="embed-container" style={{ paddingBottom: 0, height: '200px', width: '400px' }}>
          <iframe
            title={vid}
            src={`https://www.youtube.com/embed/${vid}`}
            frameBorder="0"
            allow="fullscreen"
          ></iframe>
        </div>
      </section>
    </>
  )
}

export default HomeVideoEspecial;