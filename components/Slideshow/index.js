import { useState, useEffect } from "react";

import { FaPlay, FaPause } from "react-icons/fa";

import styles from "./styles.module.css";

export default function Slideshow() {
  return (
    <div className={styles.container}>
      <img src="/chickpeas.jpg" />
    </div>
  );
}
