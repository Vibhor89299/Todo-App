import React from 'react';
import { Route,  } from 'react-router-dom';
import './App.css';
import Login_page from './components/Login_page';
import TodoList from './components/TodoList';


function App() {
  return (
    <div className='todo-app'>  
      <TodoList/>
    </div>
    
  );
}

export default App;
