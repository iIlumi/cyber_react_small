import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCommentAction } from '../redux/actions/FakeBookActions';
// redux -> snippet
// import { connect, useDispatch, useSelector } from 'react-redux'
// Ngoài ra redux còn cung cấp thêm 2 hooks khác

export default function DemoReduxApp(props) {
  // useSelector thay cho mapstatetoprops
  // Lấy comments trong state của store vào biến comments
  let comments = useSelector((state) => state.FakeBookReducer.comments);

  //Lấy hàm dispatch từ useDispatch => để gửi giá trị lên reducer (thay thế cho mapDispatchToProp hoặc this.props.dispatch)
  let dispatch = useDispatch();

  //Lấy thông tin người dùng nhập vào
  let [userComment, setUserComment] = useState({
    name: '',
    content: '',
    avatar: '',
  });

  console.log('re-render w new userComment:', userComment);
  // Mỗi lần gõ -> useSetState mới -> re-render toàn bộ !! kèm log

  const handleChange = (e) => {
    let { value, name } = e.target;
    // Khác với setState trong class auto merge với giá trị cũ
    // useState của rfc ko lưu mà phải tự destruct giá trị cũ
    setUserComment({
      ...userComment,
      [name]: value,
    });
  };

  // TODO khi tạo newObj temp chờ dispatch thì reset trường nhập lại,
  // Tuy nhiên giữ nguyên avatar và name, chỉ reset comment
  const handleSubmit = (e) => {
    e.preventDefault(); //Chăn browser reload

    console.log('click submit');
    // Đặt us thay vì user để demo phân biệt
    let usComment = {
      ...userComment,
      avatar: `https://i.pravatar.cc/150?u=${userComment.name}`,
    };

    setUserComment({
      ...userComment,
      content: '',
    });
    // ko log sau setState được vì async
    // useEff , useRef, hoặc log lại sau khi re-render do useSetState

    // let action = {
    //     type:'add_comment',
    //     userComment : usComment
    // }
    dispatch(addCommentAction(usComment));
  };

  return (
    <div className="container">
      <h3>Fakebook App!</h3>
      <div className="card text-left">
        <div className="card-header">
          {/* Nếu dùng connectStateToProp thì sẽ là props.comments.map */}
          {comments.map((comment, index) => {
            return (
              <div className="row" key={index}>
                <div className="col-1">
                  <img
                    src={comment.avatar}
                    style={{ height: 60 }}
                    alt={comment.avatar}
                  />
                </div>
                <div className="col-10">
                  <h6 className="text-danger">{comment.name} </h6>
                  <p>{comment.content}</p>
                </div>
              </div>
            );
          })}
        </div>
        <form className="card-body" onSubmit={handleSubmit}>
          <div className="form-group">
            <h4 className="card-title">Name</h4>
            <input
              className="form-control"
              name="name"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <h4 className="card-title">Content</h4>
            <input
              className="form-control"
              name="content"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <button className="btn btn-success">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
}

// code dài hơn xíu nhưng perforamce vẫn ok, ko vấn đề

// const mapStateToProps = (state) => {
//     return  {
//         comments: state.FakeBookReducer.comments
//     }
// }

// export default connect(mapStateToProps)(DemoReduxApp)
