import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import PremiumTodos from './components/Premium';
import { withAuthenticator } from '@aws-amplify/ui-react';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<PremiumTodos/>}/>
        </Routes> 
      </Router>   
    </div>  
  );
}

export default withAuthenticator(App);

