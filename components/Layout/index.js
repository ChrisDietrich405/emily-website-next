import Cards from "../Cards";
import Footer from "../Footer";
import Header from "../Header";

import styles from "./styles.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.content}>
      <Header />

      {children}
      <Footer />
    </div>
  );
};
export default Layout;
