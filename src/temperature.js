import React,{useState} from 'react';

import './App.css';

function Temperature() {

    let [temp,setTemp]= useState(72);
    return (
      <div className="App">

        
       
         Temperature of Room is = {temp} celsius!

         <button onClick={() => setTemp(++temp)}>Increase Temperature</button><br></br>
         <button onClick={()=> setLight(--temp)}>Decrease Temperature</button>
         
       
      </div>
    );
  }
  
  export default Temperature;
  