import Cabecalho from "components/Cabecalho";
import Favoritos from "components/Favoritos";
import Rodape from "components/Rodape";
import Inicio from "Pages/Inicio";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes() {
  return (  
    <BrowserRouter>
      <Cabecalho />
      <Routes>
        <Route path="/" element={<Inicio /> } />
        <Route path="/favoritos" element={<Favoritos /> } />
        
      </Routes>
      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;