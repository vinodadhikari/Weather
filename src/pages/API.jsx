import React from "react";
import Card from "../components/Card";
import styles from "./api.module.css";
import news from "../img/news.png";
import chat from "../img/chat.jpg";
import search from "../img/search.jpg";

export default function Api(props) {
  return (
    <>
      <div className={styles.apiDiv}>
        <h2>We are working on it</h2>
        <p className={styles.apiPara}>Check our other products</p>
        <Card name="Insta - News" info="Short news" img={news} />
        <Card name="Insta - Chat" info="Chat app" img={chat} />
        <Card name="Insta - Search" info="Search and browsing" img={search} />
      </div>
    </>
  );
}
