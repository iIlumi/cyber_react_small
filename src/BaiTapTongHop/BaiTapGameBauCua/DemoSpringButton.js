import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

export default function DemoSpringButton() {
  const [state, toggle] = useState(true);
  const { x } = useSpring({
    // from: { x: 0 },
    x: state ? 1 : 0,
    config: { duration: 1000 },
  });

  return (
    <animated.button
      onClick={() => {
        toggle(!state);
      }}
      style={{
        scale: x.to({
          range: [0, 0.25, 0.5, 0.75, 1],
          output: [1, 1.25, 1, 0.75, 1],
        }),
      }}
    >
      click
    </animated.button>
  );
}

/**
 * 
 * Source gốc từ docs:
 * https://codesandbox.io/s/github/pmndrs/react-spring/tree/master/demo/src/sandboxes/css-keyframes?file=/src/App.tsx:640-655
 * https://react-spring.io/hooks/use-spring
 * -> có thể lên trang đó test cũng ok
 * 
 * Cách viết hiện tại đang áp dụng cách viết shorthand cho props
 * https://react-spring.io/basics#shorthand-style-props
 * -> ko phải convert về string như v8 ở link docs dưới (demo cùng version)
 * 
 * https://react-spring.io/basics#emulating-css-keyframes
 * docs v9 nhưng demo kiểu cũ v8 
 * tuy nhiên viết lại trên sandbox thì ko thấy khác biệt
 * 
 * 
 * Việc interpolate là bắt buộc vì phải truyền giá trị động vào css
 * Spring ko phải là magic, vẫn phải define dạng gần với css
 * Spring chỉ giúp hỗ trợ phần js đi kèm css
 * Tuy nhiên cú pháp khá dị chưa nắm được
 *
 * 
 * Tìm cách tóm gọn 2 ma trận keyfram và value tương ứng truyền vào là ok
 * Làm theo kiểu clip set scale cuối là state ?
 * Cẩn thận async -> trong clip a Khải bypass vụ này
 * Hoặc phối hợp useChain để control kỹ bước zoom ra vô
 * -> ko hiểu tại sao lại bị reverse ki chạy
 *
 *
 * useSpring hiện tại cũng ko control thêm bất cứ yếu tố nào
 * Thử reset, reverse tinh chỉnh qua các thông số chạy:
 *
 * 
 * https://react-spring.io/common/props
 * https://react-spring.io/basics
 * 
 */
