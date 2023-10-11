import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.lowermenu}>
        <button className={styles.homepagebtn} id="homepagebtn">
          <div className={styles.homepage}>Homepage</div>
        </button>
        <button className={styles.everythingbtn} id="homepagebtn">
          <div className={styles.everything}>Everything</div>
        </button>
      </div>
      <div className={styles.uppermenu}>
        <div className={styles.signinbtn}>
          <b className={styles.signIn}>Sign In</b>
        </div>
        <a className={styles.zobuoUipng} href="https://www.zobuo.com" />
      </div>
    </div>
  );
};

export default Header;
