import "./profile.module.css";
import MyPost from "./myPosts/myposts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
  return (
    <div>
      <ProfileInfo />
      <MyPost mypost="Hello, My name is Nurlan" />
    </div>
  );
};

export default Profile;
