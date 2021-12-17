import React, { Component } from 'react';
import ModelItem from './ModelItem';
import { ExModelListContext } from '../ContextDemo/_Context/ExModelListContext';

export default class ModelList extends Component {
  render() {
    console.log('modelList loaded');
    return (
      <div>
        <h3>Danh sách idol</h3>

        <ExModelListContext.Consumer>
          {(value) => {
            console.log(value);
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
