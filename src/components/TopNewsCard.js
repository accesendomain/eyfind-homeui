import styles from "./ContentStand.module.css";

const TopNewsCard = () => {
  return (
    <div className={styles.contentstand}>
      <div className={styles.container}>
        <div className={styles.topstorie}>
          <div className={styles.headlinecontainer}>
            <div className={styles.storydescription}>
              <span className={styles.storydescriptionTxt}>
                {`Airstrikes `}
                <a
                  className={styles.smashedEntireCityBlocks}
                  href="https://apnews.com/6306a3a4ef854bdcb2e3e698e6bd4f02"
                  target="_blank"
                >
                  <span className={styles.smashedEntireCity}>
                    smashed entire city blocks
                  </span>
                </a>{" "}
                to rubble in the tiny coastal enclave and left unknown numbers
                of bodies beneath mounds of debris.
              </span>
            </div>
            <b className={styles.headlinetitle}>
              <span className={styles.storydescriptionTxt}>
                <p className={styles.trumpDipsInto}>
                  Trump dips into internet conspiracy theories with his latest
                  lines about Obama
                </p>
              </span>
            </b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNewsCard;
