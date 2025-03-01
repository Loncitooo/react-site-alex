import ProjectCard from "../components/ProjectCard";

function ProjectsView() {
  const projects = [
    {
      pdfLocation: "/pdfs/projects/1.pdf",
      coverImage: "/images/projects/1.jpg",
      title: "Project 1",
    },
    {
      pdfLocation: "/pdfs/projects/2.pdf",
      coverImage: "/images/projects/2.jpg",
      title: "Project 1",
    },
    {
      pdfLocation: "/pdfs/projects/3.pdf",
      coverImage: "/images/projects/3.jpg",
      title: "Project 1",
    },
    {
      pdfLocation: "/pdfs/projects/4.pdf",
      coverImage: "/images/projects/4.jpg",
      title: "Project 1",
    },
    {
      pdfLocation: "/pdfs/projects/5.pdf",
      coverImage: "/images/projects/5.jpg",
      title: "Project 1",
    },
    {
      pdfLocation: "/pdfs/projects/6.pdf",
      coverImage: "/images/projects/6.jpg",
      title: "Project 1",
    },
    {
      pdfLocation: "/pdfs/projects/7.pdf",
      coverImage: "/images/projects/7.jpg",
      title: "Project 1",
    },
    {
      pdfLocation: "/pdfs/projects/8.pdf",
      coverImage: "/images/projects/8.jpg",
      title: "Project 1",
    },
  ];

  return (
    <section className="mt-20">
      <h1>hello im the projects</h1>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default ProjectsView;
