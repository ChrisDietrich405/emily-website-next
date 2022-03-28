import Cards from "../Cards";
import Footer from "../Footer";
import Header from "../Header";
import Slideshow from "../Slideshow";

import styles from "./styles.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.content}>
      <Header />
      <Slideshow />
      <Cards />
      {children}
      <Footer />
    </div>
  );
};
export default Layout;
