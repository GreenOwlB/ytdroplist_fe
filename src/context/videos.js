import { createContext, useContext, useState } from "react";
import axios from "axios";

const VideoContext = createContext(null);

export const VideoProvider = ({ children }) => {
  const [allVideos, setAllVideos] = useState([]);
  const [adding, setAdding] = useState(false);

  const url = "http://localhost:3001";

  const loadAllVideos = async () => {
    console.log("loading videos");
    try {
      const result = await axios.get(`${url}/videos`);
      if (result.data) {
        setAllVideos(result.data);
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
      await loadAllVideos();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteVideo = async (id) => {
    try {
      const result = await axios.delete(`${url}/videos/${id}`);
      console.log(result.data);
      await loadAllVideos();
    } catch (error) {
      console.log(error);
    }
  };

  const getAndSaveYtData = async (yt_id) => {
    try {
      const result = await axios.post(`${url}/yt`, yt_id);
      console.log(result);
      // add adding message
      await loadAllVideos();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <VideoContext.Provider
      value={{
        allVideos,
        adding,
        loadAllVideos,
        addVideo,
        deleteVideo,
        getAndSaveYtData,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
};

export const useVideos = () => {
  return useContext(VideoContext);
};
