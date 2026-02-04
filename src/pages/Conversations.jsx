import React, { useEffect, useState } from "react";

export default function Conversations() {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/conversations`)
      .then(r => r.json())
      .then(setList);
  }, []);

  return (
    <div style={{ display: "flex", height: "100%" }}>
      <aside style={{ width: 280, borderRight: "1px solid #ddd" }}>
        {list.map(c => (
          <div key={c.id} style={{ padding: 12, borderBottom: "1px solid #eee" }}>
            <strong>{c.name}</strong>
            <p>{c.msg}</p>
            <small>{c.time}</small>
          </div>
        ))}
      </aside>

      <main style={{ flex: 1, padding: 20 }}>
        <h2>Seleccioná una conversación</h2>
      </main>
    </div>
  );
}
