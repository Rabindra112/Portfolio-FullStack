import api from "./api";
import type { Project } from "../types/Project";

export const getProjects = async () => (await api.get<Project[]>("/projects")).data;
export const getProject = async (id: number) => (await api.get<Project>(`/projects/${id}`)).data;
export const createProject = async (data: Omit<Project, "id">) => (await api.post<Project>("/projects", data)).data;
export const updateProject = async (id: number, data: Omit<Project, "id">) => (await api.put<Project>(`/projects/${id}`, data)).data;
export const deleteProject = async (id: number) => api.delete(`/projects/${id}`);
