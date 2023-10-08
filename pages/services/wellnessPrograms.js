import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@mui/material";

import { wellnessProgramsData } from "../../src/componentsData/wellnessPrograms";
import { wellnessProgramsData2 } from "../../src/componentsData/wellnessPrograms";
import { wellnessProgramsData3 } from "../../src/componentsData/wellnessPrograms";
import { wellnessProgramsData4 } from "../../src/componentsData/wellnessPrograms";
import Slideshow from "../../src/components/Slideshow";

import { api } from "../api/api";

import List from "../../src/components/List";

import styles from "../../src/styles/WellnessPrograms.module.css";

const WellnessPrograms = () => {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    const fetchTestimonials = async () => {
      const response = await api.get(`/testimonials`);
      const { data } = response;
      console.log("ASD: ", data);
      setTestimonials(data);
    };
    fetchTestimonials();
  }, []);
  return (
    <>
      <Slideshow title="Wellness Programs" />
      <Container style={{ marginTop: "50px" }}>
        <section className={styles.inner_container}>
          <div className={styles.consultation_package}>
            <h2 className={styles.offerings_title}>
              Nature’s Wellness Path’s Plant-Powered Weight Loss & Wellness
              Programs are right for you if you are:
            </h2>
            <p style={{ marginBottom: "15px" }}>
              Programs are a series of structured sessions that cover pertinent
              topics each week that can help to conquer your health-related
              challenges.
            </p>
            <p style={{ marginBottom: "15px" }}>
              Program sessions also include time for open discussion, addressing
              questions and challenges, and celebrating successes as well as
              action steps for the coming week!
            </p>

            <p style={{ marginBottom: "15px" }}>
              If you are experiencing any or all of the following, the
              plant-powered weight loss and wellness program could be just what
              you need to transform your health and achieve your ideal weight
              and optimal wellness:
            </p>
            <List
              data={wellnessProgramsData}
              className={styles.offering_list}
            />
            <Image
              className={styles.offerings_img}
              src="https://quotefancy.com/media/wallpaper/3840x2160/1755552-Virgil-Quote-The-greatest-wealth-is-health.jpg"
              alt="wealth is health"
              width={400}
              height={300}
            />
            <h3 className={styles.path_title}>
              Pick Your Plant-Powered Path To Optimal Wellness
            </h3>
            <div className={styles.path}>
              <p style={{ marginBottom: "10px" }}>
                Path #1: 4 Week Plant-Powered Wellness Jumpstart
              </p>
              <List
                data={wellnessProgramsData2}
                className={styles.offering_list}
              />
              <p>Cost: $200</p>
            </div>

            <div className={styles.path}>
              <p style={{ marginBottom: "10px" }}>
                Path #2: 12 Week Plant-Powered Weight Loss & Wellness Immersion
              </p>
              <List
                data={wellnessProgramsData4}
                className={styles.offering_list}
              />
              <p>Cost: $600</p>
              <p style={{ marginTop: "10px" }}>
                <Link
                  target="_blank"
                  style={{ color: "#67a97b" }}
                  href="https://heal.me/practitioner/emily-perryman-registered-dietitian-nutritionist"
                >
                  Contact me
                </Link>{" "}
                to schedule a free discovery call to learn more about the
                programs and how they can help you to conquer your weight loss
                and wellness challenges!
              </p>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
};

export default WellnessPrograms;
