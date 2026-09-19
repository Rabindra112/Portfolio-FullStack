import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import { createProject,deleteProject,getProjects } from "../services/projectService";
import type { Project } from "../types/Project";

const blank={title:"",description:"",category:"",technologies:"",githubUrl:"#",liveUrl:"#",imageUrl:"",featured:false};

export default function AdminDashboard(){
 const [projects,setProjects]=useState<Project[]>([]); const [form,setForm]=useState(blank); const nav=useNavigate();
 const load=()=>getProjects().then(setProjects).catch(()=>nav("/admin/login"));
 useEffect(()=>{load()},[]);
 const submit=async(e:React.FormEvent)=>{e.preventDefault();await createProject(form);setForm(blank);load()};
 const remove=async(id:number)=>{if(confirm("Delete this project?")){await deleteProject(id);load()}};
 return <main className="min-h-screen bg-[#070b14] px-5 py-10"><div className="mx-auto max-w-6xl"><div className="flex justify-between"><div><p className="text-sky-400 text-sm uppercase tracking-widest">Admin</p><h1 className="text-4xl font-black text-white">Project Dashboard</h1></div><button onClick={()=>{localStorage.removeItem("token");nav("/")}} className="h-fit rounded-lg border border-white/10 px-4 py-2">Logout</button></div><div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.4fr]"><form onSubmit={submit} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"><h2 className="text-xl font-bold text-white">Add Project</h2>{(["title","category","technologies","githubUrl","liveUrl","imageUrl"] as const).map(k=><input key={k} required={k==="title"} value={form[k]} onChange={e=>setForm({...form,[k]:e.target.value})} placeholder={k} className="mt-3 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2"/>) }<textarea required value={form.description} onChange={e=>setForm({...form,description:e.target.value})} placeholder="description" rows={5} className="mt-3 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2"/><label className="mt-3 flex gap-2 text-sm"><input type="checkbox" checked={form.featured} onChange={e=>setForm({...form,featured:e.target.checked})}/> Featured</label><button className="mt-4 w-full rounded-lg bg-sky-500 py-3 font-bold text-slate-950">Save Project</button></form><div className="space-y-3">{projects.map(p=><div key={p.id} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] p-5"><div><p className="font-bold text-white">{p.title}</p><p className="text-sm text-slate-500">{p.category}</p></div><button onClick={()=>remove(p.id)} className="rounded-lg border border-red-400/20 px-3 py-2 text-sm text-red-300">Delete</button></div>)}</div></div></div></main>
}
