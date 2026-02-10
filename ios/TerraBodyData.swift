import Foundation
import TerraiOS

func convertToTerraBodyPayload(_ data: NSDictionary) -> TerraBodyData? {
    guard JSONSerialization.isValidJSONObject(data),
          let jsonData = try? JSONSerialization.data(withJSONObject: data, options: []) else {
        return nil
    }

    return try? JSONDecoder().decode(TerraBodyData.self, from: jsonData)
}
