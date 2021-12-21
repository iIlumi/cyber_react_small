import { ADD_TASK, CHANGE_THEME } from '../types/ToDoListTypes';

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
