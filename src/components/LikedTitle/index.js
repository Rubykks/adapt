import React from "react";
import TrackArtist from "../TrackArtist";
import TrackCover from "../TrackCover";
import TrackTitle from "../TrackTitle";
import styles from "./LikedTitle.module.css";

const LikedTitle = () => {
  return (
    <div className={styles.container}>
      <div className={styles.coverSize}>
        <TrackCover />
      </div>

      <div className={styles.textInfosContainer}>
        <h1 className={styles.title}>
          <TrackTitle />
        </h1>
        <p className={styles.artist}>
          <TrackArtist />
        </p>
      </div>
    </div>
  );
};

export default LikedTitle;