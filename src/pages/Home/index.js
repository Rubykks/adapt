import React from "react";
import BackgroundLayout from "../../components/BackgroundLayout";
import CurrentTime from "../../components/Informations";
import PlayButton from "../../components/PlayButton";
import HomeLayout from "../../layout";
import styles from "./Home.module.css";
// import Player from "../../components/Player";
// import TrackCover from "../../components/TrackCover";
// import TrackInfos from "../../components/TrackInfos";

const Home = () => {
  return (
    <BackgroundLayout>
      <div className={styles.container}>
        <HomeLayout />
        <PlayButton />
        <CurrentTime />
        {/* <Player /> */}
        {/* <TrackInfos /> */}
        {/* <TrackCover /> */}
      </div>
    </BackgroundLayout>
  );
};

export default Home;
