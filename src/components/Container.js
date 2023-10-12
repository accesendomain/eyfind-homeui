import Logo from "./Logo";
import styles from "./Container.module.css";

const Container = ({ dimension, dimensionText }) => {
  return (
    <div className={styles.brand}>
      <Logo
        union="/union1.svg"
        frame3="/frame-31.svg"
        logoHeight="40px"
        logoZIndex="0"
      />
      <div className={styles.collapse}>
        <img className={styles.collapseIcon} alt="" src="/collapse-icon.svg" />
      </div>
    </div>
  );
};

export default Container;
