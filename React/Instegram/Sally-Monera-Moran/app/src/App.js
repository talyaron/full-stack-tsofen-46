import React from 'react';
import './App.css';
import {Instagram} from './view/components/Instagram/Instagram';
import {Story} from './view/components/Story/Story'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
  
} from "react-router-dom";

/* 
function App() {


  return (
    <div className="container">
      <div className="stories">
      {
        stories.map((story,index)=>{
          return(<InstStory key={index} story={story}/>)
        })
      }
      </div>

      <div className="feeds">
      {
        feeds.map((feed,index)=>{
          return(<InstaFeed key={index} feed={feed}/>)
        })
      }
      </div>


    </div>
  );
}



export default App; */



export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            
            <li>
              <Link to="/Instagram">Instagram</Link>
            </li>

            <li>
              <Link to="/Story">Story</Link>
            </li>
          
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
       
          <Route path="/Story">
          < Story/>
          </Route>

          <Route path="/">
          < Instagram/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


