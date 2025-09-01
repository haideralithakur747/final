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
      </select>
    </div>
  )
}
export default App;