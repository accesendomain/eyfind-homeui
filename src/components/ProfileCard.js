import styles from "./ProfileCard.module.css";

const ProfileCard = () => {
  return (
    <div className={styles.profilecontainer}>
      <div className={styles.profilecard}>
        <img
          className={styles.profilecoverIcon}
          alt=""
          src="/profilecover@2x.png"
        />
        <img className={styles.profiledpIcon} alt="" src="/profiledp@2x.png" />
        <div className={styles.profileinfocont}>
          <div className={styles.profilename}>
            <b className={styles.username}>Yeshan Peiris</b>
            <div className={styles.verifiedstatus} />
          </div>
          <div className={styles.handlecontainer}>
            <div className={styles.username}>@yeshanpeiris</div>
          </div>
        </div>
        <div className={styles.profileminicard}>
          <div className={styles.biodatacontainer}>
            <div className={styles.joinedate}>
              <img
                className={styles.joinedIcon}
                alt=""
                src="/joined-icon@2x.png"
              />
              <div className={styles.username}>Joined Dec 5, 2002</div>
            </div>
            <div className={styles.locationcontainer}>
              <img
                className={styles.joinedIcon}
                alt=""
                src="/location-icon@2x.png"
              />
              <div className={styles.username}>Panadura, LK</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
