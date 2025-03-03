import React from "react";
import profileImage from "/images/alex/alex_sonriendo.png"; // Ruta de la imagen de perfil
import profileImage1 from "/images/alex/alex_microfono.jpeg"; 


import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaHandshake,
  FaDownload,
  FaFilePdf,
  FaEnvelope,
  FaUserGraduate,
  FaUniversity,
} from "react-icons/fa"; // Importa íconos de redes sociales y para los botones

const HomeView = () => {
  const handleWorkClick = async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    alert("Navigating to Work with Me page...");
  };

  const handleResumeDownload = async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    alert("Downloading Resume...");
  };

  const handleCVDownload = () => {
    window.open("https://alexcovarrubias.com.mx/VitaBrief-AlexCovarrubias-01-25.pdf", "_blank");
  };

  const handleBriefCVDownload = () => {
    window.open("https://alexcovarrubias.com.mx/VitaBrief-AlexCovarrubias-01-25.pdf", "_blank");
  };

  const handleMotivationLetterDownload = () => {
    window.open("https://alexcovarrubias.com.mx/MotivationLetterAlexCovarrubias.pdf", "_blank");
  };

  return (
    <>
      <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gray-50 p-6 pt-24 md:pt-16">
        {/* Figuras decorativas */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Círculo grande */}
          <div className="animate-float absolute -top-32 -left-32 h-64 w-64 rounded-full bg-orange-400" />
          {/* Triángulo */}
          <div className="clip-triangle animate-float absolute -right-24 -bottom-24 h-48 w-48 bg-purple-500 delay-1000" />
          {/* Cuadrado */}
          <div className="animate-float absolute -top-16 right-16 h-40 w-40 rotate-45 bg-blue-400 delay-2000" />
        </div>

        <section className="z-10 flex w-full max-w-6xl flex-col items-center gap-12 md:flex-row">
          {/* Text Section */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="animate-fadeIn mb-4 text-5xl font-bold text-gray-900">
              HELLO, I'M <span className="text-orange-500">ALEX COVARRUBIAS VALDENEBRO</span>
            </h1>

            {/* Información de Alex con íconos */}
            <div className="animate-fadeIn mb-6 text-gray-600 delay-200 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <FaUserGraduate className="text-gray-700" />
                <p>Degree: Doctor in Industrial and Labor Relations. Cornell University</p>
              </div>
              <div className="flex items-center gap-2">
                <FaUniversity className="text-gray-700" />
                <p>Affiliation: Center for Border Studies</p>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-gray-700" />
                <a
                  href="mailto:acova@colson.edu.mx"
                  className="text-gray-700 hover:text-orange-500"
                >
                  acova@colson.edu.mx
                </a>
              </div>
            </div>

            {/* Botones de enlaces */}
            <div className="animate-fadeIn flex flex-col justify-center gap-4 delay-400 md:flex-row md:justify-start">
              <button
                onClick={handleCVDownload}
                className="flex transform items-center justify-center rounded-full bg-orange-500 px-4 py-2 text-sm text-white shadow-lg transition-all hover:scale-105 hover:bg-orange-600 hover:shadow-xl focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:outline-none"
                aria-label="View Full CV"
              >
                <FaFilePdf className="mr-2" />
                View Full CV
              </button>
              <button
                onClick={handleBriefCVDownload}
                className="flex transform items-center justify-center rounded-full bg-orange-500 px-4 py-2 text-sm text-white shadow-lg transition-all hover:scale-105 hover:bg-orange-600 hover:shadow-xl focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:outline-none"
                aria-label="View Brief CV"
              >
                <FaFilePdf className="mr-2" />
                View Brief CV
              </button>
              <button
                onClick={handleMotivationLetterDownload}
                className="flex transform items-center justify-center rounded-full bg-orange-500 px-4 py-2 text-sm text-white shadow-lg transition-all hover:scale-105 hover:bg-orange-600 hover:shadow-xl focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:outline-none"
                aria-label="View Motivation Letter"
              >
                <FaFilePdf className="mr-2" />
                View Motivation Letter
              </button>
            </div>

            {/* Redes sociales */}
            <div className="animate-fadeIn mt-8 flex justify-center gap-6 delay-500 md:justify-start">
              <a
                href="https://www.linkedin.com/in/alex"
                target="_blank"
                rel="noopener noreferrer"
                className="transform text-gray-700 transition-colors hover:scale-110 hover:text-orange-500"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={28} />
              </a>
              <a
                href="https://github.com/alex"
                target="_blank"
                rel="noopener noreferrer"
                className="transform text-gray-700 transition-colors hover:scale-110 hover:text-orange-500"
                aria-label="GitHub"
              >
                <FaGithub size={28} />
              </a>
              <a
                href="https://www.instagram.com/alex"
                target="_blank"
                rel="noopener noreferrer"
                className="transform text-gray-700 transition-colors hover:scale-110 hover:text-orange-500"
                aria-label="Instagram"
              >
                <FaInstagram size={28} />
              </a>
              <a
                href="https://twitter.com/alex"
                target="_blank"
                rel="noopener noreferrer"
                className="transform text-gray-700 transition-colors hover:scale-110 hover:text-orange-500"
                aria-label="Twitter"
              >
                <FaTwitter size={28} />
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
      </main>

 {/* Imagen segundo nivel */}
<div className="relative flex items-start justify-start mt-16">
  <div className="h-1/1.5 w-1/1.5 overflow-hidden rounded-2xl shadow-2xl ml-10">
    <img
      src={profileImage1}
      alt="Alex microfono"
      className="animate-fadeIn h-full w-full rounded-2xl object-cover delay-300"
    />
  </div>
  <div className="ml-10 flex flex-col justify-start">
    <h1 className="text-4xl font-bold text-gray-1000">
      Expert in the Mexican auto industry, labor relations, and sustainable mobility, with leadership in research.
    </h1>
    <p className="mt-14 ml-52 mr-20 text-gray-600">
      I specialize in industrial and labor relations system changes, just transition, and socio-technical transformations, with a focus on transport electrification and energy transition.
    </p>
    <p className="mt-4 ml-52 mr-20 text-gray-600">
      I work on developing strategies for sustainable mobility and lead research initiatives to support industrial adaptation and workforce evolution.
    </p>
    <div className="animate-fadeIn flex flex-col justify-start gap-4 delay-400 md:flex-row md:justify-start mt-[-128px]">
    <button
        onClick={handleCVDownload}
        className="flex transform items-center justify-center rounded-full bg-orange-500 px-4 py-2 text-sm text-white shadow-lg transition-all hover:scale-105 hover:bg-orange-600 hover:shadow-xl focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:outline-none"
        aria-label="View Full CV"
      >
        Download Resume ⬇
      </button>
    </div>
  </div>
</div>


      {/* Sección de logos de clientes */}
<section className="mt-10 py-16 bg-white">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
      Institutions
    </h2>
    
    {/* Primera fila de logos */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Logo 1 */}
      <div className="border border-gray-200 p-6 rounded-lg flex items-center justify-center h-32 transform transition-all hover:shadow-lg hover:scale-105">
        <div className="text-gray-500 flex items-center">
          <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L1 21h22L12 2zm0 4.5L5.75 18h12.5L12 6.5z" />
          </svg>
          <span className="text-xl font-medium">UNAM</span>
        </div>
      </div>

      {/* Logo 2 */}
      <div className="border border-gray-200 p-6 rounded-lg flex items-center justify-center h-32 transform transition-all hover:shadow-lg hover:scale-105">
        <div className="text-gray-500 flex items-center">
          <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
          </svg>
          <span className="text-xl font-medium">COLEF</span>
        </div>
      </div>

      {/* Logo 3 */}
      <div className="border border-gray-200 p-6 rounded-lg flex items-center justify-center h-32 transform transition-all hover:shadow-lg hover:scale-105">
        <div className="text-gray-500 flex items-center">
          <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l9 4v12l-9 4-9-4V6l9-4zm0 3.12L5 8.2v7.6l7 3.08 7-3.08V8.2l-7-3.08z" />
          </svg>
          <span className="text-xl font-medium">Cornell</span>
        </div>
      </div>

      {/* Logo 4 */}
      <div className="border border-gray-200 p-6 rounded-lg flex items-center justify-center h-32 transform transition-all hover:shadow-lg hover:scale-105">
        <div className="text-gray-500 flex items-center">
          <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
          </svg>
          <span className="text-xl font-medium">CONACYT</span>
        </div>
      </div>
    </div>

    {/* Segunda fila de logos (abreviaciones y logos pequeños) */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
      {/* Logo 1 - Research Associate APRC */}
      <div className="border border-gray-200 p-6 rounded-lg flex items-center justify-center h-32 transform transition-all hover:shadow-lg hover:scale-105">
        <div className="text-gray-500 flex items-center">
          <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L1 21h22L12 2zm0 4.5L5.75 18h12.5L12 6.5z" />
          </svg>
          <span className="text-xl font-medium">APRC</span>
        </div>
      </div>

      {/* Logo 2 - GERPISA */}
      <div className="border border-gray-200 p-6 rounded-lg flex items-center justify-center h-32 transform transition-all hover:shadow-lg hover:scale-105">
        <div className="text-gray-500 flex items-center">
          <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
          </svg>
          <span className="text-xl font-medium">GERPISA</span>
        </div>
      </div>

      {/* Logo 3 - The Research International */}
      <div className="border border-gray-200 p-6 rounded-lg flex items-center justify-center h-32 transform transition-all hover:shadow-lg hover:scale-105">
        <div className="text-gray-500 flex items-center">
          <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L1 21h22L12 2zm0 4.5L5.75 18h12.5L12 6.5z" />
          </svg>
          <span className="text-xl font-medium">RIAE</span>
        </div>
      </div>

      {/* Logo 4 - Electrical Transport */}
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

    </>
  );
}

export default HomeView;