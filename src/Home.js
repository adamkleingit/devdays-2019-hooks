import React, {Fragment} from 'react';
import {List, ListItem} from 'material-ui/List';
import Task from './Task';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Divider from 'material-ui/Divider';

const tempItems = [{
  title: 'Axonite',
  duration: '0:00',
  isRunning: false
}, {
  title: 'Ping Pong',
  duration: '1:22',
  isRunning: false
}, {
  title: 'Group Challenge',
  duration: '0:22',
  isRunning: true
}]

class Home extends React.Component {
  render() {
    return (
      <Fragment>
        <TextField name="title" placeholder="Task Title"/>
        <FloatingActionButton mini={true} style={ {marginLeft: 10 } }>
          <ContentAdd />
        </FloatingActionButton>
        <List>
          { tempItems.map((item) => <Task key={item.title} task={item}/>) }
        </List>
        <Divider/>
        <ListItem
          primaryText="Total"
          secondaryText="1:44"/>
      </Fragment>
    );
  }
}  

export default Home;
