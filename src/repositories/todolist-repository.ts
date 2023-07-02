import connection from "../database/connnection";
import { Activity } from "protocols";

export async function createActivity(activity: Activity) {
    const { title, description, category, toDoDay } = activity;
    const result = await connection.query(`
        INSERT INTO activities (title, description, category, "toDoDay") 
        VALUES ($1, $2, $3, $4)`,
        [title, description, category, toDoDay]);
    
    return result;  
}

export async function getActivities() {
    const result = await connection.query("SELECT * FROM activities");

    return result.rows;  
}

export async function updateActivity(activityId:number, activity: Activity) {
    const { title, description, category, toDoDay } = activity;
    const result = await connection.query(`
        UPDATE activities 
        SET title = $1, description = $2, category = $3, "toDoDay" = $4
        WHERE id = $5`,
        [title, description, category, toDoDay, activityId] );

    return result;
}

export async function deleteActivity(activityId: number) {
    const result = await connection.query(`
    DELETE FROM activities
    WHERE id = $1`,
    [activityId]);

    return result;
}