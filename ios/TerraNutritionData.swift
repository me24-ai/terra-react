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
        micros: nil,
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
