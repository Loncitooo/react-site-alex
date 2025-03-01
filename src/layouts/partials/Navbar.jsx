import React, { useState } from "react";
import NavbarLink from "../../components/NavbarLink";
import { FaBars, FaTimes } from "react-icons/fa"; // Íconos para el menú móvil

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar el menú móvil

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 z-50 min-h-20 w-full p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Nombre en grande */}
        <a href="/" className="text-2xl font-bold text-gray-900 md:text-3xl">
          ALEX COVARRUBIAS
        </a>

        {/* Menú para pantallas grandes */}
        <nav className="hidden space-x-6 md:flex">
          <NavbarLink to="/">Home</NavbarLink>
          <NavbarLink to="/publicaciones">Publications</NavbarLink>
          <NavbarLink to="/proyectos">Projects</NavbarLink>
          <NavbarLink to="/media">Media</NavbarLink>
        </nav>

        {/* Botón de menú móvil */}
        <button
          onClick={toggleMenu}
          className="text-2xl text-gray-900 focus:outline-none md:hidden"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Menú móvil */}
      {isMenuOpen && (
        <div className="bg-opacity-95 mt-4 bg-white py-4 shadow-lg md:hidden">
          <nav className="flex flex-col items-center space-y-4">
            <NavbarLink to="/" onClick={toggleMenu}>
              Home
            </NavbarLink>
            <NavbarLink to="/publicaciones" onClick={toggleMenu}>
              Publications
            </NavbarLink>
            <NavbarLink to="/proyectos" onClick={toggleMenu}>
              Projects
            </NavbarLink>
            <NavbarLink to="/media" onClick={toggleMenu}>
              Media
            </NavbarLink>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
