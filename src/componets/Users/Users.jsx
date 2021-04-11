import React from "react";
import style from './users.module.css';
import userPhoto from '../../assets/img/users/user.png'
import Preloader from "../common/Preloader/Preloader";
import { NavLink } from "react-router-dom";
import axios from "axios";

let Users = (props) => {

  let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)

  let pages = [];
  for (let i = 1; i < pageCount; i++) {
    pages.push(i);
  }

  return <div className={style.wrap}>
    {props.isFetching ?
      <Preloader />
      : null}

    {
      props.users.map(u => <div key={u.id} className={style.item}>
        <div className={style.photo}>
          <div>
            <NavLink to={'/profile/' + u.id}>
              <img src={u.photos.small != null
                ? u.photos.small : userPhoto}
                className={style.userimg} />
            </NavLink>
          </div>
          <div>

            {u.followed

              ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                // debugger
                props.toggleFollowingProgress(true, u.id)
                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                  withCredentials: true,
                  headers: {
                    'API-KEY': '7100d87d-116d-4c62-b8bc-0428e6505093'
                  }

                })
                  .then((response) => {
                    if (response.data.resultCode == 0) {
                      props.unfollow(u.id)
                    }
                    props.toggleFollowingProgress(false, u.id)
                  })
              }}>Unfollow</button>

              : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                props.toggleFollowingProgress(true, u.id)
                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                  withCredentials: true,
                  headers: {
                    'API-KEY': '7100d87d-116d-4c62-b8bc-0428e6505093'
                  }
                })
                  .then((response) => {
                    if (response.data.resultCode == 0) {
                      props.follow(u.id)
                    }
                    props.toggleFollowingProgress(false, u.id)
                  })
              }}>Follow</button>}

          </div>
        </div>
        <div className={style.descr}>
          <span>
            <div>{u.name}</div>
            <div>{u.status}</div>
          </span>
          <span>
            <div>{'u.location.country'}</div>
            <div>{'u.location.city'}</div>
          </span>
        </div>
      </div>)
    }

    <ul className={style.paginate}>
      {pages.map(p => {
        return <li className={props.currentPage === p && style.paginateActive}
          onClick={() => { props.onPageChanged(p) }}>{p}</li>
      })}
    </ul>

  </div>
}

export default Users;
