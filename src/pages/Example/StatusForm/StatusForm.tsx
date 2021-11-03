import React, { useState } from "react";
import { Button } from "../../../ui-lib/Button/Button";
import { EmojiPicker } from "../../../ui-lib/EmojiPicker/EmojiPicker";
import { Spacer } from "../../../ui-lib/Spacer/Spacer";
import { emotions } from "../emotions";
import styles from "./StatusForm.module.css";

export const StatusForm = () => {
  const [selected, setSelected] = useState(emotions[0].id);

  return (
    <div className={styles.container}>
      <h2>Send emotion to team</h2>
      <Spacer size={32} />
      <EmojiPicker items={emotions} value={selected} onChange={setSelected} />
      <Spacer size={32} />
      <Button
        label="Send!"
        onClick={() => {
          alert(`TODO: Call API with ${selected}`);
        }}
      />
    </div>
  );
};
