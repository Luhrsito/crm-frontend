import React,{useEffect,useState} from "react";

export default function Dashboard(){
 const [s,setS]=useState(null);
 useEffect(()=>{
  fetch("http://localhost:4000/api/reports/stats")
   .then(r=>r.json()).then(setS);
 },[]);
 if(!s) return <h3>Cargando...</h3>;

 return(
  <div className="grid">
   <div className="card"><span>Conversaciones</span><strong>{s.conversations}</strong></div>
   <div className="card"><span>Activas</span><strong>{s.actives}</strong></div>
   <div className="card"><span>Humanas</span><strong>{s.human}</strong></div>
  </div>
 );
}
