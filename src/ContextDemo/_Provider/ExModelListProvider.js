import React, { Component } from 'react';
import { ExModelListContext } from '../_Context/ExModelListContext';
import modelListState from '../../Data/dataContextModel.json';

export default class ExModelListProvider extends Component {
  // Khỏi tạo ~ reducer chung cho local store,
  // 1 store có thể kết nối nhiều reducer
  // Bản thân store đã đóng vai trò gom lại các reducer
  // CHính xác hơn là dùng reducer nào thì quăng vô
  state = {
    modelListState,
  };

  setActiveModel = (id) => {
    //So sánh với id được click
    let modelListStateUpdate = this.state.modelListState.map((model) => {
      if (model.id === id) {
        model.like += 1;
        model.active = true;
      } else {
        model.active = false;
      }
      // return { ...model };
      return model;
      //   Return model trực tiếp vẫn được vì tính chất setState sẽ render lại mọi React Component
      // Chỉ khi dùng với Pure Component thì mới phải tạo copy { ... state}
    });
    //Sau khi xử lý mảng cập nhật lại giá trị state để giao diện render lại
    this.setState({
      //   modelListState: modelListStateUpdate,
      modelListState: modelListStateUpdate,
    });
  };

  render() {
    return (
      <ExModelListContext.Provider
        value={{
          modelListState: this.state.modelListState,
          setActiveModel: this.setActiveModel,
        }}
      >
        {this.props.children}
      </ExModelListContext.Provider>
    );
  }
}
