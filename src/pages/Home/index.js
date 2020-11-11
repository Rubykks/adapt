import React from "react";
import PlayButton from "../../components/PlayButton";
import HomeLayout from "../../layout";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <HomeLayout />
      Page d'accueil
      <PlayButton />
    </div>
  );
};

export default Home;
