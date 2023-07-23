import React from 'react';
import 'tailwindcss/tailwind.css';
import ListTodos from './components/TodoList';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Premium from './components/Premium';

function App() {
  return (
    <div>
      <Router>
        <div className="nav-container bg-white rounded shadow p-4 ">
          <NavLink activeclassname='active' to='/' exact='true'
          className="py-2 px-4 text-gray-500 hover:text-gray-900">Home </NavLink>
          <NavLink activeclassname='active' to='../premium' exact='true'
          className="py-2 px-4 text-gray-500 hover:text-gray-900">Premium</NavLink>
        </div>
        <Routes>
          <Route path='/' element={<ListTodos/>}></Route>
          <Route path='/premium' element={<Premium/>}/>
        </Routes> 
      </Router>   
    </div>  
  );
}

export default App;

