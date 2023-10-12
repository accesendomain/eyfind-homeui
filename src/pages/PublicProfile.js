import { useCallback } from "react";
import ProfileCard from "../components/ProfileCard";
import WeatherCard from "../components/WeatherCard";
import styles from "./PublicProfile.module.css";

const PublicProfile = () => {
  const onSigninBtnClick = useCallback(() => {
    window.location.href = "https://account.zobuo.com";
  }, []);

  return (
    <div className={styles.publicprofile}>
      <ProfileCard />
      <WeatherCard onSigninBtnClick={onSigninBtnClick} />
    </div>
  );
};

export default PublicProfile;
