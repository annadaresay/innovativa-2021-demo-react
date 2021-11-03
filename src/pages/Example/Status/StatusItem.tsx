import _ from "lodash";
import React, { useEffect, useState } from "react";
import { Emotion } from "../emotions";
import styles from "./StatusItem.module.css";

const MIN_SCALE = 0.2;
const MAX_SCALE = 1.0;

// TODO: Work in progress, plan is to listen to server here and change scale
const useScale = () => {
  const [scale, setScale] = useState(_.random(MIN_SCALE, MAX_SCALE));

  useEffect(() => {
    const interval = setInterval(() => {
      setScale(_.random(MIN_SCALE, MAX_SCALE));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return _.clamp(scale, MIN_SCALE, MAX_SCALE);
};

interface StatusItemProps {
  emotion: Emotion;
}
export const StatusItem = ({ emotion }: StatusItemProps) => {
  const scale = useScale();

  return (
    <div className={styles.container}>
      <span className={styles.content} style={{ transform: `scale(${scale})` }}>
        {emotion.emoji}
      </span>
    </div>
  );
};
