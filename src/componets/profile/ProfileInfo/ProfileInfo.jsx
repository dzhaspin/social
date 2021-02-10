import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div className={s.bg}>
        <img
          src="https://sun9-2.userapi.com/c846520/v846520585/15bc3a/b-vxM7RMYmQ.jpg"
          alt="Alt"
        />
      </div>
      {/* About me */}
      <div className={s.wrap}>
        <div className={s.avatar}>
          <img
            src="https://yt3.ggpht.com/a/AATXAJzsQ_nWMY5Ztfc2Z8UBB4q-i4ZkP1JAfU6iNzpZ=s900-c-k-c0xffffffff-no-rj-mo"
            alt="Alt"
          />
        </div>
        <div className={s.descr}>
          <h4>Nurlan Dzhaspinov</h4>
          <p>Astrakhan sity</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
