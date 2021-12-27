import React, { useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

export default function XucXac(props) {
  let { hinhAnh } = props.xucXacItem;

  // =======================================

  // const [propsDice, set] = useSpring(() => {
  //   console.log('propsDice:');
  //   return {
  //     to: {
  //       xyz: [1800, 1800, 1800],
  //     },
  //     from: {
  //       xyz: [0, 0, 0],
  //     },
  //     config: {
  //       duration: 1000,
  //     },
  //     reset: true,
  //   };
  // });


  // set.start({
  //   to: {
  //     xyz: [1800, 1800, 1800],
  //   },
  // });
  //=======================
  // 1800/360 = 5 vòng
  //   Vấn đề set bị tương tự nút click

  // =======================================
  // https://react-spring.io/hooks/use-spring#either-overwrite-values-to-change-the-animation
  // Temp fix for click another animation
  // -> ko viết dạng callBack mà viết thành obj thẳng, dựa vào việc comp - rerender khi props đổi mà load lại animation theo
  // If you re-render the component with changed props, the animation will update.

  const propsDice = useSpring({
    to: {
      xyz: [1800, 1800, 1800],
    },
    from: {
      xyz: [0, 0, 0],
    },
    config: {
      duration: 1000,
    },
    reset: true,
  });

  /**
   * Khi state thay đổi vì thao tác đặt được (nhưng chưa play)
   * -> return obj state mới -> kéo theo state danhSachXucXac -> props XucXac
   * -> useSpring đang viết theo kiểu sẽ run lại khi component render -> xúc xác xoay nhưng ko đổi mặt
   * -> vì co reset bằng true nên cứ click là xoay
   * -> Thiết lập state để ko kéo toàn ứng dụng render ?
   * Hoặc dùng memo ?
   */
  console.log('xuc xac render');

  return (
    // Fragment là dạng thẻ rỗng, có thể viết tắt như dưới
    // https://reactjs.org/docs/fragments.console.log('html:', html)
    // https://reactjs.org/docs/fragments.html#keyed-fragments
    // key is the only attribute that can be passed to Fragment.
    <>
      <div className="scene ml-5">
        <animated.div
          className="cube"
          style={{
            transform: propsDice.xyz.to(
              (x, y, z) =>
                `translateZ(-25px) rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`
            ),
          }}
        >
          <div className="cube__face front">
            <img
              // className="ml-3 "
              style={{ width: '100%' }}
              src={hinhAnh}
              alt="front"
            />
          </div>
          <div className="cube__face back">
            <img
              // className="ml-3 "
              style={{ width: '100%' }}
              src="./img/BaiTapGameBauCua/bau.png"
              alt="back"
            />
          </div>
          <div className="cube__face left">
            <img
              // className="ml-3 "
              style={{ width: '100%' }}
              src="./img/BaiTapGameBauCua/ga.png"
              alt="left"
            />
          </div>
          <div className="cube__face right">
            <img
              // className="ml-3 "
              style={{ width: '100%' }}
              src="./img/BaiTapGameBauCua/ca.png"
              alt="right"
            />
          </div>
          <div className="cube__face top">
            <img
              // className="ml-3 "
              style={{ width: '100%' }}
              src="./img/BaiTapGameBauCua/tom.png"
              alt="top"
            />
          </div>
          <div className="cube__face bottom">
            <img
              // className="ml-3 "
              style={{ width: '100%' }}
              src="./img/BaiTapGameBauCua/nai.png"
              alt="bottom"
            />
          </div>
        </animated.div>
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

  https://stackoverflow.com/questions/59101839/how-to-re-animate-react-spring-animation-using-hooks-on-button-click
  https://codesandbox.io/s/upbeat-kilby-ez7jy
 */
