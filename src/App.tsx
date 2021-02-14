import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';

const App:React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/Brokers" component={SignIn} />
        <Route path="/Signup" component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;
