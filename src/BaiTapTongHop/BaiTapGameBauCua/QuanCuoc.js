import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSpring, animated } from 'react-spring';

// Nhận props từ cha (cha nhận ừ reducer)
export default function QuanCuoc(props) {
  // useDispatch snippet
  // Tuy truyền hàm rỗng nhưng vẫn phải khai báo hooks
  const dispatch = useDispatch();
  const [stateIncrease, setSpringIncrease] = useState(true);
  const [stateDecrease, setSpringDecrease] = useState(true);

  const { quanCuoc } = props;
  const { hinhAnh, diemCuoc, ma } = quanCuoc;

// eslint-disable-next-line
  const [oldUseSpringIncrease, oldSetIncrease] = useSpring(() => {
    return {
      to: { scale: 1.25 },
      from: { scale: 1 },
      reset: true,
    };
  });
  // Cách xài trong bản React-Spring v8 cũ

  // const {scale} = useSpring({
  //   x: state ? 1 : 0,
  //   scale:{
  //     range: [0, 0.25, 0.5,0.75, 1],
  //     output: [1, 1.25, 1, 0.75, 1],
  //   },
  //   config: { duration: 1000 },
  // });


    // config: { duration: 1000 },

  const springIncreaseStart = useSpring({
    x: stateIncrease ? 1 : 0,
  });

  const springDecreaseStart = useSpring({
    x: stateDecrease ? 1 : 0,
  });

  console.log('quan cuoc render')
  
  return (
    <div className="mt-3 ">
      <img src={hinhAnh} style={{ width: 250 }} alt={ma} />

      <div
        className="bg-success mt-2 pb-2 text-center"
        style={{ borderRadius: '10px', width: 250 }}
      >
        <animated.button
          // style={{
          //   transform: propsUseSpringInCrease.scale.to(
          //     (scale) => `scale(${scale})`
          //   ),
          // }}
          style={{
            scale: springIncreaseStart.x.to(
              [0, 0.25, 0.5, 0.75, 1],
              [1, 1.25, 1, 0.75, 1]
            ),
          }}
          onClick={() => {
            setSpringIncrease(!stateIncrease);

            // Nếu làm theo trong clip thì set 2 lần + reset true
            // setInCrease({ scale: 1 })
            // setInCrease({ scale: 1.25 })
            dispatch({
              type: 'DAT_CUOC_BAU_CUA',
              quanCuoc,
              tangGiam: true,
            });
          }}
          className="btn btn-danger mr-3"
        >
          <i className="fa fa-plus"></i>
        </animated.button>
        <span className="mt-2" style={{ color: 'yellow', fontSize: 25 }}>
          {diemCuoc}
        </span>
        <animated.button
          style={{
            scale: springDecreaseStart.x.to(
              [0, 0.25, 0.5, 0.75, 1],
              [1, 1.25, 1, 0.75, 1]
            ),
          }}
          onClick={() => {
            setSpringDecrease(!stateDecrease);

            dispatch({
              type: 'DAT_CUOC_BAU_CUA',
              quanCuoc,
              tangGiam: false,
            });
          }}
          className="btn btn-danger ml-3"
        >
          -
        </animated.button>
      </div>
    </div>
  );
}

/**
 * TODO
 * Hiện tại sẽ làm tạm vẫy trước
 * Keyframe ko hoàn chỉnh -> lần 1 là zoom to ra trước
 * Click lần 2 thì zoom nhỏ trước
 * Eff trên giao diện sẽ thấy rõ ràng ko mượt
 * Có thể tinh chỉnh theo demo nhưng vẫn là fake
 * -> ý tưởng là setState nhưng scale thì ko liên quan nhưng khi đó lại ko re-render
 * Có copy lại demo trên web -> playground qua file đó test
 * https://react-spring.io/basics#emulating-css-keyframes
 * 
 * 
  https://stackoverflow.com/questions/59101839/how-to-re-animate-react-spring-animation-using-hooks-on-button-click
  https://codesandbox.io/s/upbeat-kilby-ez7jy
 */

