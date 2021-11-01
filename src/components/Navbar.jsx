import React from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";
function Header() {
  return (
    <>
      <header className={styles.header}>
        <nav>
          <ul className={styles.nav_bar}>
            <li>
              <Link className={styles.logo} to="/">
                Insta - Weather
              </Link>
            </li>
            <li>
              <Link to="/"> Home</Link>
            </li>
            <li>
              <Link to="/aboutus"> About Us</Link>
            </li>
            <li>
              <Link to="/api">API</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
