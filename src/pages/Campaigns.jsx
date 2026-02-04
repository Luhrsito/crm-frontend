import React,{useEffect,useState} from "react";
export default function Campaigns(){
 const [c,setC]=useState([]);
 useEffect(()=>{fetch(`${import.meta.env.VITE_API_URL}/api/campaigns`).then(r=>r.json()).then(setC)},[]);
 return(
  <div className="grid">
   {c.map(x=>(
    <div className="card" key={x.id}>
     <h3>{x.name}</h3>
     <progress value={x.sent} max={x.total}/>
     <p>{Math.round(x.sent/x.total*100)}%</p>
    </div>
   ))}
  </div>
 );
}
