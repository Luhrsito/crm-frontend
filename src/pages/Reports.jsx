import React,{useEffect,useState} from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import { Chart as ChartJS,CategoryScale,LinearScale,BarElement,ArcElement,Tooltip,Legend } from "chart.js";
ChartJS.register(CategoryScale,LinearScale,BarElement,ArcElement,Tooltip,Legend);

export default function Reports(){
 const [stats,setStats]=useState(null);

 useEffect(()=>{
  fetch(`${import.meta.env.VITE_API_URL}/api/reports/stats`)
   .then(r=>r.json()).then(setStats);
 },[]);

 if(!stats) return <p>Cargando...</p>;

 return(
  <div className="grid">
   <div className="card">
    <Bar data={{
      labels:["Conversaciones","Activas","Humanas"],
      datasets:[{label:"Estado",data:[stats.conversations,stats.actives,stats.human]}]
    }}/>
   </div>

   <div className="card">
    <Doughnut data={{
      labels:["Conversaciones","Activas","Humanas"],
      datasets:[{data:[stats.conversations,stats.actives,stats.human]}]
    }}/>
   </div>
  </div>
 );
}
