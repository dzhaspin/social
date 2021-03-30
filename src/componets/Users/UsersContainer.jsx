import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import { follow, setUsers, unfollow, setCurrentPage, setTotalUserCount, toggleIsFetching } from "../../redux/users-reducer";
import axios from "axios";

class UsersContainers extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then((response) => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(response.data.items);
        // this.props.setTotalUserCount(response.data.totalCount);
      })
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then((response) => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(response.data.items);
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
        unfollow={this.props.unfollow} />
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
  }
}

export default connect(mapStateToProps, {
  follow, unfollow, setUsers, setCurrentPage, setTotalUserCount, toggleIsFetching
})(UsersContainers);
