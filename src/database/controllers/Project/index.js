import Project from '../../models/Project';

export const handleCreateProject = async () => {
  const data = {
    name: 'Hello World!',
    access: ['12345'],
  };
  const project = await Project.create(data);
  return project;
};
