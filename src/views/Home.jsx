import React from "react";
import profileImage from "/images/alex/alex_sonriendo.png"; // Ruta de la imagen de perfil
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter, FaHandshake, FaDownload } from "react-icons/fa"; // Importa íconos de redes sociales y para los botones

const HomeView = () => {
  const handleWorkClick = async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    alert("Navigating to Work with Me page...");
  };

  const handleResumeDownload = async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    alert("Downloading Resume...");
  };

  return (
    <main className="bg-gray-50 min-h-screen flex items-center justify-center p-6 font-sans relative overflow-hidden pt-24 md:pt-16">
      {/* Figuras decorativas */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {/* Círculo grande */}
        <div className="absolute w-64 h-64 bg-orange-400 rounded-full -top-32 -left-32 animate-float" />
        {/* Triángulo */}
        <div className="absolute w-48 h-48 bg-purple-500 clip-triangle -bottom-24 -right-24 animate-float delay-1000" />
        {/* Cuadrado */}
        <div className="absolute w-40 h-40 bg-blue-400 rotate-45 -top-16 right-16 animate-float delay-2000" />
      </div>

      <section className="w-full max-w-6xl flex flex-col md:flex-row items-center gap-12 z-10">

        {/* Text Section */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-5xl font-bold text-gray-900 mb-4 animate-fadeIn">
            HELLO, I'M <span className="text-orange-500">ALEX</span>
          </h1>
          <p className="text-lg text-gray-600 mb-6 animate-fadeIn delay-100">
            My mission is to create digital solutions that are as{" "}
            <span className="font-semibold text-gray-800">functional</span> as they are{" "}
            <span className="font-semibold text-gray-800">visually engaging</span>.
          </p>
          <p className="text-gray-600 mb-8 animate-fadeIn delay-150">
            With over 5 years of experience in web development and design, I specialize in building modern, responsive, and user-friendly applications. Let's work together to bring your ideas to life!
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start animate-fadeIn delay-200">
            <button
              onClick={handleWorkClick}
              className="flex items-center justify-center bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 shadow-lg hover:shadow-xl"
              aria-label="Work with me"
            >
              <FaHandshake className="mr-2" /> {/* Ícono de colaboración */}
              Work with me
            </button>
            <button
              onClick={handleResumeDownload}
              className="flex items-center justify-center bg-transparent border-2 border-orange-500 text-orange-500 px-8 py-3 rounded-full hover:bg-orange-500 hover:text-white transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 shadow-lg hover:shadow-xl"
              aria-label="Download Resume"
            >
              <FaDownload className="mr-2" /> {/* Ícono de descarga */}
              Download Resume
            </button>
          </div>

          {/* Redes sociales */}
          <div className="flex justify-center md:justify-start gap-6 mt-8 animate-fadeIn delay-400">
            <a
              href="https://www.linkedin.com/in/alex"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-orange-500 transition-colors transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={28} />
            </a>
            <a
              href="https://github.com/alex"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-orange-500 transition-colors transform hover:scale-110"
              aria-label="GitHub"
            >
              <FaGithub size={28} />
            </a>
            <a
              href="https://www.instagram.com/alex"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-orange-500 transition-colors transform hover:scale-110"
              aria-label="Instagram"
            >
              <FaInstagram size={28} />
            </a>
            <a
              href="https://twitter.com/alex"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-orange-500 transition-colors transform hover:scale-110"
              aria-label="Twitter"
            >
              <FaTwitter size={28} />
            </a>
          </div>
        </div>

        {/* Diseño y seccion de imagen */}
        <div className="relative flex-shrink-0 w-72 h-72 md:w-96 md:h-96">
          {/* Marco decorativo */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-purple-500 rounded-2xl transform rotate-6 -z-10 animate-slideIn" />
          <div className="absolute inset-0 bg-white rounded-2xl transform -rotate-3 -z-10" />
          
          {/* Imagen superpuesta */}
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={profileImage}
                alt="Alex smiling"
                className="w-full h-full object-cover rounded-2xl animate-fadeIn delay-300"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomeView;