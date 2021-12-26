import React from 'react';

export default function XucXac(props) {
  let { hinhAnh, ma } = props.xucXacItem;
  return (
    // Fragment là dạng thẻ rỗng, có thể viết tắt như dưới
    // https://reactjs.org/docs/fragments.html
    // https://reactjs.org/docs/fragments.html#keyed-fragments
    // key is the only attribute that can be passed to Fragment. 
    <>
      <img className="ml-3" style={{ width: 50 }} src={hinhAnh} alt={ma} />
    </>
  );
}
