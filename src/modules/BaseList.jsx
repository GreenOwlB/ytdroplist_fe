import { useEffect, useState } from "react";
import { getAllVideos } from "../api/videos";

const BaseList = () => {
  const [videos, setVideos] = useState([]);

  const getVideos = async () => {
    const videos = await getAllVideos();
    setVideos(videos);
  };

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div>
      <h2>List</h2>
      <div className="videoList">
        {videos &&
          videos.map((video) => {
            return (
              <div key={video.id}>
                <h3>{video.title}</h3>
                <p>{video.channel}</p>
                <p>{video.date_published}</p>
                <p>{video.description}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default BaseList;
