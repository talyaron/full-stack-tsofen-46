import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";

import './App.css';

export default function App() {
  return (
    <Router>
      <div className='app'>
        {/* location of nav... it is not a must */}
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className='page'>
      <h2>Home</h2>
    </div>
  )
}

function About() {
  let history = useHistory();

  return (
    <div className='page'>
      <h2>About</h2>
      <div onClick={()=>{
        history.push('/')
      }}>Go to home</div>
    </div>
  )
}

function Users() {
  return (
    <div className='page'>
      <h2>Users</h2>
      <Link to="/about"><div>Go to about</div></Link>
    </div>
  )
}