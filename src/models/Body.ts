export type TerraBodyPayload = {
  weight?: number; // kg
  height?: number; // cm
  bodyFatPercentage?: number; // %
  timestamp: string; // ISO8601
  userId: string;
};
