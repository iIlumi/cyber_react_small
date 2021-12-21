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
  };

  renderTaskToDo = () => {
    return this.props.taskList
      .filter((task) => !task.done)
      .map((task, index) => {
        return (
          <Tr key={index}>
            <Th style={{ verticalAlign: 'middle' }}>{task.taskName}</Th>
            <Th className="text-right">
              <Button className="ml-1">
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
          <Button className="ml-2">
            <i className="fa fa-upload"></i> Update task
          </Button>
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
}

const mapStateToProps = (state) => {
  const { themeToDoList, taskList } = state.ToDoListReducer;
  return { themeToDoList, taskList };
};

export default connect(mapStateToProps)(ToDoList);
