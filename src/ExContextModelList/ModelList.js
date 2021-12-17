import React, { Component } from 'react';
import ModelItem from './ModelItem';
import { ExModelListContext } from '../ContextDemo/_Context/ExModelListContext';

export default class ModelList extends Component {
  render() {
    console.log('===modelList loaded===');
    // Chỉ những phần bọc trong Consummer - kết nối vào store mới bị setState re-render
    return (
      <div>
        <h3>Danh sách idol</h3>

        <ExModelListContext.Consumer>
          {(value) => {
            // console.log(value);
            console.log('Consumer ModelList loaded')
            // Value ở đây gồm state chung và method ĐN trong Provider - local reducer
            return (
              <div className="row">
                {value.modelListState.map((model, index) => {
                  return (
                    <div className="col-3" key={index}>
                      <ModelItem modelItem={model} />
                    </div>
                  );
                })}
              </div>
            );
          }}
        </ExModelListContext.Consumer>
      </div>
    );
  }
}

// Nếu sử dụng nhiều Provider khác nhau sẽ dẫn tới mô hình pyramid !!
// So ov71i redux thì tiện hơn vì gọi trực tiếp vào state cục thể
// reduxcer dispatch vào tất cả