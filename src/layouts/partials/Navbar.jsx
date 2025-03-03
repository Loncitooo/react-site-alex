import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import NavbarLink from "../../components/NavbarLink";
import { FaGlobe } from "react-icons/fa";

function Navbar({ backgroundStyle }) {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLanguage = () => {
    const newLanguage = i18n.language === "es" ? "en" : "es";
    i18n.changeLanguage(newLanguage);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 min-h-20 w-full p-4 transition-colors duration-300 ${
        isScrolled || backgroundStyle !== "transparent"
          ? "bg-white border-b-2 border-orange-500"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <a href="/" className="text-2xl font-bold text-gray-900 md:text-3xl">
          ALEX COVARRUBIAS
        </a>

        <nav className="hidden items-center space-x-6 lg:flex">
          <NavbarLink to="/">{t("home")}</NavbarLink>
          <NavbarLink to="/publicaciones">{t("publications")}</NavbarLink>
          <NavbarLink to="/proyectos">{t("projects")}</NavbarLink>
          <NavbarLink to="/media">{t("media")}</NavbarLink>

          <button
            onClick={toggleLanguage}
            className="flex transform items-center justify-center rounded-full bg-orange-500 px-4 py-2 text-sm text-white shadow-lg transition-all hover:scale-105 hover:bg-orange-600 hover:shadow-xl focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:outline-none"
            aria-label="Change Language"
          >
            <FaGlobe className="mr-2" />
            {t("changeLanguage")}
          </button>
        </nav>

        <button
          onClick={toggleMenu}
          className="relative flex h-10 w-10 cursor-pointer flex-col items-center justify-center space-y-1.5 focus:outline-none lg:hidden"
          aria-label="Toggle menu"
        >
          <div
            className={`h-1 w-8 transform rounded-full bg-gray-800 transition-all duration-300 ${
              isMenuOpen ? "translate-y-3 rotate-45" : ""
            }`}
          ></div>
          <div
            className={`h-1 w-8 transform rounded-full bg-gray-800 transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></div>
          <div
            className={`h-1 w-8 transform rounded-full bg-gray-800 transition-all duration-300 ${
              isMenuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          ></div>
        </button>
      </div>

      {isMenuOpen && (
        <div className=" relative w-full flex justify-end">
          <div className=" absolute bg-opacity-95 p-4 mt-2 rounded-2xl w-3/4 bg-white shadow-2xl md:w-1/2 lg:hidden">
            <nav className="flex flex-col items-end gap-4 text-2xl">
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

              <button
                onClick={toggleLanguage}
                className="flex mt-20 transform items-center justify-center rounded-full bg-orange-500 px-8 py-2 text-sm text-white shadow-lg transition-all hover:scale-105 hover:bg-orange-600 hover:shadow-xl focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:outline-none"
                aria-label="Change Language"
              >
                <FaGlobe className="mr-2" />
                {t("changeLanguage")}
              </button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;