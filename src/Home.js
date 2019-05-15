import React, { Fragment } from "react";
import { List, ListItem } from "material-ui/List";
import {update} from 'lodash/fp';
import { Task } from "./Task";
import { TaskTitle } from "./TaskTitle";
import { timeStr } from "./time.utils";
import Divider from "material-ui/Divider";
// App
export class Home extends React.Component {
  state = {
    items: [],
    activeTask: null
  }

  addTask = (taskTitle) => {
    this.setState(state => ({
      items: [
        ...state.items,
        {
          title: taskTitle,
          duration: 0
        }
      ]
    }));
  }

  toggleActiveTask = index => {
    this.setState(state => ({
      activeTask: state.activeTask === index ? null : index
    }));;
  };

  componentDidUpdate(_, prevState) {
    if (prevState.activeTask === null && this.state.activeTask !== null) {
      this.startTimer();
    }
    if (prevState.activeTask !== null && this.state.activeTask === null) {
      this.stopTimer();
    }
  }

  componentWillUnmount() {
    this.stopTimer();
  }

  componentDidMount() {
    if (this.state.activeTask !== null) {
      this.startTimer();
    }
  }

  startTimer() {
    this.interval = setInterval(() => {
      this.setState(update(['items', this.state.activeTask, 'duration'], prev => prev + 1));
    }, 1000);
  }

  stopTimer() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
  }
  
  render() {
    const { items, activeTask } = this.state;
    const totalDuration = items.reduce((prev, curr) => prev + curr.duration, 0);
    const totalTime = timeStr(totalDuration);
  
    return (
      <Fragment>
      <TaskTitle onAddTask={this.addTask} />
      <List>
        {items.map((item, index) => (
          <Task
          key={index}
          isActive={index === activeTask}
          index={index}
          {...item}
          onToggle={this.toggleActiveTask}
          />
          ))}
      </List>
      <Divider />
      <ListItem primaryText="Total" secondaryText={totalTime} />
    </Fragment>
    );
  }
};
