import Foundation
import TerraiOS


// At the moment we will only write rudimentary fields to HealthKit
// Namely: distance, calories, start time, end time, workout type and device
func convertToTerraActivityPayload(_ data: NSDictionary) -> TerraActivityData? {
    guard let metadata = data["metadata"] as? NSDictionary else {
        print("[TerraReact] postActivity converter: missing metadata")
        return nil
    }

    guard let deviceData = data["device_data"] as? NSDictionary else {
        print("[TerraReact] postActivity converter: missing device_data")
        return nil
    }

    let distanceData = data["distance_data"] as? NSDictionary
    let caloriesData = data["calories_data"] as? NSDictionary

    let startTimeStr = metadata["start_time"] as? String
    let endTimeStr = metadata["end_time"] as? String
    let actType = metadata["type"] as? Int
    let uploadType = metadata["upload_type"] as? Int
    let summaryId = metadata["summary_id"] as? String

    print("[TerraReact] postActivity metadata fields: start_time=\(startTimeStr ?? "nil") end_time=\(endTimeStr ?? "nil") type=\(String(describing: actType)) upload_type=\(String(describing: uploadType)) summary_id=\(summaryId ?? "nil")")

    // Test date parsing with ISO8601DateFormatter
    let fmt = ISO8601DateFormatter()
    fmt.formatOptions = [.withInternetDateTime, .withFractionalSeconds]
    if let st = startTimeStr {
        let parsed = fmt.date(from: st)
        print("[TerraReact] postActivity ISO8601 parse start_time: \(parsed != nil ? "OK → \(parsed!)" : "FAILED")")
    }
    if let et = endTimeStr {
        let parsed = fmt.date(from: et)
        print("[TerraReact] postActivity ISO8601 parse end_time: \(parsed != nil ? "OK → \(parsed!)" : "FAILED")")
    }

    // Also test with DateFormatter
    let df = DateFormatter()
    df.locale = Locale(identifier: "en_US_POSIX")
    df.timeZone = TimeZone(abbreviation: "UTC")
    for pattern in ["yyyy-MM-dd'T'HH:mm:ss.SSSZ", "yyyy-MM-dd'T'HH:mm:ss.SSSSSSZ", "yyyy-MM-dd'T'HH:mm:ss.SSSZZZZZ", "yyyy-MM-dd'T'HH:mm:ss.SSSSSSZZZZZ"] {
        df.dateFormat = pattern
        let result = startTimeStr.flatMap { df.date(from: $0) }
        print("[TerraReact] postActivity DateFormatter(\(pattern)) parse: \(result != nil ? "OK" : "FAILED")")
    }

    var distanceMeters: Double? = nil
    if let dd = distanceData, let summary = dd["summary"] as? NSDictionary {
        distanceMeters = summary["distance_meters"] as? Double
    }

    // Strip fractional seconds: "2026-04-01T17:06:46.927Z" → "2026-04-01T17:06:46Z"
    // The SDK's internal activity date parser may not handle fractional seconds
    let cleanStart = startTimeStr?.replacingOccurrences(of: #"\.\d+Z$"#, with: "Z", options: .regularExpression)
    let cleanEnd = endTimeStr?.replacingOccurrences(of: #"\.\d+Z$"#, with: "Z", options: .regularExpression)
    print("[TerraReact] postActivity cleaned dates: start=\(cleanStart ?? "nil") end=\(cleanEnd ?? "nil")")

    let netCalories = caloriesData?["net_activity_calories"] as? Double

    let activityData = TerraActivityData(
        metadata: .init(
            type: actType,
            end_time: cleanEnd,
            start_time: cleanStart,
            summary_id: nil,
            upload_type: nil
        ),
        device_data: .init(
            software_version: nil,
            manufacturer: nil,
            serial_number: nil,
            name: deviceData["name"] as? String,
            hardware_version: nil
        ),
        distance_data: .init(summary: .init(distance_meters: distanceMeters)),
        calories_data: .init(TerraCaloriesData(net_activity_calories: netCalories))
    )

    print("[TerraReact] postActivity converter: TerraActivityData built successfully")
    return activityData
}