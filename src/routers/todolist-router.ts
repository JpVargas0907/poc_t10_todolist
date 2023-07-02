import { Router } from "express";
import * as todolistController from "../controllers/todolist-controller"

const todolistRouter = Router();

todolistRouter.get("/todolist", todolistController.getActivities);
todolistRouter.post("/todolist", todolistController.createActivity);
todolistRouter.put("/todolist/:id", todolistController.updateActivity);
todolistRouter.delete("/todolist/:id", todolistController.deleteActivity);

export default todolistRouter;