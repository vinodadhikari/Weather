import React from "react";
import styles from "./card.module.css";

export default function Card(props) {
  return (
    <div className={styles.card}>
      <div className={styles.img}>
        <img src={props.img} alt="product" height="200" />
      </div>
      <div className={styles.name}>
        <p>{props.name}</p>
      </div>
      <div className={styles.info}>
        <p>{props.info}</p>
      </div>
    </div>
  );
}
