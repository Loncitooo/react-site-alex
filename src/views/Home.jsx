import React from "react";
import {Brief} from "./home/brief-section";
import { useTranslation } from "react-i18next"; // Importar useTranslation
import profileImage from "/images/alex/alex_sonriendo.png";
import { FaXTwitter } from "react-icons/fa6";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaFilePdf,
  FaEnvelope,
  FaUserGraduate,
  FaUniversity,
} from "react-icons/fa";

const HomeView = () => {
  const { t } = useTranslation(); // Obtener la función de traducción

  const handleCVDownload = () => {
    window.open(
      "https://alexcovarrubias.com.mx/VitaBrief-AlexCovarrubias-01-25.pdf",
      "_blank",
    );
  };

  const handleBriefCVDownload = () => {
    window.open(
      "https://alexcovarrubias.com.mx/VitaBrief-AlexCovarrubias-01-25.pdf",
      "_blank",
    );
  };

  const handleMotivationLetterDownload = () => {
    window.open(
      "https://alexcovarrubias.com.mx/MotivationLetterAlexCovarrubias.pdf",
      "_blank",
    );
  };

  return (
    <main className="relative flex flex-col gap-12 min-h-screen items-center justify-center overflow-hidden bg-gray-50 p-6 pt-24 md:pt-16">
      {/* Figuras decorativas */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Círculo grande */}
        <div className="animate-float absolute -top-32 -left-32 h-64 w-64 rounded-full bg-orange-400" />
        {/* Triángulo */}
        <div className="clip-triangle animate-float absolute -right-24 -bottom-24 h-48 w-48 bg-purple-500 delay-1000" />
        {/* Cuadrado */}
        <div className="animate-float absolute -top-16 right-16 h-40 w-40 rotate-45 bg-blue-400 delay-2000" />

        {/* mas figuras */}

        <div className="animate-float animate-rotate absolute top-456 -left-32 h-50 w-50 rounded-full bg-blue-400 lg:top-150 lg:left-230" />
        <div className="animate-float animate-rotate absolute top-329 -right-10 h-40 w-40 bg-purple-500 rotate-45 lg:top-200 lg:right-70" />
        <div className="animate-float animate-rotate absolute top-379 right-30 h-40 w-40 bg-green-400 rotate-45" />
        <div className="animate-float animate-rotate absolute bottom-56 -left-16 h-50 w-50 bg-orange-400 lg:bottom-70" />
        <div className="animate-float animate-rotate absolute top-258 -left-5 h-45 w-45 rounded-full bg-green-400 lg:top-280" />

      </div>

      <section className="z-10 flex w-full max-w-6xl flex-col items-center gap-12 md:flex-row">
        {/* Text Section */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="animate-fadeIn mb-4 text-3xl font-bold text-gray-900 md:text-5xl">
            {t("hello")} <span className="text-orange-500">{t("name")}</span>
          </h1>

          {/* Información de Alex con íconos */}
          <div className="animate-fadeIn mb-6 flex flex-col gap-2 text-gray-600 delay-200">
            <div className="flex items-center gap-2">
              <FaUserGraduate className="min-h-4 min-w-4 text-gray-700" />
              <p>{t("degree")}</p>
            </div>
            <div className="flex items-center gap-2">
              <FaUniversity className="min-h-4 min-w-4 text-gray-700" />
              <p>{t("affiliation")}</p>
            </div>
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <FaEnvelope className="flex items-start min-h-4 min-w-4 text-gray-700" />
              <a
                href="mailto:acova@colson.edu.mx"
                className="text-gray-700 hover:text-orange-500 "
              >
                {t("email")}
              </a>
            </div>
          </div>

          {/* Botones de enlaces */}
          <div className="animate-fadeIn flex flex-wrap justify-center gap-4 delay-400 md:justify-start">
            <button
              onClick={handleCVDownload}
              className="flex w-fit transform items-center justify-center rounded-full bg-orange-500 px-4 py-2 text-sm text-white shadow-lg transition-all hover:scale-105 hover:bg-orange-600 hover:shadow-xl focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:outline-none"
              aria-label="View Full CV"
            >
              <FaFilePdf className="mr-2 min-h-4 min-w-4" />
              {t("viewFullCV")}
            </button>
            <button
              onClick={handleBriefCVDownload}
              className="flex w-fit transform items-center justify-center rounded-full bg-orange-500 px-4 py-2 text-sm text-white shadow-lg transition-all hover:scale-105 hover:bg-orange-600 hover:shadow-xl focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:outline-none"
              aria-label="View Brief CV"
            >
              <FaFilePdf className="mr-2 min-h-4 min-w-4" />
              {t("viewBriefCV")}
            </button>
            <button
              onClick={handleMotivationLetterDownload}
              className="flex w-fit transform items-center justify-center gap-1 rounded-full bg-orange-500 px-4 py-2 text-sm text-white shadow-lg transition-all hover:scale-105 hover:bg-orange-600 hover:shadow-xl focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:outline-none"
              aria-label="View Motivation Letter"
            >
              <FaFilePdf className="mr-1 min-h-4 min-w-4" />
              <span>{t("viewMotivationLetter")}</span>
              <span className="font-semibold">(IPCC)</span>
            </button>
          </div>

          {/* Redes sociales */}
          <div className="animate-fadeIn mt-8 flex justify-center gap-6 delay-500 md:justify-start">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="transform text-gray-700 transition-colors  duration-500 hover:text-orange-500"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={28} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="transform text-gray-700 duration-500 transition-colors  hover:text-orange-500"
              aria-label="GitHub"
            >
              <FaGithub size={28} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="transform text-gray-700 transition-colors duration-500 hover:text-orange-500"
              aria-label="Instagram"
            >
              <FaInstagram size={28} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="transform text-gray-700 transition-colors duration-500 hover:text-orange-500"
              aria-label="Twitter"
            >
              <FaXTwitter size={28} />
            </a>
          </div>
        </div>

        {/* Diseño y seccion de imagen */}
        <div className="relative h-72 w-72 flex-shrink-0 md:h-96 md:w-96">
          {/* Marco decorativo */}
          <div className="animate-slideIn absolute inset-0 -z-10 rotate-6 transform rounded-2xl bg-gradient-to-r from-orange-400 to-purple-500" />
          <div className="absolute inset-0 -z-10 -rotate-3 transform rounded-2xl bg-white" />

          {/* Imagen superpuesta */}
          <div className="relative flex h-full w-full items-center justify-center">
            <div className="h-full w-full overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={profileImage}
                alt="Alex smiling"
                className="animate-fadeIn h-full w-full rounded-2xl object-cover delay-300"
              />
            </div>
          </div>
        </div>
      </section>
            {/* Sección de resumen */}
            <Brief/>
        
    </main>
  );
};

export default HomeView;
