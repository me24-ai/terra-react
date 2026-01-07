"use strict";
exports.__esModule = true;
var config_plugins_1 = require("@expo/config-plugins");
var withTerraBackgroundDelivery = function (config) {
    config = (0, config_plugins_1.withAppDelegate)(config, function (delegateConfig) {
        var contents = delegateConfig.modResults.contents;
        if (delegateConfig.modResults.language === 'swift') {
            if (!delegateConfig.modResults.contents.includes('import TerraiOS')) {
                delegateConfig.modResults.contents =
                    "import TerraiOS\n" + delegateConfig.modResults.contents;
            }
            if (!delegateConfig.modResults.contents.includes('Terra.setUpBackgroundDelivery()')) {
                var regex = /return super.application\(application, didFinishLaunchingWithOptions: launchOptions\)/;
                delegateConfig.modResults.contents =
                    delegateConfig.modResults.contents.replace(regex, function (match) { return "Terra.setUpBackgroundDelivery()\n  ".concat(match); });
            }
        }
        else {
            if (!contents.includes('#import <TerraiOS/TerraiOS-Swift.h>')) {
                delegateConfig.modResults.contents = contents.replace('#import "AppDelegate.h"', '#import "AppDelegate.h"\n#import <TerraiOS/TerraiOS-Swift.h>');
            }
            if (!contents.includes('[Terra setUpBackgroundDelivery];')) {
                var regex = /- \(BOOL\)application:\(UIApplication \*\)application didFinishLaunchingWithOptions:\(NSDictionary \*\)launchOptions\s*\{\n/;
                delegateConfig.modResults.contents =
                    delegateConfig.modResults.contents.replace(regex, function (match) { return "".concat(match, "  [Terra setUpBackgroundDelivery];\n"); });
            }
        }
        return delegateConfig;
    });
    return config;
};
var pkg = require('terra-react/package.json');
exports["default"] = (0, config_plugins_1.createRunOncePlugin)(withTerraBackgroundDelivery, pkg.name, pkg.version);
