import React, { ChangeEvent, FormEvent, useState, useEffect } from "react";
import Video from "./Video";
import {
  createVideo,
  getVideo as getVideoService,
  updateVideo,
} from "./VideoService";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

export const VideoForm = () => {
  const navigate = useNavigate();
  const params = useParams();
  const initialVideo = {
    title: "",
    description: "",
    url: "",
  };
  const [video, setVideo] = useState<Video>(initialVideo);
  const handleInputChange = (e: InputChange) => {
    setVideo({ ...video, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!params.id) {
      await createVideo(video)
        .then((resolve) => {
          toast.success(`${resolve.data.title} Video added`);
          setVideo(initialVideo);
          navigate("/");
        })
        .catch((reject) => console.error(reject));
    } else {
      await updateVideo(params.id, video).then((resolve) => {
        if (resolve.status === 200) {
          toast.success(`${video.title} Video updated`);
          setVideo(initialVideo);
          navigate("/");
        }
      });
    }
  };
  const getVideo = async (id: string) => {
    await getVideoService(id).then((resolve) => {
      const { title, description, url } = resolve;
      setVideo({ title, description, url });
    });
  };
  useEffect(() => {
    if (params.id) getVideo(params.id);
  }, []);
  return (
    <div className="row">
      <div className="col-md-4 offset-md-4">
        <div className="card">
          <div className="card-body">
            <h3>New Video</h3>
            <form action="" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="title"
                  placeholder="Write a title for this video"
                  className="form-control"
                  onChange={handleInputChange}
                  autoFocus
                  value={video.title}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="url"
                  placeholder="https://somesite.com"
                  className="form-control"
                  onChange={handleInputChange}
                  value={video.url}
                />
                <div className="form-group">
                  <textarea
                    name="description"
                    rows={3}
                    className="form-control"
                    placeholder="Write a description"
                    onChange={handleInputChange}
                    value={video.description}
                  ></textarea>
                </div>
              </div>
              {params.id ? (
                <button className="btn btn-info">Update Video</button>
              ) : (
                <button className="btn btn-primary">Create</button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default VideoForm;
