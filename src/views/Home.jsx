import React from "react";
import { useTranslation } from "react-i18next";
import profileImage from "/images/alex/alex_microfono.jpeg";
import profileImage1 from "/images/alex/alex_sonriendo.png";
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
  const { t } = useTranslation();

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
    <main className="relative flex flex-col gap-4 min-h-screen items-center justify-center overflow-hidden bg-gray-50 p-6 pt-24 md:pt-16">
      {/* Figuras decorativas */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="animate-float absolute -top-32 -left-32 h-64 w-64 rounded-full bg-orange-400" />
        <div className="clip-triangle animate-float absolute -right-24 -bottom-24 h-48 w-48 bg-purple-500 delay-1000" />
        <div className="animate-float absolute -top-16 right-16 h-40 w-40 rotate-45 bg-blue-400 delay-2000" />
      </div>

      <section className="z-10 flex w-full max-w-6xl flex-col items-center gap-12 md:flex-row">
        {/* Text Section */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="animate-fadeIn mb-4 text-3xl font-bold text-gray-900 md:text-5xl">
            {t("ALEX")} <span className="text-orange-500">{t("COVARRUBIAS BALDENEBRO")}</span>
          </h1>

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
                className="text-gray-700 hover:text-orange-500"
              >
                {t("email")}
              </a>
            </div>
          </div>

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
          <div className="animate-slideIn absolute inset-0 -z-10 rotate-6 transform rounded-2xl bg-gradient-to-r from-orange-400 to-purple-500" />
          <div className="absolute inset-0 -z-10 -rotate-3 transform rounded-2xl bg-white" />

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

      {/* Imagen segundo nivel */}
      <section className="relative flex flex-col md:flex-row items-center justify-center mt-28 w-full max-w-6xl px-6">
        <div className="w-full md:w-1/2 lg:w-1/3 overflow-hidden rounded-2xl shadow-2xl">
          <img
            src={profileImage1}
            alt="Alex microfono"
            className="animate-fadeIn h-full w-full rounded-2xl object-cover delay-300"
          />
        </div>
        <div className="w-full md:w-1/2 lg:w-2/3 mt-8 md:mt-0 md:ml-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Expert in the Mexican auto industry, labor relations, and sustainable mobility, with leadership in research.
          </h1>
          <p className="mt-6 text-gray-600">
            I specialize in industrial and labor relations system changes, just transition, and socio-technical transformations, with a focus on transport electrification and energy transition.
          </p>
          <p className="mt-4 text-gray-600">
            I work on developing strategies for sustainable mobility and lead research initiatives to support industrial adaptation and workforce evolution.
          </p>
          <div className="animate-fadeIn flex justify-start gap-4 delay-400 mt-8">
            <button
              onClick={handleCVDownload}
              className="flex transform items-center justify-center rounded-full bg-orange-500 px-4 py-2 text-sm text-white shadow-lg transition-all hover:scale-105 hover:bg-orange-600 hover:shadow-xl focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:outline-none"
              aria-label="View Full CV"
            >
              Download Resume ⬇
            </button>
          </div>
        </div>
      </section>

      {/* Sección de logos de clientes */}
      <section className="mt-10 py-16 bg-white w-full">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Institutions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="border border-gray-200 p-6 rounded-lg flex items-center justify-center h-32 transform transition-all hover:shadow-lg hover:scale-105">
              <div className="text-gray-500 flex items-center">
                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L1 21h22L12 2zm0 4.5L5.75 18h12.5L12 6.5z" />
                </svg>
                <span className="text-xl font-medium">UNAM</span>
              </div>
            </div>

            <div className="border border-gray-200 p-6 rounded-lg flex items-center justify-center h-32 transform transition-all hover:shadow-lg hover:scale-105">
              <div className="text-gray-500 flex items-center">
                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                </svg>
                <span className="text-xl font-medium">COLEF</span>
              </div>
            </div>

            <div className="border border-gray-200 p-6 rounded-lg flex items-center justify-center h-32 transform transition-all hover:shadow-lg hover:scale-105">
              <div className="text-gray-500 flex items-center">
                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l9 4v12l-9 4-9-4V6l9-4zm0 3.12L5 8.2v7.6l7 3.08 7-3.08V8.2l-7-3.08z" />
                </svg>
                <span className="text-xl font-medium">Cornell</span>
              </div>
            </div>

            <div className="border border-gray-200 p-6 rounded-lg flex items-center justify-center h-32 transform transition-all hover:shadow-lg hover:scale-105">
              <div className="text-gray-500 flex items-center">
                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                </svg>
                <span className="text-xl font-medium">CONACYT</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="border border-gray-200 p-6 rounded-lg flex items-center justify-center h-32 transform transition-all hover:shadow-lg hover:scale-105">
              <div className="text-gray-500 flex items-center">
                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L1 21h22L12 2zm0 4.5L5.75 18h12.5L12 6.5z" />
                </svg>
                <span className="text-xl font-medium">APRC</span>
              </div>
            </div>

            <div className="border border-gray-200 p-6 rounded-lg flex items-center justify-center h-32 transform transition-all hover:shadow-lg hover:scale-105">
              <div className="text-gray-500 flex items-center">
                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                </svg>
                <span className="text-xl font-medium">GERPISA</span>
              </div>
            </div>

            <div className="border border-gray-200 p-6 rounded-lg flex items-center justify-center h-32 transform transition-all hover:shadow-lg hover:scale-105">
              <div className="text-gray-500 flex items-center">
                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L1 21h22L12 2zm0 4.5L5.75 18h12.5L12 6.5z" />
                </svg>
                <span className="text-xl font-medium">RIAE</span>
              </div>
            </div>

            <div className="border border-gray-200 p-6 rounded-lg flex items-center justify-center h-32 transform transition-all hover:shadow-lg hover:scale-105">
              <div className="text-gray-500 flex items-center">
                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l9 4v12l-9 4-9-4V6l9-4zm0 3.12L5 8.2v7.6l7 3.08 7-3.08V8.2l-7-3.08z" />
                </svg>
                <span className="text-xl font-medium">ETS</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomeView;