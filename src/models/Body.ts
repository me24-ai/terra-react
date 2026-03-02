export type TerraBodyPayload = {
  /** Optional client-provided identifier (e.g. ME24 guid) for round-tripping. */
  me24_id?: string | null;
  weight?: number; // kg
  height?: number; // cm
  bodyFatPercentage?: number; // %
  timestamp: string; // ISO8601
  userId: string;
};
