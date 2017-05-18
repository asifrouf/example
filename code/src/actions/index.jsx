let nextTodoId = 0;

export const addTodo = text => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text,
  };
};

export const setVisibilityFilter = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter,
  };
};

export const setUsers = users => ({ type: 'SET_USERS', users });

export const callToAPI = () => {
  return dispatch => {
    fetch('https://jsonplaceholder.typicode.com/users')
         .then(users => {
           console.log('User fetch : ', users);

           dispatch(setUsers(users));
         });
  };
};

export const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    id,
  };
};
