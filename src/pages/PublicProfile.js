import ProfileCard from "../components/ProfileCard";
import HeaderPublic from "../components/HeaderPublic";
import styles from "./PublicProfile.module.css";

const PublicProfile = () => {
  return (
    <div className={styles.publicprofile}>
      <ProfileCard />
      <HeaderPublic />
    </div>
  );
};

export default PublicProfile;
