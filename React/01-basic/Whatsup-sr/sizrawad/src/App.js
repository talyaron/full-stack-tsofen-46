import React from 'react';
import './App.css';

import {Search} from './view/componets/Search/search';
import Cards from './view/componets/Cards/cards'


const message = [
  { name: 'sizar', img: 'https://cdn.getyourguide.com/img/tour/5c73fd9be1c30.jpeg/146.jpg' ,massege:'hi' }, 
  { name: 'rawad', img: 'https://2.bp.blogspot.com/-vvv-lJoFGMU/WPRrp0S6qaI/AAAAAAAAQCY/dRIwqy9jLs8ZnOm8kOox4VASvC_iL1vkwCLcB/s1600/inlgnz30.jpg' ,massege:'bye'},
   { name: 'tal', img: 'https://cdn.getyourguide.com/img/tour/5c73fd9be1c30.jpeg/146.jpg',massege:'ok' },
   { name: 'omri', img: 'https://www.football.org.il/ImageServer/GetImage.ashx?type=2&id=2941&width=240&height=305',massege:'رد' }

  ]


function App() {
  return (
    <div className="whatsup">
      <div id="searchnav">
     <img src="data:image/png;base64,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" alt="" />
     <Search  />
     </div>
     <div className='whats-wrapper'>
         {
           message.map((whatsItem,index) =>{
             return <Cards key={index} whatsItem={whatsItem} />
           })
         }
     </div>
      
    </div>
  );
}

export default App;
