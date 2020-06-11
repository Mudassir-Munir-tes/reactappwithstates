import React,{useState} from 'react';
import './light.css';
import './App.css';




function Body() {

    let [light,setLight]= useState(false);
    return (
      <div className={`App${light ? 'ONlight' : ' '}`}>

        
       
         Light Status = {light? 'On' : 'Off'}

         <button onClick={() => setLight(true)}>ON</button>
         <button onClick={()=> setLight(false)}>OFF</button>
         
       
      </div>
    );
  }
  
  export default Body;
  