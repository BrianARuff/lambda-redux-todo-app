import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import TodoList from './TodoList';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { todoReducer } from './reducers';
const store = createStore(todoReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <TodoList />
  </Provider>, 
  document.getElementById('root')
);
registerServiceWorker();
