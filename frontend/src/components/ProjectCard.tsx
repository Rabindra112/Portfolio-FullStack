import { Link } from "react-router-dom";
import type { Project } from "../types/Project";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition hover:-translate-y-1 hover:border-sky-400/40">
      <div className="h-44 overflow-hidden bg-slate-900">
        {project.imageUrl ? (
          <img src={project.imageUrl} alt={project.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105"/>
        ) : (
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-sky-950 via-slate-900 to-indigo-950 text-5xl font-black text-white/10">
            {project.title.charAt(0)}
          </div>
        )}
      </div>
      <div className="p-6">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-sky-400">{project.category}</p>
        <h3 className="text-xl font-bold text-white">{project.title}</h3>
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-400">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.split(",").map((tech) => <span key={tech} className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-slate-300">{tech.trim()}</span>)}
        </div>
        <div className="mt-6 flex gap-3">
          <Link to={`/projects/${project.id}`} className="rounded-lg bg-sky-500 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-sky-400">Case Study</Link>
          {project.githubUrl && project.githubUrl !== "#" && <a href={project.githubUrl} target="_blank" rel="noreferrer" className="rounded-lg border border-white/10 px-3 py-2"><Github size={17}/></a>}
          {project.liveUrl && project.liveUrl !== "#" && <a href={project.liveUrl} target="_blank" rel="noreferrer" className="rounded-lg border border-white/10 px-3 py-2"><ExternalLink size={17}/></a>}
        </div>
      </div>
    </article>
  );
}
