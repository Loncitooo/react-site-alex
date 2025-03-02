import React, { useState } from "react";
import { useTranslation } from "react-i18next"; // Importar useTranslation
import NavbarLink from "../../components/NavbarLink";
import { FaBars, FaTimes, FaGlobe } from "react-icons/fa";

function Navbar() {
  const { t, i18n } = useTranslation(); // Obtener la función de traducción y i18n
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Función para cambiar el idioma
  const toggleLanguage = () => {
    const newLanguage = i18n.language === "es" ? "en" : "es";
    i18n.changeLanguage(newLanguage);
  };

  return (
    <header className="fixed top-0 left-0 z-50 min-h-20 w-full p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Nombre en grande */}
        <a href="/" className="text-2xl font-bold text-gray-900 md:text-3xl">
          ALEX COVARRUBIAS
        </a>

        {/* Menú para pantallas grandes */}
        <nav className="hidden items-center space-x-6 md:flex">
          <NavbarLink to="/">{t("home")}</NavbarLink>
          <NavbarLink to="/publicaciones">{t("publications")}</NavbarLink>
          <NavbarLink to="/proyectos">{t("projects")}</NavbarLink>
          <NavbarLink to="/media">{t("media")}</NavbarLink>

          {/* Botón para cambiar idioma */}
          <button
            onClick={toggleLanguage}
            className="flex transform items-center justify-center rounded-full bg-orange-500 px-4 py-2 text-sm text-white shadow-lg transition-all hover:scale-105 hover:bg-orange-600 hover:shadow-xl focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:outline-none"
            aria-label="Change Language"
          >
            <FaGlobe className="mr-2" />
            {t("changeLanguage")}
          </button>
        </nav>

        {/* Botón de menú móvil */}
        <button
          onClick={toggleMenu}
          className="cursor-pointer text-2xl text-gray-900 focus:outline-none md:hidden"
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
              {t("home")}
            </NavbarLink>
            <NavbarLink to="/publicaciones" onClick={toggleMenu}>
              {t("publications")}
            </NavbarLink>
            <NavbarLink to="/proyectos" onClick={toggleMenu}>
              {t("projects")}
            </NavbarLink>
            <NavbarLink to="/media" onClick={toggleMenu}>
              {t("media")}
            </NavbarLink>

            {/* Botón para cambiar idioma en menú móvil */}
            <button
              onClick={toggleLanguage}
              className="flex transform items-center justify-center rounded-full bg-orange-500 px-4 py-2 text-sm text-white shadow-lg transition-all hover:scale-105 hover:bg-orange-600 hover:shadow-xl focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:outline-none"
              aria-label="Change Language"
            >
              <FaGlobe className="mr-2" />
              {t("changeLanguage")}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;