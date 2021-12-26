import React from 'react';

export default function XucXac(props) {
  let { hinhAnh } = props.xucXacItem;
  return (
    // Fragment là dạng thẻ rỗng, có thể viết tắt như dưới
    // https://reactjs.org/docs/fragments.html
    // https://reactjs.org/docs/fragments.html#keyed-fragments
    // key is the only attribute that can be passed to Fragment.
    <>
      <div className="scene">
        <div className="cube">
          <img
            className="ml-3 cube__face front"
            style={{ width: 50 }}
            src={hinhAnh}
            alt="front"
          />
          <img
            className="ml-3 cube__face back"
            style={{ width: 50 }}
            src="./img/BaiTapGameBauCua/bau.png"
            alt="back"
          />
          <img
            className="ml-3 cube__face left"
            style={{ width: 50 }}
            src="./img/BaiTapGameBauCua/ga.png"
            alt="left"
          />
          <img
            className="ml-3 cube__face right"
            style={{ width: 50 }}
            src="./img/BaiTapGameBauCua/ca.png"
            alt="right"
          />
          <img
            className="ml-3 cube__face front"
            style={{ width: 50 }}
            src="./img/BaiTapGameBauCua/tom.png"
            alt="front"
          />
          <img
            className="ml-3 cube__face front"
            style={{ width: 50 }}
            src="./img/BaiTapGameBauCua/nai.png"
            alt="front"
          />
        </div>
      </div>
    </>
  );
}

/**
 *  Set up lại tương tự demo
  Thứ tự các html tag ko quan trọng
  Xúc xác có 5 mặt thì mặt front sẽ do mangXucXac random
  5 mặt còn lại có thể set cứng đại và chấp nhận có TH bị trùng
  Hoặc chịu khó chỉnh thuật toán để xử lý, ở đây set cứng luôn
 */
