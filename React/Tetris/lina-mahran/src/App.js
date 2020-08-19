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
    <Box number={1} />
    <Box number={2} />
    <Box number={3} />
    <Box number={4} />
    <Box number={5} />
    <Box number={6} />
    <Box number={7} />
    <Box number={8} />
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
