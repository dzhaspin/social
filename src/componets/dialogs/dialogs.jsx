import React from "react";
import s from "./dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogs.map((dlg) => (
    <DialogItem name={dlg.name} id={dlg.id} />
  ));
  let messagesElements = props.state.messages.map((msg) => (
    <Message text={msg.text} />
  ));

  let newMessageElement = React.createRef();

  let addMessage = () => {
    let newMessage = newMessageElement.current.value;
    alert(newMessage);
  };

  return (
    <div>
      <div className={s.block}>
        <div className={s.name}>{dialogsElements}</div>
        <div className={s.text}>{messagesElements}</div>
      </div>
      <div className={s.messageBlock}>
        <textarea ref={newMessageElement}></textarea>
        <button type="submit" onClick={addMessage}>
          Отправить
        </button>
      </div>
    </div>
  );
};

export default Dialogs;
