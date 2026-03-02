import Foundation
import TerraiOS

private func toBodyDouble(_ value: Any?) -> Double? {
    if let v = value as? Double { return v }
    if let v = value as? Int { return Double(v) }
    if let v = value as? NSNumber { return v.doubleValue }
    if let v = value as? String { return Double(v) }
    return nil
}

func convertToTerraBodyPayload(_ data: NSDictionary) -> TerraBodyData? {
    let startTime = data["start_time"] as? String
    let endTime   = data["end_time"]   as? String

    let sample = MeasurementDataSample(
        measurement_time: startTime,
        bodyfat_percentage: toBodyDouble(data["bodyfat_percentage"]),
        BMI: toBodyDouble(data["BMI"]),
        muscle_mass_g: toBodyDouble(data["muscle_mass_g"]),
        skin_fold_mm: toBodyDouble(data["skin_fold_mm"]),
        BMR: toBodyDouble(data["BMR"]),
        height_cm: toBodyDouble(data["height_cm"]),
        estimated_fitness_age: toBodyDouble(data["estimated_fitness_age"]),
        bone_mass_g: toBodyDouble(data["bone_mass_g"]),
        water_percentage: toBodyDouble(data["water_percentage"]),
        RMR: toBodyDouble(data["RMR"]),
        weight_kg: toBodyDouble(data["weight_kg"]),
        lean_mass_g: toBodyDouble(data["lean_mass_g"]),
        insulin_units: toBodyDouble(data["insulin_units"]),
        insulin_type: data["insulin_type"] as? String,
        urine_color: data["urine_color"] as? String
    )

    let measurements = TerraMeasurementData(measurements: [sample])

    let meta = TerraBodyMetaData(
        start_time: startTime,
        end_time: endTime
    )

    let deviceData: TerraDeviceData?
    if let dd = data["device_data"] as? NSDictionary {
        deviceData = TerraDeviceData(
            software_version: dd["software_version"] as? String,
            manufacturer: dd["manufacturer"] as? String,
            serial_number: dd["serial_number"] as? String,
            name: dd["name"] as? String,
            hardware_version: dd["hardware_version"] as? String
        )
    } else {
        deviceData = nil
    }

    return TerraBodyData(
        metadata: meta,
        measurements_data: measurements,
        device_data: deviceData
    )
}
