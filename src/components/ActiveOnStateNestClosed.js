import { useMemo } from "react";
import styles from "./ActiveOnStateNestClosed.module.css";

const ActiveOnStateNestClosed = ({
  iconFromTablerio,
  label = "Sidebar item",
  activeOnStateNestClosedFlex,
  closed1,
}) => {
  const activeOnStateNestClosedStyle = useMemo(() => {
    return {
      flex: activeOnStateNestClosedFlex,
    };
  }, [activeOnStateNestClosedFlex]);

  return (
    <div
      className={styles.activeonStatenestClosed}
      style={activeOnStateNestClosedStyle}
    >
      <img className={styles.iconFromTablerio} alt="" src={iconFromTablerio} />
      <div className={styles.sidebarItem}>{label}</div>
      <img className={styles.closedIcon} alt="" src={closed1} />
    </div>
  );
};

export default ActiveOnStateNestClosed;
