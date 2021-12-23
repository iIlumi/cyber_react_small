import React from 'react';

export default function DemoReduxApp() {

  const handleChange = (e) => {
    let { value, name } = e.target;
    console.log('value, name :', value, name);
  };
  
  const handleComment = (e) => {
    e.preventDefault(); //Chăn browser reload

    console.log('click submit');
  };

  return (
    <div className="container">
      <h3>Fakebook App!</h3>
      <div className="card text-left">
        <form className="card-body" onSubmit={handleComment}>
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
