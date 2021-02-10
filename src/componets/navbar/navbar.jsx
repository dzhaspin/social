import { NavLink } from "react-router-dom";
import s from "./navbar.module.css";
// console.log(s);
const Navbar = () => {
  return (
    <div>
      <ul className={s.nav}>
        <li>
          <NavLink to="profile">Profile</NavLink>
        </li>
        <li>
          <NavLink to="dialogs">Dialogs</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
