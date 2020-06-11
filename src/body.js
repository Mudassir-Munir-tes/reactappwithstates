import React,{useState} from 'react';
import OFF from './light.css';
import ON from './light.css';


function Body() {

    let [light,setLight]= useState("OFF");
    return (
      <div className="App ${light=='OFF' ? 'OFF' : 'ON'}">

        
       
         Light Status = light[0]

         <button onClick={() => setLight("ON")}>ON</button>
         <button onClick={()=> setLight("OFF")}>OFF</button>
         
       
      </div>
    );
  }
  
  export default Body;
  