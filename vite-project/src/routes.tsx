import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Paginas/Home";
import Profissional from "./Paginas/Profissional";
import Usuario from "./Paginas/Usuarios";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pessoa-usuaria" element={<Usuario />} />
        <Route path="/profissional" element={<Profissional />} />
        <Route path="*" element="Pagina não encontrada" />
      </Routes>
    </BrowserRouter>
  );
}