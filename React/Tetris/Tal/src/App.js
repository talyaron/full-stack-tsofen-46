import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';

//components
import Box from './view/components/Box/Box';

const candies = [
  'https://lh3.googleusercontent.com/proxy/kAULm9SbGHEVDRCaoDI_e7T4EwA48YqARle0ACgYFUi1Jk7z6r_jDcUcTYAZAkCAq67p84Xun-h-i8T-04xw8KgccLdUM5ybpeSo7Dz5cDxTa_hYyAZ8iSgOauB8s_AtbkyDFI8',
  'https://images-na.ssl-images-amazon.com/images/I/71WDXCkJ9BL._SL1044_.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Candy-Corn.jpg/250px-Candy-Corn.jpg',
  'https://i.pinimg.com/originals/ee/b4/ce/eeb4cef1d99926096674fc669d69be1c.jpg'
]

function App() {

  const [boxes, setBoxes] = useState([]);

  return (
    <div>

      <header>
        {candies.map((candy, index) => {
          return <Box key={index} img={candy} location={index} boxes={boxes} setBoxes={setBoxes} />
        })}
      </header>
      <div className='wrapper'>
        {
          boxes.map((box, index) => {
            
           

            let empties =[];
            for (let i=0; i<box.location; i++){
              empties.push('a')
            }
           
            console.log(empties)

            return (
              <div className='row'>
                {
                  empties.map((emp, index)=>{
                    return(<div key={index+'aa'} ></div>)
                  })
                }
                <img src={box.img} />
              </div>
            )
          })
        }

      </div>
    </div>



  );
}



export default App;
