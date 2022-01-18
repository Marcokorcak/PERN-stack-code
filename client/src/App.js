import './App.css';
import React, {Fragment, useState} from 'react';


//components

import InputTodo from './components/InputTodo';
import listTodos from './components/ListTodos';

function App() {
  return (
    <Fragment>
      <div className = "container">
      <InputTodo />
      <listTodos />
      </div>
       </Fragment>
  );
}

export default App;
