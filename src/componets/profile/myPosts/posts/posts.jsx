import s from "./posts.module.css";
import userPost from '../../../../assets/img/users/img4.png';

const Post = (props) => {
  // debugger;
  return (
    <div className={s.item}>
      <div className={s.ava}>
        <img src={userPost} />
        {/* <img
        
          src="https://s7.hostingkartinok.com/uploads/images/2015/07/dabaf840bd97c3c17fcc36083eb5529e.png"
          alt=""
        /> */}
        {" "}
        <br />
        <small>{props.name}</small>
      </div>
      <p>{props.message}</p>
      <span>{props.likesCount}</span>
    </div>
  );
};

export default Post;
