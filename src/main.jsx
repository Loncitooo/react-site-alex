import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./views/Home.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import PublicationsView from "./views/Publications.jsx";
import ProjectsView from "./views/Projects.jsx";
import MediaView from "./views/Media.jsx";
import "./i18n"; // Importar la configuración de i18n

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/publicaciones" element={<PublicationsView />} />
        <Route path="/proyectos" element={<ProjectsView />} />
        <Route path="/media" element={<MediaView />} />
      </Route>
    </Routes>
  </BrowserRouter>
);