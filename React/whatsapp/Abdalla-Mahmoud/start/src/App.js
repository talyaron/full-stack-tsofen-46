import React, { useEffect, useState } from 'react';
import './App.css';



import Chat from './Chat/Chat';


// const news = [
//   { text: 'Mahmoud', img: 'https://i.pinimg.com/474x/ff/03/1b/ff031b94de044e48d770fbb9d81baf3b.jpg' , chat:'hello whatsapp' }, 
//   { text: 'Abdullah', img: 'https://i.pinimg.com/236x/a6/83/c5/a683c5ee05d93db6299aa1fdd471472e.jpg',chat:' wenk ya zlme ' },
//    { text: 'Yosef', img: 'https://i.pinimg.com/474x/74/42/d4/7442d4fd0ba23b42f275ba98a702b22d.jpg', chat: ' g3an ? ' },
//    { text: 'Marshood', img: 'https://i.pinimg.com/474x/74/42/d4/7442d4fd0ba23b42f275ba98a702b22d.jpg', chat: ' How are you? ' },

//   ]




// function App() {
//   return (
//     <div className="App">
//     <h1>Chat </h1>
//     <input id='input' placeholder="SEARCH"></input>
//     {/* <input placeholder='search'>  </input> */}
//     <div className='news-wrapper'>
//         {
//           news.map((newsItem, index) => {
//             return <Chat key={index} newsItem={newsItem} />
//           })

//         }

//       </div>
//     </div>
//   );
// }
function App() {
  const [news, setNews] = useState([]);


  useEffect(() => {

    fetch('/api/news')
      .then(res => res.json())
      .then(data => {

        setNews(data);
      })


  }, [])

  return (
    <div className="App">
      <h1>Chat </h1>
      <input id='input' placeholder="SEARCH"></input>
      {/* <input placeholder='search'>  </input> */}
      <div className='news-wrapper'>
        {
          news.map((newsItem, index) => {
            return <Chat key={index} newsItem={newsItem} />
          })

        }

      </div></div>


  );


}



export default App;