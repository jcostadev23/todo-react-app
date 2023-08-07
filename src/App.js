import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PremiumTodos } from './components/PremiumTodos';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<PremiumTodos />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;

