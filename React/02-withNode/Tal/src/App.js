import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

//components
import { Nav, Footer } from './view/components/Nav/Nav';
import Button from './view/components/Button/Button';
import Card from './view/components/Card/Card';


const name = 'Nivin';
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

  const [news, setNews] = useState([]);
  const [counter, setCounter] = useState(0)

  
  useEffect(() => {
   
      fetch('/api/news')
        .then(res => res.json())
        .then(data => {
          console.log(data)
          setNews(data);
        })
   

  }, [])

  return (
    <div>
      <button><img src={logo} />OK</button>
      <p><button onClick={()=>{handleCounter(3)}}>+1</button><span>{counter}</span></p>
      <Nav name={name} year={1999} />
      <h1>{name}</h1>
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
}



export default App;
