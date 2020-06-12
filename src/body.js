import React,{useState} from 'react';
import './light.css';
import './App.css';
import Temperature from './temperature.js';




function Body() {

    let [light,setLight]= useState('OFF');
    return (
      <div className={`App ${light==='ON' ? 'ONlight' : 'offlight'}`}>

        
       
         <h3>Light Status = {light==='ON' ? 'On' : 'Off'}</h3>
         <br></br>

         <button className="button" onClick={() => setLight('ON')}>ON</button><br></br><br></br>
         <button className="button" onClick={()=> setLight('OFF')}>OFF</button>
         
       <Temperature />
      </div>
    );
  }
  
  export default Body;
  