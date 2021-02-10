import Post from "./posts/posts";
import s from "./myposts.module.css";

const MyPost = (props) => {
  let postData = [
    { id: 0, name: "Dmitriy", message: "Hi, how are you?", likesCount: 14 },
    { id: 1, name: "Ivan", message: "hello, I'm fine, thanks", likesCount: 9 },
  ];
  return (
    <div className={s.wrap}>
      <h4>{props.mypost}</h4>
      <div>
        <textarea name="" id="" cols="50" rows="3"></textarea>
      </div>
      <button>Опубликовать</button>

      <div className={s.posts}>
        <Post
          name={postData[0].name}
          message={postData[0].message}
          likesCount={postData[0].likesCount}
        />
        <Post
          name={postData[1].name}
          message={postData[1].message}
          likesCount={postData[1].likesCount}
        />
      </div>
    </div>
  );
};

export default MyPost;
