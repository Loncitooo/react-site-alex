import { useTranslation } from "react-i18next"; // Importar el hook de traducción
import { IoVideocam } from "react-icons/io5";
import { MdArticle } from "react-icons/md";

function MediaView() {
  const { t } = useTranslation(); // Hook para acceder a las traducciones

  return (
    <section className="mx-auto mt-20 flex max-w-screen-2xl flex-col gap-8 p-4 pt-0 md:p-8">
      {/* Título de la sección */}
      <div className="flex flex-col gap-2">
        <h1 className="animate-fadeIn text-3xl font-bold text-gray-900 md:text-4xl">
          <span className="text-orange-500">{t("media")}</span>
        </h1>
        <div className="h-1 border-b-2 border-orange-500"></div>
      </div>

      {/* Sección de Videos */}
      <div className="flex items-center gap-2">
        <IoVideocam className="text-2xl text-orange-500" aria-label="Videos" />
        <h2 className="text-2xl font-semibold text-gray-900">{t("videos")}</h2>
      </div>
      <div className="flex justify-center">
        <iframe
          width="100%"
          className="aspect-video max-w-screen-lg"
          src="https://www.youtube.com/embed/rVcRQ1NpTaQ?autoplay=1&mute=1"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="my-8 h-1 border-b-2 border-gray-900"></div>

      {/* Sección de Artículos */}
      <div className="flex items-center gap-2">
        <MdArticle className="text-2xl text-orange-500" aria-label="Articles" />
        <h2 className="text-2xl font-semibold text-gray-900">{t("articles")}</h2>
      </div>
      <div className="flex gap-8">
        <a
          href="https://www.eleconomista.com.mx/capital-humano/sheinbaum-liderazgo-trabajo-20250207-745323.html"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col gap-4 rounded-lg shadow-lg transition-all hover:shadow-xl"
        >
          <img
            src="https://imagenes.eleconomista.com.mx/files/image_1280_720/uploads/2024/11/13/67354a5b42559.png"
            alt={t("sheinbaumArticle")}
            className="max-h-72 rounded-t-lg object-cover"
          />
          <span className="p-4 pt-0 text-center text-lg font-semibold text-gray-900">
            {t("sheinbaumArticle")}
          </span>
        </a>
      </div>
    </section>
  );
}

export default MediaView;