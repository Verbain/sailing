import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Profil from './components/Profil';
import CreateMatch from './components/CreateMatch';
import Teams from './components/Teams';
import Login from './components/Login';
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
              <Route path="/profil" exact component={Profil}/>
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
