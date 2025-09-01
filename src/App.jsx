import { useState } from "react";

import Clock from "./Clock";
function App(){
  const [color,setColor]= useState("blue")
  return(
    <div> 
      <h1>Digital Clock</h1>
      <Clock color={color} />
      <select  onChange={(event) => setColor(event.target.value)} >
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="red">Red</option>
        <option value="yellow">Yellow</option>
        <option value="purple">Purple</option>
        <option value="pink">Pink</option>
        <option value="orange">Orange</option>
        <option value="brown">Brown</option>
        <option value="white">White</option>
      </select>
    </div>
  )
}
export default App;