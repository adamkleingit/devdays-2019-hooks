import React, { Fragment, useMemo } from "react";
import { List, ListItem } from "material-ui/List";
import { useTasks } from "./tasks.store";
import { Task } from "./Task";
import { TaskTitle } from "./TaskTitle";
import { timeStr } from "./time.utils";
import Divider from "material-ui/Divider";
// App
export const Home = () => {
  const { items, addTask, activeTask, setActiveTask } = useTasks();
  const totalDuration = useMemo(
    () => items.reduce((prev, curr) => prev + curr.duration, 0),
    [items]
  );
  const totalTime = timeStr(totalDuration);
  const onToggleTask = index => {
    setActiveTask(prev => (prev === index ? null : index));
  };

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
            onToggle={onToggleTask}
          />
        ))}
      </List>
      <Divider />
      <ListItem primaryText="Total" secondaryText={totalTime} />
    </Fragment>
  );
};
