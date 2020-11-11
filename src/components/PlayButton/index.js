import React from "react";
import Lottie from "react-lottie";
import styles from "./PlayButton.module.css";
import animationDataBlob from "./assets/blob.json";
import animationDataPlayPause from "./assets/playPause.json";

const PlayButton = () => {
  const defaultOptionsBlob = {
    loop: true,
    autoplay: true,
    animationData: animationDataBlob,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const defaultOptionsPlayPause = {
    loop: false,
    autoplay: false,
    animationData: animationDataPlayPause,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <div className={styles.blobWrapper}>
        <Lottie options={defaultOptionsBlob} height={300} width={300} />
        <div className={styles.playPauseWrapper}>
          <button className={styles.triggerPause}>
            <Lottie
              options={defaultOptionsPlayPause}
              height={150}
              width={150}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayButton;
