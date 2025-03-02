import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="relative bg-black text-white px-8 py-20 overflow-hidden">
      {/* Figuras decorativas */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {/* Rectángulo inclinado */}
        <div className="absolute w-48 h-20 bg-orange-400 rotate-12 -bottom-12 right-10 opacity-40 animate-float delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h1 className="text-4xl font-semibold">Let's Stay Connected</h1>
        <p className="mt-4 text-gray-400">
        Thank you for visiting! Feel free to reach out for collaborations, inquiries, or just to say hello.
        </p>

        <div className="border-t border-gray-700 mt-10 pt-10 flex flex-col md:flex-row justify-between text-base/7">
          <div className="md:w-1/2 pr-6">
            <h2 className="text-lg font-semibold">Contact me</h2>
            <p className="text-gray-400">4517 Washington Ave. Manchester, Kentucky 39495</p>
            <p className="text-gray-400">info@example.com</p>
            <p className="text-gray-400">+(406) 555-0120</p>
          </div>

          <div className="hidden md:block w-px bg-gray-600"></div>
          
          <div className="md:w-1/2 pl-6 mt-4 md:mt-0 text-right text-base/7">
            <h2 className="text-lg font-semibold">Latest Projects & Contributions</h2>
            <p className="text-gray-400">Passionate about building innovative solutions and</p>
            <p className="text-gray-400">pushing boundaries in technology. Stay tuned for</p>
            <p className="text-gray-400">upcoming projects, insights, and collaborations.</p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-10 text-gray-500 text-sm flex flex-wrap justify-center md:justify-between gap-4">
          <p className="text-center md:text-left w-full md:w-auto">
            &copy; 2025 Alex Covarrubias. All rights reserved.
          </p>

          <nav className="flex flex-wrap justify-center md:justify-end space-x-4 w-full md:w-auto">
            <a href="https://www.linkedin.com/in/alex" target="_blank" rel="noopener noreferrer"
              className="text-gray-500 hover:text-orange-500 transition-transform transform hover:scale-110"
              aria-label="LinkedIn">
              <FaLinkedin size={28} />
            </a>
            <a href="https://github.com/alex" target="_blank" rel="noopener noreferrer"
              className="text-gray-500 hover:text-orange-500 transition-transform transform hover:scale-110"
              aria-label="GitHub">
              <FaGithub size={28} />
            </a>
            <a href="https://www.instagram.com/alex" target="_blank" rel="noopener noreferrer"
              className="text-gray-500 hover:text-orange-500 transition-transform transform hover:scale-110"
              aria-label="Instagram">
              <FaInstagram size={28} />
            </a>
            <a href="https://twitter.com/alex" target="_blank" rel="noopener noreferrer"
              className="text-gray-500 hover:text-orange-500 transition-transform transform hover:scale-110"
              aria-label="Twitter">
              <FaTwitter size={28} />
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
