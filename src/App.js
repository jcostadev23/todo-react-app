import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Todocos } from './components/Todocos';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Todocos />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;

