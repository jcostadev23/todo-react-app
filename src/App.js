import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import PremiumTodos from './components/Premium';
import { withAuthenticator } from '@aws-amplify/ui-react';
import './styles.css';

function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<PremiumTodos/>}/>
        </Routes> 
      </Router>   
  );
}

export default withAuthenticator(App);

