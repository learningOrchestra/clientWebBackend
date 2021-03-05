/* eslint-disable no-underscore-dangle */
import File from '../../models/File';
import Project from '../../models/Project';

export const handleGetFiles = async (query) => {
  const files = await File.find(query);
  return files ?? { files: [] };
};

export const handleGetFile = async (query) => {
  const file = await File.findOne(query);
  return file;
};

export const handleCreateFile = async (query, data) => {
  const file = await File.create(data);
  const { _id, name, type } = file;
  const fileData = { _id, name, type };
  const addFile = { $push: { files: fileData } };
  await Project.updateOne(query, addFile);
  return file;
};

export const handleUpdateFile = async (query, data) => {
  const file = await File.update(query, data);
  return file;
};

export const handleDeleteFile = async (query) => {
  const response = await File.deleteOne(query);
  return response;
};
