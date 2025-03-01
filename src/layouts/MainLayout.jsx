import { Outlet } from "react-router";
import Footer from "./partials/Footer";
import Navbar from "./partials/Navbar";

function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
