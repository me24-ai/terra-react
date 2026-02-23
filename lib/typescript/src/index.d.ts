import { CustomPermissions as CustomPermissions_ } from './enums/CustomPermissions';
import { Connections as Connections_ } from './enums/Connections';
import { Activity as TerraActivityPayload } from './models/Activity';
import { TerraNutritionPayload } from './models/Nutrition';
import { TerraBodyPayload } from './models/Body';
import { TerraPlannedWorkout } from './models/PlannedWorkouts';
export type GetUserId = {
    success: boolean;
    userId: string | null;
};
export type SuccessMessage = {
    success: boolean;
    error: string | null;
};
export type DataMessage = {
    success: boolean;
    data: Object;
    error: string | null;
};
export interface ListDataMessage<T = any> {
    success?: boolean | null;
    data?: T[] | null;
    error?: string | null;
}
export declare function initTerra(devID: string, referenceId: string | null): Promise<SuccessMessage>;
export declare function initConnection(connection: Connections_, token: string, schedulerOn: boolean, customPermissions_?: CustomPermissions_[], startIntent?: string | null, customWritePermissions_?: CustomPermissions_[]): Promise<SuccessMessage>;
export declare function checkAuth(connection: Connections_, devID: string): Promise<Pick<SuccessMessage, 'success'>>;
export declare function getUserId(connection: Connections_): Promise<GetUserId>;
export declare function getBody(connection: Connections_, startDate: Date, endDate: Date, latestReading?: boolean, toWebhook?: boolean): Promise<DataMessage>;
export declare function getActivity(connection: Connections_, startDate: Date, endDate: Date, toWebhook?: boolean): Promise<DataMessage>;
export declare function getMenstruation(connection: Connections_, startDate: Date, endDate: Date, toWebhook?: boolean): Promise<DataMessage>;
export declare function getDaily(connection: Connections_, startDate: Date, endDate: Date, toWebhook?: boolean): Promise<DataMessage>;
export declare function getNutrition(connection: Connections_, startDate: Date, endDate: Date, toWebhook?: boolean): Promise<DataMessage>;
export declare function getSleep(connection: Connections_, startDate: Date, endDate: Date, toWebhook?: boolean): Promise<DataMessage>;
export declare function getAthlete(connection: Connections_, toWebhook?: boolean): any;
export declare function postActivity(connection: Connections_, payload: TerraActivityPayload): Promise<SuccessMessage>;
export declare function postNutrition(connection: Connections_, payload: TerraNutritionPayload): Promise<SuccessMessage>;
export declare function postBody(connection: Connections_, payload: TerraBodyPayload): Promise<SuccessMessage>;
export declare function getPlannedWorkouts<T = any>(connection: Connections_): Promise<ListDataMessage<T>>;
export declare function deletePlannedWorkout(connection: Connections_, id: string): Promise<SuccessMessage>;
export declare function completePlannedWorkout(connection: Connections_, id: string, at?: Date): Promise<SuccessMessage>;
export declare function postPlannedWorkout(connection: Connections_, payload: TerraPlannedWorkout): Promise<SuccessMessage>;
export declare function readGlucoseData(): Promise<Object>;
export declare function activateSensor(): Promise<Object>;
export declare function openHealthConnect(): void;
export declare function isHealthConnectAvailable(): Promise<boolean>;
export declare function grantedPermissions(): Promise<Array<string>>;
export declare function setIgnoredSources(ignoredSources: Array<String>): void;
export type HealthKitPermissionStatus = 'authorized' | 'denied' | 'not_determined' | 'unsupported' | 'unknown';
export type HealthKitPermissionsResult = {
    success: boolean;
    error?: string;
    write?: Record<string, HealthKitPermissionStatus>;
};
/**
 * iOS only – returns the current HealthKit **write** authorization status
 * for every type the app may write.
 */
export declare function getAllHealthKitPermissions(): Promise<HealthKitPermissionsResult>;
/**
 * iOS only – requests HealthKit **write** authorization for every type the
 * app may write. Returns `{ success: true }` if the system dialog was shown.
 */
export declare function requestAllHealthKitPermissions(): Promise<SuccessMessage>;
export type Activity = TerraActivityPayload;
export type Body = TerraBodyPayload;
export { Connections } from './enums/Connections';
export { CustomPermissions } from './enums/CustomPermissions';
export * from './models/PlannedWorkouts';
export type { TerraBodyPayload } from './models/Body';
