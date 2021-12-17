import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Nếu gọi trực tiếp Prouct demo và console log prop thì có TH bị log 2 lần
// Fix bằng cách bỏ tag StricMode bọc ngoài

// setup redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './redux/reducer/rootReducer';

const store = createStore(rootReducer);

/**
 * https://github.com/zalmoxisus/redux-devtools-extension
 * In case ESLint is configured to not allow using the underscore dangle, wrap it like so:
 * Tạm thời chưa dùng liền
 * ext của chorme
 * chạy trên ff / các trình duyệt khác sẽ bị lỗi
 */

// const store = createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  /**
   * no strict mode
   */
  // <App />,
  /**
   * Using redux
   */
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
