import { arrTheme } from '../../JSS_StyledComponent/Themes/ThemeManager';
import { ToDoListDarkTheme } from '../../JSS_StyledComponent/Themes/ToDoListDarkTheme';
import {
  ADD_TASK,
  CHANGE_THEME,
  DELETE_TASK,
  DONE_TASK,
  EDIT_TASK,
  UPDATE_TASK,
} from '../types/ToDoListTypes';
const stateDefault = {
  themeToDoList: ToDoListDarkTheme,
  taskList: [
    { id: 'task-1', taskName: 'task 1', done: true },
    { id: 'task-2', taskName: 'task 2', done: false },
    { id: 'task-3', taskName: 'task 3', done: true },
    { id: 'task-4', taskName: 'task 4', done: false },
  ],
  taskEdit: { id: 'task-1', taskName: 'task 1 editing', done: false },
  //taskEdit: null,
};
// Anonymous export
// export default (state = stateDefault, action) => {
// Tuy nhiên ESLint sẽ báo lỗi ko cho export ẩn danh

const ToDoListReducer = (state = stateDefault, action) => {
  // console.log('Object.is(state , stateDefault):', Object.is(state , stateDefault))
  // Tại sao lần loop thứ 2 đã false ?

  const taskList = [...state.taskList];
  state = { ...state };
  state.taskList = taskList;
  console.log('action:', action);

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

    case DONE_TASK: {
      //Click vào button check => dispatch lên action có taskID
      // let taskListUpdate = [...state.taskList];
      //Từ task id tìm ra task đó ở vị trí nào trong mảng tiến hành cập nhật lại thuộc tính done = true. Và cập nhật lại state của redux
      let index = taskList.findIndex((task) => task.id === action.taskId);
      if (index !== -1) {
        taskList[index].done = true;
      }
      //   Ở đây cũng có thể dùng map trực tiếp và so sánh bên trong luôn
      // state.taskList = taskListUpdate;
      // return { ...state, taskList: taskListUpdate }
      return state;
    }

    case DELETE_TASK: {
      // let taskListUpdate = [...state.taskList];
      // //Gán lại giá trị cho mang taskListUpdate = chính nó nhưng filter không có taskId đó
      // taskListUpdate = taskListUpdate.filter(task => task.id !== action.taskId);

      // return {...state,taskList:taskListUpdate}

      // Vì taskList là const nên ko reassign vậy được mà phải tạo copy lần nữa, gán lại attribute
      //   taskList = state.taskList.filter((task) => task.id !== action.taskId);
      return {
        ...state,
        taskList: taskList.filter((task) => task.id !== action.taskId),
      };
    }

    case EDIT_TASK: {
      return { ...state, taskEdit: action.task };
    }

    case UPDATE_TASK: {
      // console.log(action.taskName)
      //Chỉnh sửa lại taskName của taskEdit
      // state.taskEdit = { ...state.taskEdit, taskName: action.taskName };
      state.taskEdit.taskName = action.taskName;

      // Chú ý taskEdit hiện tại ko deepCopy nhưng bản thân obj state kèm tham chiếu của arr đã bị thay đổi -> đã có sự thay đổi sẵn nên chắc chắn sẽ render lại (chỉ cần 1 tham chiếu nested bên trong thay đổi là đủ)
      // Nếu destruct primitive thì value giống nhau nên ko tính)

      // obj.taskEdit ở đây giống biến temp, đúng ra vẫn phải deepCopy nhưng vì temp nên chỉnh sửa, tham chiếu edit copy loạn xạ luôn

      // let taskListUpdate = [...state.taskList];
      let index = taskList.findIndex((task) => task.id === state.taskEdit.id);

      console.log(index);

      if (index !== -1) {
        taskList[index] = state.taskEdit;
      }

      // state.taskList = taskListUpdate;

      return state;
    }

    default:
      return state;
  }
};

export default ToDoListReducer;

// TODO -> chuyển done thành undone
