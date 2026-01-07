export type TerraNutritionPayload = {
  metadata?: {
    start_time?: string | null;
    end_time?: string | null;
  } | null;
  summary?: {
    macros?: {
      sodium_mg?: number | null;
      protein_g?: number | null;
      carbohydrates_g?: number | null;
      fiber_g?: number | null;
      cholesterol_mg?: number | null;
      fat_g?: number | null;
      saturated_fat_g?: number | null;
      trans_fat_g?: number | null;
      sugar_g?: number | null;
      calories?: number | null;
      alcohol_g?: number | null;
      net_carbohydrates_g?: number | null;
    } | null;
    water_ml?: number | null;
    drink_ml?: number | null;
  } | null;
};
