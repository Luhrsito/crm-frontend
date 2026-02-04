import React,{useEffect,useState} from "react";
import {DndContext,closestCenter} from "@dnd-kit/core";
import {SortableContext,verticalListSortingStrategy,arrayMove,useSortable} from "@dnd-kit/sortable";
import {CSS} from "@dnd-kit/utilities";

function Item({id}){
 const {attributes,listeners,setNodeRef,transform,transition}=useSortable({id});
 const style={transform:CSS.Transform.toString(transform),transition};
 return <div ref={setNodeRef} style={style} {...attributes} {...listeners} className="kanban-item">{id}</div>;
}

export default function Columns(){
 const [cols,setCols]=useState({});
 useEffect(()=>{fetch("http://localhost:4000/api/columns").then(r=>r.json()).then(setCols)},[]);

 return(
  <div style={{display:"flex",gap:20}}>
   {Object.keys(cols).map(col=>(
    <div key={col} style={{width:240}}>
     <h4>{col}</h4>
     <DndContext collisionDetection={closestCenter} onDragEnd={(e)=>{
       const {active,over}=e;
       if(!over||active.id===over.id)return;
       const old=cols[col].indexOf(active.id);
       const nw=cols[col].indexOf(over.id);
       setCols({...cols,[col]:arrayMove(cols[col],old,nw)});
     }}>
      <SortableContext items={cols[col]} strategy={verticalListSortingStrategy}>
       {cols[col].map(i=><Item key={i} id={i}/>)}
      </SortableContext>
     </DndContext>
    </div>
   ))}
  </div>
 );
}
