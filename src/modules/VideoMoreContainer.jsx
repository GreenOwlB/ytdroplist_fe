const VideoMoreContainer = ({ video }) => {
  const { date_published } = video;

  return (
    <div className="moreContainer">
      <p>Published: {date_published}</p>
    </div>
  );
};

export default VideoMoreContainer;
