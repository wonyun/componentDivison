import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

var components = [];
for (var i=0; i< 5000;i++){
  components.push({id: i, text: 'Todo Item #' + i});
}
ReactDOM.render(
  <App initailItems={components}/>,
  document.getElementById('root')
);
