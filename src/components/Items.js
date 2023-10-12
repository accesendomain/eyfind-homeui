import ActiveOffStateDefaultNes from "./ActiveOffStateDefaultNes";
import OpenOff from "./OpenOff";
import styles from "./Items.module.css";

const Items = ({ iconFromTablerio, closed1 }) => {
  return (
    <div className={styles.items}>
      <div className={styles.search}>
        <div className={styles.bar}>
          <img
            className={styles.iconFromTablerio}
            alt=""
            src={iconFromTablerio}
          />
          <div className={styles.search1}>Search</div>
        </div>
      </div>
      <ActiveOffStateDefaultNes
        iconFromTablerio="/icon-from-tablerio1.svg"
        label="Dashboard"
        activeOffStateDefaultNesWidth="100%"
        sidebarItemColor="#131313"
      />
      <OpenOff
        closed1={`https://d1xzdqg8s8ggsr.cloudfront.net/652694d0a4f2d6e4c70bdefe/02a54fbb-3daf-4f74-91e9-a24f7be74789_1697107622505554566?Expires=-62135596800&Signature=DMkPKxt16mMfz8WQ4wTIjhEJOWBeE-dLMR4~T-D3ncey3HF4tOb6qjip9kBDNU3qwu~rz3H2dTmy~tFs8KfCqgzfiwqERx-qHFra~-4Yw0TqRxwpwjADba6BuOFY4BdRl5ksoJO2MZ86Pt-8-JREW0wAzg87n7dpbDrlwKwjRU1g6b-ufZp6IyV~fZxv-EPVxXMSDjO0IjNeVu39SGQyJp9nriio6KSYXZeKtRDo9RAU3jgGK~DRSxpS-KaNTysmD9MfidNTpQbDgmhvdvxpO~j-F1cj5mbe3v7YGB3Cy3qiLBROGoW7JfUGyxlmVHajvpoSQ7lwUGTpLbsMScFU~Q__&Key-Pair-Id=K1P54FZWCHCL6J`}
      />
      <ActiveOffStateDefaultNes
        iconFromTablerio="/icon-from-tablerio4.svg"
        label="All reports"
        activeOffStateDefaultNesWidth="100%"
        sidebarItemColor="#131313"
      />
      <ActiveOffStateDefaultNes
        iconFromTablerio="/icon-from-tablerio41.svg"
        label="Geography"
        activeOffStateDefaultNesWidth="100%"
        sidebarItemColor="#131313"
      />
      <ActiveOffStateDefaultNes
        iconFromTablerio="/icon-from-tablerio5.svg"
        label="Conversations"
        activeOffStateDefaultNesWidth="100%"
        sidebarItemColor="#131313"
      />
      <ActiveOffStateDefaultNes
        iconFromTablerio="/icon-from-tablerio6.svg"
        label="Deals"
        activeOffStateDefaultNesWidth="100%"
        sidebarItemColor="#131313"
      />
      <ActiveOffStateDefaultNes
        iconFromTablerio="/icon-from-tablerio7.svg"
        label="Export"
        activeOffStateDefaultNesWidth="100%"
        sidebarItemColor="#131313"
      />
    </div>
  );
};

export default Items;
