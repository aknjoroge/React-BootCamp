import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import styles from "./MainNavigation.module.css";

function Header() {
  return (
    <Fragment>
      <header className={styles.header}>
        <div className={styles.logo}>Quotify</div>

        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink activeClassName={styles.active} to="/quotes">
                All Quotes
              </NavLink>
              <NavLink activeClassName={styles.active} to="/add">
                Add a Quote
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </Fragment>
  );
}

export default Header;
