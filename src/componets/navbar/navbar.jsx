import { NavLink } from "react-router-dom";
import s from "./navbar.module.css";

const Navbar = () => {
  return (
    <div>
      <ul className={s.nav}>
        <li><NavLink to="profile">Profile</NavLink></li>
        <li><NavLink to="dialogs">Messages</NavLink></li>
        <li><NavLink to="users">Users</NavLink></li>
        <li><NavLink to="profile">Friends</NavLink></li>
        <li><NavLink to="users">Communities</NavLink></li>
        <li><NavLink to="profile">Photos</NavLink></li>
        <li><NavLink to="profile">Music</NavLink></li>
        <li><NavLink to="profile">Videos</NavLink></li>
        <li><NavLink to="profile">Clips</NavLink></li>
        <li><NavLink to="profile">Games</NavLink></li>
      </ul>
    </div>
  );
};

export default Navbar;
