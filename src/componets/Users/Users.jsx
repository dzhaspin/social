import React from "react";
import style from './users.module.css';
import userPhoto from '../../img/users/user.png'
import Preloader from "../common/Preloader/Preloader";

let Users = (props) => {

  let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)

  let pages = [];
  for (let i = 1; i < pageCount; i++) {
    pages.push(i);
  }

  return <div className={style.wrap}>
    <ul className={style.paginate}>
      {pages.map(p => {
        return <li className={props.currentPage === p && style.paginateActive}
          onClick={() => { props.onPageChanged(p) }}>{p}</li>
      })}
    </ul>

    {props.isFetching ?
      <Preloader />
      : null}

    {
      props.users.map(u => <div key={u.id} className={style.item}>
        <div className={style.photo}>
          <div>
            <img src={u.photos.small != null
              ? u.photos.small : userPhoto}
              className={style.userimg} />
          </div>
          <div>
            {u.followed
              ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
              : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
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
  </div>
}

export default Users;
