import React from "react";
import "./profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./myPosts/MyPostContainer";

const Profile = (props) => {
  // debugger;
  return (
    <div>
      <ProfileInfo />
      <MyPostContainer
        store={props.store}
        // posts={props.profilePage.posts}
        // newPostText={props.profilePage.newPostText}
        // dispatch={props.dispatch}
      />
    </div>
  );
};

export default Profile;
