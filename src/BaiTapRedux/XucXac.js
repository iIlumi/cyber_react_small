// rcredux -> snippet
import React, { Component } from 'react';
import { connect } from 'react-redux';

export class XucXac extends Component {
  renderXucXac = () => {
    return this.props.mangXucXac.map((xucXac, index) => {
      return (
        <img
          key={index}
          className="ml-2"
          style={{ width: 50, height: 50 }}
          src={xucXac.hinhAnh}
          alt={xucXac.ma}
        />
      );
    });
  };

  render() {
    return <div>{this.renderXucXac()}</div>;
  }
}
// Vì ( {}  ) là dạng arrow shorthand return thẳng trong ()
// const mapStateToProps = (state) => ({
//   mangXucXac: state.BaiTapGameXucXacReducer.mangXucXac,
// });

const mapStateToProps = (state) => {
  const { mangXucXac } = state.BaiTapGameXucXacReducer;
  return { mangXucXac };
};

export default connect(mapStateToProps)(XucXac);
