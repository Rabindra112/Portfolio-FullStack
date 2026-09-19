import { Link } from "react-router-dom";
import { Github, Linkedin } from "lucide-react";

export default function Navbar() {
  const links = [
    ["About", "/#about"],
    ["Skills", "/#skills"],
    ["Projects", "/#projects"],
    ["Experience", "/#experience"],
    ["Contact", "/#contact"],
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070b14]/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link
          to="/"
          className="text-xl font-black tracking-tight text-white transition hover:text-sky-400"
        >
          RKM<span className="text-sky-400">.</span>
        </Link>

        <div className="hidden items-center gap-7 text-[15px] font-semibold text-slate-300 md:flex">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="transition-colors duration-200 hover:text-sky-400"
            >
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a href="https://github.com/Rabindra112" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-slate-300 transition hover:text-sky-400">
            <Github size={19} />
          </a>
          <a href="https://www.linkedin.com/in/rabindra-kumar-mahato-00066b313/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-slate-300 transition hover:text-sky-400">
            <Linkedin size={19} />
          </a>
        </div>
      </nav>
    </header>
  );
}
