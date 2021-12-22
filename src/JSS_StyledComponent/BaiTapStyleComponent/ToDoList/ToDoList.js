import React, { Component } from 'react';
import { ContainerToDo } from '../../ComponentsToDoList/ContainerToDoList';
import { ThemeProvider } from 'styled-components';
// import { ToDoListDarkTheme } from '../../Themes/ToDoListDarkTheme';
// import { ToDoListLightTheme } from '../../Themes/ToDoListLightTheme';
// import {ToDoListPrimaryTheme} from '../../Themes/ToDoListPrimaryTheme';
import { Dropdown } from '../../ComponentsToDoList/Dropdown';
import { Heading3 } from '../../ComponentsToDoList/Heading';
// Xài Heading nào import Heading đó tránh xuất hiện waring của ESLint
// Hoặc import hết thì dùng ESlint Disable next line cho tiện
// import {ToDoListLightTheme} from '../../Themes/ToDoListLightTheme';
import { TextField } from '../../ComponentsToDoList/TextField';
// Có thể add riêng Label và Input trong module textField để xài
// Nhưng cũng có thể ĐN jsx từ 2 moduel jss basic để cho gọn, đẩy restProps vào Input
import { Button } from '../../ComponentsToDoList/Button';
import { connect } from 'react-redux';
import {
  addTaskAction,
  changeThemeAction,
  deleteTaskAction,
  doneTaskAction,
  editTaskAction,
  updateTaskAction,
} from '../../../redux/actions/ToDoListActions';
import { arrTheme } from '../../../JSS_StyledComponent/Themes/ThemeManager';
import {
  Table,
  Tr,
  Th,
  Thead,
  Td, // eslint-disable-line
  Tbody, // eslint-disable-line
} from '../../ComponentsToDoList/Table';

class ToDoList extends Component {
  // Vì bài đơn giản chỉ có 1 field nên lược bỏ cấu trúc state tối đa
  //   State trong Component và state React khác nhau, khi dispatch sẽ tạo thêm trường
  state = {
    taskName: '',
    disabled: true,
  };

  renderTaskToDo = () => {
    return this.props.taskList
      .filter((task) => !task.done)
      .map((task, index) => {
        return (
          <Tr key={index}>
            <Th style={{ verticalAlign: 'middle' }}>{task.taskName}</Th>
            <Th className="text-right">
              <Button
                onClick={() => {
                  this.setState(
                    {
                      disabled: false,
                    },
                    () => {
                      this.props.dispatch(editTaskAction(task));
                    }
                  );
                  // vì tính chất bất đồng bộ nên khi để dispatch ở ngoài có thể gây lỗi render ngẫu nhiên ko kiểm soát được
                  // -> xử lý bằng cách đưa vào callback sau khi setState
                }}
                className="ml-1"
              >
                <i className="fa fa-edit"></i>
              </Button>
              <Button
                onClick={() => {
                  this.props.dispatch(doneTaskAction(task.id));
                }}
                className="ml-1"
              >
                <i className="fa fa-check"></i>
              </Button>
              <Button
                onClick={() => {
                  this.props.dispatch(deleteTaskAction(task.id));
                }}
                className="ml-1"
              >
                <i className="fa fa-trash"></i>
              </Button>
            </Th>
          </Tr>
        );
      });
  };

  renderTaskCompleted = () => {
    return this.props.taskList
      .filter((task) => task.done)
      .map((task, index) => {
        return (
          <Tr key={index}>
            <Th style={{ verticalAlign: 'middle' }}>{task.taskName}</Th>
            <Th className="text-right">
              <Button
                onClick={() => {
                  this.props.dispatch(deleteTaskAction(task.id));
                }}
                className="ml-1"
              >
                <i className="fa fa-trash"></i>
              </Button>
            </Th>
          </Tr>
        );
      });
  };

  //   Nhắc lại kiến thức form Validation
  //   https://reactjs.org/docs/react-component.html#setstate
  //   Sau khi setState thành công sẽ có 1 callBack được gọi
  // vì t/c bất đồng bộ nên muốn log thì truyền callback vào đây

  //   let {name,value} = e.target;
  // this.setState({
  //     [name]:value
  // })
  /**
   * ko dùng cú pháp tương tự formValidate được vì target ko có trường taskname mà chỉ có value, ko destruc được luôn
   */
  handleChange = (e) => {
    this.setState(
      {
        taskName: e.target.value,
      },
      () => {
        console.log('this.state in setState API:', this.state);
      }
    );
  };
  /**
   * Ở đây vì chỉ có 1 ô input nhập taskname nên sẽ viết inline cho gọn
   */

  //Viết hàm render theme import ThemeManger
  // https://styled-components.com/docs/faqs#why-am-i-getting-a-warning-about-several-instances-of-module-on-the-page
  renderTheme = () => {
    return arrTheme.map((theme, index) => {
      return (
        <option value={theme.id} key={index}>
          {theme.name}
        </option>
      );
    });
  };

  // Cách fix 1 version cu 16.3 về trước
  //Life cycle version 16 nhận vào props mới được thực thi trước render
  // componentWillReceiveProps(newProps) {
  //   console.log('this.props', this.props);
  //   console.log('newProps', newProps);
  //   this.setState({
  //     taskName: newProps.taskEdit.taskName,
  //   });
  // }
  // Kết hợp với việc chuyển value = {this.state.taskName}

  // Cách 2: - version 16.4 +
  // //Lifecycle tĩnh không truy xuất được trỏ this
  // static getDerivedStateFromProps(newProps, currentState) {
  //   //newProps: là props mới, props cũ là this.props (không truy xuất được)
  //   //currentState: ứng với state hiện tại this.state

  //   //hoặc trả về state mới (this.state)
  //   let newState = { ...currentState, taskName: newProps.taskEdit.taskName };
  //   return newState;

  //   //trả về null state giữ nguyên
  //   // return null;
  // }
  /**
   * Nếu quan sát kỹ sẽ thấy getDerivedStateFromProps xuất hiện cả sau khi setState, khác với willReceiveProps  -> lại loop -> ko thay thế dc ở TH này
   */

  render() {
    return (
      <ThemeProvider theme={this.props.themeToDoList}>
        <ContainerToDo className="w-50">
          <Dropdown
            onChange={(e) => {
              let { value } = e.target;
              //Dispatch value lên reducer

              this.props.dispatch(changeThemeAction(value));
            }}
          >
            {this.renderTheme()}
          </Dropdown>
          <Heading3>To do list</Heading3>
          <TextField
            value={
              this.state.taskName
              // this.props.taskEdit.taskName
              /**
               * dạng trên là binding data từ props từ store truyền vào
               * Khi gõ thì đồng thời onChange kick setState -> giao diện render lại -> lại lấy value từ store chưa được commit
               * Có thể bât callback trong setState để quan sát
               * -> Thực chất chỉ cần bind lại value của state hiện tại là OK
               * -> 1 dạng 2 way
               * Tuy nhiên cần phải can thiệt vào life cycle để đẩy props được redux (mapStatetoProps) vào va biến nó thành state
               */
            }
            onChange={(e) => {
              this.setState(
                {
                  taskName: e.target.value,
                }
                // , () => {
                //   console.log('this.state in setState API:', this.state);
                // }
              );

              //   this.handleChange(e);
              console.log('this.state in TextField onChange', this.state);
              // Log this state ở đây là sai vì setState bất đồng bộ
              // -> chưa up kịp
            }}
            label="Task name"
            className="w-50"
          />
          {/* // Trong add task thì đơn giản hơn là state Default render, 
            // ko làm nhiệm vụ toggle control như update task  */}
          {/* {this.state.disabled ? ( */}
          <Button
            onClick={() => {
              //Lấy thông tin người dùng nhập vào từ input
              let { taskName } = this.state;

              //Tạo ra 1 task object
              let newTask = {
                id: Date.now(),
                taskName,
                done: false,
              };

              // console.log(newTask)
              //   Log ở đây thì oK vì ko có async gì như setState
              // Tuy nhiên có thể log chặn cuối ở dispatch trước khi gửi như trong file ở redux action
              // Nếu muốn log khi redux nhận được hay chưa thì có thêm 2 vị trí,khi vừa load và sau khi switch
              //Đưa task object lên redux thông qua phương thức dispatch

              this.props.dispatch(addTaskAction(newTask));
            }}
            className="ml-2"
          >
            <i className="fa fa-plus"></i> Add task
          </Button>
          {/* ) : null} */}
          {/* Đúng ra là để nút button kèm class disable vô nhưng dup code, xấu UI */}
          {this.state.disabled ? (
            <Button
              disabled
              onClick={() => {
                // Có thể xử lý qua redux để reset field sau khi update thành rỗng
                // Nhưng rườm rà, ở đây ta lưu trước biến taskName riêng ra để dispatch nó, ko dính với taskName trong state nữa ! -> giá trị dispatch trước và sau khác nhau
                // Tuy nhiên id sẽ là id cũ -> tức là update rồi bị lưu id, ko update lần 2 được -> fix cách này bị lỗi logic ngầm
                let { taskName } = this.state;
                this.setState(
                  {
                    disabled: true,
                    taskName: '',
                  },
                  () => {
                    this.props.dispatch(updateTaskAction(taskName));
                  }
                );
              }}
              className="ml-2"
            >
              <i className="fa fa-upload"></i> Update task
            </Button>
          ) : (
            <Button
              onClick={() => {
                // Có thể xử lý qua redux để reset field sau khi update thành rỗng
                // Nhưng rườm rà, ở đây ta lưu trước biến taskName riêng ra để dispatch nó, ko dính với taskName trong state nữa ! -> giá trị dispatch trước và sau khác nhau
                let { taskName } = this.state;
                this.setState(
                  {
                    disabled: true,
                    taskName: '',
                  },
                  () => {
                    this.props.dispatch(updateTaskAction(taskName));
                  }
                );
              }}
              className="ml-2"
            >
              <i className="fa fa-upload"></i> Update task
            </Button>
          )}
          <hr />
          <Heading3>Task to do</Heading3>
          {/* verticalAlign trong css gốc để top sẵn, vì ko mu6o1n mod vào nên inline lại ở jsx */}
          <Table>
            <Thead>{this.renderTaskToDo()}</Thead>
          </Table>
          <Heading3>Task completed</Heading3>
          <Table>
            <Thead>{this.renderTaskCompleted()}</Thead>
          </Table>

          {/* ======================================= */}
          <hr />
          <Heading3 className="text-success">Static Task JSS</Heading3>

          <Table>
            <Thead>
              <Tr>
                <Th>Task name</Th>
                <Th>
                  <Button className="ml-1">
                    <i className="fa fa-edit"></i>
                  </Button>
                </Th>
              </Tr>
            </Thead>
          </Table>
          <Heading3 className="text-warning">Static Task CSS</Heading3>

          <table
            style={{
              color: '#fff',
              width: '100%',
              maxWidth: '100%',
              marginBottom: '1rem',
              backgroundColor: 'transparent',
              borderSpacing: '2px',
              borderColor: '#fff',
            }}
          >
            <thead
              style={{
                display: 'table-header-group',
                verticalAlign: 'middle',
                border: '1px solid #fff',
              }}
            >
              <tr
                style={{
                  display: 'table-row',
                  verticalAlign: 'inherit',
                  border: '1px solid #fff',
                }}
              >
                <th
                  style={{
                    textAlign: 'inherit',
                    borderTop: '1px solid #fff',
                    padding: '0.75rem',
                    verticalAlign: 'top',
                    borderBottom: '1px solid #fff',
                  }}
                >
                  Task name
                </th>
                <th
                  style={{
                    textAlign: 'inherit',
                    borderTop: '1px solid #fff',
                    padding: '0.75rem',
                    verticalAlign: 'top',
                    borderBottom: '1px solid #fff',
                  }}
                >
                  <button
                    className="ml-1"
                    style={{
                      backgroundColor: '#343a40',
                      color: '#fff',
                      border: '1px solid #fff',
                      padding: '0.25em 0.5em',
                      transition: 'all .5s',
                      fontSize: '17px',
                    }}
                  >
                    <i className="fa fa-edit"></i>
                  </button>
                </th>
              </tr>
            </thead>
          </table>
        </ContainerToDo>
      </ThemeProvider>
    );
  }

  // Vấn đề hiện tại là ta phải setProps vào state được
  //Đây là lifecycle trả về props cũ và state cũ của component trước khi render (lifecycle này chạy sau render)
  componentDidUpdate(prevProps, prevState) {
    //So sánh nếu như props trước đó (taskEdit trước mà khác taskEdit hiện tại thì mình mới setState)
    // console.log("didUpdate")
    // this.setState({
    //   taskName: this.props.taskEdit.taskName,
    // });
    // Gọi trực tiếp như trên sẽ gây ra loop vô tận -> phải set điều kiện
    // Thực chất khi vừa mount, chưa vô chế độ edit thì ô input chưa biết phải đổ props nào(do redux connect) vào state (lúc này mới mount xong)
    // Ở đây ta tham chiếu qua id của task vì vậy cần sinh id unique, ko nên dùng index vì có thể bị thay đổi do pagination, delete task
    // Sau lần render đầu tiên, can thiệp vào lifeCycle và check ĐK, đổ 1 lần duy nhất

    // Redux State to Component State !!
    if (prevProps.taskEdit.id !== this.props.taskEdit.id) {
      this.setState({
        taskName: this.props.taskEdit.taskName,
      });
    }
  }
  // Ở đây nếu muốn reset Update hoặc lấy lại giá trị cũ sẽ ko được vì tính chất life cycle đang sử dụng vì cùng id
  // Fix bằng cách để id trong lifeCycle thành -1
}

// 1 cách cuối nữa là chuyển state local vào redux luôn -> stateless

const mapStateToProps = (state) => {
  const { themeToDoList, taskList, taskEdit } = state.ToDoListReducer;
  return { themeToDoList, taskList, taskEdit };
};

export default connect(mapStateToProps)(ToDoList);
