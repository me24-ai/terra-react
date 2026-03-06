export type TerraBodyPayload = {
    /** Optional client-provided identifier (e.g. ME24 guid) for round-tripping. */
    me24_id?: string | null;
    weight?: number;
    height?: number;
    bodyFatPercentage?: number;
    timestamp: string;
    userId: string;
};
