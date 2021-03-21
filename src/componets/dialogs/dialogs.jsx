import React from "react";
import s from "./dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map((d) => (<DialogItem name={d.name} id={d.id} key={d.id} />));
  let messagesElements = state.messages.map((m) => (<Message text={m.text} key={m.id} />));
  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.sendMessage();
  };

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  };

  return (
    <div>
      <div className={s.block}>
        <div className={s.name}>{dialogsElements}</div>
        <div className={s.text}>{messagesElements}</div>
      </div>
      <div className={s.messageBlock}>
        <textarea
          value={newMessageBody}
          onChange={onNewMessageChange}
          placeholder="Enter your message"
        ></textarea>
        <button type="submit" onClick={onSendMessageClick}>
          Отправить
        </button>
      </div>
    </div>
  );
};

export default Dialogs;
