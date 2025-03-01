import { NavLink } from "react-router";

function NavbarLink({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "font-semibold text-orange-500" : "text-black"
      }
    >
      {children}
    </NavLink>
  );
}

export default NavbarLink;
