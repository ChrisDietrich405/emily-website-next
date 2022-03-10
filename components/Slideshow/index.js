import { useState, useEffect } from "react";

import { FaPlay, FaPause } from "react-icons/fa";

import Image from "next/image";

import styles from "./styles.module.css";

export default function Slideshow() {
  return (
    <div className={styles.container}>
      <Image src="/chickpeas.jpg" width={1200} height={600} />
    </div>
  );
}
