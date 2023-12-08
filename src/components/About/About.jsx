import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>

        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Aspiring Full Stack Developer</h3>
              <p>
                I'm a entry level developer with experience in building responsive sites and efficent backend systems 
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Lifetime Learner</h3>
              <p>
                I have deep hunger to learn and grow. I enthusiastically engage with challenges to discover effective solutions. 
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
