import Tag from "./Tag";
import ActiveOffStateDefaultNes from "./ActiveOffStateDefaultNes";
import styles from "./FormContainer.module.css";

const FormContainer = ({ iconCode, iconTextCode }) => {
  return (
    <div className={styles.user}>
      <div className={styles.info}>
        <div className={styles.avatar}>
          <img
            className={styles.avatarChild}
            alt=""
            src="/rectangle-1@2x.png"
          />
        </div>
        <div className={styles.gustavoXavierParent}>
          <div className={styles.gustavoXavier}>Gustavo Xavier</div>
          <Tag />
        </div>
      </div>
      <div className={styles.sidebarItemParent}>
        <ActiveOffStateDefaultNes
          iconFromTablerio="/icon-from-tablerio8.svg"
          label="Settings"
          activeOffStateDefaultNesWidth="100%"
          sidebarItemColor="#131313"
        />
        <ActiveOffStateDefaultNes
          iconFromTablerio="/icon-from-tablerio9.svg"
          label="Log out"
          activeOffStateDefaultNesWidth="100%"
          sidebarItemColor="#b01212"
        />
      </div>
    </div>
  );
};

export default FormContainer;
