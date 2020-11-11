import React from "react";
import HomeLayout from "../../../layout";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <HomeLayout />
      Page d'accueil
    </div>
  );
};

export default Home;
