import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";

export default function App(){
 return <BrowserRouter><Routes><Route path="/" element={<Home/>}/><Route path="/projects" element={<Projects/>}/><Route path="/projects/:id" element={<ProjectDetails/>}/><Route path="/admin/login" element={<Login/>}/><Route path="/admin" element={<AdminDashboard/>}/></Routes></BrowserRouter>;
}
