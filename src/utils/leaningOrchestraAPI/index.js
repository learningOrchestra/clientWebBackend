import axios from 'axios';

export const getDataset = async (apiURL, data) => {
  const {data: {result: response}} = await axios({
    method: 'get',
    url: `${apiURL}/api/learningOrchestra/v1/dataset/csv/${data._id}`,
  });
  return response;
};

export const createDataset = async (apiURL, data) => await axios({
  method: 'post',
  url: `${apiURL}/api/learningOrchestra/v1/dataset/csv`,
  data: {
    datasetName: data?._id,
    datasetURI: data?.data?.url,
  },
});

export const deleteDataset = async (apiURL, data) => await axios({
  method: 'delete',
  url: `${apiURL}/api/learningOrchestra/v1/dataset/csv/${data._id}`,
});
