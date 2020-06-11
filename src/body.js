import React,{useState} from 'react';
import './light.css';
import './App.css';




function Body() {

    let [light,setLight]= useState('OFF');
    return (
      <div className={`App ${light==='ON' ? 'ONlight' : ' '}`}>

        
       
         Light Status = {light==='ON' ? 'On' : 'Off'}

         <button onClick={() => setLight('ON')}>ON</button>
         <button onClick={()=> setLight('OFF')}>OFF</button>
         
       
      </div>
    );
  }
  
  export default Body;
  