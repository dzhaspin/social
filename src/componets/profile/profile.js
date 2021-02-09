import s from "./profile.module.css";
import MyPost from "./myPosts/myposts";

const Profile = () => {
  return (
    <div className={s.block}>
      <img
        src="https://sun9-2.userapi.com/c846520/v846520585/15bc3a/b-vxM7RMYmQ.jpg"
        alt="Alt"
      />
      <MyPost mypost="Hello, My name is Nurlan" />
    </div>
  );
};

export default Profile;
