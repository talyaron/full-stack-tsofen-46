import React, { useState, useEffect } from 'react';
//import logo from './logo.svg';
import './App.css';
import Comments from './view/components/Comments/Comments';


function App() {

    const [commensList, setCommentsList] = useState([]);

    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='ENTER TEXT' name='text'></input>
                <input type='submit' value='OK'></input>
            </form>
            <p>comments: </p>
            <div className='comments-wrapper'>
                {
                    commensList.map((elem, index) => {
                        return <Comments key = {index} item = {elem}></Comments>
                    })

                }
            </div>
        </div>
    );

    function handleSubmit(e) {
        e.preventDefault();
        const { text } = e.target.elements;
        console.log(text)
        console.log(commensList)
        setCommentsList([...commensList, text.value]);

        // document.getElementsByClassName('comment').style.color = 'black'

    }
}

export default App;
