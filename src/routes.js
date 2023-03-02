import Favoritos from "Pages/Favoritos";
import Inicio from "Pages/Inicio";
import NaoEncontrada from "Pages/NaoEncontrada";
import PaginaBase from "Pages/PaginaBase";
import Player from "Pages/Player";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<PaginaBase />}>
          <Route index element={<Inicio />} />
          <Route path="favoritos" element={<Favoritos />} />
          <Route path=":id" element={<Player />} />
          <Route path='*' element={<NaoEncontrada />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;