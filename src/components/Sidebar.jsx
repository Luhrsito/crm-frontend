import React from "react";
import "./sidebar.css";

export default function Sidebar({onNavigate}){
 return(
  <aside className="sidebar">
   <h2>CRM</h2>
   <nav>
    <a onClick={()=>onNavigate("dashboard")}>Dashboard</a>
    <a onClick={()=>onNavigate("columns")}>Columnas</a>
    <a onClick={()=>onNavigate("events")}>Eventos</a>
    <a onClick={()=>onNavigate("campaigns")}>Campañas</a>
    <a onClick={()=>onNavigate("reports")}>Reportes</a>
   </nav>
  </aside>
 );
}
