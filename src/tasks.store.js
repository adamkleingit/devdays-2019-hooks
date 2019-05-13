import React, { useMemo, useContext } from "react";
import { update} from 'lodash/fp';
import { timeStr } from "./time.utils";
import { usePersistedState, useInterval } from "./common.hooks";

export const TasksContext = React.createContext();
export const TasksProvider = ({ children }) => {
  const [items, setItems] = usePersistedState('items', []);

  const [activeTask, setActiveTask] = usePersistedState('activeTask', null);

  const addTask = (taskTitle) => {
    setItems(prevItems => [
      ...prevItems,
      {
        title: taskTitle,
        duration: 0
      }
    ]);
  }
  const isRunning = activeTask !== null;

  useInterval(
    () => {
      setItems(update(
        [activeTask, 'duration'],
        prev => prev + 1
      ))
    },
    1000,
    isRunning
  );

  const toggleActiveTask = index => {
    setActiveTask(prevActiveTask => prevActiveTask === index ? null : index);
  };

  const totalDuration = useMemo(
    () => items.reduce((prev, curr) => prev + curr.duration, 0),
    [items]
  );
  const totalTime = useMemo(() => timeStr(totalDuration), [totalDuration]);

  const value = {
    items, activeTask, setActiveTask, addTask, toggleActiveTask, totalDuration, totalTime
  }

  return <TasksContext.Provider value={value}>{children}</TasksContext.Provider>;
}
export const useTasks = () => useContext(TasksContext);
