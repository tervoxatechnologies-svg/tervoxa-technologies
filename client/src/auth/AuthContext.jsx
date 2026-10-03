import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
const AuthContext = createContext(null);

async function request(path, options = {}) {
  const response = await fetch(`${API_URL}${path}`, { ...options, credentials: 'include', headers: { 'Content-Type': 'application/json', ...(options.headers || {}) } });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.message || 'Request failed.');
  return data;
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => { request('/api/auth/me').then(data => setUser(data.user)).catch(() => setUser(null)).finally(() => setLoading(false)); }, []);
  const value = useMemo(() => ({
    user, loading,
    async login(credentials) { const data = await request('/api/auth/login', { method: 'POST', body: JSON.stringify(credentials) }); setUser(data.user); return data.user; },
    async register(account) { const data = await request('/api/auth/register', { method: 'POST', body: JSON.stringify(account) }); setUser(data.user); return data.user; },
    async logout() { await request('/api/auth/logout', { method: 'POST' }); setUser(null); }
  }), [user, loading]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() { return useContext(AuthContext); }
export async function apiRequest(path, options) { return request(path, options); }
