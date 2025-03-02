import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next"; // Importar el hook de traducción
import { PublicationCard } from "../components/PublicationCard";
import { FiSearch } from "react-icons/fi";
import { AiFillAliwangwang } from "react-icons/ai";

function PublicationsView() {
  const { t } = useTranslation(); // Hook para acceder a las traducciones

  const [search, setSearch] = useState("");
  const [filteredPublications, setFilteredPublications] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all"); // Estado para la categoría seleccionada
  const [isLoading, setIsLoading] = useState(true);

  // Lista de categorías
  const categories = [
    { id: "all", label: t("all") },
    { id: "publications", label: t("publications") },
    { id: "courses", label: t("courses") },
  ];

  // Datos de las publicaciones
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
  }, [t]); // Dependencia de t para actualizar las traducciones

  // Filtrado de publicaciones
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

  // Simular carga inicial
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <section className="mx-auto mt-20 flex max-w-screen-2xl flex-col gap-8 p-4 pt-0 md:p-8">
      {/* Título de la sección */}
      <div className="flex flex-col gap-2">
        <h1 className="animate-fadeIn bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
          {t("publications")}
        </h1>
        <div className="h-1 border-b-2 border-orange-500"></div>
      </div>

      {/* Filtros y barra de búsqueda */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        {/* Filtro por categorías */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                selectedCategory === category.id
                  ? "bg-orange-500 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              aria-label={`Filter by ${category.label}`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Barra de búsqueda */}
        <div className="flex w-full max-w-md">
          <div className="flex items-center rounded-l-lg border border-gray-300 bg-gray-100 px-3">
            <FiSearch className="text-xl text-gray-500" />
          </div>
          <input
            type="text"
            id="search"
            value={search}
            onChange={handleSearch}
            placeholder={t("searchPlaceholder")}
            className="w-full rounded-r-lg border border-l-0 border-gray-300 bg-gray-100 px-3 py-2 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
            aria-label="Search publications"
          />
        </div>
      </div>

      {/* Resultados de la búsqueda */}
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