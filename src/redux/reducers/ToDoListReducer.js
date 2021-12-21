import { ToDoListDarkTheme } from '../../JSS_StyledComponent/Themes/ToDoListDarkTheme';
const stateDefault = {
  themeToDoList: ToDoListDarkTheme,
  taskList: [
    { id: 'task-1', taskName: 'task 1', done: true },
    { id: 'task-2', taskName: 'task 2', done: false },
    { id: 'task-3', taskName: 'task 3', done: true },
    { id: 'task-4', taskName: 'task 4', done: false },
  ],
};
// Anonymous export
// export default (state = stateDefault, action) => {
// Tuy nhiên ESLint sẽ báo lỗi ko cho export ẩn danh

const ToDoListReducer = (state = stateDefault, action) => {
  const taskList = [...state.taskList];
  state = { ...state };
  state.taskList = taskList;

  switch (action.type) {
    case '__DISPATCH_TYPE':
      state.__dataChange = action.data;
      return state;
    default:
      return state;
  }
};

export default ToDoListReducer;
