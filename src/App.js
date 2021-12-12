import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavbarRoot from './component/NavbartRoot/NavbarRoot';
import Home from './pages/Home/Home';
import DataBindingDemo from './component/DataBinding/DataBindingDemo';
import HandleEvent from './HandleEvent/HandleEvent';
import BaiTapChonXe from './BaiTapChonXe/BaiTapChonXe';
import BaiTapRenderFilms from './BaiTapRenderFilms/BaiTapRenderFilms';
import BaiTapThuKinh from './BaiTapThuKinh/BaiTapThuKinh';

function App() {
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


        {/* demo */}
      </Switch>
      <hr />
      <NavbarRoot />
    </BrowserRouter>
  );
}

export default App;
