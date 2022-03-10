import Image from "next/image";

// import grid1 from "../../images/chickpeas.jpg";
// import grid2 from "../../images/tofu.png";

import styles from "./styles.module.css";

const Cards = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.grid_container}>
          <div className={styles.grid}>
            <Image src="/chickpeas.jpg" width={122} height={122} />
            {/* <img className={styles.grid_pic} src={grid1} alt="grid-pic"></img> */}
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic,
              possimus?
            </p>
            <a href="#">Lorem ipsum dolor sit.</a>
          </div>
          <div className={styles.grid}>
            <Image src="/tofu.png" width={122} height={122} />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic,
              possimus?
            </p>
            <a href="#">Lorem ipsum dolor sit.</a>
          </div>
          <div className={styles.grid}>
            <Image src="/chickpeas.jpg" width={122} height={122} />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic,
              possimus?
            </p>
            <a href="#">Lorem ipsum dolor sit.</a>
          </div>
          <div className={styles.grid}>
            <Image src="/tofu.png" width={122} height={122} />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic,
              possimus?
            </p>
            <a href="#">Lorem ipsum dolor sit.</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
