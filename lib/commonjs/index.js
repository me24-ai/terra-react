"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  initTerra: true,
  initConnection: true,
  checkAuth: true,
  getUserId: true,
  getBody: true,
  getActivity: true,
  getMenstruation: true,
  getDaily: true,
  getNutrition: true,
  getSleep: true,
  getAthlete: true,
  postActivity: true,
  postNutrition: true,
  getPlannedWorkouts: true,
  deletePlannedWorkout: true,
  completePlannedWorkout: true,
  postPlannedWorkout: true,
  readGlucoseData: true,
  activateSensor: true,
  openHealthConnect: true,
  isHealthConnectAvailable: true,
  grantedPermissions: true,
  setIgnoredSources: true,
  CustomPermissions: true,
  Connections: true
};
Object.defineProperty(exports, "Connections", {
  enumerable: true,
  get: function () {
    return _Connections.Connections;
  }
});
Object.defineProperty(exports, "CustomPermissions", {
  enumerable: true,
  get: function () {
    return _CustomPermissions.CustomPermissions;
  }
});
exports.activateSensor = activateSensor;
exports.checkAuth = checkAuth;
exports.completePlannedWorkout = completePlannedWorkout;
exports.deletePlannedWorkout = deletePlannedWorkout;
exports.getActivity = getActivity;
exports.getAthlete = getAthlete;
exports.getBody = getBody;
exports.getDaily = getDaily;
exports.getMenstruation = getMenstruation;
exports.getNutrition = getNutrition;
exports.getPlannedWorkouts = getPlannedWorkouts;
exports.getSleep = getSleep;
exports.getUserId = getUserId;
exports.grantedPermissions = grantedPermissions;
exports.initConnection = initConnection;
exports.initTerra = initTerra;
exports.isHealthConnectAvailable = isHealthConnectAvailable;
exports.openHealthConnect = openHealthConnect;
exports.postActivity = postActivity;
exports.postNutrition = postNutrition;
exports.postPlannedWorkout = postPlannedWorkout;
exports.readGlucoseData = readGlucoseData;
exports.setIgnoredSources = setIgnoredSources;
var _reactNative = require("react-native");
var _CustomPermissions = require("./enums/CustomPermissions");
var _Connections = require("./enums/Connections");
var _PlannedWorkouts = require("./models/PlannedWorkouts");
Object.keys(_PlannedWorkouts).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _PlannedWorkouts[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _PlannedWorkouts[key];
    }
  });
});
const LINKING_ERROR = `The package 'terra-react' doesn't seem to be linked. Make sure: \n\n` + _reactNative.Platform.select({
  ios: "- You have run 'pod install'\n",
  default: ''
}) + '- You rebuilt the app after installing the package\n' + '- You are not using Expo managed workflow\n';
const TerraReact = _reactNative.NativeModules.TerraReact ? _reactNative.NativeModules.TerraReact : new Proxy({}, {
  get() {
    throw new Error(LINKING_ERROR);
  }
});
function ConnectionToString(connection) {
  switch (connection) {
    case _Connections.Connections.APPLE_HEALTH:
      return 'APPLE_HEALTH';
    case _Connections.Connections.FREESTYLE_LIBRE:
      return 'FREESTYLE_LIBRE';
    case _Connections.Connections.GOOGLE:
      return 'GOOGLE';
    case _Connections.Connections.SAMSUNG:
      return 'SAMSUNG';
    case _Connections.Connections.HEALTH_CONNECT:
      return 'HEALTH_CONNECT';
    default:
      return undefined;
  }
}
function CustomPermissions_ToString(cPermission) {
  switch (cPermission) {
    case _CustomPermissions.CustomPermissions.WORKOUT_TYPES:
      return 'WORKOUT_TYPES';
    case _CustomPermissions.CustomPermissions.ACTIVITY_SUMMARY:
      return 'ACTIVITY_SUMMARY';
    case _CustomPermissions.CustomPermissions.LOCATION:
      return 'LOCATION';
    case _CustomPermissions.CustomPermissions.CALORIES:
      return 'CALORIES';
    case _CustomPermissions.CustomPermissions.STEPS:
      return 'STEPS';
    case _CustomPermissions.CustomPermissions.HEART_RATE:
      return 'HEART_RATE';
    case _CustomPermissions.CustomPermissions.HEART_RATE_VARIABILITY:
      return 'HEART_RATE_VARIABILITY';
    case _CustomPermissions.CustomPermissions.VO2MAX:
      return 'VO2MAX';
    case _CustomPermissions.CustomPermissions.HEIGHT:
      return 'HEIGHT';
    case _CustomPermissions.CustomPermissions.ACTIVE_DURATIONS:
      return 'ACTIVE_DURATIONS';
    case _CustomPermissions.CustomPermissions.WEIGHT:
      return 'WEIGHT';
    case _CustomPermissions.CustomPermissions.FLIGHTS_CLIMBED:
      return 'FLIGHTS_CLIMBED';
    case _CustomPermissions.CustomPermissions.BMI:
      return 'BMI';
    case _CustomPermissions.CustomPermissions.BODY_FAT:
      return 'BODY_FAT';
    case _CustomPermissions.CustomPermissions.EXERCISE_DISTANCE:
      return 'EXERCISE_DISTANCE';
    case _CustomPermissions.CustomPermissions.GENDER:
      return 'GENDER';
    case _CustomPermissions.CustomPermissions.DATE_OF_BIRTH:
      return 'DATE_OF_BIRTH';
    case _CustomPermissions.CustomPermissions.BASAL_ENERGY_BURNED:
      return 'BASAL_ENERGY_BURNED';
    case _CustomPermissions.CustomPermissions.SWIMMING_SUMMARY:
      return 'SWIMMING_SUMMARY';
    case _CustomPermissions.CustomPermissions.RESTING_HEART_RATE:
      return 'RESTING_HEART_RATE';
    case _CustomPermissions.CustomPermissions.BLOOD_PRESSURE:
      return 'BLOOD_PRESSURE';
    case _CustomPermissions.CustomPermissions.BLOOD_GLUCOSE:
      return 'BLOOD_GLUCOSE';
    case _CustomPermissions.CustomPermissions.BODY_TEMPERATURE:
      return 'BODY_TEMPERATURE';
    case _CustomPermissions.CustomPermissions.MINDFULNESS:
      return 'MINDFULNESS';
    case _CustomPermissions.CustomPermissions.LEAN_BODY_MASS:
      return 'LEAN_BODY_MASS';
    case _CustomPermissions.CustomPermissions.OXYGEN_SATURATION:
      return 'OXYGEN_SATURATION';
    case _CustomPermissions.CustomPermissions.SLEEP_ANALYSIS:
      return 'SLEEP_ANALYSIS';
    case _CustomPermissions.CustomPermissions.RESPIRATORY_RATE:
      return 'RESPIRATORY_RATE';
    case _CustomPermissions.CustomPermissions.NUTRITION_SODIUM:
      return 'NUTRITION_SODIUM';
    case _CustomPermissions.CustomPermissions.NUTRITION_PROTEIN:
      return 'NUTRITION_PROTEIN';
    case _CustomPermissions.CustomPermissions.NUTRITION_CARBOHYDRATES:
      return 'NUTRITION_CARBOHYDRATES';
    case _CustomPermissions.CustomPermissions.NUTRITION_FIBRE:
      return 'NUTRITION_FIBRE';
    case _CustomPermissions.CustomPermissions.NUTRITION_FAT_TOTAL:
      return 'NUTRITION_FAT_TOTAL';
    case _CustomPermissions.CustomPermissions.NUTRITION_SUGAR:
      return 'NUTRITION_SUGAR';
    case _CustomPermissions.CustomPermissions.NUTRITION_VITAMIN_C:
      return 'NUTRITION_VITAMIN_C';
    case _CustomPermissions.CustomPermissions.NUTRITION_VITAMIN_A:
      return 'NUTRITION_VITAMIN_A';
    case _CustomPermissions.CustomPermissions.NUTRITION_CALORIES:
      return 'NUTRITION_CALORIES';
    case _CustomPermissions.CustomPermissions.NUTRITION_WATER:
      return 'NUTRITION_WATER';
    case _CustomPermissions.CustomPermissions.NUTRITION_CHOLESTEROL:
      return 'NUTRITION_CHOLESTEROL';
    case _CustomPermissions.CustomPermissions.MENSTRUATION:
      return 'MENSTRUATION';
    case _CustomPermissions.CustomPermissions.INTERBEAT:
      return 'INTERBEAT';
    case _CustomPermissions.CustomPermissions.SPEED:
      return 'SPEED';
    case _CustomPermissions.CustomPermissions.POWER:
      return 'POWER';
  }
}
function initTerra(devID, referenceId) {
  return TerraReact.initTerra(devID, referenceId);
}
function initConnection(connection, token, schedulerOn) {
  let customPermissions_ = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  let startIntent = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
  return TerraReact.initConnection(ConnectionToString(connection), token, schedulerOn, customPermissions_.map(p => CustomPermissions_ToString(p)), startIntent);
}
function checkAuth(connection, devID) {
  return TerraReact.checkAuth(ConnectionToString(connection), devID);
}
function getUserId(connection) {
  return TerraReact.getUserId(ConnectionToString(connection));
}
function getBody(connection, startDate, endDate) {
  let latestReading = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  let toWebhook = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
  return new Promise((resolve, reject) => {
    TerraReact.getBody(ConnectionToString(connection), startDate.toISOString(), endDate.toISOString(), latestReading, toWebhook).then(d => {
      const data = {
        success: d.success,
        data: d.data !== undefined ? JSON.parse(d.data) : null,
        error: d.error
      };
      resolve(data);
    }).catch(e => {
      reject(e);
    });
  });
}
function getActivity(connection, startDate, endDate) {
  let toWebhook = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  return new Promise((resolve, reject) => {
    TerraReact.getActivity(ConnectionToString(connection), startDate.toISOString(), endDate.toISOString(), toWebhook).then(d => {
      const data = {
        success: d.success,
        data: d.data !== undefined ? JSON.parse(d.data) : null,
        error: d.error
      };
      resolve(data);
    }).catch(e => {
      reject(e);
    });
  });
}
function getMenstruation(connection, startDate, endDate) {
  let toWebhook = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  return new Promise((resolve, reject) => {
    TerraReact.getMenstruation(ConnectionToString(connection), startDate.toISOString(), endDate.toISOString(), toWebhook).then(d => {
      const data = {
        success: d.success,
        data: d.data !== undefined ? JSON.parse(d.data) : null,
        error: d.error
      };
      resolve(data);
    }).catch(e => {
      reject(e);
    });
  });
}
function getDaily(connection, startDate, endDate) {
  let toWebhook = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  return new Promise((resolve, reject) => {
    TerraReact.getDaily(ConnectionToString(connection), startDate.toISOString(), endDate.toISOString(), toWebhook).then(d => {
      const data = {
        success: d.success,
        data: d.data !== undefined ? JSON.parse(d.data) : null,
        error: d.error
      };
      resolve(data);
    }).catch(e => {
      reject(e);
    });
  });
}
function getNutrition(connection, startDate, endDate) {
  let toWebhook = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  return new Promise((resolve, reject) => {
    TerraReact.getNutrition(ConnectionToString(connection), startDate.toISOString(), endDate.toISOString(), toWebhook).then(d => {
      const data = {
        success: d.success,
        data: d.data !== undefined ? JSON.parse(d.data) : null,
        error: d.error
      };
      resolve(data);
    }).catch(e => {
      reject(e);
    });
  });
}
function getSleep(connection, startDate, endDate) {
  let toWebhook = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  return new Promise((resolve, reject) => {
    TerraReact.getSleep(ConnectionToString(connection), startDate.toISOString(), endDate.toISOString(), toWebhook).then(d => {
      const data = {
        success: d.success,
        data: d.data !== undefined ? JSON.parse(d.data) : null,
        error: d.error
      };
      resolve(data);
    }).catch(e => {
      reject(e);
    });
  });
}
function getAthlete(connection) {
  let toWebhook = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  return TerraReact.getAthlete(ConnectionToString(connection), toWebhook);
}

/*
@Only availble on iOS
*/
function postActivity(connection, payload) {
  return new Promise((resolve, reject) => {
    TerraReact.postActivity(ConnectionToString(connection), payload).then(d => {
      resolve({
        success: d.success,
        error: d.error
      });
    }).catch(e => {
      reject(e);
    });
  });
}

/*
@Only available on iOS
*/
function postNutrition(connection, payload) {
  if (_reactNative.Platform.OS !== 'ios') {
    return Promise.resolve({
      success: false,
      error: 'postNutrition is only available on iOS'
    });
  }
  return new Promise((resolve, reject) => {
    TerraReact.postNutrition(ConnectionToString(connection), payload).then(d => {
      resolve({
        success: d.success,
        error: d.error
      });
    }).catch(e => {
      reject(e);
    });
  });
}
function getPlannedWorkouts(connection) {
  return new Promise((resolve, reject) => {
    TerraReact.getPlannedWorkouts(ConnectionToString(connection)).then(d => {
      const data = {
        success: d.success,
        data: d.data !== undefined ? JSON.parse(d.data) : null,
        error: d.error
      };
      resolve(data);
    }).catch(e => reject(e));
  });
}
function deletePlannedWorkout(connection, id) {
  return new Promise((resolve, reject) => {
    TerraReact.deletePlannedWorkout(ConnectionToString(connection), id).then(d => {
      const res = {
        success: d.success,
        error: d.error
      };
      resolve(res);
    }).catch(e => reject(e));
  });
}
function completePlannedWorkout(connection, id, at) {
  return new Promise((resolve, reject) => {
    TerraReact.completePlannedWorkout(ConnectionToString(connection), id, (at ?? new Date()).toISOString()).then(d => {
      const res = {
        success: d.success,
        error: d.error
      };
      resolve(res);
    }).catch(e => reject(e));
  });
}
function postPlannedWorkout(connection, payload) {
  return new Promise((resolve, reject) => {
    TerraReact.postPlannedWorkout(ConnectionToString(connection), JSON.stringify(payload.toJson())).then(d => {
      const res = {
        success: d.success,
        error: d.error
      };
      resolve(res);
    }).catch(e => reject(e));
  });
}
function readGlucoseData() {
  return new Promise((resolve, reject) => {
    TerraReact.readGlucoseData().then(d => {
      resolve(JSON.parse(d));
    }).catch(e => {
      reject(e);
    });
  });
}
function activateSensor() {
  return new Promise((resolve, reject) => {
    TerraReact.activateSensor().then(d => {
      resolve(JSON.parse(d));
    }).catch(e => {
      reject(e);
    });
  });
}
function openHealthConnect() {
  TerraReact.openHealthConnect().catch(e => {
    console.log(e);
    return;
  });
}
function isHealthConnectAvailable() {
  return TerraReact.isHealthConnectAvailable();
}
function grantedPermissions() {
  return TerraReact.grantedPermissions();
}
function setIgnoredSources(ignoredSources) {
  TerraReact.setIgnoredSources(ignoredSources).then();
}
//# sourceMappingURL=index.js.map