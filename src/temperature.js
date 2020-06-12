import React,{useState} from 'react';
import './light.css';

import './App.css';

function Temperature() {

    let [temp,setTemp]= useState(72);
    return (
      <div className="App">

        
       
        <h3>Temperature of Room is = {temp} celsius!</h3> 
         <br></br>

         <button className="button1" onClick={() => setTemp(++temp)}>Increase Temperature</button><br></br>
         <br></br><button className="button1" onClick={()=> setTemp(--temp)}>Decrease Temperature</button>
         
       
      </div>
    );
  }
  
  export default Temperature;
  