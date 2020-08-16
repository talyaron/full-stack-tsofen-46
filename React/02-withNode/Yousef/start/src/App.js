import React, { useState } from 'react';
import './App.css';

import Comments from './view/components/Comments/Comments'

function App() {

  const [commentList, setCommentList] = useState([]);
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Enter Your Comment' name='name'></input>
        <input type='submit' value='Ok'></input>
      </form>
      <p>Comments:</p>
      <div>
        {
          commentList.map((newItem, index) => {
            return <Comments key={index} newItem={newItem} />
          })

        }
      </div>
    </div>
  );

  function handleSubmit(e) {
    e.preventDefault();
    const { name } = e.target.elements;
    setCommentList([...commentList, name.value]);
  }
}



export default App;
