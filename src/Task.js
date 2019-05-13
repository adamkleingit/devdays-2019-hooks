import React from "react";
import { ListItem } from "material-ui/List";
import { Toggle } from "./Toggle";
import { timeStr } from "./time.utils";

export const Task = ({ index, isActive, title, duration, onToggle }) => {
  return (
    <ListItem
      primaryText={title}
      secondaryText={timeStr(duration)}
      rightToggle={<Toggle value={isActive} onChange={() => onToggle(index)} />}
    />
  );
};
