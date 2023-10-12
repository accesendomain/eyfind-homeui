import TopNewsCard from "../components/TopNewsCard";
import HeaderPublic from "../components/HeaderPublic";
import styles from "./Homepage.module.css";

const Homepage = () => {
  return (
    <div className={styles.homepage}>
      <TopNewsCard />
      <HeaderPublic />
    </div>
  );
};

export default Homepage;
