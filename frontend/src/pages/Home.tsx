import { useEffect, useState } from "react";
import {
  ArrowRight,
  Download,
  Mail,
  MapPin,
  Code2,
  Database,
  Server,
  Cloud,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import SectionHeading from "../components/SectionHeading";
import { getProjects } from "../services/projectService";
import type { Project } from "../types/Project";
import api from "../services/api";

export default function Home() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    getProjects().then(setProjects).catch(console.error);
  }, []);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.post("/contact", form);
      setSent(true);
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      alert("Backend is not running or the request failed.");
    }
  };

  return (
    <div className="min-h-screen bg-[#070b14]">
      <Navbar />

      <main>
        {/* HERO */}
        <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:grid-cols-[1.5fr_0.9fr] md:py-28 lg:px-8">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-sky-400" />
              <p className="text-base font-bold uppercase tracking-[0.28em] text-sky-400 md:text-lg">
                Java Backend Developer
              </p>
            </div>

            <h1 className="text-5xl font-black leading-[1.05] tracking-[-0.03em] text-white sm:text-6xl md:text-7xl lg:text-[78px]">
              Building scalable applications with{" "}
              <span className="text-sky-400">Java &amp; Spring Boot.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg md:text-xl">
              Java Backend Developer skilled in Java, Spring Boot, REST APIs, Microservices, Spring Security, JPA/Hibernate, MySQL, and AWS. Built hands-on projects focused on scalable backend applications and real-world problem solving.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-xl bg-sky-500 px-5 py-3 font-bold text-slate-950 transition hover:bg-sky-400"
              >
                View Projects <ArrowRight className="ml-2 inline" size={17} />
              </a>
              <a
                href="/resume.pdf"
                download
                className="rounded-xl border border-white/10 px-5 py-3 font-semibold text-white transition hover:bg-white/5"
              >
                <Download className="mr-2 inline" size={17} /> Resume
              </a>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative h-72 w-72 overflow-hidden rounded-[2rem] border border-sky-400/30 bg-gradient-to-br from-sky-950 to-indigo-950 shadow-2xl shadow-sky-950/40 sm:h-80 sm:w-80 md:h-96 md:w-96">
              <img
                src="/profile.jpg"
                alt="Rabindra Kumar Mahato"
                className="relative z-10 h-full w-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center text-8xl font-black text-white/10">
                RKM
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="border-y border-white/10 bg-white/[0.02]">
          <div className="mx-auto max-w-7xl px-5 py-24 md:py-28 lg:px-8">
            <SectionHeading
              number="01"
              label="About"
              title="Java Backend Developer passionate about building real-world applications"
            />

            <p className="mt-7 max-w-4xl text-base leading-8 text-slate-400 sm:text-lg md:text-xl">
              Hi, I'm Rabindra Kumar Mahato, an aspiring Java Backend Developer with a strong foundation in Java, Spring Boot, REST APIs, Spring Security, JPA/Hibernate, MySQL, and Microservices. I enjoy designing and developing backend applications that are clean, maintainable, and scalable. Through hands-on projects, I have worked with authentication, database integration, RESTful services, and frontend development using React and TypeScript. I am continuously improving my technical skills and looking for an opportunity to contribute to a professional development team while growing as a software engineer.
            </p>

            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {[
                ["Java & Spring Boot", Code2],
                ["REST APIs", Server],
                ["MySQL & JPA", Database],
                ["React & TypeScript", Cloud],
              ].map(([t, I]) => {
                const Icon = I as typeof Code2;
                return (
                  <div
                    key={t as string}
                    className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition hover:-translate-y-1 hover:border-sky-400/40 hover:bg-sky-400/[0.03]"
                  >
                    <Icon className="text-sky-400" size={28} />
                    <p className="mt-5 font-bold text-white">{t as string}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills">
          <div className="mx-auto max-w-7xl px-5 py-24 md:py-28 lg:px-8">
            <SectionHeading number="02" label="Skills" title="Technical toolkit" />

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                [
                  "Backend",
                  "Java 8",
                  "Java 11",
                  "Java 17",
                  "Spring Boot",
                  "Spring MVC",
                  "Spring Security",
                  "Spring Data JPA",
                  "Hibernate",
                  "REST APIs",
                  "Microservices",
                  "JWT",
                  "Bean Validation",
                  "Lombok",
                ],
                [
                  "Frontend",
                  "React",
                  "TypeScript",
                  "JavaScript",
                  "Tailwind CSS",
                  "HTML5",
                  "CSS3",
                  "React Router",
                  "Axios",
                ],
                [
                  "Database",
                  "MySQL",
                  "MongoDB",
                  "Oracle Database",
                  "PostgreSQL",
                ],
                [
                  "Microservices & Messaging",
                  "Spring Cloud",
                  "Eureka",
                  "API Gateway",
                  "Resilience4j",
                  "Apache Kafka",
                ],
                [
                  "Cloud & DevOps",
                  "AWS",
                  "Docker",
                  "Git",
                  "GitHub",
                  "GitHub Actions",
                  "CI/CD",
                  "Maven",
                  "Gradle",
                ],
                [
                  "Tools & Testing",
                  "Postman",
                  "Swagger",
                  "OpenAPI",
                  "JUnit 5",
                  "Mockito",
                  "IntelliJ IDEA",
                  "VS Code",
                ],
              ].map(([title, ...items]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition hover:border-sky-400/30"
                >
                  <h3 className="text-lg font-bold text-white">{title}</h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {items.map((x) => (
                      <span
                        key={x}
                        className="rounded-full border border-white/10 px-3 py-1.5 text-sm font-medium text-slate-300"
                      >
                        {x}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="border-y border-white/10 bg-white/[0.02]">
          <div className="mx-auto max-w-7xl px-5 py-24 md:py-28 lg:px-8">
            <div className="flex items-end justify-between gap-6">
              <SectionHeading number="03" label="Projects" title="Featured work" />
              <Link
                to="/projects"
                className="hidden whitespace-nowrap text-sm font-semibold text-sky-400 transition hover:text-sky-300 md:block"
              >
                View all →
              </Link>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.slice(0, 6).map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS EXPERIENCE */}
        <section id="experience">
          <div className="mx-auto max-w-7xl px-5 py-24 md:py-28 lg:px-8">
            <SectionHeading
              number="04"
              label="Project Experience"
              title="Hands-on development experience"
            />

            {/* Appan Bazaar */}
            <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-7 md:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Full Stack Developer
                  </h3>

                  <p className="mt-1 text-slate-400">
                    College Project · Appan Bazaar
                  </p>
                </div>

                <span className="text-sm font-medium text-slate-500">
                  2025 – 2026
                </span>
              </div>

              <ul className="mt-7 list-disc space-y-3 pl-5 text-slate-400">
                <li>
                  Designed and developed a full-stack e-commerce application using
                  Java, Spring Boot, and React.js.
                </li>

                <li>
                  Developed reusable REST APIs for users, products, categories,
                  carts, and orders.
                </li>

                <li>
                  Implemented authentication and role-based access control using
                  Spring Security for Admin and User roles.
                </li>

                <li>
                  Designed database entities and relationships using Spring Data JPA,
                  Hibernate, and MySQL.
                </li>

                <li>
                  Implemented DTOs, ModelMapper, Bean Validation, and centralized
                  exception handling for maintainable APIs.
                </li>

                <li>
                  Added pagination, sorting, searching, and filtering to product APIs.
                </li>

                <li>
                  Followed Controller-Service-Repository layered architecture to
                  maintain clean separation of concerns.
                </li>

                <li>
                  Tested and validated REST APIs using Postman and managed source code
                  using Git and GitHub.
                </li>
              </ul>
            </div>

            {/* Lingo-Test */}
            <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-7 md:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Lingo-Test – AI-Based Confidence Booster
                  </h3>

                  <p className="mt-1 text-slate-400">
                    Full Stack Developer · College Project
                  </p>
                </div>

                <span className="text-sm font-medium text-slate-500">
                  2024 – 2025
                </span>
              </div>

              <ul className="mt-7 list-disc space-y-3 pl-5 text-slate-400">
                <li>
                  Designed and developed an AI-powered English learning platform to
                  help learners improve spoken English, confidence, grammar,
                  vocabulary, and pronunciation.
                </li>

                <li>
                  Developed secure user authentication and authorization using
                  Spring Boot, Spring Security, and JWT.
                </li>

                <li>
                  Built reusable REST APIs for user management, learning sessions,
                  feedback, and other application functionalities.
                </li>

                <li>
                  Integrated AI-based real-time feedback to analyze learners&apos;
                  English responses and provide suggestions for improving grammar,
                  vocabulary, and communication.
                </li>

                <li>
                  Implemented speech-to-text processing to analyze spoken English
                  and provide feedback on pronunciation, fluency, and speaking
                  mistakes.
                </li>

                <li>
                  Developed a responsive frontend using React.js, Vite, Tailwind CSS,
                  and Redux Toolkit for an interactive learning experience.
                </li>

                <li>
                  Designed database entities and relationships using Spring Data JPA,
                  Hibernate, and MySQL.
                </li>

                <li>
                  Implemented role-based access control (RBAC) for USER and ADMIN
                  roles with protected routes and APIs.
                </li>

                <li>
                  Followed Controller-Service-Repository layered architecture with
                  DTOs, validation, and centralized exception handling.
                </li>

                <li>
                  Used WebSocket/WebRTC-based communication to support real-time
                  interaction and performed API testing using Postman while managing
                  source code with Git and GitHub.
                </li>
              </ul>
            </div>

            {/* Employee Attendance Management System */}
            <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-7 md:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Employee Attendance Management System
                  </h3>

                  <p className="mt-1 text-slate-400">
                    Full Stack Developer · Personal Project
                  </p>
                </div>

                <span className="text-sm font-medium text-slate-500">
                  2025 – 2026
                </span>
              </div>

              <ul className="mt-7 list-disc space-y-3 pl-5 text-slate-400">
                <li>
                  Designed and developed a full-stack employee attendance management
                  system using Python, Django, HTML, CSS, JavaScript, and MySQL.
                </li>

                <li>
                  Developed Django-based backend functionality for employee management,
                  attendance tracking, leave management, and attendance records.
                </li>

                <li>
                  Implemented user authentication and role-based access control for
                  Admin and Employee users.
                </li>

                <li>
                  Designed database models and relationships using Django ORM and MySQL
                  to manage employee and attendance information.
                </li>

                <li>
                  Implemented attendance features including employee check-in,
                  check-out, attendance history, leave requests, and daily attendance
                  status.
                </li>

                <li>
                  Developed the user interface using HTML, CSS, and JavaScript with
                  responsive layouts for employee and administrator workflows.
                </li>

                <li>
                  Added search, filtering, sorting, and pagination functionality for
                  employee and attendance records.
                </li>

                <li>
                  Implemented form validation, error handling, and reusable Django
                  components to improve application maintainability.
                </li>

                <li>
                  Tested application functionality and APIs and managed source code
                  using Git and GitHub.
                </li>
              </ul>
            </div>
          </div>
        </section>
{/* CONTACT */}
<section
  id="contact"
  className="border-t border-white/10 bg-white/[0.02]"
>
  <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 md:grid-cols-2 md:py-28 lg:px-8">
    
    {/* Contact Information */}
    <div>
      <SectionHeading
        number="05"
        label="Contact"
        title="Let's connect"
      />

      <p className="mt-7 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
        Looking to connect about a Java Backend, Spring Boot, or Full Stack
        opportunity? Feel free to reach out. I’d be happy to discuss
        projects, opportunities, or potential collaborations.
      </p>

      <div className="mt-8 space-y-4">
        <p className="text-slate-300">
          <Mail
            className="mr-3 inline text-sky-400"
            size={18}
          />
          rabindrakrmahato1123@gmail.com
        </p>

        <p className="text-slate-300">
          <MapPin
            className="mr-3 inline text-sky-400"
            size={18}
          />
          Bangalore, India
        </p>
      </div>
    </div>

    {/* Contact Form */}
    <form
      onSubmit={submit}
      className="space-y-4"
    >
      {/* Success Message */}
      {sent && (
        <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-sm text-emerald-300">
          ✓ Message sent successfully. Thank you for reaching out!
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-300">
          {error}
        </div>
      )}

      {/* Name */}
      <input
        required
        type="text"
        name="name"
        value={form.name}
        onChange={(e) =>
          setForm({ ...form, name: e.target.value })
        }
        placeholder="Your name"
        className="w-full rounded-xl border border-white/10 bg-white/[0.05] px-5 py-4 text-white placeholder:text-slate-500 outline-none transition focus:border-sky-400 focus:bg-white/[0.07]"
      />

      {/* Email */}
      <input
        required
        type="email"
        name="email"
        value={form.email}
        onChange={(e) =>
          setForm({ ...form, email: e.target.value })
        }
        placeholder="Your email"
        className="w-full rounded-xl border border-white/10 bg-white/[0.05] px-5 py-4 text-white placeholder:text-slate-500 outline-none transition focus:border-sky-400 focus:bg-white/[0.07]"
      />

      {/* Subject */}
      <input
        required
        type="text"
        name="subject"
        value={form.subject}
        onChange={(e) =>
          setForm({ ...form, subject: e.target.value })
        }
        placeholder="Subject"
        className="w-full rounded-xl border border-white/10 bg-white/[0.05] px-5 py-4 text-white placeholder:text-slate-500 outline-none transition focus:border-sky-400 focus:bg-white/[0.07]"
      />

      {/* Message */}
      <textarea
        required
        name="message"
        value={form.message}
        onChange={(e) =>
          setForm({ ...form, message: e.target.value })
        }
        placeholder="Your message"
        rows={6}
        className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.05] px-5 py-4 text-white placeholder:text-slate-500 outline-none transition focus:border-sky-400 focus:bg-white/[0.07]"
      />

      {/* Submit Button */}
      <button
        type="submit"
        className="rounded-xl bg-sky-500 px-7 py-3.5 font-bold text-slate-950 transition hover:bg-sky-400"
      >
        Send Message
      </button>
    </form>
  </div>
</section>
      </main>

      <Footer />
    </div>
  );
}
