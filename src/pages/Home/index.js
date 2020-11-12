import React from "react";
import PlayButton from "../../components/PlayButton";
// import Player from "../../components/Player";
import TrackCover from "../../components/TrackCover";
import TrackInfos from "../../components/TrackInfos";
import HomeLayout from "../../layout";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <HomeLayout />
      <PlayButton />
      {/* <Player /> */}
      <TrackInfos />
      <TrackCover />
    </div>
  );
};

export default Home;
