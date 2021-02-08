import Post from "./posts/posts";
import s from "./myposts.module.css";

const MyPost = () => {
  return (
    <div className={s.wrap}>
      <p>My posts</p>
      <textarea name="" id="" cols="50" rows="3"></textarea>
      <button>Add Post</button>
      <div className={s.posts}>
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default MyPost;
