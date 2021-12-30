import Joi from "joi";

const id = Joi.number();
const title = Joi.string().max(30);
const description = Joi.string().max(200);
const url = Joi.string();

export const createVideoSchema: Joi.Schema = Joi.object({
  title: title.required(),
  description,
  url,
});
export const getVideoSchema: Joi.Schema = Joi.object({
  id: id.required(),
});
export const updateVideoSchema: Joi.Schema = Joi.object({
  id: id.required(),
});
