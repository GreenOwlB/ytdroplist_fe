import { useEffect } from "react";
import { useVideos } from "../context/videos";
import VideoCard from "./VideoCard";

const BaseList = () => {
  const videos = useVideos();
  const { allVideos, loadAllVideos } = videos;

  const handleFirstLoad = () => {
    if (!allVideos.length) {
      loadAllVideos();
    }
  };

  useEffect(() => {
    handleFirstLoad();
  });

  return (
    <div className="listContainer">
      <div className="videoList">
        {allVideos &&
          allVideos.map((video) => <VideoCard video={video} key={video.id} />)}
      </div>
    </div>
  );
};

export default BaseList;
