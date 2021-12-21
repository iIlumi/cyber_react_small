import React, { Component } from 'react';
import { ContainerToDo } from '../../ComponentsToDoList/ContainerToDoList';
import { ThemeProvider } from 'styled-components';
import { ToDoListDarkTheme } from '../../Themes/ToDoListDarkTheme';
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
import {
  Table,
  Tr,
  Th,
  Thead,
  Td,
  Tbody,
} from '../../ComponentsToDoList/Table';
export default class ToDoList extends Component {
  render() {
    return (
      <ThemeProvider theme={ToDoListDarkTheme}>
        <ContainerToDo className="w-50">
          <Dropdown>
            <option>Dark theme</option>
            <option>Light theme</option>
            <option>Primary theme</option>
          </Dropdown>
          <Heading3>To do list</Heading3>
          <TextField label="Task name" className="w-50" />
          <Button className="ml-2">
            <i className="fa fa-plus"></i> Add task
          </Button>
          <Button className="ml-2">
            <i className="fa fa-upload"></i> Update task
          </Button>
          <hr />
          <Heading3>Task to do</Heading3>
          {/* verticalAlign trong css gốc để top sẵn, vì ko mu6o1n mod vào nên inline lại ở jsx */}
          <Table>
            <Thead>
              <Tr>
                <Th style={{ verticalAlign: 'middle' }}>Task name</Th>
                <Th className="text-right">
                  <Button className="ml-1">
                    <i className="fa fa-edit"></i>
                  </Button>
                  <Button className="ml-1">
                    <i className="fa fa-check"></i>
                  </Button>
                  <Button className="ml-1">
                    <i className="fa fa-trash"></i>
                  </Button>
                </Th>
              </Tr>
              <Tr>
                <Th style={{ verticalAlign: 'middle' }}>Task name</Th>
                <Th className="text-right">
                  <Button className="ml-1">
                    <i className="fa fa-edit"></i>
                  </Button>
                  <Button className="ml-1">
                    <i className="fa fa-check"></i>
                  </Button>
                  <Button className="ml-1">
                    <i className="fa fa-trash"></i>
                  </Button>
                </Th>
              </Tr>
            </Thead>
          </Table>
          <Heading3>Task completed</Heading3>
          <Table>
            <Thead>
              <Tr>
                <Th style={{ verticalAlign: 'middle' }}>Task name</Th>
                <Th className="text-right">
                  <Button className="ml-1">
                    <i className="fa fa-trash"></i>
                  </Button>
                </Th>
              </Tr>
              <Tr>
                <Th style={{ verticalAlign: 'middle' }}>Task name</Th>
                <Th className="text-right">
                  <Button className="ml-1">
                    <i className="fa fa-trash"></i>
                  </Button>
                </Th>
              </Tr>
            </Thead>
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
