import React, { useState } from "react";
import Link from "next/link";
import SocialIcons from "../SocialIcons";

import styles from "./styles.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.social_icons}>
        <div className={styles.inner}>
          <SocialIcons />
        </div>
      </div>
      <div className={styles.header_content}>
        <div className={styles.inner}>
          <div className={styles.logo}>Logo</div>
          <div className={styles.nav_menu}>
            <ul>
              <li className="header-list-item">
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li className="header-list-item">
                <Link href="/Recipes">
                  <a>Recipes</a>
                </Link>
              </li>
              <li className="header-list-item">
                <Link href="/Contact">
                  <a>Contact</a>
                </Link>
              </li>

              <li className="header-list-item">
                <Link href="/Blogs">
                  <a>Blogs</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
