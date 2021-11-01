import React, { useState } from "react";
import Banner from "../components/Banner";
import WeatherCard from "../components/WeatherCard";
import styles from "./home.module.css";
import light from "../img/light.jpg";
import rain from "../img/rain.jpg";
import cloud from "../img/cloud1.jpg";
import sun from "../img/sunny.jpg";

export default function Index() {
  const [text, setText] = useState("");
  const send = (event) => {
    setText(event.target.value);
    console.log(text);
  };

  return (
    <>
      <div className={styles.home}>
        <div className={styles.input}>
          <h2 className={styles.h2}>Check Weather of your city</h2>
          <input
            className={styles.inputField}
            type="text"
            name="city_name"
            id="city_name"
            placeholder="Ex: New Delhi"
            onChange={send}
            value={text}
          />
        </div>
      </div>
      <Banner cityName={text} />
      <div className={styles.weatherTiles}>
        <WeatherCard
          day="Monday"
          temp="31"
          weather="Sunny"
          img={sun}
          time="1:00 PM"
        />
        <WeatherCard
          day="Tuesday"
          temp="34"
          weather="Sunny"
          img={sun}
          time="1:00 PM"
        />
        <WeatherCard
          day="Wednesday"
          temp="34"
          weather="Rain"
          img={rain}
          time="1:00 PM"
        />
        <WeatherCard
          day="Thursday"
          temp="26"
          weather="Cloud"
          img={cloud}
          time="1:00 PM"
        />
        <WeatherCard
          day="Friday"
          temp="19"
          weather="Lighting"
          img={light}
          time="1:00 PM"
        />
        <WeatherCard
          day="Saturday"
          temp="22"
          weather="Cloud"
          img={cloud}
          time="1:00 PM"
        />
        <WeatherCard
          day="Sunday"
          temp="20"
          weather="Cloud"
          img={cloud}
          time="1:00 PM"
        />
      </div>
    </>
  );
}
