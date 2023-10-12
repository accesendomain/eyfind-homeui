import { useMemo } from "react";
import styles from "./Logo.module.css";

const Logo = ({ union, frame3, logoHeight, logoZIndex }) => {
  const logoStyle = useMemo(() => {
    return {
      height: logoHeight,
      zIndex: logoZIndex,
    };
  }, [logoHeight, logoZIndex]);

  return (
    <div className={styles.logo} style={logoStyle}>
      <div className={styles.logomark}>
        <div className={styles.logomarkChild} />
        <div className={styles.logomarkItem} />
        <img className={styles.unionIcon} alt="" src={union} />
      </div>
      <img className={styles.logoChild} alt="" src={frame3} />
      <div className={styles.orangefarm}>OrangeFarm</div>
    </div>
  );
};

export default Logo;
