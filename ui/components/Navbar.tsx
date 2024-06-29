import styles from"./NavBar.module.css";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <nav>
        <ul className={styles.navLinks}>
          <li className={styles.navItem}>
            <a href="#" className={styles.navLink}>Home</a>
          </li>
          <li className={styles.navItem}>
            <a href="#" className={styles.navLink}>About</a>
          </li>
          <li className={styles.navItem}>
            <a href="#" className={styles.navLink}>Delete</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
