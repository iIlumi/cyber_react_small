import React, { Component } from 'react';

export default class ParentRefDemo extends Component {
  state = {
    title: 'Parent Ref Tile',
  };

  changeTitle = () => {
    this.setState({
      title: 'Title changed',
    });
  };
  
  // Ăn gian es6 title:title -> title
  changeTitleWPara = (title) => {
    this.setState({
      title,
    });
  };

  render() {
    return (
      <div>
        <h1 className="text-primary text-center">{this.state.title}</h1>
        <hr></hr>
        {/* Gọi kiểu dưới sẽ gọi tất cả children ra
        Check React dev tool sẽ thấy các props đi kèm dạng mảng
        */}
        {/* {this.props.children} */}
        {this.props.children[1]}
        {/*
        {this.props.children.map((comp, index) => {
          return comp;
        })}
        */}
      </div>
    );
  }
}
