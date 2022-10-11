"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var Theme = function Theme(backgroundThemePrimary, contentThemePrimary, backgroundThemeSecondary, contentThemeSecondary) {
  var primaryTheme = function primaryTheme() {
    var backgroundPrimary = "#fafafa";
    var contentPrimary = "black";
    var backgroundSecondary = "#7dc8dd";
    var contentSecondary = "white";
    return {
      backgroundPrimary: backgroundPrimary,
      contentPrimary: contentPrimary,
      backgroundSecondary: backgroundSecondary,
      contentSecondary: contentSecondary
    };
  };

  var backgroundPrimary = backgroundThemePrimary && contentThemePrimary ? backgroundThemePrimary : primaryTheme().backgroundPrimary;
  var contentPrimary = contentThemePrimary && backgroundPrimary ? contentThemePrimary : primaryTheme().contentPrimary;
  var backgroundSecondary = backgroundThemeSecondary && contentThemeSecondary ? backgroundThemePrimary : primaryTheme().backgroundSecondary;
  var contentSecondary = contentThemeSecondary && backgroundThemeSecondary ? contentThemeSecondary : primaryTheme().contentSecondary;
  return {
    backgroundPrimary: backgroundPrimary,
    contentPrimary: contentPrimary,
    backgroundSecondary: backgroundSecondary,
    contentSecondary: contentSecondary
  };
};

Theme.propTypes = {
  contentTheme: _propTypes.default.string,
  backgroundThemePrimary: _propTypes.default.string,
  contentThemePrimary: _propTypes.default.string,
  backgroundThemeSecondary: _propTypes.default.string,
  contentThemeSecondary: _propTypes.default.string
};
var _default = Theme;
exports.default = _default;