import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <div className={styles.NavBar}>
      <div className={styles.NavBar_container}>
        <div className={styles.logo}>
          &#123; React ? Shaken : !Stirred &#125;
        </div>
        <ul className={styles.NavBar_ul}>
          <li>
            <NavLink
              to="page-one"
              className={(navData) => (navData.isActive ? styles.active : "")}
            >
              Search
            </NavLink>
          </li>
          <li>
            <NavLink
              to="favourites"
              className={(navData) => (navData.isActive ? styles.active : "")}
            >
              Favourites
            </NavLink>
          </li>
          <li>
            <NavLink
              to="kitchen"
              className={(navData) => (navData.isActive ? styles.active : "")}
            >
              Kitchen
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
