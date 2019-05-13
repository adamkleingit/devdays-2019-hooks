import React, { useState } from "react";
import TextField from "material-ui/TextField";
import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentAdd from "material-ui/svg-icons/content/add";

export class TaskTitle extends React.Component {
  state = {
    value: ''
  };
  
  onSubmit = e => {
    e.preventDefault();
    this.props.onAddTask(this.state.value);
    this.setState({ value: '' })
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <TextField
          value={this.state.value}
          onChange={e => this.setState({ value: e.target.value })}
          name="title"
          placeholder="Task Title"
          />
        <FloatingActionButton mini={true} style={{ marginLeft: 10 }}>
          <ContentAdd />
        </FloatingActionButton>
      </form>
    );
  }
};
