import React from 'react';
import {ListItem} from 'material-ui/List';
import Toggle from 'material-ui/Toggle';

class Task extends React.Component {
  render() {
    const { title, duration, isRunning } = this.props.task;

    return (
      <ListItem
        primaryText={ title }
        secondaryText={ duration }
        rightToggle={<Toggle toggled={ isRunning }/>}>
      </ListItem>
    );
  }
}  

export default Task;
