import React from "react";
import ReactPlayer from "react-player";
import Video from "./Video";
import "./videoItem.css";
import { useNavigate } from "react-router-dom";
import { deleteVideo } from "./VideoService";
import { toast } from "react-toastify";

interface Props {
  video: Video;
  loadVideos: () => void;
}
const VideoItem = ({ video, loadVideos }: Props) => {
  const navigate = useNavigate();
  const handlerDelete = async (id: string) => {
    await deleteVideo(id).then((resolve) => {
      loadVideos();
      toast.success(`${video.title} deleted`);
    });
  };
  return (
    <div className="col-md-4">
      <div className="card card-body video-card" style={{ cursor: "pointer" }}>
        <div className="d-flex justify-content-between">
          <h1 onClick={() => navigate(`/update/${video._id}`)}>
            {video.title}
          </h1>
          <span
            className="text-danger"
            onClick={() => video._id && handlerDelete(video._id)}
          >
            X
          </span>
        </div>
        <p>{video.description}</p>
        <div className="video">
          <ReactPlayer url={video.url} />
        </div>
      </div>
    </div>
  );
};
export default VideoItem;
