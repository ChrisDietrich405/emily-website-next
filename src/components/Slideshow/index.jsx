import { useState, useEffect } from "react";
import Image from "next/image";

const slideshow1 = "/images/home-banner-1.jpg";
const slideshow2 = "/images/home-banner-2.jpg";
const slideshow3 = "/images/chickpeas.jpg";

import styles from "./styles.module.css";

export default function Slideshow({ title }) {
  const imageArray = [slideshow1, slideshow2, slideshow3];

  const [pause, setPause] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (pause) {
        return;
      }
      if (index === imageArray.length - 1) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [index, pause]);

  return (
    <div className={styles.slideshow_container}>
      <div className={styles.slideshow}>
        {imageArray.map((image, i) => (
          <Image
            key={i}
            fill
            alt="slideshow"
              className={`${styles.slideshow_image} ${
                  index === i ? styles.active : styles.inactive
              }`}
            src={image}
          />
        ))}
        
      </div>
      <h2 className={styles.slideshow_title}>{title}</h2>
    </div>
  );
}


