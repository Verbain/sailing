import './App.css';
import { Nav, Home, Profile, CreateMatch, Teams, Login, Loading } from './components';
import ProtectedRoute from './auth/protected-route';
import { useAuth0 } from "@auth0/auth0-react";

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  const { isLoading } = useAuth0();
  if (isLoading){
    return <Loading/>;
  }
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav/>
          <div class="nav-space"></div>
          <Switch>
              <Route path="/" exact component={Home}/>
              <ProtectedRoute path="/profile" exact component={Profile}/>
              <ProtectedRoute path="/createMatch" exact component={CreateMatch}/>
              <ProtectedRoute path="/teams" exact component={Teams}/>
              <Route path="/login" exact component={Login}/>
            </Switch>
        </header>
      </div>
    </Router>

  );
}

export default App;
