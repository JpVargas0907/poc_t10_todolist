import { Request, Response } from "express";
import * as todolistServices from "../services/todolist-service";
import { Activity } from "protocols";
import httpStatus from "http-status";

export async function createActivity(req: Request, res: Response){
    const activity = req.body as Activity;

    await todolistServices.createActivity(activity);

    res.sendStatus(httpStatus.CREATED);
}

export async function getActivities(req: Request, res: Response){
    const activities = await todolistServices.getActivities();

    res.send(activities);
}

export async function updateActivity(req: Request, res: Response){
    const activityId = req.params.id;
    const activity = req.body as Activity;

    await todolistServices.updateActivity(parseInt(activityId), activity);

    res.sendStatus(httpStatus.OK);
}

export async function deleteActivity(req: Request, res: Response){
    const activityId = req.params.id;

    await todolistServices.deleteActivity(parseInt(activityId));

    res.sendStatus(httpStatus.OK);
}