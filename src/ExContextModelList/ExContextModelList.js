import React, { Component } from 'react';
import ProfileModel from './ProfileModel';
import ModelList from './ModelList';
import ExModelListProvider from '../ContextDemo/_Provider/ExModelListProvider';

export default class ExContextModelList extends Component {
  // Bọc content ên trong lại giống như trong index.js
  render() {
    return (
      <ExModelListProvider>
        <div className="container">
          <ProfileModel />
          <ModelList />
        </div>
      </ExModelListProvider>
    );
  }
}
