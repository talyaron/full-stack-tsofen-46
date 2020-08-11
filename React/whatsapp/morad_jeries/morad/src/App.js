import React from 'react';
import {Head} from './view/components/head/Head';
import {Chat} from './view/components/Chats/Chats';

const chats = [
  { name : "morad" , text: 'not so intresting news', img: 'https://cdn.getyourguide.com/img/tour/5c73fd9be1c30.jpeg/146.jpg' }, 
  { name : "morad" , text: 'very intresting news', img: 'https://2.bp.blogspot.com/-vvv-lJoFGMU/WPRrp0S6qaI/AAAAAAAAQCY/dRIwqy9jLs8ZnOm8kOox4VASvC_iL1vkwCLcB/s1600/inlgnz30.jpg' },
   {name : "morad" , text: 'very very intresting news!!!!!!', img: 'https://cdn.getyourguide.com/img/tour/5c73fd9be1c30.jpeg/146.jpg' },
   { name : "morad" ,text: 'not so intresting news', img: 'https://cdn.getyourguide.com/img/tour/5c73fd9be1c30.jpeg/146.jpg' },
   { name : "morad" ,text: 'not so intresting news', img: 'https://cdn.getyourguide.com/img/tour/5c73fd9be1c30.jpeg/146.jpg' },
   { name : "morad" ,text: 'not so intresting news', img: 'https://cdn.getyourguide.com/img/tour/5c73fd9be1c30.jpeg/146.jpg' },
   {name : "morad" , text: 'not so intresting news', img: 'https://cdn.getyourguide.com/img/tour/5c73fd9be1c30.jpeg/146.jpg' },
   {name : "morad" , text: 'not so intresting news', img: 'https://cdn.getyourguide.com/img/tour/5c73fd9be1c30.jpeg/146.jpg' }
  ]

function App() {
  return (
    <div>
   <Head/>
   <div>
        {
          chats.map((chatItem, index) => {
            return <Chat key={index} chatsItem={chatItem} />
          })

        }
        </div>
        </div>
  );
}

export default App;
