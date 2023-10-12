import { useCallback } from "react";
import styles from "./PublicProfile.module.css";

const PublicProfile = () => {
  const onSigninBtnClick = useCallback(() => {
    window.location.href = "https://account.zobuo.com";
  }, []);

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
            <button
              className={styles.signinbtn}
              id="signinbtn"
              onClick={onSigninBtnClick}
            >
              <div className={styles.signIn}>Sign In</div>
            </button>
          </div>
        </div>
        <div className={styles.lowermenu}>
          <button className={styles.lowermenubtn} id="homepagebtn">
            <div className={styles.lowermenubtntext}>Homepage</div>
          </button>
          <button className={styles.lowermenubtn} id="homepagebtn">
            <div className={styles.lowermenubtntext}>News Feed</div>
          </button>
          <button className={styles.lowermenubtn} id="homepagebtn">
            <div className={styles.lowermenubtntext2}>Weather</div>
          </button>
        </div>
      </header>
    </div>
  );
};

export default PublicProfile;
