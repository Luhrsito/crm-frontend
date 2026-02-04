const API = import.meta.env.VITE_API_URL;

export const login = (data) =>
  fetch(`${API}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
