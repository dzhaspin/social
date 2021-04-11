import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import Profile from "./profile";
import { setUsersProfile } from "../../redux/profile-reducer";
import { withRouter } from "react-router";
// import "./profile.module.css";

class ProfileContainer extends React.Component {

  componentDidMount() {
    // debugger
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = 10;
    }
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then((response) => {
        this.props.setUsersProfile(response.data);
      })
  }

  render() {
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile} />
      </div >
    );
  }
};

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
});

let withUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUsersProfile })(withUrlDataContainerComponent);
