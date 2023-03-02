import styles from './Player.module.css';

import Banner from 'components/Banner';
import Titulo from 'components/Titulo';
import { useParams } from 'react-router-dom';
import NaoEncontrada from 'Pages/NaoEncontrada';
import { useEffect, useState } from 'react';


function Player() {
  const [video, setVideo] = useState();
  const parametros = useParams()

  useEffect(() => {
    fetch(`https://my-json-server.typicode.com/danielcosta010/cinetag-api/videos?id=${parametros.id}`)
    .then(resposta => resposta.json())
    .then(dados => {
      setVideo(...dados);
    })
  }, [parametros.id])
  

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