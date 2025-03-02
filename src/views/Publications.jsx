import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next"; // Importar el hook de traducción
import { PublicationCard } from "../components/PublicationCard";
import { FiSearch } from "react-icons/fi";
import { AiFillAliwangwang } from "react-icons/ai";

function PublicationsView() {
  const { t } = useTranslation(); // Hook para acceder a las traducciones

  const publications = useMemo(() => {
    return [
      {
        pdfLocation: "/pdfs/publications/1.pdf",
        coverImage: "/images/publications/1.webp",
        title: t("publicationTitles.publication1"),
      },
      {
        pdfLocation: "/pdfs/publications/2.pdf",
        coverImage: "/images/publications/2.webp",
        title: t("publicationTitles.publication2"),
      },
      {
        pdfLocation: "/pdfs/publications/3.pdf",
        coverImage: "/images/publications/3.webp",
        title: t("publicationTitles.publication3"),
      },
      {
        pdfLocation: "/pdfs/publications/4.pdf",
        coverImage: "/images/publications/4.webp",
        title: t("publicationTitles.publication4"),
      },
      {
        pdfLocation: "/pdfs/publications/5.pdf",
        coverImage: "/images/publications/5.webp",
        title: t("publicationTitles.publication5"),
      },
      {
        pdfLocation: "/pdfs/publications/6.pdf",
        coverImage: "/images/publications/6.webp",
        title: t("publicationTitles.publication6"),
      },
      {
        pdfLocation: "/pdfs/publications/7.pdf",
        coverImage: "/images/publications/7.webp",
        title: t("publicationTitles.publication7"),
        subtitle: t("publicationTitles.publication7Subtitle"),
      },
      {
        pdfLocation: "/pdfs/publications/8.pdf",
        coverImage: "/images/publications/8.webp",
        title: t("publicationTitles.publication8"),
        subtitle: t("publicationTitles.publication8Subtitle"),
      },
      {
        pdfLocation: "/pdfs/courses/CursoMovilidadesSustentables.pdf",
        coverImage: "/images/courses/CursoMovilidadesSustentables.webp",
        title: t("publicationTitles.course1"),
      },
    ];
  }, [t]); // Dependencia de t para actualizar las traducciones

  const [search, setSearch] = useState("");
  const [filteredPublications, setFilteredPublications] = useState([]);

  useEffect(() => {
    if (!search) {
      setFilteredPublications(publications);
    }

    const timeoutId = setTimeout(() => {
      setFilteredPublications(
        publications.filter(
          (publication) =>
            publication.title.toLowerCase().includes(search.toLowerCase()) ||
            publication.subtitle?.toLowerCase().includes(search.toLowerCase()),
        ),
      );
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [search, publications]);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  return (
    <section className="mx-auto mt-20 flex max-w-screen-2xl flex-col gap-8 p-4 pt-0 md:p-8">
      {/* Título de la sección */}
      <div className="flex flex-col gap-2">
        <h1 className="animate-fadeIn text-3xl font-bold text-gray-900 md:text-4xl">
          <span className="text-orange-500">{t("publications")} </span>
        </h1>
        <div className="h-1 border-b-2 border-orange-500"></div>
      </div>

      {/* Barra de búsqueda */}
      <div className="flex flex-col gap-2">
        <div className="flex w-fit">
          <div className="flex items-center rounded-l-lg border-1 border-gray-400 bg-gray-200 px-1">
            <FiSearch className="text-xl text-gray-900" />
          </div>
          <input
            type="text"
            id="search"
            value={search}
            onChange={handleSearch}
            placeholder={t("searchPlaceholder")}
            className="rounded rounded-l-none border border-l-0 border-gray-400 px-2 py-1 outline-orange-500"
          />
        </div>
      </div>

      {/* Resultados de la búsqueda */}
      {filteredPublications.length === 0 ? (
        <div className="animate-fadeIn flex flex-col items-center">
          <AiFillAliwangwang className="text-center text-8xl text-orange-500" />
          <p className="text-center text-xl text-gray-600">
            {t("noPublicationsFound")}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-8 md:grid-cols-[repeat(auto-fill,minmax(320px,1fr))]">
          {filteredPublications.map((publication, index) => (
            <PublicationCard key={index} {...publication} />
          ))}
        </div>
      )}
    </section>
  );
}

export default PublicationsView;