import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

export default function Login(){
 const [username,setUsername]=useState(""); const [password,setPassword]=useState(""); const nav=useNavigate();
 const submit=async(e:React.FormEvent)=>{e.preventDefault();try{const r=await api.post("/auth/login",{username,password});localStorage.setItem("token",r.data.token);nav("/admin")}catch{alert("Invalid username or password")}};
 return <main className="flex min-h-screen items-center justify-center bg-[#070b14] px-5"><form onSubmit={submit} className="w-full max-w-md rounded-2xl border border-white/10 bg-white/[0.03] p-8"><h1 className="text-2xl font-bold text-white">Admin Login</h1><p className="mt-2 text-sm text-slate-400">Manage portfolio projects.</p><input required value={username} onChange={e=>setUsername(e.target.value)} placeholder="Username" className="mt-7 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3"/><input required type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" className="mt-4 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3"/><button className="mt-5 w-full rounded-xl bg-sky-500 py-3 font-bold text-slate-950">Login</button></form></main>
}
