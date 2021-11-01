import React from "react";
import styles from "./banner.module.css";

export default function Banner(props) {
  return (
    <>
      <div className={styles.banner}>
        <h2 className={styles.bannerHeading}>This week forecaset</h2>
        <p className={styles.cityName}>City: {props.cityName}</p>
      </div>
    </>
  );
}
