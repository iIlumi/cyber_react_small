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


  render() {
    return (
      <ExModelListContext.Provider
        value={{
          modelListState: this.state.modelListState,
        //   setActiveModel: this.setActiveModel,
        }}
      >
        {this.props.children}
      </ExModelListContext.Provider>
    );
  }
}
