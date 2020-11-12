import React from "react";
import CurrentTime from "../../components/CurrentTime";
import PlayButton from "../../components/PlayButton";
import Layout from "../../layout";
import styles from "./Home.module.css";
// import Player from "../../components/Player";
// import TrackCover from "../../components/TrackCover";
// import TrackInfos from "../../components/TrackInfos";

const Home = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <h1>
          Nous sommes le <CurrentTime /> !
        </h1>
        <PlayButton />
        {/* <Player /> */}
        {/* <TrackInfos /> */}
        {/* <TrackCover /> */}
      </div>
    </Layout>
  );
};

export default Home;
