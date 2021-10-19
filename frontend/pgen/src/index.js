import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Bomdia from './components/bomdia'
import Counter from './components/counter'

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Counter />
    <Bomdia>João</Bomdia>
  </React.StrictMode>,
  document.getElementById('root')
);

