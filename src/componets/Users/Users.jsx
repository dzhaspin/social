import React from "react";
import style from './users.module.css';

const Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        photoUrl: 'https://w7.pngwing.com/pngs/160/371/png-transparent-computer-icons-user-profile-computer-software-user-miscellaneous-purple-violet.png',
        followed: false,
        fullName: 'Dmitry',
        status: 'I am a boss',
        location: { city: 'Minsk', country: 'Belarus' }
      },
      {
        id: 2,
        photoUrl: 'https://w7.pngwing.com/pngs/160/371/png-transparent-computer-icons-user-profile-computer-software-user-miscellaneous-purple-violet.png',
        followed: true,
        fullName: 'Sasha',
        status: 'I am a boss too',
        location: { city: 'Moscow', country: 'Russia' }
      },
      {
        id: 3,
        photoUrl: 'https://w7.pngwing.com/pngs/160/371/png-transparent-computer-icons-user-profile-computer-software-user-miscellaneous-purple-violet.png',
        followed: false,
        fullName: 'Andrew',
        status: 'I am a boss too',
        location: { city: 'Kiev', country: 'Ukraine' }
      }
    ]
    )
  }

  return <div className={style.wrap}>
    {
      props.users.map(u => <div key={u.id} className={style.item}>
        <div className={style.photo}>
          <div>
            <img src={u.photoUrl} className={style.userimg} />
          </div>
          <div>
            {u.followed
              ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
              : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
          </div>
        </div>
        <div className={style.descr}>
          <span>
            <div>{u.fullName}</div>
            <div>{u.status}</div>
          </span>
          <span>
            <div>{u.location.country}</div>
            <div>{u.location.city}</div>
          </span>
        </div>
      </div>)
    }
  </div>

};

export default Users;
