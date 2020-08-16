import React from 'react' ;
import './Output.css';

 function Output(props) {
    const {sValue} = props;

    console.log(sValue);
 return(
 <div className="Resultcontainer">
   <img id="imgField" src={sValue.userImage} alt='' />
    <p id="usernameField">{sValue.username}</p>
    <div id="userHistory">user History</div>
  
 </div>

    
    )
 }

 export default Output;