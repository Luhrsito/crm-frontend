import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";
import Dashboard from "./pages/Dashboard";
import Columns from "./pages/Columns";
import Events from "./pages/Events";
import Campaigns from "./pages/Campaigns";
import Reports from "./pages/Reports";
import Login from "./pages/Login";

export default function App() {
  const [page, setPage] = useState("dashboard");
  const [query, setQuery] = useState("");
  const [user, setUser] = useState(null);

  if (!user) return <Login onLogin={setUser} />;

  return (
    <div className="layout">
      <Sidebar onNavigate={setPage} />
      <div className="content">
        <TopBar onSearch={setQuery} />

        {page === "dashboard" && <Dashboard />}
        {page === "columns" && <Columns />}
        {page === "events" && <Events />}
        {page === "campaigns" && <Campaigns />}
        {page === "reports" && <Reports />}
      </div>
    </div>
  );
}
