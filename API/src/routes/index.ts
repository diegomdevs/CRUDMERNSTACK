import express, { Application } from 'express'
const router = express.Router();
import  VideosRoutes from './Videos.routes'

export default function (app: Application) {
  app.use('/api/v1', router);
  router.use('/', VideosRoutes);
}