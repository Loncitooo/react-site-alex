import React from "react";
import profileImage from "/images/alex/alex_sonriendo.png"; // Ruta de la imagen de perfil
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaHandshake,
  FaDownload,
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

  return (
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
            HELLO, I'M <span className="text-orange-500">ALEX</span>
          </h1>
          <p className="animate-fadeIn mb-6 text-lg text-gray-600 delay-100">
            My mission is to create digital solutions that are as{" "}
            <span className="font-semibold text-gray-800">functional</span> as
            they are{" "}
            <span className="font-semibold text-gray-800">
              visually engaging
            </span>
            .
          </p>
          <p className="animate-fadeIn mb-8 text-gray-600 delay-150">
            With over 5 years of experience in web development and design, I
            specialize in building modern, responsive, and user-friendly
            applications. Let's work together to bring your ideas to life!
          </p>
          <div className="animate-fadeIn flex flex-col justify-center gap-4 delay-200 md:flex-row md:justify-start">
            <button
              onClick={handleWorkClick}
              className="flex transform items-center justify-center rounded-full bg-orange-500 px-8 py-3 text-white shadow-lg transition-all hover:scale-105 hover:bg-orange-600 hover:shadow-xl focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:outline-none"
              aria-label="Work with me"
            >
              <FaHandshake className="mr-2" /> {/* Ícono de colaboración */}
              Work with me
            </button>
            <button
              onClick={handleResumeDownload}
              className="flex transform items-center justify-center rounded-full border-2 border-orange-500 bg-transparent px-8 py-3 text-orange-500 shadow-lg transition-all hover:scale-105 hover:bg-orange-500 hover:text-white hover:shadow-xl focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:outline-none"
              aria-label="Download Resume"
            >
              <FaDownload className="mr-2" /> {/* Ícono de descarga */}
              Download Resume
            </button>
          </div>

          {/* Redes sociales */}
          <div className="animate-fadeIn mt-8 flex justify-center gap-6 delay-400 md:justify-start">
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
  );
};

export default HomeView;
