import React from "react";
import { Link } from "react-router-dom";
import { Toolbar, ToolbarTitle } from "material-ui/Toolbar";
import FlatButton from "material-ui/FlatButton";

export const Header = () => {
  return (
    <Toolbar>
      <ToolbarTitle text="Timer App" />

      <ul>
        {/* <FlatButton>{activeTask !== null ? "running" : "paused"}</FlatButton> */}
        <FlatButton>
          <Link to="/">Home</Link>
        </FlatButton>
        <FlatButton>
          <Link to="/about">About</Link>
        </FlatButton>
      </ul>
    </Toolbar>
  );
};
