import axios from 'axios';
import Video from './Video';
const API = 'https://favorites-videos-api.herokuapp.com/api/v1';
export const getVideos = async () => {
  return await (await axios.get<Video[]>(`${API}/videos`)).data;
}
export const createVideo = async (video: Video) => {
  return await axios.post(`${API}/videos`, video);
}
export const getVideo = async (id: string) => {
  return await (await axios.get<Video>(`${API}/videos/${id}`)).data;
}
export const updateVideo = async (id: string, video: Video) => {
  return axios.patch<Video>(`${API}/videos/${id}`, video);
}
export const deleteVideo = async (id: string) => {
  return await (await axios.delete(`${API}/videos/${id}`)).status;
}