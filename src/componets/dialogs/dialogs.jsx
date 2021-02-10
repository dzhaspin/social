import s from "./dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  return (
    <div className={s.item}>
      <NavLink to={"/dialog/" + props.id}>{props.name}</NavLink>
    </div>
  );
};
const Message = (props) => {
  return <div className={s.item}>{props.text}</div>;
};

const Dialogs = (props) => {
  return (
    <div className={s.block}>
      <div className={s.name}>
        <DialogItem id="1" name="Andrey" />
        <DialogItem id="2" name="Sveta" />
        <DialogItem id="3" name="Viktor" />
        <DialogItem id="4" name="Yura" />
        <DialogItem id="5" name="Valera" />
      </div>
      <div className={s.message}>
        <Message text="Lorem ipsum dolor sit amet," />
        <Message text="Lorem 2" />
        <Message text="Lorem 3" />
        <Message text="Lorem 4" />
        <Message text="Lorem 5" />
      </div>
    </div>
  );
};

export default Dialogs;
