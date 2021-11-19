import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import StateContext from './StateProvider';

ReactDOM.render(
  <StateContext.Provider value='this is from index'>
  <App />
  </StateContext.Provider>

,
  document.getElementById('root')
);


