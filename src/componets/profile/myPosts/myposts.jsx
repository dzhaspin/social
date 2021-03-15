import React from "react";
import Post from "./posts/posts";
import s from "./myposts.module.css";

const MyPost = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post name={p.name} message={p.message} likesCount={p.likesCount} />
  ));

  let newPostElement = React.createRef();
  // debugger;

  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={s.wrap}>
      <h4>"Hello, My name is Nurlan"</h4>
      <div>
        <textarea
          onChange={onPostChange}
          ref={newPostElement}
          value={props.newPostText}
        />
      </div>
      <button onClick={onAddPost}>Опубликовать</button>

      <div className={s.postsClass}>{postsElements}</div>
    </div>
  );
};

export default MyPost;
