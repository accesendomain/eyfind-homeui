import styles from "./HeaderPublic.module.css";

const HeaderPublic = () => {
  return (
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
  );
};

export default HeaderPublic;
