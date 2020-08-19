import React, { useState } from 'react'
import "./Tetris.css"
import icon1 from "../../../assets/candy.png"
import icon2 from "../../../assets/candy1.png"
import icon3 from "../../../assets/candy2.png"
import icon4 from "../../../assets/candy3.png"

export function Tetris(props) {

    const [counter, setCounter] = useState(0);

    function myCell(x, y) {
        console.log(x, y);
        let table = document.getElementById("mainWrapper");
        let row = table.insertRow(1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        if (y === 1) {
            cell1.innerHTML = `<img src=${icon1}></img>`;
        }
        if (y === 2) {
            cell2.innerHTML = `<img src=${icon2}></img>`;
        }
        if (y === 3) {
            cell3.innerHTML = `<img src=${icon3}></img>`;
        }
        if (y === 4) {
            cell4.innerHTML = `<img src=${icon4}></img>`;
        }
        // else if(y==2)
        // cell2.innerHtml=x;
        // else if(y==3)
        // cell3.innerHtml=x;
        // else(y==4)
        // cell4.innerHtml=x;
    }

    return (
        <div>
            <table id="mainWrapper">
                <tr className="th">
                    <td><button onClick={(img, index) => myCell(icon1, 1)} id="icon1" setCounter={setCounter} counter={counter} className="icons">  <img src={icon1}></img></button></td>
                    <td><button id="icon2" onClick={(img, index) => myCell(icon2, 2)} setCounter={setCounter} counter={counter} className="icons">  <img src={icon2}></img></button></td>
                    <td><button id="icon3" onClick={(img, index) => myCell(icon3, 3)} setCounter={setCounter} counter={counter} className="icons">  <img src={icon3}></img></button></td>
                    <td><button id="icon4" onClick={(img, index) => myCell(icon4, 4)} setCounter={setCounter} counter={counter} className="icons">  <img src={icon4}></img></button></td>
                </tr>
            </table>
        </div>
    )




}