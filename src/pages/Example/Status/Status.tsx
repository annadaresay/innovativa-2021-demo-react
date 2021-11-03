import React from "react";
import { Spacer } from "../../../ui-lib/Spacer/Spacer";
import { emotions } from "../emotions";
import styles from "./Status.module.css";
import { StatusItem } from "./StatusItem";

export const Status = () => {
  return (
    <div className={styles.container}>
      <h2>Current team spirit</h2>
      <Spacer size={32} />
      <div className={styles.content}>
        {emotions.map((emotion) => (
          <StatusItem emotion={emotion} />
        ))}
      </div>
    </div>
  );
};
