import { useState } from "react";
import { useVideos } from "../context/videos";

const DropVideo = () => {
  const [dropActive, setDropActive] = useState(false);
  const videos = useVideos();

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDragEnter = () => {
    console.log("drag enter");
  };

  const handleDragLeave = () => {
    console.log("drag leave");
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (dropActive) return;
    setDropActive(true);

    if (e.dataTransfer.items) {
      const linkData = [...e.dataTransfer.items];
      //---Note: is currently not grabbing shorts. Change? ---
      const linkRegex = /^(https:\/\/www.youtube.com\/watch\?v=).{11}/;
      if (linkData[0].kind === "string") {
        linkData[0].getAsString((string) => {
          if (string.match(linkRegex)) {
            let yt_id = string.split("=")[1];
            if (yt_id.length > 11) {
              yt_id = yt_id.slice(0, 11);
            }
            videos.getAndSaveYtData({ yt_id });
            setDropActive(false);
          } else {
            setDropActive(false);
            return;
          }
        });
      }
    } else {
      setDropActive(false);
      console.log("no items");
      return;
    }
  };

  return (
    <div
      className="dropContainer"
      onDragOver={(e) => handleDragOver(e)}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDrop={(e) => handleDrop(e)}
    >
      <h2>Droparea</h2>
    </div>
  );
};

export default DropVideo;
