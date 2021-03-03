import s from "./../dialogs.module.css";

const Message = (props) => {
  return (
    <div>
      <div className={s.item}>{props.text}</div>
    </div>
  );
};

export default Message;
