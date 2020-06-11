import React,{useState} from 'react';
import OFF from './light.css';
import ON from './light.css';


function Body() {
    return (
      <div className="App ${light=='OFF' ? 'OFF' : 'ON'}">

          let [light,setLight]= useState('OFF');
       
         Light Status = light

         <button onClick={() => setLight('ON')}>ON</button>
         <button onClick={()=> setLight('OFF')}>OFF</button>
         
       
      </div>
    );
  }
  
  export default Body;
  