import React from "react";
import "./profile.module.css";
import MyPost from "./myPosts/myposts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPost
        posts={props.profilePage.posts}
        newPostText={props.profilePage.newPostText}
        updateNewPostText={props.updateNewPostText}
        addPost={props.addPost}
      />
    </div>
  );
};

export default Profile;
