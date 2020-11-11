import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <ul className={styles.menu}>
        <li>
          <Link to="/mon-agenda" className={styles.menuItem}>
            Agenda
          </Link>
        </li>
        <li>
          <Link to="/" className={styles.menuItem}>
            Accueil
          </Link>
        </li>
        <li>
          <Link to="/mes-likes" className={styles.menuItem}>
            Mes likes
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
