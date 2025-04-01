import * as types from "../actions/actionType/tasksTypes";

const initialState = {
  tasks: [],
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_TASKS:
      return { ...state, tasks: action.payload };
    case types.ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };
    case types.COMPLETE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload ? { ...task, completed: true } : task
        ),
      };
    default:
      return state;
  }
};

export default tasksReducer;
