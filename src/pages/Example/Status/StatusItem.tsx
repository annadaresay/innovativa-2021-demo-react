import _ from "lodash";
import React, { useEffect, useState } from "react";
import { useTeamEventMean } from "../../../shared/api";
import { Emotion } from "../../../shared/types";
import styles from "./StatusItem.module.css";

const MIN_SCALE = 0.2;
const MAX_SCALE = 1.0;

const useEmotionScale = (emotionId: string) => {
  const [scale, setScale] = useState(MIN_SCALE);
  const teamEventMean = useTeamEventMean();
  const emotionMean = _.round(
    teamEventMean?.find((m) => m.type === emotionId)?.value ?? 0,
    2
  );

  console.log(`event mean (${emotionId}): `, emotionMean);

  // Update scale when emotion mean value is changed
  useEffect(() => {
    setScale(_.clamp(emotionMean, MIN_SCALE, MAX_SCALE));
  }, [emotionMean]);

  return scale;
};

interface StatusItemProps {
  emotion: Emotion;
}
export const StatusItem = ({ emotion }: StatusItemProps) => {
  const scale = useEmotionScale(emotion.id);

  return (
    <div className={styles.container}>
      <span className={styles.content} style={{ transform: `scale(${scale})` }}>
        {emotion.emoji}
      </span>
    </div>
  );
};
