import './App.css';
import { Nav, Home, Profile, CreateMatch, Teams, Login } from './components';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav/>
          <div class="nav-space"></div>
          <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/profile" exact component={Profile}/>
              <Route path="/createMatch" exact component={CreateMatch}/>
              <Route path="/teams" exact component={Teams}/>
              <Route path="/login" exact component={Login}/>
            </Switch>
        </header>
      </div>
    </Router>

  );
}

export default App;
