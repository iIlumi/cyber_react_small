import React, { Component } from 'react';
import ProductList from '../../Props/ProductList';
// import w3s from './w3.module.css';
// Style vẫn ăn vào toàn bộ ? -> react-helmet
import dataJson from '../../Data/dataProductDemo.json';
// https://www.pluralsight.com/guides/how-to-create-single-page-reactjs-page-app-different-css-each-view
import { Helmet } from 'react-helmet';

export default class ProductDemo extends Component {
  render() {
    return (
      // helmet link có /> ở cuối tag , khác tag link bình thường
      <div className="container-fluid">
        <Helmet>
          <link
            rel="stylesheet"
            href="https://www.w3schools.com/w3css/4/w3.css"
          />
        </Helmet>
        <div className="row">
          <div className="col-4">
            {/* b4-nav-tabspill  -> vertical pill -> html 2 jsx*/}
            {/* https://getbootstrap.com/docs/4.0/components/navs/#using-data-attributes */}
            <div
              className="nav flex-column nav-pills justify-content-center"
              style={{ minHeight: 400 }}
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              <a
                className="nav-link active"
                id="home"
                data-toggle="pill"
                href="#home-pill"
                role="tab"
                aria-controls="home-pill"
                aria-selected="true"
              >
                Home
              </a>
              <a
                className="nav-link"
                id="shop"
                data-toggle="pill"
                href="#shop-pill"
                role="tab"
                aria-controls="shop-pill"
                aria-selected="false"
              >
                Shop
              </a>
            </div>
          </div>
          <div className="productList col-8">
            <h4>Product demo</h4>
            <div className="tab-content" id="v-pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="home-pill"
                role="tabpanel"
                aria-labelledby="home"
              >
                <h5>Home content</h5>
                <p>
                  Bỏ strict mode đi khi đưa Product list vô đây vì bị warning
                  khi console.log
                </p>
                <ProductList arrProduct={dataJson} />
              </div>
              <div
                className="tab-pane fade"
                id="shop-pill"
                role="tabpanel"
                aria-labelledby="shop"
              >
                Shop content
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
