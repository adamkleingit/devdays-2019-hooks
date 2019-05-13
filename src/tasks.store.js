import React, { createContext, useState, useContext } from "react";
import { update } from "lodash/fp";
import { useInterval } from "./common.hooks";

export const TasksContext = createContext();
export const TasksProvider = ({ children }) => {
  const [{ items, activeTask }, setState] = useState({
    items: [],
    activeTask: null
  });
  const shouldTick = activeTask !== null;
  useInterval(
    () =>
      setState(state =>
        update(["items", state.activeTask, "duration"], prev => prev + 1, state)
      ),
    1000,
    shouldTick
  );
  const addTask = taskTitle => {
    setState(
      update("items", prev => [
        ...prev,
        {
          title: taskTitle,
          duration: 0
        }
      ])
    );
  };
  const setActiveTask = activeTask =>
    setState(update("activeTask", activeTask));

  const value = {
    items,
    addTask,
    activeTask,
    setActiveTask
  };

  return (
    <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
  );
};
export const useTasks = () => useContext(TasksContext);
