import React from 'react';
import { Route,  } from 'react-router-dom';
import './App.css';
import Login_page from './components/Login_page';
import TodoList from './components/TodoList';


function App() {
  return (
    <div className='todo-app'>
      
      
      <div className='Login_button'>
      
        <button type='button'> login </button>
        
        </div>  
      <TodoList/>
    </div>
    
  );
}

export default App;
