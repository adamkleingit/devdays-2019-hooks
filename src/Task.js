import React from 'react';
import {ListItem} from 'material-ui/List';
import Toggle from 'material-ui/Toggle';

class Task extends React.Component {
  render() {
    const { title, duration } = this.props.task;

    return (
      <ListItem
        primaryText={ title }
        secondaryText={ duration }
        rightToggle={<Toggle/>}>
      </ListItem>
    );
  }
}  

export default Task;
