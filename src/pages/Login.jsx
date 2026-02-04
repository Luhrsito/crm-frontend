import React, { useState } from "react";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  function submit() {
  const API = import.meta.env.VITE_API_URL;

  fetch(`${API}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  })
    .then(r => (r.ok ? r.json() : Promise.reject()))
    .then(onLogin)
    .catch(() => setErr("Credenciales inválidas"));
}


  return (
    <div className="login">
      <div className="login-box">
        <h2>CRM Login</h2>

        <input
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <button onClick={submit}>Entrar</button>

        {err && <p>{err}</p>}
      </div>
    </div>
  );
}
