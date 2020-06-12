import React,{useState} from 'react';
import './light.css';
import './App.css';
import Temperatur from './Temperature.js'




function Body() {

    let [light,setLight]= useState('OFF');
    return (
      <div className={`App ${light==='ON' ? 'ONlight' : 'offlight'}`}>

        
       
         Light Status = {light==='ON' ? 'On' : 'Off'}

         <button onClick={() => setLight('ON')}>ON</button><br></br>
         <button onClick={()=> setLight('OFF')}>OFF</button>
         
       <Temperature />
      </div>
    );
  }
  
  export default Body;
  