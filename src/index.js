import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};


const element = (
  <div>
    <h1>
    Hello, {formatName(user)}!
  </h1>
  <h2>It is {new Date().toLocaleTimeString()}.</h2>
  </div>
  
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
//  root.render(element);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
