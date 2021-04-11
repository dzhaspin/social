import React from "react";
// import "./profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./myPosts/MyPostContainer";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo profile={props.profile} />
      <MyPostContainer />
    </div>
  );
};

export default Profile;
