import { useCallback } from "react";
import CardContainer from "../components/CardContainer";
import WeatherCard from "../components/WeatherCard";
import styles from "./Homepage.module.css";

const Homepage = () => {
  const onSigninBtnClick = useCallback(() => {
    window.location.href = "https://account.zobuo.com";
  }, []);

  return (
    <div className={styles.homepage}>
      <CardContainer />
      <WeatherCard onSigninBtnClick={onSigninBtnClick} />
    </div>
  );
};

export default Homepage;
