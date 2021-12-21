import { arrTheme } from '../../JSS_StyledComponent/Themes/ThemeManager';
import { ToDoListDarkTheme } from '../../JSS_StyledComponent/Themes/ToDoListDarkTheme';
import { ADD_TASK, CHANGE_THEME } from '../types/ToDoListTypes';
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
    case ADD_TASK: {
      // console.log('todo',action.newTask)
      //Kiểm tra rõng
      if (action.newTask.taskName.trim() === '') {
        alert('Task name is required!');
        return state;
      }

      //Kiểm tra tồn tại - trùng task name
      // let taskList = [...state.taskList];
      let index = taskList.findIndex(
        (task) => task.taskName === action.newTask.taskName
      );
      if (index !== -1) {
        alert('task name already exists !');
        return state;
      }

      taskList.push(action.newTask);
      // taskList = [...taskList, action.newTask]
      // Viết kiểu dưới ko được vì const taskList !, ko re-assign được
      // -> Cẩn thận khi dùng Lodash deep copy ra !!,
      // gán const như vậy sẽ hạn chế được 1 phần ẩu

      //Xử lý xong thì gán taskList mới vào taskList
      // Tuy nhiên ta đã deep copy nested array trước và copy state ra nên ko cần
      // state.taskList = taskListUpdate;

      return state;
    }

    case CHANGE_THEME: {
      //Tìm theme dựa vào action.themeId được chọn
      let themeEle = arrTheme.find((theme) => theme.id === action.themeId);
      //   Find obj => nếu ko có thì undefined (falsy)
      if (themeEle) {
        console.log(themeEle);
        //set Lại theme cho state.themeToDoList
        // Ở đây nên tạo copy, tránh modified ngược lại data gốc
        // Đồng thời ko sinh copy thì lần đổi tiếp theo vẫn là obj cũ !!
        state.themeToDoList = { ...themeEle.theme };
      }

      return state;
    }

    default:
      return state;
  }
};

export default ToDoListReducer;
