import React from "react";
import Icon from "@material-ui/core/Icon";

export const Toggle = ({ value, onChange }) => (
  <Icon className="play-icon" onClick={onChange}>
    {value ? "pause" : "play_arrow"}
  </Icon>
);
