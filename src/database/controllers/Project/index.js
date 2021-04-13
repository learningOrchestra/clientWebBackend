import Project from '../../models/Project';

export const handleGetOwnProjects = async (data) => {
  delete data.token;
  const projects = await Project.find(data);
  return projects;
};

export const handleGetProject = async (data) => {
  delete data.token;
  const project = await Project.findOne(data);
  return project;
};

export const handleCreateProject = async (data) => {
  delete data.token;
  const project = await Project.create(data);
  return project;
};

export const handleUpdateProject = async (data) => {
  const {_id} = data;
  delete data.token;
  await Project.updateOne({_id}, data);
  const project = await Project.findOne({_id});
  return project;
};

export const handleDeleteProject = async (data) => {
  delete data.token;
  const {deletedCount} = await Project.deleteOne(data);
  return deletedCount;
};
