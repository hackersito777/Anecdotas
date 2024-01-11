import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Anecdotas from './components/Anecdotas.jsx';


const App = () => {
  return (
    <Router>
    <Switch>

    <Route path="/" component={Anecdotas} />
    
    

    </Switch> 
    
     
    </Router>
  );
};

export default App;
