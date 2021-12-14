import React, { Component } from 'react';

export default class Modal extends Component {
  /**
   * Note thêm về modal BS vì React là single page
   * Vị trí đặt modal ko quan trọng,
   * miễn là khi React router tới thì có Comp Modal
   * Tuy nhiên vi trí đặt sẽ ảnh hưởng tới độ phức tạp của code
   * Việc truyền state dễ khó bị ảnh hưởng
   */

  /**
   * State của modal được truyền qua button click gọi modal (gọi callback setState)
   * Nên state phải đặt ở cha hoặc nởi chứa button gọi modal
   */
  render() {


    let {name, img} = this.props.content
    return (
      <div>
        {/* b4-modal-default */}
        {/* <!-- Button trigger modal có 2 thuộc tính  data-toggle, data-target dùng để gán vào button gọi modal
            -> html 2 jsx
        --> */}

        {/* <!-- Modal --> */}
        <div
          className="modal fade"
          id="modelCarStore"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{name}</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <img style={{ width: '100%' }} src={img} />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
