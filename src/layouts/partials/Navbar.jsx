import NavbarLink from "../../components/NavbarLink";

function Navbar() {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <a href="/" className="flex items-center gap-2">
        <img
          src="/images/alex/alex_sonriendo.jpeg"
          className="w-16 rounded-full aspect-square object-cover"
        />
        <span>Alex Covarrubias</span>
      </a>
      <nav className="flex space-x-4">
        <NavbarLink to="/">Home</NavbarLink>
        <NavbarLink to="/publicaciones">Publications</NavbarLink>
        <NavbarLink to="/proyectos">Projects</NavbarLink>
        <NavbarLink to="/media">Media</NavbarLink>
      </nav>
    </header>
  );
}

export default Navbar;
