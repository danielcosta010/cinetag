import styles  from './NaoEncontrada.module.css';

function NaoEncontrada() {
  return(
    <section className={styles.container}>
      <h1>Ops!</h1>
      <p>Não foi possível encontrar a página, verifique a url digitada.</p>
    </section>

  )
}

export default NaoEncontrada;