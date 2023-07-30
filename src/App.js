import React from 'react';
import 'tailwindcss/tailwind.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Premium from './components/Premium';
import { withAuthenticator } from '@aws-amplify/ui-react';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Premium/>}/>
        </Routes> 
      </Router>   
    </div>  
  );
}

export default withAuthenticator(App);

