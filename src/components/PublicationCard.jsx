import { CiRead } from "react-icons/ci";
import { FaDownload } from "react-icons/fa";

export function PublicationCard({ pdfLocation, coverImage, title, subtitle }) {
  return (
    <div className="animate-slideIn group relative flex aspect-[3/4] overflow-hidden rounded-lg shadow-lg transition-all delay-200 hover:shadow-xl">
      {/* Imagen de fondo */}
      <img
        src={coverImage}
        alt={title}
        className="h-full w-full object-cover" // La imagen cubre toda la tarjeta
      />

      {/* Capa semitransparente para mejorar la legibilidad */}
      <div className="absolute inset-0 bg-black/40 transition-all group-hover:bg-black/50" />

      {/* Contenido superpuesto */}
      <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
        {/* Título y subtítulo */}
        <div className="mb-4">
          <h2 className="line-clamp-2 text-xl font-semibold" title={title}>
            {title}
          </h2>
          {subtitle && (
            <h3 className="line-clamp-2 text-base" title={subtitle}>
              {subtitle}
            </h3>
          )}
        </div>

        {/* Botones de acción */}
        <div className="flex items-center gap-3">
          {/* Botón "Leer" */}
          <a
            href={pdfLocation}
            target="_blank"
            rel="noreferrer"
            className="flex aspect-square transform items-center justify-center rounded-full border border-white bg-transparent p-2 text-white shadow-md transition-all hover:scale-105 hover:bg-white hover:text-blue-500 hover:shadow-lg focus:ring-2 focus:ring-white focus:ring-offset-2 focus:outline-none"
            aria-label="Read"
            title="Read"
          >
            <CiRead className="text-xl" />
          </a>

          {/* Botón "Descargar" */}
          <a
            href={pdfLocation}
            download
            className="flex aspect-square transform items-center justify-center rounded-full border border-white bg-transparent p-2 text-white shadow-md transition-all hover:scale-105 hover:bg-white hover:text-orange-500 hover:shadow-lg focus:ring-2 focus:ring-white focus:ring-offset-2 focus:outline-none"
            aria-label="Download"
            title="Download"
          >
            <FaDownload className="text-xl" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default PublicationCard;