import dotenv from 'dotenv';
dotenv.config();

const config = {
  MONGODB_URL: process.env.MONGODBURL,
  MONGO_USER: process.env.MONGOUSER,
  MONGO_PASSWORD: process.env.MONGOPASWORD,
  PORT: process.env.APPPORT,
}

export default config;