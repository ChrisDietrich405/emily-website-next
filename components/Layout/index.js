import Cards from "../Cards";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Slideshow from "../Slideshow";

import styles from "./styles.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.content}>
      <Navbar />
      <Slideshow />
      <Cards />
      {children}
      <Footer />
    </div>
  );
};
export default Layout;
