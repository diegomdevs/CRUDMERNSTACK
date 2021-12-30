import VideoSchema from "../db/schemas/Video.model";

class Controller {
  async create(data: Object) {
    return data;
  }
  async get() {
    return 'Getting Data'
  }
  async getOne(id: String) {
    return 'Getting Data';
  }
  async update(id: String) {
    return 'Getting Data';
  }
  async delete(id: String) {
    return 'Getting Data';
  }
}
export default Controller;
