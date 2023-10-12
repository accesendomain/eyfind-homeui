import { useCallback } from "react";
import styles from "./Homepage.module.css";

const Homepage = () => {
  const onSigninBtnClick = useCallback(() => {
    window.location.href = "https://account.zobuo.com";
  }, []);

  return (
    <div className={styles.homepage}>
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
      <div className={styles.sidebar}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <div className={styles.logomark}>
              <div className={styles.logomarkChild} />
              <div className={styles.logomarkItem} />
              <img className={styles.unionIcon} alt="" src="/union.svg" />
            </div>
            <img className={styles.logoChild} alt="" src="/frame-3.svg" />
            <div className={styles.orangefarm}>OrangeFarm</div>
          </div>
          <div className={styles.collapse}>
            <img
              className={styles.collapseIcon}
              alt=""
              src="/collapse-icon.svg"
            />
          </div>
        </div>
        <div className={styles.items}>
          <div className={styles.search}>
            <div className={styles.bar}>
              <img
                className={styles.iconFromTablerio}
                alt=""
                src="/icon-from-tablerio.svg"
              />
              <div className={styles.search1}>Search</div>
            </div>
          </div>
          <div className={styles.sidebarItem01}>
            <img
              className={styles.iconFromTablerio}
              alt=""
              src="/icon-from-tablerio1.svg"
            />
            <div className={styles.sidebarItem}>Dashboard</div>
          </div>
          <div className={styles.sidebarNest}>
            <div className={styles.sidebarItem1}>
              <img
                className={styles.iconFromTablerio2}
                alt=""
                src="/icon-from-tablerio2.svg"
              />
              <div className={styles.manageUsers}>Customers</div>
              <img className={styles.closedIcon} alt="" src="/closed.svg" />
            </div>
          </div>
          <div className={styles.sidebarItem01}>
            <img
              className={styles.iconFromTablerio}
              alt=""
              src="/icon-from-tablerio3.svg"
            />
            <div className={styles.sidebarItem}>All reports</div>
          </div>
          <div className={styles.sidebarItem01}>
            <img
              className={styles.iconFromTablerio}
              alt=""
              src="/icon-from-tablerio4.svg"
            />
            <div className={styles.sidebarItem}>Geography</div>
          </div>
          <div className={styles.sidebarItem01}>
            <img
              className={styles.iconFromTablerio}
              alt=""
              src="/icon-from-tablerio5.svg"
            />
            <div className={styles.sidebarItem}>Conversations</div>
          </div>
          <div className={styles.sidebarItem01}>
            <img
              className={styles.iconFromTablerio}
              alt=""
              src="/icon-from-tablerio6.svg"
            />
            <div className={styles.sidebarItem}>Deals</div>
          </div>
          <div className={styles.sidebarItem01}>
            <img
              className={styles.iconFromTablerio}
              alt=""
              src="/icon-from-tablerio7.svg"
            />
            <div className={styles.sidebarItem}>Export</div>
          </div>
        </div>
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
              <div className={styles.tag}>
                <div className={styles.admin}>Admin</div>
              </div>
            </div>
          </div>
          <div className={styles.sidebarItemParent}>
            <div className={styles.sidebarItem01}>
              <img
                className={styles.iconFromTablerio}
                alt=""
                src="/icon-from-tablerio8.svg"
              />
              <div className={styles.sidebarItem}>Settings</div>
            </div>
            <div className={styles.sidebarItem9}>
              <img
                className={styles.iconFromTablerio}
                alt=""
                src="/icon-from-tablerio9.svg"
              />
              <div className={styles.sidebarItem}>Log out</div>
            </div>
          </div>
        </div>
      </div>
      <header className={styles.headerPublic} id="header-public">
        <div className={styles.uppermenu}>
          <a className={styles.zobuoUipng} href="https://www.zobuo.com" />
          <div className={styles.btncontainer}>
            <button className={styles.appdrawerbtn} id="AppDrawerbtn" />
            <button
              className={styles.signinbtn}
              id="signinbtn"
              onClick={onSigninBtnClick}
            >
              <div className={styles.signIn}>Sign In</div>
            </button>
          </div>
        </div>
        <div className={styles.lowermenu}>
          <button className={styles.lowermenubtn} id="homepagebtn">
            <div className={styles.lowermenubtntext}>Homepage</div>
          </button>
          <button className={styles.lowermenubtn} id="homepagebtn">
            <div className={styles.lowermenubtntext}>News Feed</div>
          </button>
          <button className={styles.lowermenubtn} id="homepagebtn">
            <div className={styles.lowermenubtntext2}>Weather</div>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Homepage;
