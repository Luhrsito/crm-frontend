import React from "react";

export default function TopBar({ onSearch }) {
  return (
    <div className="topbar">
      <input
        placeholder="Buscar cliente, evento, campaña..."
        onChange={e => onSearch(e.target.value)}
      />
    </div>
  );
}
