import { Activity } from "protocols";
import * as todolistRepository from "../repositories/todolist-repository";

export async function createActivity(activity: Activity) {
    return await todolistRepository.createActivity(activity);
}

export async function getActivities() {
    return await todolistRepository.getActivities();
}

export async function updateActivity(activityId: number, activity: Activity) {
    return await todolistRepository.updateActivity(activityId, activity);
}

export async function deleteActivity(activityId: number) {
    return await todolistRepository.deleteActivity(activityId);
}