import { useEffect, useMemo, useState } from "react";
import { PublicationCard } from "../components/PublicationCard";
import { FiSearch } from "react-icons/fi";
import { AiFillAliwangwang } from "react-icons/ai";

function PublicationsView() {
  const publications = useMemo(() => {
    return [
      {
        pdfLocation: "/pdfs/publications/1.pdf",
        coverImage: "/images/publications/1.webp",
        title:
          "Labor Upsurge in the North American Automobile Transition: Towards a New Industrial and Labor Relations Stage?",
      },
      {
        pdfLocation: "/pdfs/publications/2.pdf",
        coverImage: "/images/publications/2.webp",
        title:
          "ENFORCEMENT OF THE UNITED STATES-MEXICO-CANADA AGREEMENT(“USMCA”) RAPID RESPONSE MECHANISM: VIEWS FROM MEXICAN AUTO SECTOR WORKERS",
      },
      {
        pdfLocation: "/pdfs/publications/3.pdf",
        coverImage: "/images/publications/3.webp",
        title:
          "Unraveling the middle-income trap in Mexico. An institutional complementarity approach as seen from the automotive industry",
      },
      {
        pdfLocation: "/pdfs/publications/4.pdf",
        coverImage: "/images/publications/4.webp",
        title:
          "A new cycle of industrial product and the onset of labor transformation: Building analytical approaches to study the automotive transition across North America",
      },
      {
        pdfLocation: "/pdfs/publications/5.pdf",
        coverImage: "/images/publications/5.webp",
        title: "Labor rights and the USMCA",
      },
      {
        pdfLocation: "/pdfs/publications/6.pdf",
        coverImage: "/images/publications/6.webp",
        title:
          "The USMCA and the Mexican automobile industry: towards a new labour model?",
      },
      {
        pdfLocation: "/pdfs/publications/7.pdf",
        coverImage: "/images/publications/7.webp",
        title:
          "THE QUICK RESPONSE MECHANISM OF THE UNITED STATES-MEXICO-CANADA AGREEMENT",
        subtitle: "OPINIONS OF AUTOMOTRIC WORKERS OF MEXICO",
      },
      {
        pdfLocation: "/pdfs/publications/8.pdf",
        coverImage: "/images/publications/8.webp",
        title: "New Frontiers of the Automobile Industry",
        subtitle:
          "Exploring Geographies, Technology, and Institutional Challenges",
      },
      {
        pdfLocation: "/pdfs/courses/CursoMovilidadesSustentables.pdf",
        coverImage: "/images/courses/CursoMovilidadesSustentables.webp",
        title:
          "Sustainable Mobilities Course for the PhD in Urban and Environmental Studies.",
      },
    ];
  }, []);

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
      <div className="flex flex-col gap-2">
        <h1 className="animate-fadeIn text-3xl font-bold text-gray-900 md:text-4xl">
          My <span className="text-orange-500">Publications</span>
        </h1>
        <div className="h-1 border-b-2 border-orange-500"></div>
      </div>
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
            placeholder="Search publication..."
            className="rounded rounded-l-none border border-l-0 border-gray-400 px-2 py-1 outline-orange-500"
          />
        </div>
      </div>
      {filteredPublications.length === 0 ? (
        <div className="animate-fadeIn flex flex-col items-center">
          <AiFillAliwangwang className="text-center text-8xl text-orange-500" />
          <p className="text-center text-xl text-gray-600">
            No publications or courses found
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
