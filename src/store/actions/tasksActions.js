import * as types from "./actionType/tasksTypes";

export const setTasks = (tasks) => ({
  type: types.SET_TASKS,
  payload: tasks,
});

export const addTask = (task) => ({
  type: types.ADD_TASK,
  payload: task,
});

export const completeTask = (taskId) => ({
  type: types.COMPLETE_TASK,
  payload: taskId,
});
