import React, { Fragment } from "react";
import { List, ListItem } from "material-ui/List";
import { Task } from "./Task";
import { TaskTitle } from "./TaskTitle";
import {useTasks} from './tasks.store';
import Divider from "material-ui/Divider";
// App

export const Home = () => {
  const {
    items, activeTask, addTask, totalTime, toggleActiveTask
  } = useTasks();

  return (
    <Fragment>
    <TaskTitle onAddTask={addTask} />
    <List>
      {items.map((item, index) => (
        <Task
        key={index}
        isActive={index === activeTask}
        index={index}
        {...item}
        onToggle={toggleActiveTask}
        />
        ))}
    </List>
    <Divider />
    <ListItem primaryText="Total" secondaryText={totalTime} />
  </Fragment>
  );
};
