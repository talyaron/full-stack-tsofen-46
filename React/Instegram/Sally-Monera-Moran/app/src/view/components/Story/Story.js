import React from 'react';
import './Story.css';


export function Story(){
    const img='';

    fetch('/getUserStory')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if (data[0].success) {
           img=data[1];

        }
        else {
            alert("Try Again..")
        }

        // const{success[0],doc
    })


    return(
        <div>
       <h4>Hii guys</h4>
       </div>
    )




}

// export default Story;