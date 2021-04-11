import React from 'react';
import preloader from '../../../assets/img/preloader.svg';
import style from '../../Users/users.module.css';

let Preloader = (props) => {
  return <div className={style.preloaderWrap}>
    <img src={preloader} />
  </div>
}

export default Preloader;