import { ADD_TASK, CHANGE_THEME, DELETE_TASK, DONE_TASK, EDIT_TASK, UPDATE_TASK } from '../types/ToDoListTypes';

// rxaction snippet
// Nên đổi tên biến payload lại để dễ destruct về sau
// export const addTaskAction = (newTask) => ({
//   type: ADD_TASK,
//   newTask,
// });

export const addTaskAction = (newTask) => {
  console.log('newTask to dispatch:', newTask);
  return {
    type: ADD_TASK,
    newTask,
  };
};

export const changeThemeAction = (themeId) => {
  return {
    type: CHANGE_THEME,
    themeId,
  };
};

// Cú pháp dùng ngoặc tròn, hiểu ngầm là return luôn
export const doneTaskAction = (taskId) => ({
  type: DONE_TASK,
  taskId,
});

export const deleteTaskAction = (taskId) => ({
  type: DELETE_TASK,
  taskId,
});

export const editTaskAction = (task) => ({
  type: EDIT_TASK,
  task,
});

export const updateTaskAction = (taskName) => ({
  type: UPDATE_TASK,
  taskName,
});
