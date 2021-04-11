import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import { follow, setUsers, unfollow, setCurrentPage, setTotalUserCount, toggleIsFetching, toggleFollowingProgress } from "../../redux/users-reducer";
import axios from "axios";
import { usersApi } from "../../api/api";

class UsersContainers extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true)
    usersApi.getUsers(this.props.currentPage, this.props.pageSize)
      .then((data) => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(data.items);
        this.props.setTotalUserCount(data.totalCount);
      })
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true)
    // axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, { withCredentials: true,})
    usersApi.getUsers(this.props.pageNumber, this.props.pageSize)
      .then((data) => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(data.items);
      })
  }

  render() {
    return <>
      <Users totalUsersCount={this.props.totalUsersCount}
        onPageChanged={this.onPageChanged}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        users={this.props.users}
        follow={this.props.follow}
        isFetching={this.props.isFetching}
        unfollow={this.props.unfollow}
        toggleFollowingProgress={this.props.toggleFollowingProgress}
        followingInProgress={this.props.followingInProgress}
      />
    </>
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  }
}

export default connect(mapStateToProps, {
  follow, unfollow, setUsers, setCurrentPage, setTotalUserCount,
  toggleIsFetching, toggleFollowingProgress
})(UsersContainers);
