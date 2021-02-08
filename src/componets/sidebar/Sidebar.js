import s from "./sidebar.module.css";
// console.log(s);
const Sidebar = () => {
  return (
    <div className={s.wrapper}>
      <ul>
        <li className={s.item}>CSS</li>
        <li className={s.item}>HTML</li>
        <li className={s.item}>JAVASCRIPT</li>
        <li className={s.item}>REACT</li>
      </ul>
    </div>
  );
};

export default Sidebar;
