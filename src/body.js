import React,{useState} from 'react';
import './light.css';
import './App.css';
//import OFFlight from './light.css';
//import ONlight from './light';



function Body() {

    let [light,setLight]= useState('OFF');
    return (
      <div className={`App${light==="OFF"? "OFFlight" : "ONlight"}`}>

        
       
         Light Status = {light==="OFF"? "OFFlight" : "ONlight"}

         <button onClick={() => setLight('ON')}>ON</button>
         <button onClick={()=> setLight('OFF')}>OFF</button>
         
       
      </div>
    );
  }
  
  export default Body;
  