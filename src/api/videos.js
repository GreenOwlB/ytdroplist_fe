import axios from "axios";

const url = "http://localhost:3001";

export const getAllVideos = async () => {
  const result = await axios.get(`${url}/videos`);
  return result.data;
};
