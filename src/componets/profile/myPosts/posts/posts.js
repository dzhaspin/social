import s from "./posts.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <div className={s.img}>
        <img
          src="https://s7.hostingkartinok.com/uploads/images/2015/07/dabaf840bd97c3c17fcc36083eb5529e.png"
          alt=""
        />
      </div>
      <p>{props.name}</p>
      <span>{props.age}</span>
    </div>
  );
};

export default Post;
