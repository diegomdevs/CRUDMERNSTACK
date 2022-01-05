import dotenv from 'dotenv';
dotenv.config();

const config = {
  MONGODB_URL: process.env.MONGODBURL,
  PORT: process.env.PORT,
}

export default config;