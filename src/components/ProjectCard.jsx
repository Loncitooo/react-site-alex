import { CiRead } from "react-icons/ci";
import { FaDownload } from "react-icons/fa";

export function ProjectCard({ pdfLocation, coverImage, title, subtitle }) {
  return (
    <div className="animate-slideIn flex flex-col rounded-lg shadow-lg">
      <img
        src={coverImage}
        alt={title}
        className="max-h-72 w-full rounded-t-lg"
      />
      <div className="flex flex-1 flex-col items-center justify-between gap-4 p-4">
        <div className="flex flex-col gap-1">
          <h2 className="line-clamp-2 font-semibold" title={title}>
            {title}
          </h2>
          <h3 className="line-clamp-2 text-sm" title={subtitle}>
            {subtitle}
          </h3>
        </div>
        <div className="flex items-center gap-4">
          <a
            href={pdfLocation}
            target="_blank"
            rel="noreferrer"
            className="flex aspect-square transform items-center justify-center gap-2 rounded-full border-1 border-blue-500 bg-transparent p-2 text-blue-500 shadow-lg transition-all hover:scale-105 hover:bg-blue-500 hover:text-white hover:shadow-xl focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
            aria-label="Read"
            title="Read"
          >
            <CiRead className="text-xl" />
          </a>
          <a
            href={pdfLocation}
            download
            className="flex aspect-square transform items-center justify-center gap-2 rounded-full border-1 border-orange-500 bg-transparent p-2 text-orange-500 shadow-lg transition-all hover:scale-105 hover:bg-orange-500 hover:text-white hover:shadow-xl focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:outline-none"
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

export default ProjectCard;
