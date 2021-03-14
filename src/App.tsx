import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';
import Dashboard from './Components/Dashboard/Dashboard';
import CreateFlyer from './Components/Modals/CreateFlyer';

const App:React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/Brokers" component={SignIn} />
        <Route path="/Signup" component={SignUp} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/create-flyer" component={CreateFlyer}/>
      </Switch>
    </Router>
  );
}

export default App;
