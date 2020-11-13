import React from "react";
import CurrentTime from "../../components/CurrentTime";
import CurrentDate from "../../components/CurrentDate";
import ButtonNext from "../../components/ButtonNext";
import PlayButton from "../../components/PlayButton";
import Layout from "../../layout";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <Layout>
      <div>
        <h1 className={styles.homeDate}>
          <CurrentDate />
        </h1>
        <h2 className={styles.homeTime}>
          Il est <CurrentTime />
        </h2>
      </div>
      <div className={styles.container}>
        <div className={styles.playbutton}>
          <PlayButton />
        </div>
        <div className={styles.nextbutton}>
          <ButtonNext
            name="Toutes nos ambiances"
            color="#F8F8F8"
            backgroundColor="rgba(0, 0, 0, 0.85)"
            fontWeight="700"
          />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
