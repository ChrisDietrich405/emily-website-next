import React, { useState } from "react";
import Link from "next/link";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
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
                {/* <Link to="/">Home</Link> */}
              </li>
              <li className="header-list-item">
                <Link href="/recipes">
                  <a>Recipes</a>
                </Link>
                {/* <Link to="/recipes">Recipes</Link> */}
              </li>
              <li className="header-list-item">
                <Link href="/contact">
                  <a>Contact</a>
                </Link>
                {/* <Link to="/contact">Contact</Link> */}
              </li>
              <li className="header-list-item">
                {/* <Link to="/services">
                  Services{" "}
                  <div className={styles.dropdown_content}>
                    <Link>stuff</Link>
                    <Link>some other stuff</Link>
                    <Link>more stuff</Link>
                  </div>
                </Link> */}
              </li>
              <li className="header-list-item">
                {/* <Link to="/blogs">
                  Blogs{" "}
                  <div className={styles.dropdown_content}>
                    <Link>stuff</Link>
                    <Link>some other stuff</Link>
                  </div>
                </Link> */}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
