import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { PremiumTodos } from './components/PremiumTodos';
import  Premium  from './components/Premium'
import { Button } from "./components/Button";

function App() {

  return (
      <Router>
        <Routes>
          <Route path='/' element={<PremiumTodos/>}/>
          <Route path='/Premium' element={<Premium/>}/>
        </Routes> 
        <Link to='/premium'>
            <Button
              label='SignIn'/>
          </Link>
      </Router>   
  );
}

export default App;

