import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import {
  createTask,
  getTasks,
  deleteTask
} from "../controllers/taskController.js";

const router = express.Router();

// Protect all routes
router.use(authMiddleware);

// Routes
router.post("/", createTask);
router.get("/", getTasks);
router.delete("/:id", deleteTask);

export default router;