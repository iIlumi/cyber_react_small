import React from 'react';

export default function DemoDice() {
  return (
    // Css tĩnh tạo dice
    // Khi vừa load trang có hiệu ứng là do phần css ở phía trên trong Bầu cua ảnh hưởng
    // Thứ tự các html tag ko quan trọng
    <div id="demo_dice">
      <div className="scene">
        <div className="cube">
          <div className="cube__face cube__face--back">back</div>
          <div className="cube__face cube__face--front">front</div>
          <div className="cube__face cube__face--right">right</div>
          <div className="cube__face cube__face--left">left</div>
          <div className="cube__face cube__face--top">top</div>
          <div className="cube__face cube__face--bottom">bottom</div>
        </div>
      </div>
    </div>
  );
}
