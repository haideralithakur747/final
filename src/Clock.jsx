import { useEffect ,useState } from "react";
// import "./App.css";
function Clock({ color }) {
const [time ,setTime]= useState(0)

useEffect(()=>{
    setInterval(()=>{
        setTime(new Date().toLocaleTimeString())
    }, 1000)
})

return (
<div >

<h2 style={{color : color,border :"1px solid green",width:"135px",padding:"10px",textAlign:"center",justifyContent:"center",alignItems:"center",backgroundColor:"black"}}>
     {time}</h2>
</div>
)
}

export default Clock;
