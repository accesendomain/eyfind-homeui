import styles from "./WeatherCard.module.css";

const WeatherCard = ({ onSigninBtnClick }) => {
  return (
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
  );
};

export default WeatherCard;
