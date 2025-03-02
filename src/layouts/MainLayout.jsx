// filepath: /c:/Users/andres/Desktop/react-site-alex/src/layouts/MainLayout.jsx
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./partials/Footer";
import Navbar from "./partials/Navbar";

function MainLayout() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div>
      <Navbar backgroundStyle={isHome ? "transparent" : "white"} />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;