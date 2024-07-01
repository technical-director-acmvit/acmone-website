import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./Navbar.module.css";

interface NavbarProps {
  textColor: string;
  showLogo: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ textColor, showLogo }) => {
  let logo = null;

  switch (textColor) {
    case "black":
      logo = showLogo ? (
        <div className={styles.logo}>
          <Image src="/Logo1.png" alt="Black Logo" height={100} width={100} />
        </div>
      ) : null;
      break;
    case "white":
      logo = showLogo ? (
        <div className={styles.logo}>
          <Image src="/Logo2.png" alt="White Logo" height={100} width={100} />
        </div>
      ) : null;
      break;
    default:
      logo = showLogo ? (
        <div className={styles.logo}>
          <Image src="/Logo1.png" alt="Default Logo" height={100} width={100} />
        </div>
      ) : null;
  }

  return (
    <nav className={styles.navbar}>
      {logo}
      <div className={styles.navContent}>
        <ul className={styles.navLinks}>
          <li className={styles.navItem}>
            <a href="" style={{ color: textColor }}>
              Home
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="#" style={{ color: textColor }}>
              About
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="#" style={{ color: textColor }}>
              Delete
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
