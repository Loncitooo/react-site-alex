import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { FiSearch } from "react-icons/fi";
import { AiFillAliwangwang } from "react-icons/ai";

// Componente PublicationCard mejorado
export function PublicationCard({ coverImage, title, subtitle, pdfLocation }) {
  return (
    <div className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md transition-all hover:shadow-xl">
      {/* Contenedor de la imagen con altura fija y manejo de aspecto */}
      <div className="relative h-[300px] w-full overflow-hidden">
        <img
          src={coverImage}
          alt={title}
          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        {subtitle && (
          <p className="mt-2 text-sm text-gray-600">{subtitle}</p>
        )}
        
        <a
          href={pdfLocation}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block rounded-lg bg-orange-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-orange-600"
        >
          Ver PDF
        </a>
      </div>
    </div>
  );
}

function PublicationsView() {
  const { t } = useTranslation();
  const [search, setSearch] = useState("");
  const [filteredPublications, setFilteredPublications] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isLoading, setIsLoading] = useState(true);

  const categories = [
    { id: "all", label: t("all") },
    { id: "publications", label: t("publications") },
    { id: "courses", label: t("courses") },
  ];


const publications = useMemo(() => {
  return [
    {
      id: 1,
      pdfLocation: "/pdfs/publications/1.pdf",
      coverImage: "/images/publications/1.webp",
      title: t("publicationTitles.publication1"),
      category: "publications",
    },
    {
      id: 2,
      pdfLocation: "/pdfs/publications/2.pdf",
      coverImage: "/images/publications/2.webp",
      title: t("publicationTitles.publication2"),
      category: "publications",
    },
    {
      id: 3,
      pdfLocation: "/pdfs/publications/3.pdf",
      coverImage: "/images/publications/3.webp",
      title: t("publicationTitles.publication3"),
      category: "publications",
    },
    {
      id: 4,
      pdfLocation: "/pdfs/publications/4.pdf",
      coverImage: "/images/publications/4.webp",
      title: t("publicationTitles.publication4"),
      category: "publications",
    },
    {
      id: 5,
      pdfLocation: "/pdfs/publications/5.pdf",
      coverImage: "/images/publications/5.webp",
      title: t("publicationTitles.publication5"),
      category: "publications",
    },
    {
      id: 6,
      pdfLocation: "/pdfs/publications/6.pdf",
      coverImage: "/images/publications/6.webp",
      title: t("publicationTitles.publication6"),
      category: "publications",
    },
    {
      id: 7,
      pdfLocation: "/pdfs/publications/7.pdf",
      coverImage: "/images/publications/7.webp",
      title: t("publicationTitles.publication7"),
      subtitle: t("publicationTitles.publication7Subtitle"),
      category: "publications",
    },
    {
      id: 8,
      pdfLocation: "/pdfs/publications/8.pdf",
      coverImage: "/images/publications/8.webp",
      title: t("publicationTitles.publication8"),
      subtitle: t("publicationTitles.publication8Subtitle"),
      category: "publications",
    },
    {
      id: 9,
      pdfLocation: "/pdfs/courses/CursoMovilidadesSustentables.pdf",
      coverImage: "/images/courses/CursoMovilidadesSustentables.webp",
      title: t("publicationTitles.course1"),
      category: "courses",
    },
  ];
}, [t]);

    

  useEffect(() => {
    if (!search && selectedCategory === "all") {
      setFilteredPublications(publications);
      return;
    }

    const timeoutId = setTimeout(() => {
      const filtered = publications.filter((publication) => {
        const matchesSearch =
          publication.title.toLowerCase().includes(search.toLowerCase()) ||
          publication.subtitle?.toLowerCase().includes(search.toLowerCase());

        const matchesCategory =
          selectedCategory === "all" || publication.category === selectedCategory;

        return matchesSearch && matchesCategory;
      });

      setFilteredPublications(filtered);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [search, selectedCategory, publications]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="mx-auto mt-20 flex max-w-screen-2xl flex-col gap-8 p-4 pt-0 md:p-8">
      {/* Título y demás elementos del layout... */}
      
      {isLoading ? (
        <div className="animate-fadeIn flex flex-col items-center">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-orange-500 border-t-transparent"></div>
          <p className="mt-4 text-center text-xl text-gray-600">{t("loading")}</p>
        </div>
      ) : filteredPublications.length === 0 ? (
        <div className="animate-fadeIn flex flex-col items-center">
          <AiFillAliwangwang className="text-center text-8xl text-orange-500" />
          <p className="mt-4 text-center text-xl text-gray-600">
            {t("noPublicationsFound")}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPublications.map((publication) => (
            <PublicationCard key={publication.id} {...publication} />
          ))}
        </div>
      )}
    </section>
  );
}

export default PublicationsView;