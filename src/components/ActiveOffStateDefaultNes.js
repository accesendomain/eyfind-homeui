import { useMemo } from "react";
import styles from "./ActiveOffStateDefaultNes.module.css";

const ActiveOffStateDefaultNes = ({
  iconFromTablerio,
  label = "Sidebar item",
  activeOffStateDefaultNesWidth,
  sidebarItemColor,
}) => {
  const activeOffStateDefaultNesStyle = useMemo(() => {
    return {
      width: activeOffStateDefaultNesWidth,
    };
  }, [activeOffStateDefaultNesWidth]);

  const sidebarItemStyle = useMemo(() => {
    return {
      color: sidebarItemColor,
    };
  }, [sidebarItemColor]);

  return (
    <div
      className={styles.activeoffStatedefaultNes}
      style={activeOffStateDefaultNesStyle}
    >
      <img className={styles.iconFromTablerio} alt="" src={iconFromTablerio} />
      <div className={styles.sidebarItem} style={sidebarItemStyle}>
        {label}
      </div>
    </div>
  );
};

export default ActiveOffStateDefaultNes;
