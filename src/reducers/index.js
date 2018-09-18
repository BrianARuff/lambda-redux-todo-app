import {CREATE_TODO, UPDATE_TODO} from '../actions';

let id = 0;

const incrementID = () => {
  return id += 1;
}

export const todoReducer = (state = [], action) => {
  switch(action.type) {
    case CREATE_TODO:
      incrementID();
      action.payload.id = id;
      action.payload.completed = false;
      return [...state, {...action.payload}];
    case UPDATE_TODO:
      return [...state].map(todo => {
        if(todo.id === action.payload.id) {
          todo.completed = !todo.completed;
          return todo;
        } else {
          return todo;
        }
      });
    default: 
      return [...state];
  }
}