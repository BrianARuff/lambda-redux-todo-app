export const CREATE_TODO = "CREATE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";

export const createTodo = (value) => {
  console.log('create action');
  return {
    type: CREATE_TODO,
    payload: {
      id: null,
      completed: null,
      value: value
    }
  }
}

export const updateTodo = (todo) => {
  return {
    type: UPDATE_TODO,
    payload: todo 
  }
}