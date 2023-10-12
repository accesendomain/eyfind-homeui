import styles from "./PublicProfile.module.css";

const PublicProfile = () => {
  return (
    <div className={styles.publicprofile}>
      <div className={styles.profilecontainer}>
        <div className={styles.profilecard}>
          <img
            className={styles.profilecoverIcon}
            alt=""
            src="/profilecover@2x.png"
          />
          <img
            className={styles.profiledpIcon}
            alt=""
            src="/profiledp@2x.png"
          />
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
      <header className={styles.headerPublic} id="header-public">
        <div className={styles.uppermenu}>
          <a className={styles.zobuoUipng} href="https://www.zobuo.com" />
          <div className={styles.btncontainer}>
            <button className={styles.appdrawerbtn} id="AppDrawerbtn" />
            <div className={styles.signinbtn}>
              <div className={styles.signIn}>Sign In</div>
            </div>
          </div>
        </div>
        <div className={styles.lowermenu}>
          <button className={styles.homepagebtn} id="homepagebtn">
            <div className={styles.homepage}>Homepage</div>
          </button>
          <button className={styles.everythingbtn} id="homepagebtn">
            <div className={styles.everything}>Everything</div>
          </button>
        </div>
      </header>
    </div>
  );
};

export default PublicProfile;
