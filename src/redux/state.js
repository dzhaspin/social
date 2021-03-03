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
    dialogPage: {
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
        { id: 6, text: "Life is beautiful))" },
      ],
    },
  },
  _callSubscriber() {
    console.log("State changed");
  },
  getState() {
    return this._state;
  },
  addPost() {
    // debugger;
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0,
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = "";
    this._callSubscriber(this._state);
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
};

export default store;
window.store = store;
