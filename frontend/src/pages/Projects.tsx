import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import { getProjects } from "../services/projectService";
import type { Project } from "../types/Project";

export default function Projects() {
  const [projects,setProjects]=useState<Project[]>([]);
  useEffect(()=>{getProjects().then(setProjects).catch(console.error)},[]);
  return <><Navbar/><main className="mx-auto max-w-6xl px-5 py-20"><p className="text-sm font-semibold uppercase tracking-widest text-sky-400">Projects</p><h1 className="mt-2 text-4xl font-black text-white">All Projects</h1><p className="mt-4 text-slate-400">A collection of backend and full-stack applications.</p><div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{projects.map(p=><ProjectCard key={p.id} project={p}/>)}</div></main><Footer/></>;
}
