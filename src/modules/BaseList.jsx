import { useEffect } from "react";
import { useVideos } from "../context/videos";

const BaseList = () => {
  const videos = useVideos();
  const allVideos = videos.videos;

  useEffect(() => {
    videos.loadAllVideos();
  }, [videos]);

  const handleDelete = (id) => {
    videos.deleteVideo(id);
  };

  return (
    <div>
      <div className="videoList">
        {allVideos &&
          allVideos.map((video) => {
            return (
              <div key={video.id} className="videoContainer">
                <h3>{video.title}</h3>
                <p>{video.channel}</p>
                <p>{video.date_published}</p>
                <p>{video.description}</p>
                <button onClick={() => handleDelete(video.id)}>Delete</button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default BaseList;
