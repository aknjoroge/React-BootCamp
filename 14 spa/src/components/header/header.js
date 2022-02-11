import { NavLink } from "react-router-dom";
import styles from "./header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <NavLink to="/welcome">Welcome</NavLink>
          </li>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
