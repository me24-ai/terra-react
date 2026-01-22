import Foundation
import TerraiOS

private func toDouble(_ value: Any?) -> Double? {
    if let v = value as? Double { return v }
    if let v = value as? Int { return Double(v) }
    if let v = value as? NSNumber { return v.doubleValue }
    if let v = value as? String { return Double(v) }
    return nil
}

func convertToTerraNutritionPayload(_ data: NSDictionary) -> TerraNutritionData? {
    let metadataDict = data["metadata"] as? NSDictionary
    let summaryDict = data["summary"] as? NSDictionary

    var meals: [TerraMealData] = []
    if let me24Id = metadataDict?["me24_id"] as? String {
        if !me24Id.trimmingCharacters(in: .whitespacesAndNewlines).isEmpty {
            var meal = TerraMealData()
            meal.id = me24Id
            meals.append(meal)
        }
    }

    let meta = TerraNutritonMetaData(
        start_time: metadataDict?["start_time"] as? String,
        end_time: metadataDict?["end_time"] as? String
    )

    let macrosDict = (summaryDict?["macros"] as? NSDictionary)

    var micros: TerraMicrosModel? = nil
    if let microsDict = summaryDict?["micros"] as? NSDictionary {
        micros = TerraMicrosModel(
            biotin_mg: toDouble(microsDict["biotin_mg"]),
            caffeine_mg: toDouble(microsDict["caffeine_mg"]),
            chloride_mg: toDouble(microsDict["chloride_mg"]),
            chromium_mg: toDouble(microsDict["chromium_mg"]),
            copper_mg: toDouble(microsDict["copper_mg"]),
            calcium_mg: toDouble(microsDict["calcium_mg"]),
            folate_mg: toDouble(microsDict["folate_mg"]),
            folic_acid_mg: toDouble(microsDict["folic_acid_mg"]),
            iodine_mg: toDouble(microsDict["iodine_mg"]),
            iron_mg: toDouble(microsDict["iron_mg"]),
            magnesium_mg: toDouble(microsDict["magnesium_mg"]),
            manganese_mg: toDouble(microsDict["manganese_mg"]),
            molybdenum_mg: toDouble(microsDict["molybdenum_mg"]),
            niacin_mg: toDouble(microsDict["niacin_mg"]),
            pantothenic_acid_mg: toDouble(microsDict["pantothenic_acid_mg"]),
            phosphorus_mg: toDouble(microsDict["phosphorus_mg"]),
            potassium_mg: toDouble(microsDict["potassium_mg"]),
            riboflavin_mg: toDouble(microsDict["riboflavin_mg"]),
            selenium_mg: toDouble(microsDict["selenium_mg"]),
            thiamin_mg: toDouble(microsDict["thiamin_mg"]),
            vitamin_A_mg: toDouble(microsDict["vitamin_A_mg"]),
            vitamin_B12_mg: toDouble(microsDict["vitamin_B12_mg"]),
            vitamin_B6_mg: toDouble(microsDict["vitamin_B6_mg"]),
            vitamin_C_mg: toDouble(microsDict["vitamin_C_mg"]),
            vitamin_D_mg: toDouble(microsDict["vitamin_D_mg"]),
            vitamin_E_mg: toDouble(microsDict["vitamin_E_mg"]),
            vitamin_K_mg: toDouble(microsDict["vitamin_K_mg"]),
            zinc_mg: toDouble(microsDict["zinc_mg"]),
            monounsaturated_fat_g: toDouble(microsDict["monounsaturated_fat_g"]),
            polyunsaturated_fat_g: toDouble(microsDict["polyunsaturated_fat_g"]),
            vitamin_D3_mg: toDouble(microsDict["vitamin_D3_mg"]),
            vitamin_D2_mg: toDouble(microsDict["vitamin_D2_mg"]),
            starch_g: toDouble(microsDict["starch_g"]),
            omega3_g: toDouble(microsDict["omega3_g"]),
            omega6_g: toDouble(microsDict["omega6_g"]),
            cystine_g: toDouble(microsDict["cystine_g"]),
            histidine_g: toDouble(microsDict["histidine_g"]),
            isoleucine_g: toDouble(microsDict["isoleucine_g"]),
            leucine_g: toDouble(microsDict["leucine_g"]),
            lysine_g: toDouble(microsDict["lysine_g"]),
            methionine_g: toDouble(microsDict["methionine_g"]),
            phenylalanine_g: toDouble(microsDict["phenylalanine_g"]),
            threonine_g: toDouble(microsDict["threonine_g"]),
            tryptophan_g: toDouble(microsDict["tryptophan_g"]),
            tyrosine_g: toDouble(microsDict["tyrosine_g"]),
            valine_g: toDouble(microsDict["valine_g"])
        )
    }

    let macros = TerraMacrosModel(
        sodium_mg: toDouble(macrosDict?["sodium_mg"]),
        protein_g: toDouble(macrosDict?["protein_g"]),
        carbohydrates_g: toDouble(macrosDict?["carbohydrates_g"]),
        fiber_g: toDouble(macrosDict?["fiber_g"]),
        cholesterol_mg: toDouble(macrosDict?["cholesterol_mg"]),
        fat_g: toDouble(macrosDict?["fat_g"]),
        saturated_fat_g: toDouble(macrosDict?["saturated_fat_g"]),
        trans_fat_g: toDouble(macrosDict?["trans_fat_g"]),
        sugar_g: toDouble(macrosDict?["sugar_g"]),
        calories: toDouble(macrosDict?["calories"]),
        alcohol_g: toDouble(macrosDict?["alcohol_g"]),
        net_carbohydrates_g: toDouble(macrosDict?["net_carbohydrates_g"])
    )

    let summary = TerraNutritonSummary(
        macros: macros,
        micros: micros,
        water_ml: toDouble(summaryDict?["water_ml"]),
        drink_ml: toDouble(summaryDict?["drink_ml"])
    )

    return TerraNutritionData(
        meals: meals,
        summary: summary,
        metadata: meta,
        drink_samples: []
    )
}
