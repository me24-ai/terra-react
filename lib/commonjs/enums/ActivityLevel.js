"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ActivityLevel = void 0;
let ActivityLevel = /*#__PURE__*/function (ActivityLevel) {
  ActivityLevel[ActivityLevel["UNKNOWN"] = 0] = "UNKNOWN";
  ActivityLevel[ActivityLevel["REST"] = 1] = "REST";
  ActivityLevel[ActivityLevel["INACTIVE"] = 2] = "INACTIVE";
  ActivityLevel[ActivityLevel["LOW_INTENSITY"] = 3] = "LOW_INTENSITY";
  ActivityLevel[ActivityLevel["MEDIUM_INTENSITY"] = 4] = "MEDIUM_INTENSITY";
  ActivityLevel[ActivityLevel["HIGH_INTENSITY"] = 5] = "HIGH_INTENSITY";
  return ActivityLevel;
}({});
exports.ActivityLevel = ActivityLevel;
//# sourceMappingURL=ActivityLevel.js.map