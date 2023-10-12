import { useCallback } from "react";
import styles from "./Homepage.module.css";

const Homepage = () => {
  const onSigninBtnClick = useCallback(() => {
    window.location.href = "https://account.zobuo.com";
  }, []);

  return (
    <div className={styles.homepage}>
      <div className={styles.contentstand}>
        <div className={styles.container}>
          <div className={styles.topstorie}>
            <div className={styles.headlinecontainer}>
              <div className={styles.storydescription}>
                <span className={styles.storydescriptionTxt}>
                  {`Airstrikes `}
                  <a
                    className={styles.smashedEntireCityBlocks}
                    href="https://apnews.com/6306a3a4ef854bdcb2e3e698e6bd4f02"
                    target="_blank"
                  >
                    <span className={styles.smashedEntireCity}>
                      smashed entire city blocks
                    </span>
                  </a>{" "}
                  to rubble in the tiny coastal enclave and left unknown numbers
                  of bodies beneath mounds of debris.
                </span>
              </div>
              <b className={styles.headlinetitle}>
                <span className={styles.storydescriptionTxt}>
                  <p className={styles.trumpDipsInto}>
                    Trump dips into internet conspiracy theories with his latest
                    lines about Obama
                  </p>
                </span>
              </b>
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

export default Homepage;
