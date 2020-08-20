import React from 'react';
// import logo from './logo.svg';
import './App.css';

//components
import { Nav, Footer } from './view/components/Nav/Nav';
import Button from './view/components/Button/Button';
import Card from './view/components/Card/Card';


const name = 'Nivin';
const UIObj = [
  { label: 'week1', tasks: [1, 2, 3, 4], maxLength: 9 },
  { label: 'week2', tasks: [1, 2, 3, 4, 5, 6], maxLength: 9 },
  { label: 'week3', tasks: [1, 2], maxLength: 9 },
  { label: 'week4', tasks: [], maxLength: 9 },
  { label: 'week5', tasks: [1, 2, 3, 4, 5, 6, 7, 8, 9], maxLength: 9 },

];

function App() {


  return (
    <div className='page'>
      <div className='chart'>
        {
          UIObj.map((column, index) => {

            return (
              <div className='chart__column' style={{
                height: `${(column.tasks.length / column.maxLength) * 100}%`,
                width: `${(1 / UIObj.length) * 90}%`
              }}>
                <div key={index + 'col'} className='chart__innerColumn' >
                  {column.tasks.length>0?column.tasks.length:null}
                </div>
                <div className='chart__label'>
                  {column.label}
                </div>
              </div>
            )
          })
        }
      </div>
    </div>



  );


}



export default App;
