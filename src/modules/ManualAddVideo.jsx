import { useState } from "react";
import { useVideos } from "../context/videos";

const ManualAddVideo = () => {
  const videos = useVideos();

  const initialFormData = {
    title: "",
    channel: "",
    upload_date: "",
    description: "",
  };
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    videos.addVideo(formData);
  };

  return (
    <div>
      <form className="addVideoManually" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Title"
          required
          name="title"
          value={formData.title}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          placeholder="Channel"
          required
          name="channel"
          value={formData.channel}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="date"
          placeholder="Upload date"
          name="upload_date"
          value={formData.upload_date}
          onChange={(e) => handleChange(e)}
        />
        <textarea
          placeholder="Description"
          name="description"
          value={formData.description}
          onChange={(e) => handleChange(e)}
        />

        <button>Submit</button>
      </form>
    </div>
  );
};

export default ManualAddVideo;
