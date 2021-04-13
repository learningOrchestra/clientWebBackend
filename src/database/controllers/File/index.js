import File from '../../models/File';
import {createDataset, deleteDataset, getDataset,} from '../../../utils/leaningOrchestraAPI';

export const handleGetFiles = async (data) => {
  const {apiURL} = data;
  delete data.token;
  delete data.apiURL;
  const files = await File.find(data);
  files?.map?.(async (file) => {
    if (file?.type === 'db' && !file?.data?.finished) {
      const dataset = await getDataset(apiURL, file);
      const finished = dataset?.[0]?.finished
      if (finished) {
        dataset?.shift()
        const newFile = {
          ...file?._doc,
          data: {...file?._doc?.data, finished, dataset}
        }
        const {_id} = newFile;
        await File.updateOne({_id}, {data: newFile?.data});
      }
    }
  });
  return files;
};

export const handleGetFile = async (data) => {
  delete data.token;
  return File.findOne(data);
};

export const handleCreateWorkflow = async (data) => {
  delete data.token;
  delete data.apiURL;
  return await File.create(data);
};

export const handleCreateDataset = async (data) => {
  const {apiURL, token} = data;
  delete data.token;
  delete data.apiURL;
  const fileData = {...data, data: {...data.data, finished: false}};
  const file = await File.create(fileData);
  try {
    await createDataset(apiURL, file);
  } catch {
    const deleteData = {token, _id: file?._id};
    await handleDeleteDataset(deleteData, true);
    throw new Error('Could not create the dataset');
  }
  return file;
};

export const handleUpdateFile = async (data) => {
  const {_id} = data;
  delete data.token;
  delete data._id;
  await File.updateOne({_id}, data);
  return File.findOne({_id});
};

export const handleUpdateWorkflow = async (data) => {
  const {_id} = data;
  delete data.token;
  delete data._id;
  await File.updateOne({_id}, data);
  const file = await File.findOne({_id});
  return file;
};

export const handleDeleteWorkflow = async (data) => {
  delete data.type;
  delete data.token;
  delete data.apiURL;
  const {deletedCount} = await File.deleteOne(data);
  return deletedCount;
};

export const handleDeleteDataset = async (data, isCreate = false) => {
  const {apiURL} = data;
  delete data.type;
  delete data.token;
  delete data.apiURL;
  if (!isCreate) {
    try {
      await deleteDataset(apiURL, data);
    } catch {
      throw new Error('Could not delete the dataset');
    }
  }
  const {deletedCount} = await File.deleteOne(data);
  return deletedCount;
};
