import { Router } from "express";
import Controller from "../controller/videos.controller";
const controller = new Controller();
const router = Router();

router.post("/", async (req, res, next) => {
  try {
    res.json(await controller.create(req.body));
  } catch (error) {
    next(error);
  }
});
router.get("/", async (req, res, next) => {
  try {
    res.json(await controller.get());
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    res.json(await controller.getOne(req.params.id));
  } catch (error) {
    next(error);
  }
});
router.patch("/:id", async (req, res, next) => {
  try {
    res.json(await controller.update(req.params.id, req.body));
  } catch (error) {
    next(error);
  }
});
router.delete("/:id", async (req, res, next) => {
  try {
    res.json(await controller.delete(req.params.id));
  } catch (error) {
    next(error);
  }
});

export default router;
