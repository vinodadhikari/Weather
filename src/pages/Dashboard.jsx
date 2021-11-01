import React from "react";
// import styles from "./dashboard.module.css";

function Dashboard(props) {
  return (
    <>
      <div>
        <h1>5-Day forecast </h1>
        <h3>Prop name: {props.cityName}</h3>
      </div>
    </>
  );
}

export default Dashboard;
