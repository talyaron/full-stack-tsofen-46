import React, {useState}from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";

import './App.css';

export default function App() {
  const [cnt2, setCnt2] = useState(0)
  console.log('app....');
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
          <button onClick={()=>{setCnt2(cnt2+1)}}>Counting {cnt2}</button>
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
  console.log('home')
  return (
    <div className='page'>
      <h2>Home</h2>
    </div>
  )
}

function About() {
  console.log('about')
  let history = useHistory();
  const [counter, setCounter] = useState(0);
 
  console.log('counter:',counter)
  
  return (
    <div className='page'>
      <h1>{counter}</h1>
      <button onClick={()=>setCounter(counter+1)}>Count+</button>
      <h2>About</h2>
      <div onClick={()=>{
        history.push('/')
      }}>Go to home</div>
    </div>
  )
}

function Users() {
  console.log('users')
  return (
    <div className='page'>
      <h2>Users</h2>
      <Link to="/about"><div>Go to about</div></Link>
    </div>
  )
}