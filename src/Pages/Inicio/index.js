import Banner from "components/Banner";
import Cabecalho from "components/Cabecalho";
import Card from "components/Card";
import Rodape from "components/Rodape";
import Titulo from "components/Titulo";

function Inicio() {
  return (  
   <div>
     <Cabecalho />
     <Banner imagem='home'/>
     <Titulo>
      <h1>Um lugar para guardar seus vídeos e filmes</h1>
     </Titulo>
     <Card id='1' capa='/imagens/banner-favoritos.png' titulo= 'Teste card'/>
     <Rodape />
   </div>
  );
}

export default Inicio;