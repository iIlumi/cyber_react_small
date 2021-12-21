import { ADD_TASK } from '../types/ToDoListTypes';

// rxaction snippet
// Nên đổi tên biến payload lại để dễ destruct về sau
// export const addTaskAction = (newTask) => ({
//   type: ADD_TASK,
//   newTask,
// });

export const addTaskAction = (newTask) => {
  console.log('newTask to dispatch:', newTask)
  return {
      type: ADD_TASK,
      newTask
  }
}

