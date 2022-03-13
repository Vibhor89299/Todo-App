import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import login_page from './components/Login_page'
import {Routes , Route} from 'react-router-dom'
import TodoList from './components/TodoList';


render(
  <BrowserRouter>
    
    <App/>
  </BrowserRouter>,
  
  document.getElementById('root')
);

