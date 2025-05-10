import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Teach from "./pages/Teach";
import Debate from "./pages/Debate";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teach/:id" element={<Teach />} />
          <Route path="/debate" element={<Debate />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
