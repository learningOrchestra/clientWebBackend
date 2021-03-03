import Project from '../../models/Project';

export const handleGetOwnProjects = async (query) => {
  const data = await Project.find(query);
  return data ?? { projects: [] };
};

export const handleCreateProject = async (data) => {
  const project = await Project.create(data);
  return project;
};

export const handleUpdateProject = async (query, data) => {
  const project = await Project.update(query, data);
  return project;
};

export const handleDeleteProject = async (query) => {
  const response = await Project.deleteOne(query);
  return response;
};
