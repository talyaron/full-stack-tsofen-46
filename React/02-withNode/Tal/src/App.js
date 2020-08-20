import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

//components
import { Nav, Footer } from './view/components/Nav/Nav';
import Button from './view/components/Button/Button';
import Card from './view/components/Card/Card';


const name22 = 'Nivin';
// const news = [
//   { text: 'not so intresting news', img: 'https://cdn.getyourguide.com/img/tour/5c73fd9be1c30.jpeg/146.jpg' }, 
//   { text: 'very intresting news', img: 'https://2.bp.blogspot.com/-vvv-lJoFGMU/WPRrp0S6qaI/AAAAAAAAQCY/dRIwqy9jLs8ZnOm8kOox4VASvC_iL1vkwCLcB/s1600/inlgnz30.jpg' },
//    { text: 'very very intresting news!!!!!!', img: 'https://cdn.getyourguide.com/img/tour/5c73fd9be1c30.jpeg/146.jpg' },
//    { text: 'not so intresting news', img: 'https://cdn.getyourguide.com/img/tour/5c73fd9be1c30.jpeg/146.jpg' },
//    { text: 'not so intresting news', img: 'https://cdn.getyourguide.com/img/tour/5c73fd9be1c30.jpeg/146.jpg' },
//    { text: 'not so intresting news', img: 'https://cdn.getyourguide.com/img/tour/5c73fd9be1c30.jpeg/146.jpg' },
//    { text: 'not so intresting news', img: 'https://cdn.getyourguide.com/img/tour/5c73fd9be1c30.jpeg/146.jpg' },
//    { text: 'not so intresting news', img: 'https://cdn.getyourguide.com/img/tour/5c73fd9be1c30.jpeg/146.jpg' }
//   ]



function App() {


  //creating a state for news (with setter of state)
  const [news, setNews] = useState([]);
  const [counter, setCounter] = useState(0);
  const [randomNumber, setRandomNumber] = useState(0);
  const [input, setInput] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('')

  //call only on first time the component loads
  useEffect(() => {
   
      fetch('/api/news')
        .then(res => res.json())
        .then(data => {
          console.log(data)
          
          //set state (news)
          setNews(data);
        })
   

  }, [])

  return (
    <div>
      <button onClick={handleClick}><img src={logo} />OK</button>
      
      <p>Random: {randomNumber}</p>

      <input type='text' placeholder='stam' onChange={handleInput} />
      <p>Output: {input}</p>

      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='name' name='name' />
        <input type='text' placeholder='password' name='password' />
        <input type='submit' value='OK' />
      </form>
      <p>Name: {name}: Password:{password}</p>

      <p><button onClick={()=>{handleCounter(3)}}>+1</button><span>{counter}</span></p>
      <Nav name={name} year={1999} />
      <h1>{name22}</h1>
      <input type='text' />
      <Button />
      <div className='news-wrapper'>
        {
          news.map((newsItem, index) => {
            return <Card key={index} newsItem={newsItem} />
          })

        }
      </div>
      <Footer name="Nimer" />
    </div>



  );

  function handleCounter(add){
    setCounter(counter + add)
  }

  function handleClick(e){
    setRandomNumber(Math.random());
  
  }

  function handleInput(e){
    console.dir(e)
    setInput(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault();

    let {name, password} = e.target.elements;
    setName(name.value);
    setPassword(password.value);

   
  }
}



export default App;
