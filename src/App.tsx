import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ExperienceDetail from "./pages/ExperienceDetail";
import ProjectDetail from "./pages/ProjectDetail";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/pengalaman/:slug" element={<ExperienceDetail />} />
      <Route path="/karya/:slug" element={<ProjectDetail />} />
    </Routes>
  );
}
