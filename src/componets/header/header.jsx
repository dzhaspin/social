import s from "./header.module.css";

const Header = () => {
  return (
    <div className={s.header}>
      <div className="container">
        <div className={s.logo}>
          <a href="/">Social-Web</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
