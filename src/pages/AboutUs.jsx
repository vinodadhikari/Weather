import React from "react";
import styles from "./aboutUs.module.css";
function AboutUs() {
  return (
    <>
      <div className={styles.aboutUs}>
        <h1 className={styles.founderHeading}>Founders</h1>
        <div className={styles.founders}>
          <h3 className={styles.founderName}>Ram Kumar</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consectetur in, nesciunt rem nisi reprehenderit tenetur eius at
            repellat quam nemo obcaecati ullam enim molestiae error iste et!
            Repudiandae, laboriosam enim?
          </p>
        </div>
        <div className={styles.founders}>
          <h3 className={styles.founderName}>Tarun Singh</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consectetur in, nesciunt rem nisi reprehenderit tenetur eius at
            repellat quam nemo obcaecati ullam enim molestiae error iste et!
            Repudiandae, laboriosam enim?
          </p>
        </div>
        <div className={styles.info}>
          <h2>
            About the <strong>Insta - Weather</strong>
          </h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          quisquam adipisci, velit qui aliquid, dicta reprehenderit molestias
          minima eum, sint quas dolorem accusamus veritatis minus provident
          libero a saepe soluta! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Itaque ipsam, ea sit voluptas ducimus eligendi nobis
          autem eos reiciendis nemo error voluptate dolor harum similique nulla,
          obcaecati, possimus modi? Distinctio quasi fuga quos temporibus
          voluptas dolorem, voluptatibus consequuntur officiis impedit nesciunt?
          Veniam impedit ad, alias corporis architecto inventore veritatis
          aspernatur.
        </div>
      </div>
    </>
  );
}

export default AboutUs;
