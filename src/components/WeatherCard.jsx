import React from "react";
import styles from "./weatherCard.module.css";

export default function WeatherCard(props) {
  return (
    <>
      <div className={styles.weatherCard}>
        <h4 className={styles.h4}>{props.day}</h4>
        <p>{props.time}</p>
        <img src={props.img} alt="Weather logo" />
        <p>{props.temp} * C</p>
        <p>{props.weather}</p>
      </div>
    </>
  );
}
