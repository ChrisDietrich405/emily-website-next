import Footer from "../Footer";
import Navbar from "../Navbar";

import styles from "./styles.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.content}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};
export default Layout;
