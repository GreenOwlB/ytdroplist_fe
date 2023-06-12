import { createContext, useContext, useState } from "react";
import axios from "axios";

const VideoContext = createContext(null);

export const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);
  const [adding, setAdding] = useState(false);

  const url = "http://localhost:3001";

  const loadAllVideos = async () => {
    try {
      const result = await axios.get(`${url}/videos`);
      if (result.data) {
        setVideos(result.data);
      } else {
        console.log("no data received");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addVideo = async (inputData) => {
    setAdding(true);
    try {
      const result = await axios.post(`${url}/videos`, inputData);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteVideo = async (id) => {
    try {
      const result = await axios.delete(`${url}/videos/${id}`);
      console.log(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <VideoContext.Provider
      value={{
        videos,
        adding,
        loadAllVideos,
        addVideo,
        deleteVideo,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
};

export const useVideos = () => {
  return useContext(VideoContext);
};
