import Cabecalho from "components/Cabecalho";
import Container from "components/Container";
import Rodape from "components/Rodape";
import FavoritosProvider from "contextos/Favoritos";
import Favoritos from "Pages/Favoritos";
import Inicio from "Pages/Inicio";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Cabecalho />
      <Container>
        <FavoritosProvider>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>
        </FavoritosProvider>
      </Container>
      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;