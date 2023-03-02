import styles from './Player.module.css';

import Banner from 'components/Banner';
import Titulo from 'components/Titulo';
import { useParams } from 'react-router-dom';
import videos from 'json/db.json'
import NaoEncontrada from 'Pages/NaoEncontrada';


function Player() {
  const parametros = useParams()
  const video = videos.find(video => {
    return video.id === Number(parametros.id)
  })

  if(!video) {
    return <NaoEncontrada />
  }

  return (
    <>
      <Banner imagem='player'/>
      <Titulo><h1>Player</h1></Titulo>
      <section className={styles.container}>
        <iframe
          width="80%"
          height="500"
          src={video.link}
          title={video.titulo}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowFullScreen
        >
        </iframe>
      </section>

    </>

  )
}

export default Player;