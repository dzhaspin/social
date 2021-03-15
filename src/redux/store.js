import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        {
          id: 0,
          name: "Dmitriy",
          message: "Hi, how are you?",
          likesCount: 16,
        },
        {
          id: 1,
          name: "Ivan",
          message: "hello, I'm fine, thanks",
          likesCount: 11,
        },
      ],
      newPostText: "it-react.com",
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: "Dimych" },
        { id: 2, name: "Andrew" },
        { id: 3, name: "Sveta" },
        { id: 4, name: "Sasha" },
        { id: 5, name: "Viktor" },
        { id: 6, name: "Valera" },
      ],
      messages: [
        { id: 1, text: "Hi, how are you?" },
        { id: 2, text: "Hi brather, ok!" },
        { id: 3, text: "And you" },
        { id: 4, text: "Hello i am fine thanks" },
        { id: 5, text: "Very very good" },
      ],
      newMessagesBody: "",
    },
  },
  _callSubscriber() {
    console.log("State changed");
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer; // observer
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

    this._callSubscriber(this._state);
  },
};

export default store;
window.store = store;
