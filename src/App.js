import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavbarRoot from './component/NavbarRoot/NavbarRoot';
import Home from './pages/Home/Home';
import DataBindingDemo from './component/DataBinding/DataBindingDemo';
import HandleEvent from './HandleEvent/HandleEvent';
import BaiTapChonXe from './BaiTapChonXe/BaiTapChonXe';
import BaiTapRenderFilms from './BaiTapRenderFilms/BaiTapRenderFilms';
import BaiTapThuKinh from './BaiTapThuKinh/BaiTapThuKinh';
import BaiTapChonXeNangCao from './BaiTapChonXeNangCao/BaiTapChonXeNangCao';
import ProductDemo from './pages/ProductDemo/ProductDemo';
import DanhSachSanPham from './Props/DanhSachSanPham';
import ExerciseCarStore from './Props/ExerciseCarStore/ExerciseCarStore';
import DemoPropsChild from './Props/DemoPropsChild/DemoPropsChild';
import ExerciseCart from './Props/ExerciseCart/ExerciseCart';
import BaiTapGioHangRedux from './BaiTapGioHangRedux/BaiTapGioHangRedux';
import BaiTapGameXucXac from './BaiTapRedux/BaiTapGameXucXac';
import BaiTapOanTuXi from './BaiTapRedux/BaiTapOanTuXi/BaiTapOanTuXi';
import BaiTapBookingTicket from './BaiTapRedux/BaiTapBookingTicket/BaiTapBookingTicket';
import ExContextModelList from './ExContextModelList/ExContextModelList';
import UserProfile from './FormValidation/UserProfile/UserProfile';
import ToDoList from './JSS_StyledComponent/BaiTapStyleComponent/ToDoList/ToDoList';

function App() {
  // Nếu gọi trực tiếp Prouct demo và console log prop thì có TH bị log 2 lần
  // Fix bằng cách sửa trong index.js
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />

        <Route exact path="/databinding" component={DataBindingDemo} />
        <Route exact path="/handleevent" component={HandleEvent} />
        <Route exact path="/chonxebasic" component={BaiTapChonXe} />
        <Route exact path="/btrenderphim" component={BaiTapRenderFilms} />
        <Route exact path="/btthukinh" component={BaiTapThuKinh} />
        <Route exact path="/chonxeadv" component={BaiTapChonXeNangCao} />
        {/* Khóa 2 */}
        <Route exact path="/productdemo" component={ProductDemo} />
        <Route exact path="/propsfunctiondemo" component={DanhSachSanPham} />
        <Route exact path="/btcarstore" component={ExerciseCarStore} />
        <Route exact path="/demopropschild" component={DemoPropsChild} />
        <Route exact path="/btgiohang" component={ExerciseCart} />
        <Route exact path="/btgioredux" component={BaiTapGioHangRedux} />
        <Route exact path="/btxucxac" component={BaiTapGameXucXac} />
        <Route exact path="/bttuxi" component={BaiTapOanTuXi} />
        <Route exact path="/btdatve" component={BaiTapBookingTicket} />
        <Route exact path="/btcontext" component={ExContextModelList} />
        {/* Khóa 3 */}
        <Route exact path="/formvalidate" component={UserProfile} />
        <Route exact path="/todolist" component={ToDoList} />

        {/* demo */}
      </Switch>
      <hr />
      <NavbarRoot />
    </BrowserRouter>
  );
}

export default App;
