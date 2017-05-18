import React from 'react';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import Footer from './Footer';
import Users from './Users';

const App = () => (
  <div>
    <Users />
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default App;
