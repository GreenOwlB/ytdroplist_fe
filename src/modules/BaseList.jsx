import { useEffect } from "react";
import { useVideos } from "../context/videos";

const BaseList = () => {
  const videos = useVideos();
  const { allVideos, loadAllVideos, deleteVideo } = videos;

  // console.log(allVideos);

  const handleFirstLoad = () => {
    if (!allVideos.length) {
      loadAllVideos();
    }
  };

  useEffect(() => {
    // loadAllVideos();
    handleFirstLoad();
  });

  const handleDelete = (id) => {
    deleteVideo(id);
  };

  return (
    <div>
      <div className="videoList">
        {allVideos &&
          allVideos.map((video) => {
            return (
              <div key={video.id} className="videoContainer">
                <div className="videoImgContainer">
                  <img src={video.thumbnail_df} alt="" />
                </div>
                <div className="videoInfoContainer">
                  <h3>{video.title}</h3>
                  <p>{video.channel}</p>
                  <p>{video.date_published}</p>
                </div>
                <div className="buttonContainer">
                  <button onClick={() => handleDelete(video.id)}>Delete</button>
                  <a
                    href={`https://www.youtube.com/watch?v=${video.yt_id}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Watch
                  </a>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default BaseList;
