import React from "react";

import styles from "./Intro.module.css";
import { getImageUrl } from "../../utils";

export const Intro = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Kayti</h1>
        <p className={styles.description}>
          I'm a Computer Science student Oregon State University looking forward to creating and collaborating through tech! 
        </p>
        <a href="#contact" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("intro/introImage.png")}
        alt="image of me on top of bear peak in Boulder, Colorado during the winter"
        className={styles.introImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
