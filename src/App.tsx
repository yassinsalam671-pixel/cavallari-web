import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Servizi from "./pages/Servizi";
import Contatti from "./pages/Contatti";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/servizi" element={<Servizi />} />
      <Route path="/contatti" element={<Contatti />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
