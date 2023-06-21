import "./VideoCard.css";
import { useVideos } from "../context/videos";

const VideoCard = ({ video }) => {
  const { id, thumbnail_md, title, channel, date_published, yt_id } = video;
  const { deleteVideo } = useVideos();
  return (
    <div className="videoContainer">
      <div className="videoImgContainer">
        <img src={thumbnail_md} alt="" />
      </div>
      <div className="videoInfoContainer">
        <p className="channel">{channel}</p>
        <h3>{title}</h3>
        {/* <p>{date_published}</p> */}

        {/* <p></p> */}
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
    </div>
  );
};

export default VideoCard;
