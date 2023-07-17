import React from 'react';
import 'tailwindcss/tailwind.css';
import ListTodos from './components/TodoList';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Premium from './components/Premium';

function App() {
  return (
    <div>
      <Router>
        <div className="bg-white justify-between rounded shadow p-4 w-full lg:w-3/4 lg:max-w-lg">
          <NavLink activeclassname='active' to='/'>Home </NavLink>
          <NavLink activeclassname='active' to='../premium'>Premium</NavLink>
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

