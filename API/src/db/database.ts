import mongoose from 'mongoose';
import config from '../config/config';
(async () => {
  try {
    await mongoose.connect(`${config.MONGODB_URL}`)
    .then(resolve => {
      console.log(`Database is Connected to ${resolve.connection.name}`);
    })
    .catch(reject => {
      throw reject;
    });
  } catch (error) {
    throw error;
  }
})()