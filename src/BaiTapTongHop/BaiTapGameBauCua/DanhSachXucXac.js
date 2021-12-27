import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DemoDice from './DemoDice';
import DemoSpringButton from './DemoSpringButton';
import XucXac from './XucXac';
import XucXacSource from './XucXacSource';

export default function DanhSachXucXac() {
  // const { mangXucXac } = useSelector((state) => state.BaiTapGameBauCuaReducer);
  // ?? vì BaiTapGameBauCuaReducer thật sự là obj mới nhưng mangXucXac là obj deep bên trong, vấn đề tham chiếu phức tạp
  // An toàn thì ko nên destruc kiểu vậy
  // Viết theo cách trên khi destruct là luôn tạo 1 obj mới khác với state trên store
  // -> component sẽ luôn luôn render lại bất chấp, ko kiểm soát được liefcycle nữa

  // Viết cách dưới sẽ đảm bảo obj sinh ra cùng tham chiếu vùng nhớ với state trên store, chỉ bị thay đổi khi store deepcopy mangXucXac
  // XucXac item con sẽ render animation đúng mong đợi
  const mangXucXac = useSelector(
    (state) => state.BaiTapGameBauCuaReducer.mangXucXac
  );

  // ======================================================================
  // Ở đây là sẽ ko loop render mà sẽ gán trực tiếp vào layout luôn
  // Vì layout game ko phải dạng tuần tự cùng cấu trúc như bt

  const dispatch = useDispatch();
  console.log('danh sách xúc xắc render');
  return (
    <div className="mt-5 ml-5">
      <div
        className="bg-white"
        style={{ width: 300, height: 300, borderRadius: 150, paddingLeft: 10 }}
      >
        <div className="row">
          <div className="col-12 text-center" style={{ marginLeft: 75 }}>
            <XucXac xucXacItem={mangXucXac[0]} />
          </div>
        </div>
        <div className="row" style={{ marginTop: -20 }}>
          <div className="col-4 text-right">
            <XucXacSource xucXacItem={mangXucXac[1]} />
          </div>
          <div className="col-4 text-right">
            <XucXac xucXacItem={mangXucXac[2]} />
          </div>
        </div>
      </div>
      <div style={{ marginLeft: '20%', marginTop: '5%' }}>
        <button
          onClick={() => {
            dispatch({
              type: 'PLAY_GAME_BAU_CUA',
            });
          }}
          className="btn btn-success p2"
          style={{ fontSize: '25px' }}
        >
          Xốc
        </button>
      </div>
      <hr />
      <DemoSpringButton />
      <hr />
      <DemoDice />
    </div>
  );
}
