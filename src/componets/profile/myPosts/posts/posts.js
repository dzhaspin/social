import s from "./posts.module.css";

const Post = () => {
  return (
    <div className={s.item}>
      <img
        src="https://s7.hostingkartinok.com/uploads/images/2015/07/dabaf840bd97c3c17fcc36083eb5529e.png"
        alt=""
      />
      <p>User Name</p>
    </div>
  );
};

export default Post;
