import React,{useEffect,useState} from "react";
export default function Events(){
 const [e,setE]=useState([]);
 useEffect(()=>{fetch(`${import.meta.env.VITE_API_URL}/api/events`).then(r=>r.json()).then(setE)},[]);
 return(
  <div className="grid">
   {e.map(x=>(
    <div className="card" key={x.id}>
     <h3>{x.title}</h3>
     <span>{new Date(x.date)<new Date()?"Expirado":"Activo"}</span>
    </div>
   ))}
  </div>
 );
}
