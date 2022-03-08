import Link from "next/link";

import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

import styles from "./styles.module.css";

const Navbar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.social_icons}>
        <div className={styles.inner}>
          <ul className={styles.social_icons_list}>
            <li>
              <a href="#">
                <BsFacebook />
              </a>
            </li>
            <li>
              <a href="#">
                <BsInstagram />
              </a>
            </li>
            <li>
              <a href="#">
                <BsTwitter />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.header_content}>
        <div className={styles.inner}>
          <div className={styles.logo}>Logo</div>
          <div className={styles.nav_menu}>
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <a href="#">Recipes</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <Link href="/products">
                  <a>Products</a>
                </Link>
              </li>
              <li>
                <a href="#">Search</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

// const Navbar = () => {
//   return (
//     <nav>
//       <div className="logo">
//         <h1>Logo</h1>
//       </div>
//       <Link href="/">
//         <a>Home</a>
//       </Link>
//       <Link href="/about">
//         <a>About</a>
//       </Link>
//       <Link href="/products">
//         <a>Products</a>
//       </Link>
//     </nav>
//   );
// };

// export default Navbar;
