import model from "../db/models/Video.model";

class Controller {
  async create(data: object) {
    const newVideo = new model(data);
    newVideo.save();
    return newVideo;
  }
  async get() {
    return await model.find();
  }
  async getOne(id: string) {
    return await model.findById(id);
  }
  async update(id: string, data: object) {
    await model.findByIdAndUpdate(id, data, {new: true});
  }
  async delete(id: string) {
    const video = await model.findByIdAndDelete(id);
    return `Video ${video.title} deleted`;
  }
}
export default Controller;
