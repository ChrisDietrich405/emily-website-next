import { useState, useEffect } from "react";

import { FaPlay, FaPause } from "react-icons/fa";

import Image from "next/image";

import styles from "./styles.module.css";

export default function Slideshow() {
  const chickpeas = "/chickpeas.jpg";
  const tofu = "/tofu.png";
  const imageArray = [chickpeas, tofu];

  const [pause, setPause] = useState(false);
  const [index, setIndex] = useState(0);

  console.log(index);

  useEffect(() => {
    const interval = setInterval(() => {
      if (pause) {
        // clearInterval(interval);
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
    <div className="slideshow-container">
      <div className="slideshow">
        {imageArray.map((image, i) => (
          <div
            className={
              i === index
                ? styles.slideshow_image_active
                : styles.slideshow_image_inactive
            }
          >
            <Image src={image} width={1500} height={600} />
          </div>
        ))}
      </div>
    </div>
  );
}

// <img
//   className={`${index === i ? "active" : "inactive"} slideshow-image`}
//   src={image}
// ></img>

// import { useState, useEffect } from "react";

// import { FaPlay, FaPause } from "react-icons/fa";

// import Image from "next/image";

// import styles from "./styles.module.css";

// export default function Slideshow() {
//   return (
//     <div className={styles.container}>
//       <Image src="/chickpeas.jpg" width={1200} height={600} />
//     </div>
//   );
// }
