import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Nếu gọi trực tiếp Prouct demo và console log prop thì có TH bị log 2 lần
// Fix bằng cách bỏ tag StricMode bọc ngoài

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // <App />.

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
