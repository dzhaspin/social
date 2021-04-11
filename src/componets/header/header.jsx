import { NavLink } from "react-router-dom";
import s from "./header.module.css";

const Header = (props) => {
  return (
    <div className={s.header}>
      <div className="container">
        <div className={s.headerWrap}>
          <div className={s.logo}>
            <a href="/">Social-Web</a>
          </div>
          <div className={s.login}>
            {props.isAuth
              ? <NavLink to="/">
                <div>{props.login}</div>
                <div>{props.email}</div>
              </NavLink>
              : <NavLink to="/">Login in</NavLink>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
