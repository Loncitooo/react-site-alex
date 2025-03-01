import { NavLink } from "react-router";

function NavbarLink({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "text-emerald-300" : "text-white"
      }
    >
      {children}
    </NavLink>
  );
}

export default NavbarLink;
