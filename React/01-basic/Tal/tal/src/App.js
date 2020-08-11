import React from 'react';
// import logo from './logo.svg';
import './App.css';

//components
import { Nav, Footer } from './view/components/Nav/Nav';
import Button from './view/components/Button/Button';
import Card from './view/components/Card/Card';


const name = 'Nivin';
const news = [
  { text: 'not so intresting news', img: 'https://cdn.getyourguide.com/img/tour/5c73fd9be1c30.jpeg/146.jpg' }, 
  { text: 'very intresting news', img: 'https://2.bp.blogspot.com/-vvv-lJoFGMU/WPRrp0S6qaI/AAAAAAAAQCY/dRIwqy9jLs8ZnOm8kOox4VASvC_iL1vkwCLcB/s1600/inlgnz30.jpg' },
   { text: 'very very intresting news!!!!!!', img: 'https://cdn.getyourguide.com/img/tour/5c73fd9be1c30.jpeg/146.jpg' },
   { text: 'not so intresting news', img: 'https://cdn.getyourguide.com/img/tour/5c73fd9be1c30.jpeg/146.jpg' },
   { text: 'not so intresting news', img: 'https://cdn.getyourguide.com/img/tour/5c73fd9be1c30.jpeg/146.jpg' },
   { text: 'not so intresting news', img: 'https://cdn.getyourguide.com/img/tour/5c73fd9be1c30.jpeg/146.jpg' },
   { text: 'not so intresting news', img: 'https://cdn.getyourguide.com/img/tour/5c73fd9be1c30.jpeg/146.jpg' },
   { text: 'not so intresting news', img: 'https://cdn.getyourguide.com/img/tour/5c73fd9be1c30.jpeg/146.jpg' }
  ]

function App() {


  return (
    <div>
      <Nav name={name} year={1999} />
      <h1>{name}</h1>
      <input type='text' />
      <Button style={{}} />
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
}



export default App;
