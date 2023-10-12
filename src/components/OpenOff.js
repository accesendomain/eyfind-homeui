import ActiveOnStateNestClosed from "./ActiveOnStateNestClosed";
import styles from "./OpenOff.module.css";

const OpenOff = ({ closed1 }) => {
  return (
    <div className={styles.openoff}>
      <ActiveOnStateNestClosed
        iconFromTablerio="/icon-from-tablerio2.svg"
        label="Customers"
        activeOnStateNestClosedFlex="1"
        closed1="/closed.svg"
      />
    </div>
  );
};

export default OpenOff;
