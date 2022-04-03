import Image from "next/image";

import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

import SocialIcons from "../SocialIcons";

import styles from "./styles.module.css";

const Footer = () => {
  const chickpeas = "/chickpeas.jpg";
  const tofu = "/tofu.png";
  return (
    <footer className={styles.section}>
      <div className={styles.footer_content}>
        <div className={styles.inner}>
          {" "}
          <div className={styles.grid_container}>
            <div className={styles.footer_container}>
              <div className={styles.nutritionist_pic_container}>
                <Image
                  src={chickpeas}
                  width={125}
                  height={73}
                  className={styles.footer_pic}
                  alt="picture of dietician"
                ></Image>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Earum accusantium, sit modi debitis repellat culpa.
                </p>
              </div>
              <div className={styles.meatless_monday_logo}>
                <Image
                  src={chickpeas}
                  width={125}
                  height={73}
                  alt="picture of dietician"
                ></Image>
              </div>
              <div className={styles.credentials}>
                {" "}
                <Image
                  src={chickpeas}
                  width={125}
                  height={73}
                  alt="picture of dietician"
                ></Image>
                <p>Lorem ipsum dolor sit, amet</p>
                <p>accusantium, sit modi debitis </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer_contacts}>
        <div className={styles.inner}>
          <address>Developed by Fabio and Chris</address>
          <SocialIcons />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
