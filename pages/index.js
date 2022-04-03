import Head from "next/head";
import Slideshow from "../components/Slideshow";
import Cards from "../components/Cards";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Slideshow />
      <Cards />
    </div>
  );
}
