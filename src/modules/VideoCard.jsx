import "./VideoCard.css";
import { useVideos } from "../context/videos";
import { useState } from "react";

import VideoMoreContainer from "./VideoMoreContainer";

const VideoCard = ({ video }) => {
  const { id, thumbnail_md, title, channel, yt_id } = video;
  const { deleteVideo } = useVideos();

  const [moreActive, setMoreActive] = useState(false);
  const [active, setActive] = useState(false);

  const handleMore = (e) => {
    if (moreActive) {
      setActive(false);
      setTimeout(() => setMoreActive(false), 500);
    } else {
      setActive(true);
      setMoreActive(true);
    }
  };

  return (
    <div className={"videoContainer " + (active ? "hasMore" : "")}>
      <div className="videoImgContainer">
        <img src={thumbnail_md} alt="" />
      </div>
      <div className="videoInfoContainer">
        <p className="channel">{channel}</p>
        <h3>{title}</h3>
      </div>
      <div>
        <button onClick={handleMore}>More...</button>
      </div>
      <div className="buttonContainer">
        <button onClick={() => deleteVideo(id)}>Delete</button>
        <a
          href={`https://www.youtube.com/watch?v=${yt_id}`}
          target="_blank"
          rel="noreferrer"
        >
          Watch
        </a>
      </div>
      {moreActive && <VideoMoreContainer video={video} />}
    </div>
  );
};

export default VideoCard;
