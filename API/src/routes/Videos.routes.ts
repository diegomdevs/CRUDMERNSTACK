import { Router } from "express";
import Controller from '../controller/videos.controller';
const controller = new Controller();
const router = Router();
router.get('/videos',
  async (req, res, next) => {
    try {
      res.json(await controller.get());
    } catch (error) {
      next(error);
    }
  }
);
router.post('/videos',
  async (req, res, next) => {
    try {
      res.json(await controller.create(req.body))
    } catch (error) {
      next(error);
    }
  }
);
router.get('/videos/:id',
  async (req, res, next) => {
    try {
      res.json(await controller.getOne(req.params.id));
    } catch (error) {
      next(error);
    }
  }
);
router.patch('/videos/:id',
  async (req, res, next) => {
    try {
      res.json(await controller.update(req.params.id));
    } catch (error) {
      next(error);
    }
  }
);
router.delete('/videos/:id',
  async (req, res, next) => {
    try {
      res.json(await controller.update(req.params.id));
    } catch (error) {
      next(error)
    }
  }
);
export default router;