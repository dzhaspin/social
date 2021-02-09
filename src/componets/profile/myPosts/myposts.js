import Post from "./posts/posts";
import s from "./myposts.module.css";

const MyPost = (props) => {
  return (
    <div className={s.wrap}>
      <p>{props.mypost}</p>
      <textarea name="" id="" cols="50" rows="3"></textarea>
      <button>Опубликовать</button>
      <div className={s.posts}>
        <Post name="Ivan Ivanov" age="26" />
        <Post name="Nurlan Dz" age="31" />
        <Post name="Sergey Sidorov" age="35" />
      </div>
    </div>
  );
};

export default MyPost;
