import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Teach from "./pages/Teach";
import Debate from "./pages/Debate";
import Navbar from "./components/Navbar";
import LessonList from "./pages/LessonList";
import CreateLesson from "./pages/CreateLesson";
import Login from "./pages/Login";
import Register from "./pages/Register";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white">
        <Navbar />
        <div className="p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/teach" element={<LessonList />} />
            <Route path="/teach/:id" element={<Teach />} />
            <Route path="/teach/create" element={<CreateLesson />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route path="/debate" element={<Debate />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
