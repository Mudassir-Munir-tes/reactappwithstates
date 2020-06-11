import React,{useState} from 'react';
import './light.css';
import './App.css';
//import OFFlight from './light.css';
//import ONlight from './light';



function Body() {

    let [light,setLight]= useState(true);
    return (
      <div className={`App${light? "OFFlight" : "ONlight"}`}>

        
       
         Light Status = {light};

         <button onClick={() => setLight(true)}>ON</button>
         <button onClick={()=> setLight(false)}>OFF</button>
         
       
      </div>
    );
  }
  
  export default Body;
  