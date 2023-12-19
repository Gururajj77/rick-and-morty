import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav>
      <ul className="navigation">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            Characters
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
