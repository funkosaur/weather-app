(self["webpackChunkweather_app"] = self["webpackChunkweather_app"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./reset.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__);
// Imports




var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/Roboto-Regular.woff */ "./src/assets/fonts/Roboto-Regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/Roboto-Black.woff */ "./src/assets/fonts/Roboto-Black.woff"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n  scroll-behavior: smooth;\n}\n\n@font-face {\n  font-family: Roboto;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff\");\n}\n@font-face {\n  font-family: RobotoBlack;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff\");\n}\nbody {\n  width: 100%;\n  font-family: Roboto;\n  overflow-y: scroll;\n  scrollbar-gutter: auto;\n  background-color: rgba(255, 255, 255, 0.15);\n}\nbody ::-webkit-scrollbar {\n  width: 2em;\n  height: 0.8em;\n}\nbody ::-webkit-scrollbar-track {\n  background: Gray;\n  border-radius: 100vw;\n  margin-block: 0.5em;\n}\nbody ::-webkit-scrollbar-thumb {\n  background: lightGray;\n  border: 0.25em solid lightGray;\n  border-radius: 100vw;\n}\nbody ::-webkit-scrollbar-thumb:hover {\n  background: lightGray;\n}\n\n.headerDiv {\n  grid-column: 1/4;\n  grid-row: 1/2;\n  display: grid;\n  grid-template-columns: 0.3fr minmax(auto, 80em) 0.3fr;\n  height: 73vh;\n  animation: fadeInText 1s;\n}\n\n.header {\n  grid-column: 2/4;\n  grid-row: 1/2;\n  display: grid;\n  grid-template-columns: 0.4fr 1fr 0.4fr;\n  grid-template-rows: 0.3fr 1fr 0.8fr;\n}\n.header .searchBarContainer {\n  grid-column: 2/3;\n  grid-row: 1/2;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n}\n.header .searchBarContainer #searchBar {\n  width: 80%;\n  height: 40px;\n  border: none;\n  outline: none;\n  font-size: 16px;\n  text-indent: 10px;\n  border-bottom-left-radius: 4px;\n  border-top-left-radius: 4px;\n}\n.header .searchBarContainer .buttonDiv {\n  height: 40px;\n  width: 10%;\n}\n.header .searchBarContainer .buttonDiv .searchButton {\n  width: 100%;\n  height: 100%;\n  border: none;\n  background-color: #eb6f4c;\n  color: white;\n  border-bottom-right-radius: 4px;\n  border-top-right-radius: 4px;\n  font-family: Roboto;\n  font-size: 15px;\n}\n.header .searchBarContainer .searchBarError {\n  border: 5px solid red;\n}\n.header .searchBarContainer .errorMessage {\n  position: absolute;\n  top: 4.7rem;\n  color: red;\n  display: none;\n  text-align: center;\n  animation: fadeIn 0.2s;\n}\n.header .currentTemperatureDiv {\n  grid-column: 1/2;\n  grid-row: 2/3;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.header .currentTemperatureDiv .currentTemperatureDiv2 {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 80%;\n  width: 70%;\n  border-radius: 8px;\n  background-color: rgba(255, 255, 255, 0.15);\n  backdrop-filter: blur(8px);\n  color: white;\n  font-size: 16px;\n}\n.header .currentTemperatureDiv .currentTemperatureDiv2 .highAndLow {\n  display: flex;\n  justify-content: space-around;\n  width: 100%;\n  height: 15%;\n  text-align: center;\n}\n.header .currentTemperatureDiv .currentTemperatureDiv2 .highAndLow #highTemp {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.header .currentTemperatureDiv .currentTemperatureDiv2 .highAndLow #lowTemp {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.header .currentTemperatureDiv .currentTemperatureDiv2 .currentTemperature {\n  width: 100%;\n  height: 70%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 70px;\n}\n.header .currentTemperatureDiv .currentTemperatureDiv2 .feelsLikeDiv {\n  height: 15%;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.header .currentLocation {\n  grid-column: 2/3;\n  grid-row: 2/3;\n  font-family: RobotoBlack;\n  font-size: 36px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.header .currentLocation .locationContainer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(255, 255, 255, 0.15);\n  backdrop-filter: blur(8px);\n  color: white;\n  border-radius: 8px;\n  width: 70%;\n  height: 130px;\n  flex-wrap: wrap;\n  padding: 10px;\n  text-align: center;\n  flex-direction: column;\n  justify-content: space-around;\n}\n.header .currentLocation .locationContainer .switchContainer {\n  display: flex;\n  flex-direction: row;\n  /* Rounded sliders */\n}\n.header .currentLocation .locationContainer .switchContainer #Celsius {\n  margin-right: 10px;\n}\n.header .currentLocation .locationContainer .switchContainer #Farenheit {\n  margin-left: 10px;\n}\n.header .currentLocation .locationContainer .switchContainer .switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n.header .currentLocation .locationContainer .switchContainer .switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.header .currentLocation .locationContainer .switchContainer .slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgb(48, 47, 47);\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n.header .currentLocation .locationContainer .switchContainer .slider:before {\n  position: absolute;\n  content: \"\";\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n.header .currentLocation .locationContainer .switchContainer input:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}\n.header .currentLocation .locationContainer .switchContainer .slider.round {\n  border-radius: 34px;\n}\n.header .currentLocation .locationContainer .switchContainer .slider.round:before {\n  border-radius: 50%;\n}\n.header .currentWeather {\n  grid-column: 3/4;\n  grid-row: 2/3;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.header .currentWeather .containerDiv {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 80%;\n  width: 70%;\n  border-radius: 8px;\n  background-color: rgba(255, 255, 255, 0.15);\n  backdrop-filter: blur(8px);\n  color: white;\n}\n.header .currentWeather .containerDiv .weatherIconDiv {\n  width: 100%;\n  height: 80%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.header .currentWeather .containerDiv .weatherIconDiv .weatherIcon {\n  height: 85%;\n}\n.header .currentWeather .containerDiv .weatherExplanation {\n  width: 100%;\n  height: 20%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n.header .currentHourlyWeather {\n  grid-column: 1/4;\n  grid-row: 3/4;\n  overflow-x: scroll;\n  white-space: nowrap;\n  border-top-left-radius: 24px;\n  border-top-right-radius: 24px;\n  border-bottom-left-radius: 12px;\n  border-bottom-right-radius: 12px;\n  display: flex;\n  padding-top: 20px;\n}\n.header .currentHourlyWeather .hourlyCards {\n  font-family: Roboto;\n  height: 90%;\n  min-width: 85px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  justify-content: space-around;\n  flex-direction: column;\n  margin-left: 15px;\n  margin-right: 15px;\n  font-size: 16px;\n  background-color: rgb(48, 47, 47);\n  margin-top: 10px;\n  border-radius: 8px;\n  color: white;\n}\n.header .currentHourlyWeather .hourlyCards .hourlyTemp {\n  animation: fadeInText 1s;\n}\n.header .currentHourlyWeather .hourlyCards .hourlyIcon {\n  width: 60px;\n  height: 60px;\n}\n.header .currentHourlyWeather .hourlyCards .hourlyPercip {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-size: 14px;\n}\n\n@keyframes fadeInText {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n.footer {\n  grid-column: 1/4;\n  grid-row: 2/3;\n  background-color: rgb(49, 49, 49);\n  color: white;\n  height: 70%;\n}\n.footer .dailyTempTitle {\n  width: 100%;\n  height: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(17, 16, 16, 0.938);\n  border-bottom: 2px solid black;\n}\n.footer .dailyTemperatureDiv {\n  background-color: black;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n}\n.footer .dailyTemperatureDiv .dailyCards {\n  background-color: rgb(17, 16, 16);\n  width: 270px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  padding-top: 5px;\n  padding-left: 20px;\n  padding-right: 20px;\n  padding-bottom: 15px;\n  margin: 10px;\n}\n.footer .dailyTemperatureDiv .dailyCards .dailyTitle {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n}\n.footer .dailyTemperatureDiv .dailyCards .dailyTitle .dayAndForecast {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  align-items: flex-start;\n  width: 100%;\n}\n.footer .dailyTemperatureDiv .dailyCards .dailyTitle .weatherIcon {\n  width: 60px;\n  height: 60px;\n}\n.footer .dailyTemperatureDiv .dailyCards .dailyTitle .iconAndTemperature {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.footer .dailyTemperatureDiv .dailyCards .dailyTitle .highAndLowTemp {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  animation: fadeInText 1s;\n}\n.footer .dailyTemperatureDiv .dailyCards .dailyDetails {\n  padding-left: 5px;\n  padding-right: 5px;\n  width: 100%;\n  height: 95px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.footer .dailyTemperatureDiv .dailyCards .dailyDetails .precipitationDiv,\n.footer .dailyTemperatureDiv .dailyCards .dailyDetails .windDiv,\n.footer .dailyTemperatureDiv .dailyCards .dailyDetails .humidityDiv,\n.footer .dailyTemperatureDiv .dailyCards .dailyDetails .uvIndexDiv,\n.footer .dailyTemperatureDiv .dailyCards .dailyDetails .sunriseSunset {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  justify-content: space-between;\n}\n.footer .dailyTemperatureDiv .dailyCards .dailyDetails .windDiv .windPercentage {\n  animation: fadeInText 1s;\n}\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n    top: 6rem;\n  }\n  100% {\n    opacity: 0.5;\n    top: 0rem;\n  }\n}\n@media only screen and (max-width: 1036px) {\n  .headerDiv {\n    height: 90vh;\n  }\n  .header {\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 0.4fr 0.4fr 0.8fr 0.8fr;\n  }\n  .header .searchBarContainer {\n    grid-column: 1/3;\n  }\n  .header .searchBarContainer .errorMessage {\n    font-size: 14px;\n    top: 0.2rem;\n    animation: none;\n  }\n  .header .currentLocation {\n    grid-column: 1/3;\n  }\n  .header .currentTemperatureDiv {\n    grid-row: 3/4;\n    grid-column: 1/2;\n  }\n  .header .currentTemperatureDiv .currentTemperatureDiv2 {\n    padding-top: 5px;\n    padding-bottom: 5px;\n  }\n  .header .currentWeather {\n    grid-row: 3/4;\n    grid-column: 2/3;\n  }\n  .header .currentWeather .containerDiv .weatherIconDiv {\n    height: 75%;\n  }\n  .header .currentWeather .containerDiv .weatherExplanation {\n    height: 25%;\n  }\n  .header .currentHourlyWeather {\n    grid-row: 4/5;\n    padding-top: 15px;\n  }\n  .header .currentHourlyWeather .hourlyCards {\n    padding-top: 5px;\n    padding-bottom: 5px;\n  }\n}\n@media only screen and (max-width: 570px) {\n  body {\n    position: relative;\n    display: grid;\n    grid-template-rows: 90vh 10vh;\n  }\n  .headerDiv {\n    grid-row: 1/2;\n    position: fixed;\n    min-height: 90vh;\n  }\n  #searchBar {\n    width: 70% !important;\n    height: 30px !important;\n  }\n  .buttonDiv {\n    width: 20% !important;\n    height: 30px !important;\n  }\n  .currentTemperatureDiv2 .highAndLow {\n    font-size: 14px;\n  }\n  .currentTemperatureDiv2 .currentTemperature {\n    font-size: 60px !important;\n  }\n  .currentTemperatureDiv2 .feelsLikeDiv {\n    font-size: 14px;\n  }\n  .footer {\n    grid-row: 2/3;\n    z-index: 10;\n    position: relative;\n    height: 100%;\n  }\n}", "",{"version":3,"sources":["webpack://./src/styles/style.scss"],"names":[],"mappings":"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","sourcesContent":["@import './reset.css';\n\n* {\n  box-sizing: border-box;\n  scroll-behavior: smooth;\n}\n\n@font-face {\n  font-family: Roboto;\n  src: url('../assets/fonts/Roboto-Regular.woff') format('woff');\n}\n\n@font-face {\n  font-family: RobotoBlack;\n  src: url('../assets/fonts/Roboto-Black.woff') format('woff');\n}\n\n$Gray: rgb(48, 47, 47, 1);\n$lightGray: rgb(255, 255, 255, 0.15);\n\n@mixin flexCenter {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n@mixin fadeInText{\n  animation: fadeInText 1s;\n}\n\n@mixin scrollBar {\n  ::-webkit-scrollbar {\n    width: 2em;\n    height: 0.8em;\n  }\n\n  ::-webkit-scrollbar-track {\n    background: Gray;\n    border-radius: 100vw;\n    margin-block: 0.5em;\n  }\n\n  ::-webkit-scrollbar-thumb {\n    background: lightGray;\n    border: 0.25em solid lightGray;\n    border-radius: 100vw;\n  }\n\n  ::-webkit-scrollbar-thumb:hover {\n    background: lightGray;\n  }\n}\n\nbody {\n  width: 100%;\n  font-family: Roboto;\n  overflow-y: scroll;\n  scrollbar-gutter: auto;\n  @include scrollBar();\n  background-color: $lightGray;\n}\n\n.headerDiv {\n  grid-column: 1/4;\n  grid-row: 1/2;\n  display: grid;\n  grid-template-columns: 0.3fr minmax(auto, 80em) 0.3fr;\n  height: 73vh;\n  @include fadeInText();\n}\n\n.header {\n  grid-column: 2/4;\n  grid-row: 1/2;\n  display: grid;\n  grid-template-columns: 0.4fr 1fr 0.4fr;\n  grid-template-rows: 0.3fr 1fr 0.8fr;\n\n  .searchBarContainer {\n    grid-column: 2/3;\n    grid-row: 1/2;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n\n    #searchBar {\n      width: 80%;\n      height: 40px;\n      border: none;\n      outline: none;\n      font-size: 16px;\n      text-indent: 10px;\n      border-bottom-left-radius: 4px;\n      border-top-left-radius: 4px;\n    }\n    .buttonDiv {\n      height: 40px;\n      width: 10%;\n      .searchButton {\n        width: 100%;\n        height: 100%;\n        border: none;\n        background-color: #eb6f4c;\n        color: white;\n        border-bottom-right-radius: 4px;\n        border-top-right-radius: 4px;\n        font-family: Roboto;\n        font-size: 15px;\n      }\n    }\n    .searchBarError {\n      border: 5px solid red;\n    }\n    .errorMessage {\n      position: absolute;\n      top: 4.7rem;\n      color: red;\n      display: none;\n      text-align: center;\n      animation: fadeIn 0.2s;\n    }\n  }\n\n  .currentTemperatureDiv {\n    grid-column: 1/2;\n    grid-row: 2/3;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n\n    .currentTemperatureDiv2 {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n      height: 80%;\n      width: 70%;\n      border-radius: 8px;\n      background-color: $lightGray;\n      backdrop-filter: blur(8px);\n      color: white;\n      font-size: 16px;\n\n      .highAndLow {\n        display: flex;\n        justify-content: space-around;\n        width: 100%;\n        height: 15%;\n        text-align: center;\n        #highTemp {\n          @include flexCenter();\n        }\n        #lowTemp {\n          @include flexCenter();\n        }\n      }\n\n      .currentTemperature {\n        width: 100%;\n        height: 70%;\n        @include flexCenter();\n        font-size: 70px;\n      }\n\n      .feelsLikeDiv {\n        height: 15%;\n        width: 100%;\n        @include flexCenter();\n      }\n    }\n  }\n\n  .currentLocation {\n    grid-column: 2/3;\n    grid-row: 2/3;\n    font-family: RobotoBlack;\n    font-size: 36px;\n    @include flexCenter();\n\n    .locationContainer {\n      @include flexCenter();\n      background-color: $lightGray;\n      backdrop-filter: blur(8px);\n      color: white;\n      border-radius: 8px;\n      width: 70%;\n      height: 130px;\n      flex-wrap: wrap;\n      padding: 10px;\n      text-align: center;\n      flex-direction: column;\n      justify-content: space-around;\n\n      .switchContainer {\n        display: flex;\n        flex-direction: row;\n\n        #Celsius {\n          margin-right: 10px;\n        }\n\n        #Farenheit {\n          margin-left: 10px;\n        }\n\n        .switch {\n          position: relative;\n          display: inline-block;\n          width: 60px;\n          height: 34px;\n        }\n\n        .switch input {\n          opacity: 0;\n          width: 0;\n          height: 0;\n        }\n\n        .slider {\n          position: absolute;\n          cursor: pointer;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          background-color: $Gray;\n          -webkit-transition: 0.4s;\n          transition: 0.4s;\n        }\n\n        .slider:before {\n          position: absolute;\n          content: '';\n          height: 26px;\n          width: 26px;\n          left: 4px;\n          bottom: 4px;\n          background-color: white;\n          -webkit-transition: 0.4s;\n          transition: 0.4s;\n        }\n\n        input:checked + .slider:before {\n          -webkit-transform: translateX(26px);\n          -ms-transform: translateX(26px);\n          transform: translateX(26px);\n        }\n\n        /* Rounded sliders */\n        .slider.round {\n          border-radius: 34px;\n        }\n\n        .slider.round:before {\n          border-radius: 50%;\n        }\n      }\n    }\n  }\n\n  .currentWeather {\n    grid-column: 3/4;\n    grid-row: 2/3;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    .containerDiv {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n      height: 80%;\n      width: 70%;\n      border-radius: 8px;\n      background-color: $lightGray;\n      backdrop-filter: blur(8px);\n      color: white;\n      .weatherIconDiv {\n        width: 100%;\n        height: 80%;\n        @include flexCenter();\n        .weatherIcon {\n          height: 85%;\n        }\n      }\n      .weatherExplanation {\n        width: 100%;\n        height: 20%;\n        @include flexCenter();\n        text-align: center;\n      }\n    }\n  }\n\n  .currentHourlyWeather {\n    grid-column: 1/4;\n    grid-row: 3/4;\n    overflow-x: scroll;\n    white-space: nowrap;\n    border-top-left-radius: 24px;\n    border-top-right-radius: 24px;\n    border-bottom-left-radius: 12px;\n    border-bottom-right-radius: 12px;\n    display: flex;\n    padding-top: 20px;\n    .hourlyCards {\n      font-family: Roboto;\n      height: 90%;\n      min-width: 85px;\n      @include flexCenter();\n      justify-content: space-around;\n      flex-direction: column;\n      margin-left: 15px;\n      margin-right: 15px;\n      font-size: 16px;\n      background-color: $Gray;\n      margin-top: 10px;\n      border-radius: 8px;\n      color: white;\n      .hourlyTemp {\n        @include fadeInText();\n      }\n      .hourlyIcon {\n        width: 60px;\n        height: 60px;\n      }\n      .hourlyPercip {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        font-size: 14px;\n      }\n    }\n  }\n}\n\n@keyframes fadeInText {\n  0% { opacity: 0; }\n  100% { opacity: 1; }\n}\n\n.footer {\n  grid-column: 1/4;\n  grid-row: 2/3;\n  background-color: rgb(49, 49, 49);\n  color: white;\n  height: 70%;\n  .dailyTempTitle {\n    width: 100%;\n    height: 50px;\n    @include flexCenter();\n    background-color: rgba(17, 16, 16, 0.938);\n    border-bottom: 2px solid black;\n  }\n  .dailyTemperatureDiv {\n    background-color: black;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: center;\n    .dailyCards {\n      background-color: rgba(17, 16, 16);\n      width: 270px;\n      @include flexCenter();\n      flex-direction: column;\n      padding-top: 5px;\n      padding-left: 20px;\n      padding-right: 20px;\n      padding-bottom: 15px;\n      margin: 10px;\n      .dailyTitle {\n        @include flexCenter();\n        justify-content: space-between;\n        width: 100%;\n        .dayAndForecast {\n          @include flexCenter();\n          flex-direction: column;\n          align-items: flex-start;\n          width: 100%;\n        }\n        .weatherIcon {\n          width: 60px;\n          height: 60px;\n        }\n        .iconAndTemperature {\n          @include flexCenter();\n        }\n        .highAndLowTemp {\n          @include flexCenter();\n          flex-direction: column;\n          @include fadeInText();\n        }\n      }\n      .dailyDetails {\n        padding-left: 5px;\n        padding-right: 5px;\n        width: 100%;\n        height: 95px;\n        display: flex;\n        flex-direction: column;\n        justify-content: space-between;\n        .precipitationDiv,\n        .windDiv,\n        .humidityDiv,\n        .uvIndexDiv,\n        .sunriseSunset {\n          @include flexCenter();\n          justify-content: space-between;\n        }\n        .windDiv{\n          .windPercentage {\n            @include fadeInText();\n          }\n        }\n      }\n    }\n  }\n}\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n    top: 6rem;\n  }\n  100% {\n    opacity: 0.5;\n    top: 0rem;\n  }\n}\n\n@media only screen and (max-width: 1036px) {\n  .headerDiv {\n    height: 90vh;\n  }\n  .header {\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 0.4fr 0.4fr 0.8fr 0.8fr;\n\n    .searchBarContainer {\n      grid-column: 1/3;\n\n      .errorMessage {\n        font-size: 14px;\n        top: 0.2rem;\n        animation: none;\n      }\n    }\n\n    .currentLocation {\n      grid-column: 1/3;\n    }\n\n    .currentTemperatureDiv {\n      grid-row: 3/4;\n      grid-column: 1/2;\n      .currentTemperatureDiv2 {\n        padding-top: 5px;\n        padding-bottom: 5px;\n      }\n    }\n    .currentWeather {\n      grid-row: 3/4;\n      grid-column: 2/3;\n      .containerDiv {\n        .weatherIconDiv {\n          height: 75%;\n        }\n        .weatherExplanation {\n          height: 25%;\n        }\n      }\n    }\n    .currentHourlyWeather {\n      grid-row: 4/5;\n      padding-top: 15px;\n      .hourlyCards {\n        padding-top: 5px;\n        padding-bottom: 5px;\n      }\n    }\n  }\n}\n\n@media only screen and (max-width: 570px) {\n  body {\n    position: relative;\n    display: grid;\n    grid-template-rows: 90vh 10vh;\n  }\n\n  .headerDiv {\n    grid-row: 1/2;\n    position: fixed;\n    min-height: 90vh;\n  }\n  #searchBar {\n    width: 70% !important;\n    height: 30px !important;\n  }\n\n  .buttonDiv {\n    width: 20% !important;\n    height: 30px !important;\n  }\n  .currentTemperatureDiv2 {\n    .highAndLow {\n      font-size: 14px;\n    }\n    .currentTemperature {\n      font-size: 60px !important;\n    }\n    .feelsLikeDiv {\n      font-size: 14px;\n    }\n  }\n  .footer {\n    grid-row: 2/3;\n    z-index: 10;\n    position: relative;\n    height: 100%;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n", "",{"version":3,"sources":["webpack://./src/styles/reset.css"],"names":[],"mappings":"AAAA;;;CAGC;;AAED;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAiFE,SAAS;EACT,UAAU;EACV,SAAS;EACT,eAAe;EACf,aAAa;EACb,wBAAwB;AAC1B;AACA,gDAAgD;AAChD;;;;;;;;;;;EAWE,cAAc;AAChB;AACA;EACE,cAAc;AAChB;AACA;;EAEE,gBAAgB;AAClB;AACA;;EAEE,YAAY;AACd;AACA;;;;EAIE,WAAW;EACX,aAAa;AACf;AACA;EACE,yBAAyB;EACzB,iBAAiB;AACnB","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/degrees-to-direction/lib.js":
/*!**************************************************!*\
  !*** ./node_modules/degrees-to-direction/lib.js ***!
  \**************************************************/
/***/ ((module) => {

module.exports = function(d) {
  if (typeof d !== 'number' || isNaN(d)) {
    return -1;
  }

  // keep within the range: 0 <= d < 360
  d = d % 360;

  if (11.25 <= d && d < 33.75) {
    return "NNE";
  } else if (33.75 <= d && d < 56.25) {
    return "NE";
  } else if (56.25 <= d && d < 78.75) {
    return "ENE";
  } else if (78.75 <= d && d < 101.25) {
    return "E";
  } else if (101.25 <= d && d < 123.75) {
    return "ESE";
  } else if (123.75 <= d && d < 146.25) {
    return "SE";
  } else if (146.25 <= d && d < 168.75) {
    return "SSE";
  } else if (168.75 <= d && d < 191.25) {
    return "S";
  } else if (191.25 <= d && d < 213.75) {
    return "SSW";
  } else if (213.75 <= d && d < 236.25) {
    return "SW";
  } else if (236.25 <= d && d < 258.75) {
    return "WSW";
  } else if (258.75 <= d && d < 281.25) {
    return "W";
  } else if (281.25 <= d && d < 303.75) {
    return "WNW";
  } else if (303.75 <= d && d < 326.25) {
    return "NW";
  } else if (326.25 <= d && d < 348.75) {
    return "NNW";
  } else {
    return "N";
  }
};


/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/functions/apiFunctions.js":
/*!***************************************!*\
  !*** ./src/functions/apiFunctions.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
async function getLocation(cityName) {
  try {
    const URL = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=24c481fc9b73c68737718db2c14b1211`;
    const response = await fetch(URL);
    const locationData = await response.json();
    // Returns the first index of the array of cities given by the API
    return locationData[0];
  } catch (err) {
    return false;
  }
}

async function getWeatherForLocation(cityName) {
  try {
    const locationData = await getLocation(`${cityName}`);
    // Extracting latitude and longitude from location data to retrieve the weather
    const { lat, lon } = locationData;
    const tempCheckbox = document.querySelector('#tempCheckbox');
    // Check if celsius or farenheit is selected
    const unitType = tempCheckbox.checked ? 'imperial' : 'metric';
    const URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&units=${unitType}&appid=24c481fc9b73c68737718db2c14b1211`;
    const response = await fetch(URL);
    const weatherData = await response.json();
    // Assigning the name and country to the object because they are not included in the response
    weatherData.name = locationData.name;
    weatherData.country = locationData.country;
    return weatherData;
  } catch (err) {
    return false;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeatherForLocation);


/***/ }),

/***/ "./src/functions/changeMainWeatherFunctions.js":
/*!*****************************************************!*\
  !*** ./src/functions/changeMainWeatherFunctions.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeCityName": () => (/* binding */ changeCityName),
/* harmony export */   "changeCityTemperature": () => (/* binding */ changeCityTemperature),
/* harmony export */   "changeWeatherIcon": () => (/* binding */ changeWeatherIcon)
/* harmony export */ });
/* harmony import */ var _utility_capitalizeEachLetterInWord__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility/capitalizeEachLetterInWord */ "./src/functions/utility/capitalizeEachLetterInWord.js");


function changeCityTemperature(weatherData) {
  const mainTemperature = document.querySelector('.currentTemperature');
  const highTemperature = document.querySelector('#highTemp');
  const lowTemperature = document.querySelector('#lowTemp');
  const feelsLikeTemperature = document.querySelector('.feelsLikeDiv');

  mainTemperature.textContent = `${Math.floor(weatherData.current.temp)}°`;
  highTemperature.textContent = `High: ${Math.floor(
    weatherData.daily[0].temp.max,
  )}°`;
  lowTemperature.textContent = `Low: ${Math.floor(
    weatherData.daily[0].temp.min,
  )}°`;
  feelsLikeTemperature.textContent = `Feels Like: ${Math.floor(
    weatherData.current.feels_like,
  )}°`;
}

function changeCityName(weatherData) {
  const cityName = document.querySelector('#cityName');
  cityName.textContent = `${weatherData.name}, ${weatherData.country}`;
}

function changeWeatherIcon(weatherData) {
  const weatherIcon = document.querySelector('.weatherIcon');
  const weatherExplanation = document.querySelector('.weatherExplanation');
  // Changes the icon with the ones provided by openweather
  weatherIcon.src = `https://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}@2x.png`;
  // Capitalizes the letters in the given word
  const capitalizedWeatherExplanation = (0,_utility_capitalizeEachLetterInWord__WEBPACK_IMPORTED_MODULE_0__["default"])(
    weatherData.current.weather[0].description,
  );
  weatherExplanation.textContent = capitalizedWeatherExplanation;
}




/***/ }),

/***/ "./src/functions/createDailyCards.js":
/*!*******************************************!*\
  !*** ./src/functions/createDailyCards.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utility_convertUnixTime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility/convertUnixTime */ "./src/functions/utility/convertUnixTime.js");


const d2d = __webpack_require__(/*! degrees-to-direction */ "./node_modules/degrees-to-direction/lib.js");

const tempCheckbox = document.querySelector('#tempCheckbox');

function createDailyCards(dailyWeatherData) {
  const dailyTemperatureDiv = document.querySelector('.dailyTemperatureDiv');
  const dailyCards = document.createElement('div');
  dailyCards.classList.add('dailyCards');
  dailyTemperatureDiv.appendChild(dailyCards);

  const dailyForecast = document.createElement('div');
  dailyForecast.classList.add('dailyTitle');
  dailyCards.appendChild(dailyForecast);

  const dayAndForecast = document.createElement('div');
  dayAndForecast.classList.add('dayAndForecast');
  dailyForecast.appendChild(dayAndForecast);

  const daySpan = document.createElement('span');
  daySpan.textContent = (0,_utility_convertUnixTime__WEBPACK_IMPORTED_MODULE_0__["default"])(dailyWeatherData.dt).convertToDays();
  dayAndForecast.appendChild(daySpan);

  const forecastSpan = document.createElement('span');
  forecastSpan.textContent = `${dailyWeatherData.weather[0].description}`;
  dayAndForecast.appendChild(forecastSpan);

  const iconAndTemperature = document.createElement('div');
  iconAndTemperature.classList.add('iconAndTemperature');
  dailyForecast.appendChild(iconAndTemperature);

  const weatherIcon = document.createElement('img');
  weatherIcon.classList.add('weatherIcon');
  // Sets the source of the icon to the icons from the openweather api icons
  weatherIcon.src = `https://openweathermap.org/img/wn/${dailyWeatherData.weather[0].icon}@2x.png`;
  iconAndTemperature.appendChild(weatherIcon);

  const highAndLowTemp = document.createElement('div');
  highAndLowTemp.classList.add('highAndLowTemp');
  iconAndTemperature.appendChild(highAndLowTemp);

  const highTempSpan = document.createElement('span');
  highTempSpan.textContent = `${Math.round(dailyWeatherData.temp.max)}°`;
  highAndLowTemp.appendChild(highTempSpan);

  const lowTempSpan = document.createElement('span');
  lowTempSpan.textContent = `${Math.round(dailyWeatherData.temp.min)}°`;
  highAndLowTemp.appendChild(lowTempSpan);

  const dailyDetails = document.createElement('ul');
  dailyDetails.classList.add('dailyDetails');
  dailyCards.appendChild(dailyDetails);

  const precipitationDiv = document.createElement('li');
  precipitationDiv.classList.add('precipitationDiv');
  dailyDetails.appendChild(precipitationDiv);

  const precipitationTitle = document.createElement('span');
  precipitationTitle.textContent = 'Precipitation:';
  precipitationDiv.appendChild(precipitationTitle);

  const precipitationPercentage = document.createElement('span');
  // Rounding the percipitation number and multiplying by 100  to make it a percentage
  precipitationPercentage.textContent = `${Math.floor(
    dailyWeatherData.pop * 100,
  )}%`;
  precipitationDiv.appendChild(precipitationPercentage);

  const windDiv = document.createElement('li');
  windDiv.classList.add('windDiv');
  dailyDetails.appendChild(windDiv);

  const windTitle = document.createElement('span');
  windTitle.textContent = 'Wind:';
  windDiv.appendChild(windTitle);

  const windPercentage = document.createElement('span');
  windPercentage.classList.add('windPercentage');
  const unitType = tempCheckbox.checked ? 'm/h' : 'km/h';
  // Sets the wind speed dependent of the metric system selected
  // And uses the degrees to direction library to display the direction of the wind
  windPercentage.textContent = `${
    dailyWeatherData.wind_speed
  } ${unitType} ${d2d(dailyWeatherData.wind_deg)}`;
  windDiv.appendChild(windPercentage);

  const humidityDiv = document.createElement('li');
  humidityDiv.classList.add('humidityDiv');
  dailyDetails.appendChild(humidityDiv);

  const humidityTitle = document.createElement('span');
  humidityTitle.textContent = 'Humidity:';
  humidityDiv.appendChild(humidityTitle);

  const humidityPercentage = document.createElement('span');
  humidityPercentage.textContent = `${dailyWeatherData.humidity}%`;
  humidityDiv.appendChild(humidityPercentage);

  const uvIndexDiv = document.createElement('li');
  uvIndexDiv.classList.add('uvIndexDiv');
  dailyDetails.appendChild(uvIndexDiv);

  const uvIndexTitle = document.createElement('span');
  uvIndexTitle.textContent = 'UV Index';
  uvIndexDiv.appendChild(uvIndexTitle);

  const uvIndex = document.createElement('span');
  uvIndex.textContent = `${dailyWeatherData.uvi}`;
  uvIndexDiv.appendChild(uvIndex);

  const sunriseSunsetDiv = document.createElement('li');
  sunriseSunsetDiv.classList.add('sunriseSunset');
  dailyDetails.appendChild(sunriseSunsetDiv);

  const sunriseSunsetTitle = document.createElement('span');
  sunriseSunsetTitle.textContent = 'Sunrise/Sunset';
  sunriseSunsetDiv.appendChild(sunriseSunsetTitle);

  const sunriseSunset = document.createElement('span');
  sunriseSunset.textContent = `${(0,_utility_convertUnixTime__WEBPACK_IMPORTED_MODULE_0__["default"])(
    dailyWeatherData.sunrise,
  ).convertToHours()}/${(0,_utility_convertUnixTime__WEBPACK_IMPORTED_MODULE_0__["default"])(
    dailyWeatherData.sunset,
  ).convertToHours()}`;
  sunriseSunsetDiv.appendChild(sunriseSunset);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createDailyCards);


/***/ }),

/***/ "./src/functions/createHourlyCards.js":
/*!********************************************!*\
  !*** ./src/functions/createHourlyCards.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utility_convertUnixTime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility/convertUnixTime */ "./src/functions/utility/convertUnixTime.js");


function createHourlyCards(hourlyWeatherData) {
  const currentHourlyWeather = document.querySelector('.currentHourlyWeather');
  const hourlyCards = document.createElement('div');
  hourlyCards.classList.add('hourlyCards');
  currentHourlyWeather.appendChild(hourlyCards);

  const hourlyTemp = document.createElement('div');
  hourlyTemp.classList.add('hourlyTemp');
  hourlyTemp.textContent = `${Math.floor(hourlyWeatherData.temp)}°`;
  hourlyCards.appendChild(hourlyTemp);

  const hourlyIcon = document.createElement('img');
  hourlyIcon.classList.add('hourlyIcon');
  // Sets the source of the icon to the icons from the openweather api icons
  hourlyIcon.src = `https://openweathermap.org/img/wn/${hourlyWeatherData.weather[0].icon}@2x.png`;
  hourlyCards.appendChild(hourlyIcon);

  const hourlyPercip = document.createElement('div');
  hourlyPercip.classList.add('hourlyPercip');
  hourlyCards.appendChild(hourlyPercip);

  const hourlyPercipSpan = document.createElement('span');
  hourlyPercipSpan.textContent = 'Percip:';
  hourlyPercip.appendChild(hourlyPercipSpan);

  const hourlyPercipSpanPercent = document.createElement('span');
  // Rounding the percipitation number and multiplying by 100  to make it a percentage
  hourlyPercipSpanPercent.textContent = `${Math.floor(
    hourlyWeatherData.pop * 100,
  )}%`;
  hourlyPercip.appendChild(hourlyPercipSpanPercent);

  const hourlyHour = document.createElement('div');
  hourlyHour.classList.add('hourlyHour');
  // converts the unix time to regular time and returns just the hours
  hourlyHour.textContent = (0,_utility_convertUnixTime__WEBPACK_IMPORTED_MODULE_0__["default"])(
    hourlyWeatherData.dt,
  ).convertToHours();
  hourlyCards.appendChild(hourlyHour);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHourlyCards);


/***/ }),

/***/ "./src/functions/errorHandling.js":
/*!****************************************!*\
  !*** ./src/functions/errorHandling.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "errorHandler": () => (/* binding */ errorHandler),
/* harmony export */   "noError": () => (/* binding */ noError)
/* harmony export */ });
const searchBar = document.querySelector('#searchBar');
const errorMessage = document.querySelector('.errorMessage');
const searchButton = document.querySelector('.searchButton');

function errorHandler() {
  searchBar.style.outline = '2px solid red';
  searchButton.style.outline = '2px solid red';
  errorMessage.style.display = 'block';
}

function noError() {
  searchBar.style.outline = 'none';
  searchButton.style.outline = 'none';
  errorMessage.style.display = 'none';
}




/***/ }),

/***/ "./src/functions/eventListeners.js":
/*!*****************************************!*\
  !*** ./src/functions/eventListeners.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apiFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiFunctions */ "./src/functions/apiFunctions.js");
/* harmony import */ var _changeMainWeatherFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./changeMainWeatherFunctions */ "./src/functions/changeMainWeatherFunctions.js");
/* harmony import */ var _utility_deleteItemsInDiv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utility/deleteItemsInDiv */ "./src/functions/utility/deleteItemsInDiv.js");
/* harmony import */ var _createHourlyCards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createHourlyCards */ "./src/functions/createHourlyCards.js");
/* harmony import */ var _createDailyCards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createDailyCards */ "./src/functions/createDailyCards.js");
/* harmony import */ var _weatherBackgroundChange__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./weatherBackgroundChange */ "./src/functions/weatherBackgroundChange.js");
/* harmony import */ var _errorHandling__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./errorHandling */ "./src/functions/errorHandling.js");








const searchBar = document.querySelector('#searchBar');
const searchButton = document.querySelector('.searchButton');
const currentHourlyWeather = document.querySelector('.currentHourlyWeather');
const dailyTemperatureDiv = document.querySelector('.dailyTemperatureDiv');
const temperatureSwitch = document.querySelector('.slider');
const cityName = document.querySelector('#cityName');

function renderWeather(cityValue) {
  // Gets the weather to the given location and renders the whole webpage with that information.
  // Calls all the functions throughout the files to render everything and handle errors
  (0,_apiFunctions__WEBPACK_IMPORTED_MODULE_0__["default"])(cityValue)
    .then((currentWeatherData) => {
      (0,_weatherBackgroundChange__WEBPACK_IMPORTED_MODULE_5__["default"])(currentWeatherData);
      (0,_changeMainWeatherFunctions__WEBPACK_IMPORTED_MODULE_1__.changeCityTemperature)(currentWeatherData);
      (0,_changeMainWeatherFunctions__WEBPACK_IMPORTED_MODULE_1__.changeCityName)(currentWeatherData);
      (0,_changeMainWeatherFunctions__WEBPACK_IMPORTED_MODULE_1__.changeWeatherIcon)(currentWeatherData);
      (0,_utility_deleteItemsInDiv__WEBPACK_IMPORTED_MODULE_2__["default"])(currentHourlyWeather);
      for (let i = 0; i < 24; i += 1) {
        (0,_createHourlyCards__WEBPACK_IMPORTED_MODULE_3__["default"])(currentWeatherData.hourly[i]);
      }
      (0,_utility_deleteItemsInDiv__WEBPACK_IMPORTED_MODULE_2__["default"])(dailyTemperatureDiv);
      for (let i = 1; i < 8; i += 1) {
        (0,_createDailyCards__WEBPACK_IMPORTED_MODULE_4__["default"])(currentWeatherData.daily[i]);
      }
      (0,_errorHandling__WEBPACK_IMPORTED_MODULE_6__.noError)();
    })
    .catch(() => {
      (0,_errorHandling__WEBPACK_IMPORTED_MODULE_6__.errorHandler)();
    });
}

searchButton.addEventListener('click', (e) => {
  // Renders the weather from the location in the search bar
  e.preventDefault();
  if (searchBar.value === '') {
    return;
  }
  renderWeather(searchBar.value);
  searchBar.value = '';
});
temperatureSwitch.addEventListener('click', () => {
  // Renders the weather from the previously searched location
  renderWeather(cityName.textContent);
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderWeather);


/***/ }),

/***/ "./src/functions/utility/capitalizeEachLetterInWord.js":
/*!*************************************************************!*\
  !*** ./src/functions/utility/capitalizeEachLetterInWord.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function capitalizeEachLetterInWord(wordString) {
  return wordString
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
    .join(' ');
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (capitalizeEachLetterInWord);


/***/ }),

/***/ "./src/functions/utility/convertUnixTime.js":
/*!**************************************************!*\
  !*** ./src/functions/utility/convertUnixTime.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function convertUnixTime(unixTime) {
  const normalDate = new Date(unixTime * 1000);

  function convertToHours() {
    return normalDate.toTimeString().slice(0, 5);
  }

  function convertToDays() {
    switch (normalDate.toDateString().slice(0, 3)) {
      case 'Mon':
        return 'Monday';

      case 'Tue':
        return 'Tuesday';

      case 'Wed':
        return 'Wednesday';

      case 'Thu':
        return 'Thursday';

      case 'Fri':
        return 'Friday';

      case 'Sat':
        return 'Saturday';

      case 'Sun':
        return 'Sunday';

      default:
        return 'Unknown';
    }
  }

  return { convertToHours, convertToDays };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (convertUnixTime);


/***/ }),

/***/ "./src/functions/utility/deleteItemsInDiv.js":
/*!***************************************************!*\
  !*** ./src/functions/utility/deleteItemsInDiv.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function deleteItemsInDiv(items) {
  while (items.firstChild) items.removeChild(items.firstChild);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deleteItemsInDiv);


/***/ }),

/***/ "./src/functions/weatherBackgroundChange.js":
/*!**************************************************!*\
  !*** ./src/functions/weatherBackgroundChange.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_images_broken_clouds_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/images/broken-clouds.jpg */ "./src/assets/images/broken-clouds.jpg");
/* harmony import */ var _assets_images_clear_sky_day_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/clear-sky-day.jpg */ "./src/assets/images/clear-sky-day.jpg");
/* harmony import */ var _assets_images_clear_sky_night_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/clear-sky-night.jpg */ "./src/assets/images/clear-sky-night.jpg");
/* harmony import */ var _assets_images_few_clouds_day_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/images/few-clouds-day.jpg */ "./src/assets/images/few-clouds-day.jpg");
/* harmony import */ var _assets_images_few_clouds_night_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/images/few-clouds-night.jpg */ "./src/assets/images/few-clouds-night.jpg");
/* harmony import */ var _assets_images_fog_day_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/images/fog-day.jpg */ "./src/assets/images/fog-day.jpg");
/* harmony import */ var _assets_images_fog_night_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/images/fog-night.jpg */ "./src/assets/images/fog-night.jpg");
/* harmony import */ var _assets_images_rain_day_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/images/rain-day.jpg */ "./src/assets/images/rain-day.jpg");
/* harmony import */ var _assets_images_rain_night_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/images/rain-night.jpg */ "./src/assets/images/rain-night.jpg");
/* harmony import */ var _assets_images_scattered_clouds_day_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/images/scattered-clouds-day.jpg */ "./src/assets/images/scattered-clouds-day.jpg");
/* harmony import */ var _assets_images_scattered_clouds_night_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/images/scattered-clouds-night.jpg */ "./src/assets/images/scattered-clouds-night.jpg");
/* harmony import */ var _assets_images_snow_day_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/images/snow-day.jpg */ "./src/assets/images/snow-day.jpg");
/* harmony import */ var _assets_images_snow_night_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../assets/images/snow-night.jpg */ "./src/assets/images/snow-night.jpg");
/* harmony import */ var _assets_images_thunderstorm_day_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../assets/images/thunderstorm-day.jpg */ "./src/assets/images/thunderstorm-day.jpg");
/* harmony import */ var _assets_images_thunderstorm_night_jpg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../assets/images/thunderstorm-night.jpg */ "./src/assets/images/thunderstorm-night.jpg");
















function chooseBackground(weatherData) {
  // Gets the background corresponding to the current weather through the weather icon
  switch (weatherData.current.weather[0].icon) {
    case '01d':
      return _assets_images_clear_sky_day_jpg__WEBPACK_IMPORTED_MODULE_1__;
    case '01n':
      return _assets_images_clear_sky_night_jpg__WEBPACK_IMPORTED_MODULE_2__;
    case '02d':
      return _assets_images_few_clouds_day_jpg__WEBPACK_IMPORTED_MODULE_3__;
    case '02n':
      return _assets_images_few_clouds_night_jpg__WEBPACK_IMPORTED_MODULE_4__;
    case '03d':
      return _assets_images_scattered_clouds_day_jpg__WEBPACK_IMPORTED_MODULE_9__;
    case '03n':
      return _assets_images_scattered_clouds_night_jpg__WEBPACK_IMPORTED_MODULE_10__;
    case '04d':
      return _assets_images_broken_clouds_jpg__WEBPACK_IMPORTED_MODULE_0__;
    case '04n':
      return _assets_images_scattered_clouds_night_jpg__WEBPACK_IMPORTED_MODULE_10__;
    case '09d' || 0:
      return _assets_images_rain_day_jpg__WEBPACK_IMPORTED_MODULE_7__;
    case '09n' || 0:
      return _assets_images_rain_night_jpg__WEBPACK_IMPORTED_MODULE_8__;
    case '11d':
      return _assets_images_thunderstorm_day_jpg__WEBPACK_IMPORTED_MODULE_13__;
    case '11n':
      return _assets_images_thunderstorm_night_jpg__WEBPACK_IMPORTED_MODULE_14__;
    case '13d':
      return _assets_images_snow_day_jpg__WEBPACK_IMPORTED_MODULE_11__;
    case '13n':
      return _assets_images_snow_night_jpg__WEBPACK_IMPORTED_MODULE_12__;
    case '50d':
      return _assets_images_fog_day_jpg__WEBPACK_IMPORTED_MODULE_5__;
    case '50n':
      return _assets_images_fog_night_jpg__WEBPACK_IMPORTED_MODULE_6__;
    default:
      return _assets_images_clear_sky_day_jpg__WEBPACK_IMPORTED_MODULE_1__;
  }
}

function changeBackgroundWeather(weatherData) {
  const header = document.querySelector('.headerDiv');
  const iconBackground = chooseBackground(weatherData);
  header.style.background = `url(${iconBackground}) no-repeat center center`;
  header.style.backgroundSize = 'cover';
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (changeBackgroundWeather);


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.scss */ "./src/styles/style.scss");
/* harmony import */ var _functions_eventListeners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions/eventListeners */ "./src/functions/eventListeners.js");



(0,_functions_eventListeners__WEBPACK_IMPORTED_MODULE_1__["default"])('London');


/***/ }),

/***/ "./src/assets/fonts/Roboto-Black.woff":
/*!********************************************!*\
  !*** ./src/assets/fonts/Roboto-Black.woff ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "9a94235561494618c0e9.woff";

/***/ }),

/***/ "./src/assets/fonts/Roboto-Regular.woff":
/*!**********************************************!*\
  !*** ./src/assets/fonts/Roboto-Regular.woff ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "755dd4f3935688012767.woff";

/***/ }),

/***/ "./src/assets/images/broken-clouds.jpg":
/*!*********************************************!*\
  !*** ./src/assets/images/broken-clouds.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ab02328976e41f7d1b5c.jpg";

/***/ }),

/***/ "./src/assets/images/clear-sky-day.jpg":
/*!*********************************************!*\
  !*** ./src/assets/images/clear-sky-day.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "4ed845138c5f4994036d.jpg";

/***/ }),

/***/ "./src/assets/images/clear-sky-night.jpg":
/*!***********************************************!*\
  !*** ./src/assets/images/clear-sky-night.jpg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "50df0e873b66c94f8c57.jpg";

/***/ }),

/***/ "./src/assets/images/few-clouds-day.jpg":
/*!**********************************************!*\
  !*** ./src/assets/images/few-clouds-day.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b09c696947f64254ca9d.jpg";

/***/ }),

/***/ "./src/assets/images/few-clouds-night.jpg":
/*!************************************************!*\
  !*** ./src/assets/images/few-clouds-night.jpg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b3438ad011effffc4d6c.jpg";

/***/ }),

/***/ "./src/assets/images/fog-day.jpg":
/*!***************************************!*\
  !*** ./src/assets/images/fog-day.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "2f022464c91ea53c04d9.jpg";

/***/ }),

/***/ "./src/assets/images/fog-night.jpg":
/*!*****************************************!*\
  !*** ./src/assets/images/fog-night.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "5176851099489b3e68f4.jpg";

/***/ }),

/***/ "./src/assets/images/rain-day.jpg":
/*!****************************************!*\
  !*** ./src/assets/images/rain-day.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "c85c29de094f5759a937.jpg";

/***/ }),

/***/ "./src/assets/images/rain-night.jpg":
/*!******************************************!*\
  !*** ./src/assets/images/rain-night.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "c6b0df45b79a04f549da.jpg";

/***/ }),

/***/ "./src/assets/images/scattered-clouds-day.jpg":
/*!****************************************************!*\
  !*** ./src/assets/images/scattered-clouds-day.jpg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "97b5d9ee17f54ea1463a.jpg";

/***/ }),

/***/ "./src/assets/images/scattered-clouds-night.jpg":
/*!******************************************************!*\
  !*** ./src/assets/images/scattered-clouds-night.jpg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f00226310d03b42f30f5.jpg";

/***/ }),

/***/ "./src/assets/images/snow-day.jpg":
/*!****************************************!*\
  !*** ./src/assets/images/snow-day.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d0a67a64ef146acfa5a6.jpg";

/***/ }),

/***/ "./src/assets/images/snow-night.jpg":
/*!******************************************!*\
  !*** ./src/assets/images/snow-night.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "3b804775b962f7bafe14.jpg";

/***/ }),

/***/ "./src/assets/images/thunderstorm-day.jpg":
/*!************************************************!*\
  !*** ./src/assets/images/thunderstorm-day.jpg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "1342549de88e4b12c0fa.jpg";

/***/ }),

/***/ "./src/assets/images/thunderstorm-night.jpg":
/*!**************************************************!*\
  !*** ./src/assets/images/thunderstorm-night.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "acb843d9259ce0dcc732.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsWUFBWSxPQUFPLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsWUFBWSxZQUFZLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLGFBQWEsWUFBWSxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFlBQVksTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFlBQVksV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxZQUFZLFlBQVksVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsWUFBWSxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsWUFBWSxXQUFXLFdBQVcsV0FBVyxVQUFVLFlBQVksWUFBWSxXQUFXLFVBQVUsTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLE9BQU8sTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLE1BQU0sV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsWUFBWSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxZQUFZLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsWUFBWSxVQUFVLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxZQUFZLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsWUFBWSxZQUFZLE1BQU0sS0FBSyxXQUFX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QixrQkFBa0IsQ0FBSztBQUN2QixhQUFhLHdEQUFLO0FBQ2xCLGtCQUFrQixDQUFLO0FBQ3ZCLGFBQWEsMERBQUs7QUFDbEI7QUFDQSxhQUFhLGlFQUFhO0FBQzFCO0FBQ0EsYUFBYSxtRUFBYTtBQUMxQjtBQUNBLGFBQWEseURBQUs7QUFDbEI7QUFDQSxhQUFhLDJEQUFLO0FBQ2xCO0FBQ0EsYUFBYSx1REFBSTtBQUNqQjtBQUNBLGFBQWEseURBQUk7QUFDakI7QUFDQSxhQUFhLDZEQUFTO0FBQ3RCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLGVBQWU7QUFDbEQ7QUFDQTs7QUFFQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDL0RWO0FBQzBCOztBQUV2RCxxRUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlcy9zdHlsZS5zY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlcy9yZXNldC5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RlZ3JlZXMtdG8tZGlyZWN0aW9uL2xpYi5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZXMvc3R5bGUuc2Nzcz9lNWQ4Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZnVuY3Rpb25zL2FwaUZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9mdW5jdGlvbnMvY2hhbmdlTWFpbldlYXRoZXJGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZnVuY3Rpb25zL2NyZWF0ZURhaWx5Q2FyZHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZnVuY3Rpb25zL2NyZWF0ZUhvdXJseUNhcmRzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Z1bmN0aW9ucy9lcnJvckhhbmRsaW5nLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Z1bmN0aW9ucy9ldmVudExpc3RlbmVycy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9mdW5jdGlvbnMvdXRpbGl0eS9jYXBpdGFsaXplRWFjaExldHRlckluV29yZC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9mdW5jdGlvbnMvdXRpbGl0eS9jb252ZXJ0VW5peFRpbWUuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZnVuY3Rpb25zL3V0aWxpdHkvZGVsZXRlSXRlbXNJbkRpdi5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9mdW5jdGlvbnMvd2VhdGhlckJhY2tncm91bmRDaGFuZ2UuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVzZXQuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9mb250cy9Sb2JvdG8tUmVndWxhci53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ZvbnRzL1JvYm90by1CbGFjay53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFJvYm90b0JsYWNrO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcbn1cXG5ib2R5IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gIHNjcm9sbGJhci1ndXR0ZXI6IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xcbn1cXG5ib2R5IDo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDJlbTtcXG4gIGhlaWdodDogMC44ZW07XFxufVxcbmJvZHkgOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICBiYWNrZ3JvdW5kOiBHcmF5O1xcbiAgYm9yZGVyLXJhZGl1czogMTAwdnc7XFxuICBtYXJnaW4tYmxvY2s6IDAuNWVtO1xcbn1cXG5ib2R5IDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgYmFja2dyb3VuZDogbGlnaHRHcmF5O1xcbiAgYm9yZGVyOiAwLjI1ZW0gc29saWQgbGlnaHRHcmF5O1xcbiAgYm9yZGVyLXJhZGl1czogMTAwdnc7XFxufVxcbmJvZHkgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiBsaWdodEdyYXk7XFxufVxcblxcbi5oZWFkZXJEaXYge1xcbiAgZ3JpZC1jb2x1bW46IDEvNDtcXG4gIGdyaWQtcm93OiAxLzI7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjNmciBtaW5tYXgoYXV0bywgODBlbSkgMC4zZnI7XFxuICBoZWlnaHQ6IDczdmg7XFxuICBhbmltYXRpb246IGZhZGVJblRleHQgMXM7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZ3JpZC1jb2x1bW46IDIvNDtcXG4gIGdyaWQtcm93OiAxLzI7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjRmciAxZnIgMC40ZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuM2ZyIDFmciAwLjhmcjtcXG59XFxuLmhlYWRlciAuc2VhcmNoQmFyQ29udGFpbmVyIHtcXG4gIGdyaWQtY29sdW1uOiAyLzM7XFxuICBncmlkLXJvdzogMS8yO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmhlYWRlciAuc2VhcmNoQmFyQ29udGFpbmVyICNzZWFyY2hCYXIge1xcbiAgd2lkdGg6IDgwJTtcXG4gIGhlaWdodDogNDBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICB0ZXh0LWluZGVudDogMTBweDtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDRweDtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDRweDtcXG59XFxuLmhlYWRlciAuc2VhcmNoQmFyQ29udGFpbmVyIC5idXR0b25EaXYge1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgd2lkdGg6IDEwJTtcXG59XFxuLmhlYWRlciAuc2VhcmNoQmFyQ29udGFpbmVyIC5idXR0b25EaXYgLnNlYXJjaEJ1dHRvbiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlYjZmNGM7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNHB4O1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDRweDtcXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XFxuICBmb250LXNpemU6IDE1cHg7XFxufVxcbi5oZWFkZXIgLnNlYXJjaEJhckNvbnRhaW5lciAuc2VhcmNoQmFyRXJyb3Ige1xcbiAgYm9yZGVyOiA1cHggc29saWQgcmVkO1xcbn1cXG4uaGVhZGVyIC5zZWFyY2hCYXJDb250YWluZXIgLmVycm9yTWVzc2FnZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDQuN3JlbTtcXG4gIGNvbG9yOiByZWQ7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMC4ycztcXG59XFxuLmhlYWRlciAuY3VycmVudFRlbXBlcmF0dXJlRGl2IHtcXG4gIGdyaWQtY29sdW1uOiAxLzI7XFxuICBncmlkLXJvdzogMi8zO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5oZWFkZXIgLmN1cnJlbnRUZW1wZXJhdHVyZURpdiAuY3VycmVudFRlbXBlcmF0dXJlRGl2MiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogODAlO1xcbiAgd2lkdGg6IDcwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuLmhlYWRlciAuY3VycmVudFRlbXBlcmF0dXJlRGl2IC5jdXJyZW50VGVtcGVyYXR1cmVEaXYyIC5oaWdoQW5kTG93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxNSU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5oZWFkZXIgLmN1cnJlbnRUZW1wZXJhdHVyZURpdiAuY3VycmVudFRlbXBlcmF0dXJlRGl2MiAuaGlnaEFuZExvdyAjaGlnaFRlbXAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmhlYWRlciAuY3VycmVudFRlbXBlcmF0dXJlRGl2IC5jdXJyZW50VGVtcGVyYXR1cmVEaXYyIC5oaWdoQW5kTG93ICNsb3dUZW1wIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5oZWFkZXIgLmN1cnJlbnRUZW1wZXJhdHVyZURpdiAuY3VycmVudFRlbXBlcmF0dXJlRGl2MiAuY3VycmVudFRlbXBlcmF0dXJlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA3MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiA3MHB4O1xcbn1cXG4uaGVhZGVyIC5jdXJyZW50VGVtcGVyYXR1cmVEaXYgLmN1cnJlbnRUZW1wZXJhdHVyZURpdjIgLmZlZWxzTGlrZURpdiB7XFxuICBoZWlnaHQ6IDE1JTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmhlYWRlciAuY3VycmVudExvY2F0aW9uIHtcXG4gIGdyaWQtY29sdW1uOiAyLzM7XFxuICBncmlkLXJvdzogMi8zO1xcbiAgZm9udC1mYW1pbHk6IFJvYm90b0JsYWNrO1xcbiAgZm9udC1zaXplOiAzNnB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmhlYWRlciAuY3VycmVudExvY2F0aW9uIC5sb2NhdGlvbkNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgd2lkdGg6IDcwJTtcXG4gIGhlaWdodDogMTMwcHg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG4uaGVhZGVyIC5jdXJyZW50TG9jYXRpb24gLmxvY2F0aW9uQ29udGFpbmVyIC5zd2l0Y2hDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAvKiBSb3VuZGVkIHNsaWRlcnMgKi9cXG59XFxuLmhlYWRlciAuY3VycmVudExvY2F0aW9uIC5sb2NhdGlvbkNvbnRhaW5lciAuc3dpdGNoQ29udGFpbmVyICNDZWxzaXVzIHtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuLmhlYWRlciAuY3VycmVudExvY2F0aW9uIC5sb2NhdGlvbkNvbnRhaW5lciAuc3dpdGNoQ29udGFpbmVyICNGYXJlbmhlaXQge1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcbi5oZWFkZXIgLmN1cnJlbnRMb2NhdGlvbiAubG9jYXRpb25Db250YWluZXIgLnN3aXRjaENvbnRhaW5lciAuc3dpdGNoIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiA2MHB4O1xcbiAgaGVpZ2h0OiAzNHB4O1xcbn1cXG4uaGVhZGVyIC5jdXJyZW50TG9jYXRpb24gLmxvY2F0aW9uQ29udGFpbmVyIC5zd2l0Y2hDb250YWluZXIgLnN3aXRjaCBpbnB1dCB7XFxuICBvcGFjaXR5OiAwO1xcbiAgd2lkdGg6IDA7XFxuICBoZWlnaHQ6IDA7XFxufVxcbi5oZWFkZXIgLmN1cnJlbnRMb2NhdGlvbiAubG9jYXRpb25Db250YWluZXIgLnN3aXRjaENvbnRhaW5lciAuc2xpZGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig0OCwgNDcsIDQ3KTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC40cztcXG4gIHRyYW5zaXRpb246IDAuNHM7XFxufVxcbi5oZWFkZXIgLmN1cnJlbnRMb2NhdGlvbiAubG9jYXRpb25Db250YWluZXIgLnN3aXRjaENvbnRhaW5lciAuc2xpZGVyOmJlZm9yZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGhlaWdodDogMjZweDtcXG4gIHdpZHRoOiAyNnB4O1xcbiAgbGVmdDogNHB4O1xcbiAgYm90dG9tOiA0cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC40cztcXG4gIHRyYW5zaXRpb246IDAuNHM7XFxufVxcbi5oZWFkZXIgLmN1cnJlbnRMb2NhdGlvbiAubG9jYXRpb25Db250YWluZXIgLnN3aXRjaENvbnRhaW5lciBpbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xcbn1cXG4uaGVhZGVyIC5jdXJyZW50TG9jYXRpb24gLmxvY2F0aW9uQ29udGFpbmVyIC5zd2l0Y2hDb250YWluZXIgLnNsaWRlci5yb3VuZCB7XFxuICBib3JkZXItcmFkaXVzOiAzNHB4O1xcbn1cXG4uaGVhZGVyIC5jdXJyZW50TG9jYXRpb24gLmxvY2F0aW9uQ29udGFpbmVyIC5zd2l0Y2hDb250YWluZXIgLnNsaWRlci5yb3VuZDpiZWZvcmUge1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG4uaGVhZGVyIC5jdXJyZW50V2VhdGhlciB7XFxuICBncmlkLWNvbHVtbjogMy80O1xcbiAgZ3JpZC1yb3c6IDIvMztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uaGVhZGVyIC5jdXJyZW50V2VhdGhlciAuY29udGFpbmVyRGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiA4MCU7XFxuICB3aWR0aDogNzAlO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG4uaGVhZGVyIC5jdXJyZW50V2VhdGhlciAuY29udGFpbmVyRGl2IC53ZWF0aGVySWNvbkRpdiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogODAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmhlYWRlciAuY3VycmVudFdlYXRoZXIgLmNvbnRhaW5lckRpdiAud2VhdGhlckljb25EaXYgLndlYXRoZXJJY29uIHtcXG4gIGhlaWdodDogODUlO1xcbn1cXG4uaGVhZGVyIC5jdXJyZW50V2VhdGhlciAuY29udGFpbmVyRGl2IC53ZWF0aGVyRXhwbGFuYXRpb24ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDIwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5oZWFkZXIgLmN1cnJlbnRIb3VybHlXZWF0aGVyIHtcXG4gIGdyaWQtY29sdW1uOiAxLzQ7XFxuICBncmlkLXJvdzogMy80O1xcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDI0cHg7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjRweDtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEycHg7XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTJweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nLXRvcDogMjBweDtcXG59XFxuLmhlYWRlciAuY3VycmVudEhvdXJseVdlYXRoZXIgLmhvdXJseUNhcmRzIHtcXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XFxuICBoZWlnaHQ6IDkwJTtcXG4gIG1pbi13aWR0aDogODVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW4tbGVmdDogMTVweDtcXG4gIG1hcmdpbi1yaWdodDogMTVweDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig0OCwgNDcsIDQ3KTtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbi5oZWFkZXIgLmN1cnJlbnRIb3VybHlXZWF0aGVyIC5ob3VybHlDYXJkcyAuaG91cmx5VGVtcCB7XFxuICBhbmltYXRpb246IGZhZGVJblRleHQgMXM7XFxufVxcbi5oZWFkZXIgLmN1cnJlbnRIb3VybHlXZWF0aGVyIC5ob3VybHlDYXJkcyAuaG91cmx5SWNvbiB7XFxuICB3aWR0aDogNjBweDtcXG4gIGhlaWdodDogNjBweDtcXG59XFxuLmhlYWRlciAuY3VycmVudEhvdXJseVdlYXRoZXIgLmhvdXJseUNhcmRzIC5ob3VybHlQZXJjaXAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDE0cHg7XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkZUluVGV4dCB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuLmZvb3RlciB7XFxuICBncmlkLWNvbHVtbjogMS80O1xcbiAgZ3JpZC1yb3c6IDIvMztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig0OSwgNDksIDQ5KTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGhlaWdodDogNzAlO1xcbn1cXG4uZm9vdGVyIC5kYWlseVRlbXBUaXRsZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE3LCAxNiwgMTYsIDAuOTM4KTtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcXG59XFxuLmZvb3RlciAuZGFpbHlUZW1wZXJhdHVyZURpdiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5mb290ZXIgLmRhaWx5VGVtcGVyYXR1cmVEaXYgLmRhaWx5Q2FyZHMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3LCAxNiwgMTYpO1xcbiAgd2lkdGg6IDI3MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nLXRvcDogNXB4O1xcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgcGFkZGluZy1yaWdodDogMjBweDtcXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xcbiAgbWFyZ2luOiAxMHB4O1xcbn1cXG4uZm9vdGVyIC5kYWlseVRlbXBlcmF0dXJlRGl2IC5kYWlseUNhcmRzIC5kYWlseVRpdGxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLmZvb3RlciAuZGFpbHlUZW1wZXJhdHVyZURpdiAuZGFpbHlDYXJkcyAuZGFpbHlUaXRsZSAuZGF5QW5kRm9yZWNhc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4uZm9vdGVyIC5kYWlseVRlbXBlcmF0dXJlRGl2IC5kYWlseUNhcmRzIC5kYWlseVRpdGxlIC53ZWF0aGVySWNvbiB7XFxuICB3aWR0aDogNjBweDtcXG4gIGhlaWdodDogNjBweDtcXG59XFxuLmZvb3RlciAuZGFpbHlUZW1wZXJhdHVyZURpdiAuZGFpbHlDYXJkcyAuZGFpbHlUaXRsZSAuaWNvbkFuZFRlbXBlcmF0dXJlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5mb290ZXIgLmRhaWx5VGVtcGVyYXR1cmVEaXYgLmRhaWx5Q2FyZHMgLmRhaWx5VGl0bGUgLmhpZ2hBbmRMb3dUZW1wIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYW5pbWF0aW9uOiBmYWRlSW5UZXh0IDFzO1xcbn1cXG4uZm9vdGVyIC5kYWlseVRlbXBlcmF0dXJlRGl2IC5kYWlseUNhcmRzIC5kYWlseURldGFpbHMge1xcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XFxuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogOTVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4uZm9vdGVyIC5kYWlseVRlbXBlcmF0dXJlRGl2IC5kYWlseUNhcmRzIC5kYWlseURldGFpbHMgLnByZWNpcGl0YXRpb25EaXYsXFxuLmZvb3RlciAuZGFpbHlUZW1wZXJhdHVyZURpdiAuZGFpbHlDYXJkcyAuZGFpbHlEZXRhaWxzIC53aW5kRGl2LFxcbi5mb290ZXIgLmRhaWx5VGVtcGVyYXR1cmVEaXYgLmRhaWx5Q2FyZHMgLmRhaWx5RGV0YWlscyAuaHVtaWRpdHlEaXYsXFxuLmZvb3RlciAuZGFpbHlUZW1wZXJhdHVyZURpdiAuZGFpbHlDYXJkcyAuZGFpbHlEZXRhaWxzIC51dkluZGV4RGl2LFxcbi5mb290ZXIgLmRhaWx5VGVtcGVyYXR1cmVEaXYgLmRhaWx5Q2FyZHMgLmRhaWx5RGV0YWlscyAuc3VucmlzZVN1bnNldCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4uZm9vdGVyIC5kYWlseVRlbXBlcmF0dXJlRGl2IC5kYWlseUNhcmRzIC5kYWlseURldGFpbHMgLndpbmREaXYgLndpbmRQZXJjZW50YWdlIHtcXG4gIGFuaW1hdGlvbjogZmFkZUluVGV4dCAxcztcXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlSW4ge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0b3A6IDZyZW07XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMC41O1xcbiAgICB0b3A6IDByZW07XFxuICB9XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAzNnB4KSB7XFxuICAuaGVhZGVyRGl2IHtcXG4gICAgaGVpZ2h0OiA5MHZoO1xcbiAgfVxcbiAgLmhlYWRlciB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjRmciAwLjRmciAwLjhmciAwLjhmcjtcXG4gIH1cXG4gIC5oZWFkZXIgLnNlYXJjaEJhckNvbnRhaW5lciB7XFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxuICB9XFxuICAuaGVhZGVyIC5zZWFyY2hCYXJDb250YWluZXIgLmVycm9yTWVzc2FnZSB7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgdG9wOiAwLjJyZW07XFxuICAgIGFuaW1hdGlvbjogbm9uZTtcXG4gIH1cXG4gIC5oZWFkZXIgLmN1cnJlbnRMb2NhdGlvbiB7XFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxuICB9XFxuICAuaGVhZGVyIC5jdXJyZW50VGVtcGVyYXR1cmVEaXYge1xcbiAgICBncmlkLXJvdzogMy80O1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgfVxcbiAgLmhlYWRlciAuY3VycmVudFRlbXBlcmF0dXJlRGl2IC5jdXJyZW50VGVtcGVyYXR1cmVEaXYyIHtcXG4gICAgcGFkZGluZy10b3A6IDVweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcXG4gIH1cXG4gIC5oZWFkZXIgLmN1cnJlbnRXZWF0aGVyIHtcXG4gICAgZ3JpZC1yb3c6IDMvNDtcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXG4gIH1cXG4gIC5oZWFkZXIgLmN1cnJlbnRXZWF0aGVyIC5jb250YWluZXJEaXYgLndlYXRoZXJJY29uRGl2IHtcXG4gICAgaGVpZ2h0OiA3NSU7XFxuICB9XFxuICAuaGVhZGVyIC5jdXJyZW50V2VhdGhlciAuY29udGFpbmVyRGl2IC53ZWF0aGVyRXhwbGFuYXRpb24ge1xcbiAgICBoZWlnaHQ6IDI1JTtcXG4gIH1cXG4gIC5oZWFkZXIgLmN1cnJlbnRIb3VybHlXZWF0aGVyIHtcXG4gICAgZ3JpZC1yb3c6IDQvNTtcXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XFxuICB9XFxuICAuaGVhZGVyIC5jdXJyZW50SG91cmx5V2VhdGhlciAuaG91cmx5Q2FyZHMge1xcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbiAgfVxcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3MHB4KSB7XFxuICBib2R5IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDkwdmggMTB2aDtcXG4gIH1cXG4gIC5oZWFkZXJEaXYge1xcbiAgICBncmlkLXJvdzogMS8yO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIG1pbi1oZWlnaHQ6IDkwdmg7XFxuICB9XFxuICAjc2VhcmNoQmFyIHtcXG4gICAgd2lkdGg6IDcwJSAhaW1wb3J0YW50O1xcbiAgICBoZWlnaHQ6IDMwcHggIWltcG9ydGFudDtcXG4gIH1cXG4gIC5idXR0b25EaXYge1xcbiAgICB3aWR0aDogMjAlICFpbXBvcnRhbnQ7XFxuICAgIGhlaWdodDogMzBweCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmN1cnJlbnRUZW1wZXJhdHVyZURpdjIgLmhpZ2hBbmRMb3cge1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICB9XFxuICAuY3VycmVudFRlbXBlcmF0dXJlRGl2MiAuY3VycmVudFRlbXBlcmF0dXJlIHtcXG4gICAgZm9udC1zaXplOiA2MHB4ICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuY3VycmVudFRlbXBlcmF0dXJlRGl2MiAuZmVlbHNMaWtlRGl2IHtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgfVxcbiAgLmZvb3RlciB7XFxuICAgIGdyaWQtcm93OiAyLzM7XFxuICAgIHotaW5kZXg6IDEwO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0Usc0JBQUE7RUFDQSx1QkFBQTtBQUFGOztBQUdBO0VBQ0UsbUJBQUE7RUFDQSwyREFBQTtBQUFGO0FBR0E7RUFDRSx3QkFBQTtFQUNBLDJEQUFBO0FBREY7QUF3Q0E7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBRUEsMkNBekNVO0FBRVo7QUFXRTtFQUNFLFVBQUE7RUFDQSxhQUFBO0FBVEo7QUFZRTtFQUNFLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtBQVZKO0FBYUU7RUFDRSxxQkFBQTtFQUNBLDhCQUFBO0VBQ0Esb0JBQUE7QUFYSjtBQWNFO0VBQ0UscUJBQUE7QUFaSjs7QUF5QkE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EscURBQUE7RUFDQSxZQUFBO0VBeENBLHdCQUFBO0FBbUJGOztBQXlCQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQ0FBQTtFQUNBLG1DQUFBO0FBdEJGO0FBd0JFO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VB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O0VBa0JFO0lBQ0UsYUFBQTtJQUNBLGlCQUFBO0VBaEJKO0VBaUJJO0lBQ0UsZ0JBQUE7SUFDQSxtQkFBQTtFQWZOO0FBQ0Y7QUFvQkE7RUFDRTtJQUNFLGtCQUFBO0lBQ0EsYUFBQTtJQUNBLDZCQUFBO0VBbEJGO0VBcUJBO0lBQ0UsYUFBQTtJQUNBLGVBQUE7SUFDQSxnQkFBQTtFQW5CRjtFQXFCQTtJQUNFLHFCQUFBO0lBQ0EsdUJBQUE7RUFuQkY7RUFzQkE7SUFDRSxxQkFBQTtJQUNBLHVCQUFBO0VBcEJGO0VBdUJFO0lBQ0UsZUFBQTtFQXJCSjtFQXVCRTtJQUNFLDBCQUFBO0VBckJKO0VBdUJFO0lBQ0UsZUFBQTtFQXJCSjtFQXdCQTtJQUNFLGFBQUE7SUFDQSxXQUFBO0lBQ0Esa0JBQUE7SUFDQSxZQUFBO0VBdEJGO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCAnLi9yZXNldC5jc3MnO1xcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XFxuICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL1JvYm90by1SZWd1bGFyLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogUm9ib3RvQmxhY2s7XFxuICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL1JvYm90by1CbGFjay53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XFxufVxcblxcbiRHcmF5OiByZ2IoNDgsIDQ3LCA0NywgMSk7XFxuJGxpZ2h0R3JheTogcmdiKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xcblxcbkBtaXhpbiBmbGV4Q2VudGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbkBtaXhpbiBmYWRlSW5UZXh0e1xcbiAgYW5pbWF0aW9uOiBmYWRlSW5UZXh0IDFzO1xcbn1cXG5cXG5AbWl4aW4gc2Nyb2xsQmFyIHtcXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICB3aWR0aDogMmVtO1xcbiAgICBoZWlnaHQ6IDAuOGVtO1xcbiAgfVxcblxcbiAgOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICAgIGJhY2tncm91bmQ6IEdyYXk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHZ3O1xcbiAgICBtYXJnaW4tYmxvY2s6IDAuNWVtO1xcbiAgfVxcblxcbiAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICAgIGJhY2tncm91bmQ6IGxpZ2h0R3JheTtcXG4gICAgYm9yZGVyOiAwLjI1ZW0gc29saWQgbGlnaHRHcmF5O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDB2dztcXG4gIH1cXG5cXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiBsaWdodEdyYXk7XFxuICB9XFxufVxcblxcbmJvZHkge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LWZhbWlseTogUm9ib3RvO1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgc2Nyb2xsYmFyLWd1dHRlcjogYXV0bztcXG4gIEBpbmNsdWRlIHNjcm9sbEJhcigpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0R3JheTtcXG59XFxuXFxuLmhlYWRlckRpdiB7XFxuICBncmlkLWNvbHVtbjogMS80O1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuM2ZyIG1pbm1heChhdXRvLCA4MGVtKSAwLjNmcjtcXG4gIGhlaWdodDogNzN2aDtcXG4gIEBpbmNsdWRlIGZhZGVJblRleHQoKTtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBncmlkLWNvbHVtbjogMi80O1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuNGZyIDFmciAwLjRmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMC4zZnIgMWZyIDAuOGZyO1xcblxcbiAgLnNlYXJjaEJhckNvbnRhaW5lciB7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICAgICNzZWFyY2hCYXIge1xcbiAgICAgIHdpZHRoOiA4MCU7XFxuICAgICAgaGVpZ2h0OiA0MHB4O1xcbiAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICBvdXRsaW5lOiBub25lO1xcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgICB0ZXh0LWluZGVudDogMTBweDtcXG4gICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA0cHg7XFxuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNHB4O1xcbiAgICB9XFxuICAgIC5idXR0b25EaXYge1xcbiAgICAgIGhlaWdodDogNDBweDtcXG4gICAgICB3aWR0aDogMTAlO1xcbiAgICAgIC5zZWFyY2hCdXR0b24ge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWI2ZjRjO1xcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDRweDtcXG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0cHg7XFxuICAgICAgICBmb250LWZhbWlseTogUm9ib3RvO1xcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICAgIH1cXG4gICAgfVxcbiAgICAuc2VhcmNoQmFyRXJyb3Ige1xcbiAgICAgIGJvcmRlcjogNXB4IHNvbGlkIHJlZDtcXG4gICAgfVxcbiAgICAuZXJyb3JNZXNzYWdlIHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgdG9wOiA0LjdyZW07XFxuICAgICAgY29sb3I6IHJlZDtcXG4gICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICBhbmltYXRpb246IGZhZGVJbiAwLjJzO1xcbiAgICB9XFxuICB9XFxuXFxuICAuY3VycmVudFRlbXBlcmF0dXJlRGl2IHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgZ3JpZC1yb3c6IDIvMztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIC5jdXJyZW50VGVtcGVyYXR1cmVEaXYyIHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICBoZWlnaHQ6IDgwJTtcXG4gICAgICB3aWR0aDogNzAlO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHRHcmF5O1xcbiAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xcbiAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICBmb250LXNpemU6IDE2cHg7XFxuXFxuICAgICAgLmhpZ2hBbmRMb3cge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IDE1JTtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICNoaWdoVGVtcCB7XFxuICAgICAgICAgIEBpbmNsdWRlIGZsZXhDZW50ZXIoKTtcXG4gICAgICAgIH1cXG4gICAgICAgICNsb3dUZW1wIHtcXG4gICAgICAgICAgQGluY2x1ZGUgZmxleENlbnRlcigpO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG5cXG4gICAgICAuY3VycmVudFRlbXBlcmF0dXJlIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgaGVpZ2h0OiA3MCU7XFxuICAgICAgICBAaW5jbHVkZSBmbGV4Q2VudGVyKCk7XFxuICAgICAgICBmb250LXNpemU6IDcwcHg7XFxuICAgICAgfVxcblxcbiAgICAgIC5mZWVsc0xpa2VEaXYge1xcbiAgICAgICAgaGVpZ2h0OiAxNSU7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIEBpbmNsdWRlIGZsZXhDZW50ZXIoKTtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5jdXJyZW50TG9jYXRpb24ge1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbiAgICBncmlkLXJvdzogMi8zO1xcbiAgICBmb250LWZhbWlseTogUm9ib3RvQmxhY2s7XFxuICAgIGZvbnQtc2l6ZTogMzZweDtcXG4gICAgQGluY2x1ZGUgZmxleENlbnRlcigpO1xcblxcbiAgICAubG9jYXRpb25Db250YWluZXIge1xcbiAgICAgIEBpbmNsdWRlIGZsZXhDZW50ZXIoKTtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHRHcmF5O1xcbiAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xcbiAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgICAgd2lkdGg6IDcwJTtcXG4gICAgICBoZWlnaHQ6IDEzMHB4O1xcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcblxcbiAgICAgIC5zd2l0Y2hDb250YWluZXIge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuXFxuICAgICAgICAjQ2Vsc2l1cyB7XFxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICNGYXJlbmhlaXQge1xcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5zd2l0Y2gge1xcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAgICAgd2lkdGg6IDYwcHg7XFxuICAgICAgICAgIGhlaWdodDogMzRweDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5zd2l0Y2ggaW5wdXQge1xcbiAgICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgICB3aWR0aDogMDtcXG4gICAgICAgICAgaGVpZ2h0OiAwO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnNsaWRlciB7XFxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICB0b3A6IDA7XFxuICAgICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICAgIHJpZ2h0OiAwO1xcbiAgICAgICAgICBib3R0b206IDA7XFxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRHcmF5O1xcbiAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IDAuNHM7XFxuICAgICAgICAgIHRyYW5zaXRpb246IDAuNHM7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuc2xpZGVyOmJlZm9yZSB7XFxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgY29udGVudDogJyc7XFxuICAgICAgICAgIGhlaWdodDogMjZweDtcXG4gICAgICAgICAgd2lkdGg6IDI2cHg7XFxuICAgICAgICAgIGxlZnQ6IDRweDtcXG4gICAgICAgICAgYm90dG9tOiA0cHg7XFxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IDAuNHM7XFxuICAgICAgICAgIHRyYW5zaXRpb246IDAuNHM7XFxuICAgICAgICB9XFxuXFxuICAgICAgICBpbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcXG4gICAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLyogUm91bmRlZCBzbGlkZXJzICovXFxuICAgICAgICAuc2xpZGVyLnJvdW5kIHtcXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMzRweDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5zbGlkZXIucm91bmQ6YmVmb3JlIHtcXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcblxcbiAgLmN1cnJlbnRXZWF0aGVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDMvNDtcXG4gICAgZ3JpZC1yb3c6IDIvMztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIC5jb250YWluZXJEaXYge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIGhlaWdodDogODAlO1xcbiAgICAgIHdpZHRoOiA3MCU7XFxuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRsaWdodEdyYXk7XFxuICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCk7XFxuICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgIC53ZWF0aGVySWNvbkRpdiB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogODAlO1xcbiAgICAgICAgQGluY2x1ZGUgZmxleENlbnRlcigpO1xcbiAgICAgICAgLndlYXRoZXJJY29uIHtcXG4gICAgICAgICAgaGVpZ2h0OiA4NSU7XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICAgIC53ZWF0aGVyRXhwbGFuYXRpb24ge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IDIwJTtcXG4gICAgICAgIEBpbmNsdWRlIGZsZXhDZW50ZXIoKTtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5jdXJyZW50SG91cmx5V2VhdGhlciB7XFxuICAgIGdyaWQtY29sdW1uOiAxLzQ7XFxuICAgIGdyaWQtcm93OiAzLzQ7XFxuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjRweDtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDI0cHg7XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEycHg7XFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMnB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcXG4gICAgLmhvdXJseUNhcmRzIHtcXG4gICAgICBmb250LWZhbWlseTogUm9ib3RvO1xcbiAgICAgIGhlaWdodDogOTAlO1xcbiAgICAgIG1pbi13aWR0aDogODVweDtcXG4gICAgICBAaW5jbHVkZSBmbGV4Q2VudGVyKCk7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICBtYXJnaW4tbGVmdDogMTVweDtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxuICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRHcmF5O1xcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAuaG91cmx5VGVtcCB7XFxuICAgICAgICBAaW5jbHVkZSBmYWRlSW5UZXh0KCk7XFxuICAgICAgfVxcbiAgICAgIC5ob3VybHlJY29uIHtcXG4gICAgICAgIHdpZHRoOiA2MHB4O1xcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xcbiAgICAgIH1cXG4gICAgICAuaG91cmx5UGVyY2lwIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVJblRleHQge1xcbiAgMCUgeyBvcGFjaXR5OiAwOyB9XFxuICAxMDAlIHsgb3BhY2l0eTogMTsgfVxcbn1cXG5cXG4uZm9vdGVyIHtcXG4gIGdyaWQtY29sdW1uOiAxLzQ7XFxuICBncmlkLXJvdzogMi8zO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ5LCA0OSwgNDkpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgaGVpZ2h0OiA3MCU7XFxuICAuZGFpbHlUZW1wVGl0bGUge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBAaW5jbHVkZSBmbGV4Q2VudGVyKCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTcsIDE2LCAxNiwgMC45MzgpO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XFxuICB9XFxuICAuZGFpbHlUZW1wZXJhdHVyZURpdiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAuZGFpbHlDYXJkcyB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNywgMTYsIDE2KTtcXG4gICAgICB3aWR0aDogMjcwcHg7XFxuICAgICAgQGluY2x1ZGUgZmxleENlbnRlcigpO1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgcGFkZGluZy10b3A6IDVweDtcXG4gICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcXG4gICAgICBtYXJnaW46IDEwcHg7XFxuICAgICAgLmRhaWx5VGl0bGUge1xcbiAgICAgICAgQGluY2x1ZGUgZmxleENlbnRlcigpO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAuZGF5QW5kRm9yZWNhc3Qge1xcbiAgICAgICAgICBAaW5jbHVkZSBmbGV4Q2VudGVyKCk7XFxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIH1cXG4gICAgICAgIC53ZWF0aGVySWNvbiB7XFxuICAgICAgICAgIHdpZHRoOiA2MHB4O1xcbiAgICAgICAgICBoZWlnaHQ6IDYwcHg7XFxuICAgICAgICB9XFxuICAgICAgICAuaWNvbkFuZFRlbXBlcmF0dXJlIHtcXG4gICAgICAgICAgQGluY2x1ZGUgZmxleENlbnRlcigpO1xcbiAgICAgICAgfVxcbiAgICAgICAgLmhpZ2hBbmRMb3dUZW1wIHtcXG4gICAgICAgICAgQGluY2x1ZGUgZmxleENlbnRlcigpO1xcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICBAaW5jbHVkZSBmYWRlSW5UZXh0KCk7XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICAgIC5kYWlseURldGFpbHMge1xcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XFxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogOTVweDtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgLnByZWNpcGl0YXRpb25EaXYsXFxuICAgICAgICAud2luZERpdixcXG4gICAgICAgIC5odW1pZGl0eURpdixcXG4gICAgICAgIC51dkluZGV4RGl2LFxcbiAgICAgICAgLnN1bnJpc2VTdW5zZXQge1xcbiAgICAgICAgICBAaW5jbHVkZSBmbGV4Q2VudGVyKCk7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgIH1cXG4gICAgICAgIC53aW5kRGl2e1xcbiAgICAgICAgICAud2luZFBlcmNlbnRhZ2Uge1xcbiAgICAgICAgICAgIEBpbmNsdWRlIGZhZGVJblRleHQoKTtcXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRvcDogNnJlbTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAwLjU7XFxuICAgIHRvcDogMHJlbTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDM2cHgpIHtcXG4gIC5oZWFkZXJEaXYge1xcbiAgICBoZWlnaHQ6IDkwdmg7XFxuICB9XFxuICAuaGVhZGVyIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuNGZyIDAuNGZyIDAuOGZyIDAuOGZyO1xcblxcbiAgICAuc2VhcmNoQmFyQ29udGFpbmVyIHtcXG4gICAgICBncmlkLWNvbHVtbjogMS8zO1xcblxcbiAgICAgIC5lcnJvck1lc3NhZ2Uge1xcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICAgICAgdG9wOiAwLjJyZW07XFxuICAgICAgICBhbmltYXRpb246IG5vbmU7XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC5jdXJyZW50TG9jYXRpb24ge1xcbiAgICAgIGdyaWQtY29sdW1uOiAxLzM7XFxuICAgIH1cXG5cXG4gICAgLmN1cnJlbnRUZW1wZXJhdHVyZURpdiB7XFxuICAgICAgZ3JpZC1yb3c6IDMvNDtcXG4gICAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICAgIC5jdXJyZW50VGVtcGVyYXR1cmVEaXYyIHtcXG4gICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbiAgICAgIH1cXG4gICAgfVxcbiAgICAuY3VycmVudFdlYXRoZXIge1xcbiAgICAgIGdyaWQtcm93OiAzLzQ7XFxuICAgICAgZ3JpZC1jb2x1bW46IDIvMztcXG4gICAgICAuY29udGFpbmVyRGl2IHtcXG4gICAgICAgIC53ZWF0aGVySWNvbkRpdiB7XFxuICAgICAgICAgIGhlaWdodDogNzUlO1xcbiAgICAgICAgfVxcbiAgICAgICAgLndlYXRoZXJFeHBsYW5hdGlvbiB7XFxuICAgICAgICAgIGhlaWdodDogMjUlO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcbiAgICAuY3VycmVudEhvdXJseVdlYXRoZXIge1xcbiAgICAgIGdyaWQtcm93OiA0LzU7XFxuICAgICAgcGFkZGluZy10b3A6IDE1cHg7XFxuICAgICAgLmhvdXJseUNhcmRzIHtcXG4gICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3MHB4KSB7XFxuICBib2R5IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDkwdmggMTB2aDtcXG4gIH1cXG5cXG4gIC5oZWFkZXJEaXYge1xcbiAgICBncmlkLXJvdzogMS8yO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIG1pbi1oZWlnaHQ6IDkwdmg7XFxuICB9XFxuICAjc2VhcmNoQmFyIHtcXG4gICAgd2lkdGg6IDcwJSAhaW1wb3J0YW50O1xcbiAgICBoZWlnaHQ6IDMwcHggIWltcG9ydGFudDtcXG4gIH1cXG5cXG4gIC5idXR0b25EaXYge1xcbiAgICB3aWR0aDogMjAlICFpbXBvcnRhbnQ7XFxuICAgIGhlaWdodDogMzBweCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmN1cnJlbnRUZW1wZXJhdHVyZURpdjIge1xcbiAgICAuaGlnaEFuZExvdyB7XFxuICAgICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICB9XFxuICAgIC5jdXJyZW50VGVtcGVyYXR1cmUge1xcbiAgICAgIGZvbnQtc2l6ZTogNjBweCAhaW1wb3J0YW50O1xcbiAgICB9XFxuICAgIC5mZWVsc0xpa2VEaXYge1xcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgfVxcbiAgfVxcbiAgLmZvb3RlciB7XFxuICAgIGdyaWQtcm93OiAyLzM7XFxuICAgIHotaW5kZXg6IDEwO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcblxcbmh0bWwsXFxuYm9keSxcXG5kaXYsXFxuc3BhbixcXG5hcHBsZXQsXFxub2JqZWN0LFxcbmlmcmFtZSxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNixcXG5wLFxcbmJsb2NrcXVvdGUsXFxucHJlLFxcbmEsXFxuYWJicixcXG5hY3JvbnltLFxcbmFkZHJlc3MsXFxuYmlnLFxcbmNpdGUsXFxuY29kZSxcXG5kZWwsXFxuZGZuLFxcbmVtLFxcbmltZyxcXG5pbnMsXFxua2JkLFxcbnEsXFxucyxcXG5zYW1wLFxcbnNtYWxsLFxcbnN0cmlrZSxcXG5zdHJvbmcsXFxuc3ViLFxcbnN1cCxcXG50dCxcXG52YXIsXFxuYixcXG51LFxcbmksXFxuY2VudGVyLFxcbmRsLFxcbmR0LFxcbmRkLFxcbm9sLFxcbnVsLFxcbmxpLFxcbmZpZWxkc2V0LFxcbmZvcm0sXFxubGFiZWwsXFxubGVnZW5kLFxcbnRhYmxlLFxcbmNhcHRpb24sXFxudGJvZHksXFxudGZvb3QsXFxudGhlYWQsXFxudHIsXFxudGgsXFxudGQsXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5jYW52YXMsXFxuZGV0YWlscyxcXG5lbWJlZCxcXG5maWd1cmUsXFxuZmlnY2FwdGlvbixcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5vdXRwdXQsXFxucnVieSxcXG5zZWN0aW9uLFxcbnN1bW1hcnksXFxudGltZSxcXG5tYXJrLFxcbmF1ZGlvLFxcbnZpZGVvIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBmb250OiBpbmhlcml0O1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5kZXRhaWxzLFxcbmZpZ2NhcHRpb24sXFxuZmlndXJlLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbnNlY3Rpb24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxufVxcbm9sLFxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsXFxucSB7XFxuICBxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLFxcbmJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsXFxucTphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBib3JkZXItc3BhY2luZzogMDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9yZXNldC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztDQUdDOztBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFpRkUsU0FBUztFQUNULFVBQVU7RUFDVixTQUFTO0VBQ1QsZUFBZTtFQUNmLGFBQWE7RUFDYix3QkFBd0I7QUFDMUI7QUFDQSxnREFBZ0Q7QUFDaEQ7Ozs7Ozs7Ozs7O0VBV0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBOztFQUVFLGdCQUFnQjtBQUNsQjtBQUNBOztFQUVFLFlBQVk7QUFDZDtBQUNBOzs7O0VBSUUsV0FBVztFQUNYLGFBQWE7QUFDZjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGlCQUFpQjtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuXFxuaHRtbCxcXG5ib2R5LFxcbmRpdixcXG5zcGFuLFxcbmFwcGxldCxcXG5vYmplY3QsXFxuaWZyYW1lLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbnAsXFxuYmxvY2txdW90ZSxcXG5wcmUsXFxuYSxcXG5hYmJyLFxcbmFjcm9ueW0sXFxuYWRkcmVzcyxcXG5iaWcsXFxuY2l0ZSxcXG5jb2RlLFxcbmRlbCxcXG5kZm4sXFxuZW0sXFxuaW1nLFxcbmlucyxcXG5rYmQsXFxucSxcXG5zLFxcbnNhbXAsXFxuc21hbGwsXFxuc3RyaWtlLFxcbnN0cm9uZyxcXG5zdWIsXFxuc3VwLFxcbnR0LFxcbnZhcixcXG5iLFxcbnUsXFxuaSxcXG5jZW50ZXIsXFxuZGwsXFxuZHQsXFxuZGQsXFxub2wsXFxudWwsXFxubGksXFxuZmllbGRzZXQsXFxuZm9ybSxcXG5sYWJlbCxcXG5sZWdlbmQsXFxudGFibGUsXFxuY2FwdGlvbixcXG50Ym9keSxcXG50Zm9vdCxcXG50aGVhZCxcXG50cixcXG50aCxcXG50ZCxcXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmNhbnZhcyxcXG5kZXRhaWxzLFxcbmVtYmVkLFxcbmZpZ3VyZSxcXG5maWdjYXB0aW9uLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbm91dHB1dCxcXG5ydWJ5LFxcbnNlY3Rpb24sXFxuc3VtbWFyeSxcXG50aW1lLFxcbm1hcmssXFxuYXVkaW8sXFxudmlkZW8ge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmRldGFpbHMsXFxuZmlnY2FwdGlvbixcXG5maWd1cmUsXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxuc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxub2wsXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSxcXG5xIHtcXG4gIHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsXFxuYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSxcXG5xOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgY29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGQpIHtcbiAgaWYgKHR5cGVvZiBkICE9PSAnbnVtYmVyJyB8fCBpc05hTihkKSkge1xuICAgIHJldHVybiAtMTtcbiAgfVxuXG4gIC8vIGtlZXAgd2l0aGluIHRoZSByYW5nZTogMCA8PSBkIDwgMzYwXG4gIGQgPSBkICUgMzYwO1xuXG4gIGlmICgxMS4yNSA8PSBkICYmIGQgPCAzMy43NSkge1xuICAgIHJldHVybiBcIk5ORVwiO1xuICB9IGVsc2UgaWYgKDMzLjc1IDw9IGQgJiYgZCA8IDU2LjI1KSB7XG4gICAgcmV0dXJuIFwiTkVcIjtcbiAgfSBlbHNlIGlmICg1Ni4yNSA8PSBkICYmIGQgPCA3OC43NSkge1xuICAgIHJldHVybiBcIkVORVwiO1xuICB9IGVsc2UgaWYgKDc4Ljc1IDw9IGQgJiYgZCA8IDEwMS4yNSkge1xuICAgIHJldHVybiBcIkVcIjtcbiAgfSBlbHNlIGlmICgxMDEuMjUgPD0gZCAmJiBkIDwgMTIzLjc1KSB7XG4gICAgcmV0dXJuIFwiRVNFXCI7XG4gIH0gZWxzZSBpZiAoMTIzLjc1IDw9IGQgJiYgZCA8IDE0Ni4yNSkge1xuICAgIHJldHVybiBcIlNFXCI7XG4gIH0gZWxzZSBpZiAoMTQ2LjI1IDw9IGQgJiYgZCA8IDE2OC43NSkge1xuICAgIHJldHVybiBcIlNTRVwiO1xuICB9IGVsc2UgaWYgKDE2OC43NSA8PSBkICYmIGQgPCAxOTEuMjUpIHtcbiAgICByZXR1cm4gXCJTXCI7XG4gIH0gZWxzZSBpZiAoMTkxLjI1IDw9IGQgJiYgZCA8IDIxMy43NSkge1xuICAgIHJldHVybiBcIlNTV1wiO1xuICB9IGVsc2UgaWYgKDIxMy43NSA8PSBkICYmIGQgPCAyMzYuMjUpIHtcbiAgICByZXR1cm4gXCJTV1wiO1xuICB9IGVsc2UgaWYgKDIzNi4yNSA8PSBkICYmIGQgPCAyNTguNzUpIHtcbiAgICByZXR1cm4gXCJXU1dcIjtcbiAgfSBlbHNlIGlmICgyNTguNzUgPD0gZCAmJiBkIDwgMjgxLjI1KSB7XG4gICAgcmV0dXJuIFwiV1wiO1xuICB9IGVsc2UgaWYgKDI4MS4yNSA8PSBkICYmIGQgPCAzMDMuNzUpIHtcbiAgICByZXR1cm4gXCJXTldcIjtcbiAgfSBlbHNlIGlmICgzMDMuNzUgPD0gZCAmJiBkIDwgMzI2LjI1KSB7XG4gICAgcmV0dXJuIFwiTldcIjtcbiAgfSBlbHNlIGlmICgzMjYuMjUgPD0gZCAmJiBkIDwgMzQ4Ljc1KSB7XG4gICAgcmV0dXJuIFwiTk5XXCI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIFwiTlwiO1xuICB9XG59O1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJhc3luYyBmdW5jdGlvbiBnZXRMb2NhdGlvbihjaXR5TmFtZSkge1xuICB0cnkge1xuICAgIGNvbnN0IFVSTCA9IGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPSR7Y2l0eU5hbWV9JmxpbWl0PTEmYXBwaWQ9MjRjNDgxZmM5YjczYzY4NzM3NzE4ZGIyYzE0YjEyMTFgO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goVVJMKTtcbiAgICBjb25zdCBsb2NhdGlvbkRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgLy8gUmV0dXJucyB0aGUgZmlyc3QgaW5kZXggb2YgdGhlIGFycmF5IG9mIGNpdGllcyBnaXZlbiBieSB0aGUgQVBJXG4gICAgcmV0dXJuIGxvY2F0aW9uRGF0YVswXTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXJGb3JMb2NhdGlvbihjaXR5TmFtZSkge1xuICB0cnkge1xuICAgIGNvbnN0IGxvY2F0aW9uRGF0YSA9IGF3YWl0IGdldExvY2F0aW9uKGAke2NpdHlOYW1lfWApO1xuICAgIC8vIEV4dHJhY3RpbmcgbGF0aXR1ZGUgYW5kIGxvbmdpdHVkZSBmcm9tIGxvY2F0aW9uIGRhdGEgdG8gcmV0cmlldmUgdGhlIHdlYXRoZXJcbiAgICBjb25zdCB7IGxhdCwgbG9uIH0gPSBsb2NhdGlvbkRhdGE7XG4gICAgY29uc3QgdGVtcENoZWNrYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RlbXBDaGVja2JveCcpO1xuICAgIC8vIENoZWNrIGlmIGNlbHNpdXMgb3IgZmFyZW5oZWl0IGlzIHNlbGVjdGVkXG4gICAgY29uc3QgdW5pdFR5cGUgPSB0ZW1wQ2hlY2tib3guY2hlY2tlZCA/ICdpbXBlcmlhbCcgOiAnbWV0cmljJztcbiAgICBjb25zdCBVUkwgPSBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L29uZWNhbGw/bGF0PSR7bGF0fSZsb249JHtsb259JmV4Y2x1ZGU9bWludXRlbHkmdW5pdHM9JHt1bml0VHlwZX0mYXBwaWQ9MjRjNDgxZmM5YjczYzY4NzM3NzE4ZGIyYzE0YjEyMTFgO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goVVJMKTtcbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAvLyBBc3NpZ25pbmcgdGhlIG5hbWUgYW5kIGNvdW50cnkgdG8gdGhlIG9iamVjdCBiZWNhdXNlIHRoZXkgYXJlIG5vdCBpbmNsdWRlZCBpbiB0aGUgcmVzcG9uc2VcbiAgICB3ZWF0aGVyRGF0YS5uYW1lID0gbG9jYXRpb25EYXRhLm5hbWU7XG4gICAgd2VhdGhlckRhdGEuY291bnRyeSA9IGxvY2F0aW9uRGF0YS5jb3VudHJ5O1xuICAgIHJldHVybiB3ZWF0aGVyRGF0YTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldFdlYXRoZXJGb3JMb2NhdGlvbjtcbiIsImltcG9ydCBjYXBpdGFsaXplRWFjaExldHRlckluV29yZCBmcm9tICcuL3V0aWxpdHkvY2FwaXRhbGl6ZUVhY2hMZXR0ZXJJbldvcmQnO1xuXG5mdW5jdGlvbiBjaGFuZ2VDaXR5VGVtcGVyYXR1cmUod2VhdGhlckRhdGEpIHtcbiAgY29uc3QgbWFpblRlbXBlcmF0dXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnRUZW1wZXJhdHVyZScpO1xuICBjb25zdCBoaWdoVGVtcGVyYXR1cmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaGlnaFRlbXAnKTtcbiAgY29uc3QgbG93VGVtcGVyYXR1cmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG93VGVtcCcpO1xuICBjb25zdCBmZWVsc0xpa2VUZW1wZXJhdHVyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mZWVsc0xpa2VEaXYnKTtcblxuICBtYWluVGVtcGVyYXR1cmUudGV4dENvbnRlbnQgPSBgJHtNYXRoLmZsb29yKHdlYXRoZXJEYXRhLmN1cnJlbnQudGVtcCl9wrBgO1xuICBoaWdoVGVtcGVyYXR1cmUudGV4dENvbnRlbnQgPSBgSGlnaDogJHtNYXRoLmZsb29yKFxuICAgIHdlYXRoZXJEYXRhLmRhaWx5WzBdLnRlbXAubWF4LFxuICApfcKwYDtcbiAgbG93VGVtcGVyYXR1cmUudGV4dENvbnRlbnQgPSBgTG93OiAke01hdGguZmxvb3IoXG4gICAgd2VhdGhlckRhdGEuZGFpbHlbMF0udGVtcC5taW4sXG4gICl9wrBgO1xuICBmZWVsc0xpa2VUZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IGBGZWVscyBMaWtlOiAke01hdGguZmxvb3IoXG4gICAgd2VhdGhlckRhdGEuY3VycmVudC5mZWVsc19saWtlLFxuICApfcKwYDtcbn1cblxuZnVuY3Rpb24gY2hhbmdlQ2l0eU5hbWUod2VhdGhlckRhdGEpIHtcbiAgY29uc3QgY2l0eU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2l0eU5hbWUnKTtcbiAgY2l0eU5hbWUudGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyRGF0YS5uYW1lfSwgJHt3ZWF0aGVyRGF0YS5jb3VudHJ5fWA7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZVdlYXRoZXJJY29uKHdlYXRoZXJEYXRhKSB7XG4gIGNvbnN0IHdlYXRoZXJJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXJJY29uJyk7XG4gIGNvbnN0IHdlYXRoZXJFeHBsYW5hdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyRXhwbGFuYXRpb24nKTtcbiAgLy8gQ2hhbmdlcyB0aGUgaWNvbiB3aXRoIHRoZSBvbmVzIHByb3ZpZGVkIGJ5IG9wZW53ZWF0aGVyXG4gIHdlYXRoZXJJY29uLnNyYyA9IGBodHRwczovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHt3ZWF0aGVyRGF0YS5jdXJyZW50LndlYXRoZXJbMF0uaWNvbn1AMngucG5nYDtcbiAgLy8gQ2FwaXRhbGl6ZXMgdGhlIGxldHRlcnMgaW4gdGhlIGdpdmVuIHdvcmRcbiAgY29uc3QgY2FwaXRhbGl6ZWRXZWF0aGVyRXhwbGFuYXRpb24gPSBjYXBpdGFsaXplRWFjaExldHRlckluV29yZChcbiAgICB3ZWF0aGVyRGF0YS5jdXJyZW50LndlYXRoZXJbMF0uZGVzY3JpcHRpb24sXG4gICk7XG4gIHdlYXRoZXJFeHBsYW5hdGlvbi50ZXh0Q29udGVudCA9IGNhcGl0YWxpemVkV2VhdGhlckV4cGxhbmF0aW9uO1xufVxuXG5leHBvcnQgeyBjaGFuZ2VDaXR5VGVtcGVyYXR1cmUsIGNoYW5nZUNpdHlOYW1lLCBjaGFuZ2VXZWF0aGVySWNvbiB9O1xuIiwiaW1wb3J0IGNvbnZlcnRVbml4VGltZSBmcm9tICcuL3V0aWxpdHkvY29udmVydFVuaXhUaW1lJztcblxuY29uc3QgZDJkID0gcmVxdWlyZSgnZGVncmVlcy10by1kaXJlY3Rpb24nKTtcblxuY29uc3QgdGVtcENoZWNrYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RlbXBDaGVja2JveCcpO1xuXG5mdW5jdGlvbiBjcmVhdGVEYWlseUNhcmRzKGRhaWx5V2VhdGhlckRhdGEpIHtcbiAgY29uc3QgZGFpbHlUZW1wZXJhdHVyZURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYWlseVRlbXBlcmF0dXJlRGl2Jyk7XG4gIGNvbnN0IGRhaWx5Q2FyZHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGFpbHlDYXJkcy5jbGFzc0xpc3QuYWRkKCdkYWlseUNhcmRzJyk7XG4gIGRhaWx5VGVtcGVyYXR1cmVEaXYuYXBwZW5kQ2hpbGQoZGFpbHlDYXJkcyk7XG5cbiAgY29uc3QgZGFpbHlGb3JlY2FzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkYWlseUZvcmVjYXN0LmNsYXNzTGlzdC5hZGQoJ2RhaWx5VGl0bGUnKTtcbiAgZGFpbHlDYXJkcy5hcHBlbmRDaGlsZChkYWlseUZvcmVjYXN0KTtcblxuICBjb25zdCBkYXlBbmRGb3JlY2FzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkYXlBbmRGb3JlY2FzdC5jbGFzc0xpc3QuYWRkKCdkYXlBbmRGb3JlY2FzdCcpO1xuICBkYWlseUZvcmVjYXN0LmFwcGVuZENoaWxkKGRheUFuZEZvcmVjYXN0KTtcblxuICBjb25zdCBkYXlTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBkYXlTcGFuLnRleHRDb250ZW50ID0gY29udmVydFVuaXhUaW1lKGRhaWx5V2VhdGhlckRhdGEuZHQpLmNvbnZlcnRUb0RheXMoKTtcbiAgZGF5QW5kRm9yZWNhc3QuYXBwZW5kQ2hpbGQoZGF5U3Bhbik7XG5cbiAgY29uc3QgZm9yZWNhc3RTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBmb3JlY2FzdFNwYW4udGV4dENvbnRlbnQgPSBgJHtkYWlseVdlYXRoZXJEYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb259YDtcbiAgZGF5QW5kRm9yZWNhc3QuYXBwZW5kQ2hpbGQoZm9yZWNhc3RTcGFuKTtcblxuICBjb25zdCBpY29uQW5kVGVtcGVyYXR1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaWNvbkFuZFRlbXBlcmF0dXJlLmNsYXNzTGlzdC5hZGQoJ2ljb25BbmRUZW1wZXJhdHVyZScpO1xuICBkYWlseUZvcmVjYXN0LmFwcGVuZENoaWxkKGljb25BbmRUZW1wZXJhdHVyZSk7XG5cbiAgY29uc3Qgd2VhdGhlckljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgd2VhdGhlckljb24uY2xhc3NMaXN0LmFkZCgnd2VhdGhlckljb24nKTtcbiAgLy8gU2V0cyB0aGUgc291cmNlIG9mIHRoZSBpY29uIHRvIHRoZSBpY29ucyBmcm9tIHRoZSBvcGVud2VhdGhlciBhcGkgaWNvbnNcbiAgd2VhdGhlckljb24uc3JjID0gYGh0dHBzOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke2RhaWx5V2VhdGhlckRhdGEud2VhdGhlclswXS5pY29ufUAyeC5wbmdgO1xuICBpY29uQW5kVGVtcGVyYXR1cmUuYXBwZW5kQ2hpbGQod2VhdGhlckljb24pO1xuXG4gIGNvbnN0IGhpZ2hBbmRMb3dUZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhpZ2hBbmRMb3dUZW1wLmNsYXNzTGlzdC5hZGQoJ2hpZ2hBbmRMb3dUZW1wJyk7XG4gIGljb25BbmRUZW1wZXJhdHVyZS5hcHBlbmRDaGlsZChoaWdoQW5kTG93VGVtcCk7XG5cbiAgY29uc3QgaGlnaFRlbXBTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBoaWdoVGVtcFNwYW4udGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKGRhaWx5V2VhdGhlckRhdGEudGVtcC5tYXgpfcKwYDtcbiAgaGlnaEFuZExvd1RlbXAuYXBwZW5kQ2hpbGQoaGlnaFRlbXBTcGFuKTtcblxuICBjb25zdCBsb3dUZW1wU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgbG93VGVtcFNwYW4udGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKGRhaWx5V2VhdGhlckRhdGEudGVtcC5taW4pfcKwYDtcbiAgaGlnaEFuZExvd1RlbXAuYXBwZW5kQ2hpbGQobG93VGVtcFNwYW4pO1xuXG4gIGNvbnN0IGRhaWx5RGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIGRhaWx5RGV0YWlscy5jbGFzc0xpc3QuYWRkKCdkYWlseURldGFpbHMnKTtcbiAgZGFpbHlDYXJkcy5hcHBlbmRDaGlsZChkYWlseURldGFpbHMpO1xuXG4gIGNvbnN0IHByZWNpcGl0YXRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBwcmVjaXBpdGF0aW9uRGl2LmNsYXNzTGlzdC5hZGQoJ3ByZWNpcGl0YXRpb25EaXYnKTtcbiAgZGFpbHlEZXRhaWxzLmFwcGVuZENoaWxkKHByZWNpcGl0YXRpb25EaXYpO1xuXG4gIGNvbnN0IHByZWNpcGl0YXRpb25UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgcHJlY2lwaXRhdGlvblRpdGxlLnRleHRDb250ZW50ID0gJ1ByZWNpcGl0YXRpb246JztcbiAgcHJlY2lwaXRhdGlvbkRpdi5hcHBlbmRDaGlsZChwcmVjaXBpdGF0aW9uVGl0bGUpO1xuXG4gIGNvbnN0IHByZWNpcGl0YXRpb25QZXJjZW50YWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAvLyBSb3VuZGluZyB0aGUgcGVyY2lwaXRhdGlvbiBudW1iZXIgYW5kIG11bHRpcGx5aW5nIGJ5IDEwMCAgdG8gbWFrZSBpdCBhIHBlcmNlbnRhZ2VcbiAgcHJlY2lwaXRhdGlvblBlcmNlbnRhZ2UudGV4dENvbnRlbnQgPSBgJHtNYXRoLmZsb29yKFxuICAgIGRhaWx5V2VhdGhlckRhdGEucG9wICogMTAwLFxuICApfSVgO1xuICBwcmVjaXBpdGF0aW9uRGl2LmFwcGVuZENoaWxkKHByZWNpcGl0YXRpb25QZXJjZW50YWdlKTtcblxuICBjb25zdCB3aW5kRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgd2luZERpdi5jbGFzc0xpc3QuYWRkKCd3aW5kRGl2Jyk7XG4gIGRhaWx5RGV0YWlscy5hcHBlbmRDaGlsZCh3aW5kRGl2KTtcblxuICBjb25zdCB3aW5kVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIHdpbmRUaXRsZS50ZXh0Q29udGVudCA9ICdXaW5kOic7XG4gIHdpbmREaXYuYXBwZW5kQ2hpbGQod2luZFRpdGxlKTtcblxuICBjb25zdCB3aW5kUGVyY2VudGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgd2luZFBlcmNlbnRhZ2UuY2xhc3NMaXN0LmFkZCgnd2luZFBlcmNlbnRhZ2UnKTtcbiAgY29uc3QgdW5pdFR5cGUgPSB0ZW1wQ2hlY2tib3guY2hlY2tlZCA/ICdtL2gnIDogJ2ttL2gnO1xuICAvLyBTZXRzIHRoZSB3aW5kIHNwZWVkIGRlcGVuZGVudCBvZiB0aGUgbWV0cmljIHN5c3RlbSBzZWxlY3RlZFxuICAvLyBBbmQgdXNlcyB0aGUgZGVncmVlcyB0byBkaXJlY3Rpb24gbGlicmFyeSB0byBkaXNwbGF5IHRoZSBkaXJlY3Rpb24gb2YgdGhlIHdpbmRcbiAgd2luZFBlcmNlbnRhZ2UudGV4dENvbnRlbnQgPSBgJHtcbiAgICBkYWlseVdlYXRoZXJEYXRhLndpbmRfc3BlZWRcbiAgfSAke3VuaXRUeXBlfSAke2QyZChkYWlseVdlYXRoZXJEYXRhLndpbmRfZGVnKX1gO1xuICB3aW5kRGl2LmFwcGVuZENoaWxkKHdpbmRQZXJjZW50YWdlKTtcblxuICBjb25zdCBodW1pZGl0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGh1bWlkaXR5RGl2LmNsYXNzTGlzdC5hZGQoJ2h1bWlkaXR5RGl2Jyk7XG4gIGRhaWx5RGV0YWlscy5hcHBlbmRDaGlsZChodW1pZGl0eURpdik7XG5cbiAgY29uc3QgaHVtaWRpdHlUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgaHVtaWRpdHlUaXRsZS50ZXh0Q29udGVudCA9ICdIdW1pZGl0eTonO1xuICBodW1pZGl0eURpdi5hcHBlbmRDaGlsZChodW1pZGl0eVRpdGxlKTtcblxuICBjb25zdCBodW1pZGl0eVBlcmNlbnRhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGh1bWlkaXR5UGVyY2VudGFnZS50ZXh0Q29udGVudCA9IGAke2RhaWx5V2VhdGhlckRhdGEuaHVtaWRpdHl9JWA7XG4gIGh1bWlkaXR5RGl2LmFwcGVuZENoaWxkKGh1bWlkaXR5UGVyY2VudGFnZSk7XG5cbiAgY29uc3QgdXZJbmRleERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIHV2SW5kZXhEaXYuY2xhc3NMaXN0LmFkZCgndXZJbmRleERpdicpO1xuICBkYWlseURldGFpbHMuYXBwZW5kQ2hpbGQodXZJbmRleERpdik7XG5cbiAgY29uc3QgdXZJbmRleFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICB1dkluZGV4VGl0bGUudGV4dENvbnRlbnQgPSAnVVYgSW5kZXgnO1xuICB1dkluZGV4RGl2LmFwcGVuZENoaWxkKHV2SW5kZXhUaXRsZSk7XG5cbiAgY29uc3QgdXZJbmRleCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgdXZJbmRleC50ZXh0Q29udGVudCA9IGAke2RhaWx5V2VhdGhlckRhdGEudXZpfWA7XG4gIHV2SW5kZXhEaXYuYXBwZW5kQ2hpbGQodXZJbmRleCk7XG5cbiAgY29uc3Qgc3VucmlzZVN1bnNldERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIHN1bnJpc2VTdW5zZXREaXYuY2xhc3NMaXN0LmFkZCgnc3VucmlzZVN1bnNldCcpO1xuICBkYWlseURldGFpbHMuYXBwZW5kQ2hpbGQoc3VucmlzZVN1bnNldERpdik7XG5cbiAgY29uc3Qgc3VucmlzZVN1bnNldFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBzdW5yaXNlU3Vuc2V0VGl0bGUudGV4dENvbnRlbnQgPSAnU3VucmlzZS9TdW5zZXQnO1xuICBzdW5yaXNlU3Vuc2V0RGl2LmFwcGVuZENoaWxkKHN1bnJpc2VTdW5zZXRUaXRsZSk7XG5cbiAgY29uc3Qgc3VucmlzZVN1bnNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgc3VucmlzZVN1bnNldC50ZXh0Q29udGVudCA9IGAke2NvbnZlcnRVbml4VGltZShcbiAgICBkYWlseVdlYXRoZXJEYXRhLnN1bnJpc2UsXG4gICkuY29udmVydFRvSG91cnMoKX0vJHtjb252ZXJ0VW5peFRpbWUoXG4gICAgZGFpbHlXZWF0aGVyRGF0YS5zdW5zZXQsXG4gICkuY29udmVydFRvSG91cnMoKX1gO1xuICBzdW5yaXNlU3Vuc2V0RGl2LmFwcGVuZENoaWxkKHN1bnJpc2VTdW5zZXQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVEYWlseUNhcmRzO1xuIiwiaW1wb3J0IGNvbnZlcnRVbml4VGltZSBmcm9tICcuL3V0aWxpdHkvY29udmVydFVuaXhUaW1lJztcblxuZnVuY3Rpb24gY3JlYXRlSG91cmx5Q2FyZHMoaG91cmx5V2VhdGhlckRhdGEpIHtcbiAgY29uc3QgY3VycmVudEhvdXJseVdlYXRoZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudEhvdXJseVdlYXRoZXInKTtcbiAgY29uc3QgaG91cmx5Q2FyZHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaG91cmx5Q2FyZHMuY2xhc3NMaXN0LmFkZCgnaG91cmx5Q2FyZHMnKTtcbiAgY3VycmVudEhvdXJseVdlYXRoZXIuYXBwZW5kQ2hpbGQoaG91cmx5Q2FyZHMpO1xuXG4gIGNvbnN0IGhvdXJseVRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaG91cmx5VGVtcC5jbGFzc0xpc3QuYWRkKCdob3VybHlUZW1wJyk7XG4gIGhvdXJseVRlbXAudGV4dENvbnRlbnQgPSBgJHtNYXRoLmZsb29yKGhvdXJseVdlYXRoZXJEYXRhLnRlbXApfcKwYDtcbiAgaG91cmx5Q2FyZHMuYXBwZW5kQ2hpbGQoaG91cmx5VGVtcCk7XG5cbiAgY29uc3QgaG91cmx5SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBob3VybHlJY29uLmNsYXNzTGlzdC5hZGQoJ2hvdXJseUljb24nKTtcbiAgLy8gU2V0cyB0aGUgc291cmNlIG9mIHRoZSBpY29uIHRvIHRoZSBpY29ucyBmcm9tIHRoZSBvcGVud2VhdGhlciBhcGkgaWNvbnNcbiAgaG91cmx5SWNvbi5zcmMgPSBgaHR0cHM6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7aG91cmx5V2VhdGhlckRhdGEud2VhdGhlclswXS5pY29ufUAyeC5wbmdgO1xuICBob3VybHlDYXJkcy5hcHBlbmRDaGlsZChob3VybHlJY29uKTtcblxuICBjb25zdCBob3VybHlQZXJjaXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaG91cmx5UGVyY2lwLmNsYXNzTGlzdC5hZGQoJ2hvdXJseVBlcmNpcCcpO1xuICBob3VybHlDYXJkcy5hcHBlbmRDaGlsZChob3VybHlQZXJjaXApO1xuXG4gIGNvbnN0IGhvdXJseVBlcmNpcFNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGhvdXJseVBlcmNpcFNwYW4udGV4dENvbnRlbnQgPSAnUGVyY2lwOic7XG4gIGhvdXJseVBlcmNpcC5hcHBlbmRDaGlsZChob3VybHlQZXJjaXBTcGFuKTtcblxuICBjb25zdCBob3VybHlQZXJjaXBTcGFuUGVyY2VudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgLy8gUm91bmRpbmcgdGhlIHBlcmNpcGl0YXRpb24gbnVtYmVyIGFuZCBtdWx0aXBseWluZyBieSAxMDAgIHRvIG1ha2UgaXQgYSBwZXJjZW50YWdlXG4gIGhvdXJseVBlcmNpcFNwYW5QZXJjZW50LnRleHRDb250ZW50ID0gYCR7TWF0aC5mbG9vcihcbiAgICBob3VybHlXZWF0aGVyRGF0YS5wb3AgKiAxMDAsXG4gICl9JWA7XG4gIGhvdXJseVBlcmNpcC5hcHBlbmRDaGlsZChob3VybHlQZXJjaXBTcGFuUGVyY2VudCk7XG5cbiAgY29uc3QgaG91cmx5SG91ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBob3VybHlIb3VyLmNsYXNzTGlzdC5hZGQoJ2hvdXJseUhvdXInKTtcbiAgLy8gY29udmVydHMgdGhlIHVuaXggdGltZSB0byByZWd1bGFyIHRpbWUgYW5kIHJldHVybnMganVzdCB0aGUgaG91cnNcbiAgaG91cmx5SG91ci50ZXh0Q29udGVudCA9IGNvbnZlcnRVbml4VGltZShcbiAgICBob3VybHlXZWF0aGVyRGF0YS5kdCxcbiAgKS5jb252ZXJ0VG9Ib3VycygpO1xuICBob3VybHlDYXJkcy5hcHBlbmRDaGlsZChob3VybHlIb3VyKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSG91cmx5Q2FyZHM7XG4iLCJjb25zdCBzZWFyY2hCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoQmFyJyk7XG5jb25zdCBlcnJvck1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXJyb3JNZXNzYWdlJyk7XG5jb25zdCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoQnV0dG9uJyk7XG5cbmZ1bmN0aW9uIGVycm9ySGFuZGxlcigpIHtcbiAgc2VhcmNoQmFyLnN0eWxlLm91dGxpbmUgPSAnMnB4IHNvbGlkIHJlZCc7XG4gIHNlYXJjaEJ1dHRvbi5zdHlsZS5vdXRsaW5lID0gJzJweCBzb2xpZCByZWQnO1xuICBlcnJvck1lc3NhZ2Uuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG59XG5cbmZ1bmN0aW9uIG5vRXJyb3IoKSB7XG4gIHNlYXJjaEJhci5zdHlsZS5vdXRsaW5lID0gJ25vbmUnO1xuICBzZWFyY2hCdXR0b24uc3R5bGUub3V0bGluZSA9ICdub25lJztcbiAgZXJyb3JNZXNzYWdlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59XG5cbmV4cG9ydCB7IGVycm9ySGFuZGxlciwgbm9FcnJvciB9O1xuIiwiaW1wb3J0IGdldFdlYXRoZXJGb3JMb2NhdGlvbiBmcm9tICcuL2FwaUZ1bmN0aW9ucyc7XG5pbXBvcnQge1xuICBjaGFuZ2VDaXR5VGVtcGVyYXR1cmUsXG4gIGNoYW5nZUNpdHlOYW1lLFxuICBjaGFuZ2VXZWF0aGVySWNvbixcbn0gZnJvbSAnLi9jaGFuZ2VNYWluV2VhdGhlckZ1bmN0aW9ucyc7XG5pbXBvcnQgZGVsZXRlSXRlbXNJbkRpdiBmcm9tICcuL3V0aWxpdHkvZGVsZXRlSXRlbXNJbkRpdic7XG5pbXBvcnQgY3JlYXRlSG91cmx5Q2FyZHMgZnJvbSAnLi9jcmVhdGVIb3VybHlDYXJkcyc7XG5pbXBvcnQgY3JlYXRlRGFpbHlDYXJkcyBmcm9tICcuL2NyZWF0ZURhaWx5Q2FyZHMnO1xuaW1wb3J0IGNoYW5nZUJhY2tncm91bmRXZWF0aGVyIGZyb20gJy4vd2VhdGhlckJhY2tncm91bmRDaGFuZ2UnO1xuaW1wb3J0IHsgZXJyb3JIYW5kbGVyLCBub0Vycm9yIH0gZnJvbSAnLi9lcnJvckhhbmRsaW5nJztcblxuY29uc3Qgc2VhcmNoQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlYXJjaEJhcicpO1xuY29uc3Qgc2VhcmNoQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaEJ1dHRvbicpO1xuY29uc3QgY3VycmVudEhvdXJseVdlYXRoZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudEhvdXJseVdlYXRoZXInKTtcbmNvbnN0IGRhaWx5VGVtcGVyYXR1cmVEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGFpbHlUZW1wZXJhdHVyZURpdicpO1xuY29uc3QgdGVtcGVyYXR1cmVTd2l0Y2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVyJyk7XG5jb25zdCBjaXR5TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaXR5TmFtZScpO1xuXG5mdW5jdGlvbiByZW5kZXJXZWF0aGVyKGNpdHlWYWx1ZSkge1xuICAvLyBHZXRzIHRoZSB3ZWF0aGVyIHRvIHRoZSBnaXZlbiBsb2NhdGlvbiBhbmQgcmVuZGVycyB0aGUgd2hvbGUgd2VicGFnZSB3aXRoIHRoYXQgaW5mb3JtYXRpb24uXG4gIC8vIENhbGxzIGFsbCB0aGUgZnVuY3Rpb25zIHRocm91Z2hvdXQgdGhlIGZpbGVzIHRvIHJlbmRlciBldmVyeXRoaW5nIGFuZCBoYW5kbGUgZXJyb3JzXG4gIGdldFdlYXRoZXJGb3JMb2NhdGlvbihjaXR5VmFsdWUpXG4gICAgLnRoZW4oKGN1cnJlbnRXZWF0aGVyRGF0YSkgPT4ge1xuICAgICAgY2hhbmdlQmFja2dyb3VuZFdlYXRoZXIoY3VycmVudFdlYXRoZXJEYXRhKTtcbiAgICAgIGNoYW5nZUNpdHlUZW1wZXJhdHVyZShjdXJyZW50V2VhdGhlckRhdGEpO1xuICAgICAgY2hhbmdlQ2l0eU5hbWUoY3VycmVudFdlYXRoZXJEYXRhKTtcbiAgICAgIGNoYW5nZVdlYXRoZXJJY29uKGN1cnJlbnRXZWF0aGVyRGF0YSk7XG4gICAgICBkZWxldGVJdGVtc0luRGl2KGN1cnJlbnRIb3VybHlXZWF0aGVyKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjQ7IGkgKz0gMSkge1xuICAgICAgICBjcmVhdGVIb3VybHlDYXJkcyhjdXJyZW50V2VhdGhlckRhdGEuaG91cmx5W2ldKTtcbiAgICAgIH1cbiAgICAgIGRlbGV0ZUl0ZW1zSW5EaXYoZGFpbHlUZW1wZXJhdHVyZURpdik7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IDg7IGkgKz0gMSkge1xuICAgICAgICBjcmVhdGVEYWlseUNhcmRzKGN1cnJlbnRXZWF0aGVyRGF0YS5kYWlseVtpXSk7XG4gICAgICB9XG4gICAgICBub0Vycm9yKCk7XG4gICAgfSlcbiAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgZXJyb3JIYW5kbGVyKCk7XG4gICAgfSk7XG59XG5cbnNlYXJjaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gIC8vIFJlbmRlcnMgdGhlIHdlYXRoZXIgZnJvbSB0aGUgbG9jYXRpb24gaW4gdGhlIHNlYXJjaCBiYXJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBpZiAoc2VhcmNoQmFyLnZhbHVlID09PSAnJykge1xuICAgIHJldHVybjtcbiAgfVxuICByZW5kZXJXZWF0aGVyKHNlYXJjaEJhci52YWx1ZSk7XG4gIHNlYXJjaEJhci52YWx1ZSA9ICcnO1xufSk7XG50ZW1wZXJhdHVyZVN3aXRjaC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgLy8gUmVuZGVycyB0aGUgd2VhdGhlciBmcm9tIHRoZSBwcmV2aW91c2x5IHNlYXJjaGVkIGxvY2F0aW9uXG4gIHJlbmRlcldlYXRoZXIoY2l0eU5hbWUudGV4dENvbnRlbnQpO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlcldlYXRoZXI7XG4iLCJmdW5jdGlvbiBjYXBpdGFsaXplRWFjaExldHRlckluV29yZCh3b3JkU3RyaW5nKSB7XG4gIHJldHVybiB3b3JkU3RyaW5nXG4gICAgLnNwbGl0KCcgJylcbiAgICAubWFwKCh3b3JkKSA9PiB3b3JkLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgd29yZC5zdWJzdHJpbmcoMSkpXG4gICAgLmpvaW4oJyAnKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2FwaXRhbGl6ZUVhY2hMZXR0ZXJJbldvcmQ7XG4iLCJmdW5jdGlvbiBjb252ZXJ0VW5peFRpbWUodW5peFRpbWUpIHtcbiAgY29uc3Qgbm9ybWFsRGF0ZSA9IG5ldyBEYXRlKHVuaXhUaW1lICogMTAwMCk7XG5cbiAgZnVuY3Rpb24gY29udmVydFRvSG91cnMoKSB7XG4gICAgcmV0dXJuIG5vcm1hbERhdGUudG9UaW1lU3RyaW5nKCkuc2xpY2UoMCwgNSk7XG4gIH1cblxuICBmdW5jdGlvbiBjb252ZXJ0VG9EYXlzKCkge1xuICAgIHN3aXRjaCAobm9ybWFsRGF0ZS50b0RhdGVTdHJpbmcoKS5zbGljZSgwLCAzKSkge1xuICAgICAgY2FzZSAnTW9uJzpcbiAgICAgICAgcmV0dXJuICdNb25kYXknO1xuXG4gICAgICBjYXNlICdUdWUnOlxuICAgICAgICByZXR1cm4gJ1R1ZXNkYXknO1xuXG4gICAgICBjYXNlICdXZWQnOlxuICAgICAgICByZXR1cm4gJ1dlZG5lc2RheSc7XG5cbiAgICAgIGNhc2UgJ1RodSc6XG4gICAgICAgIHJldHVybiAnVGh1cnNkYXknO1xuXG4gICAgICBjYXNlICdGcmknOlxuICAgICAgICByZXR1cm4gJ0ZyaWRheSc7XG5cbiAgICAgIGNhc2UgJ1NhdCc6XG4gICAgICAgIHJldHVybiAnU2F0dXJkYXknO1xuXG4gICAgICBjYXNlICdTdW4nOlxuICAgICAgICByZXR1cm4gJ1N1bmRheSc7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAnVW5rbm93bic7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHsgY29udmVydFRvSG91cnMsIGNvbnZlcnRUb0RheXMgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29udmVydFVuaXhUaW1lO1xuIiwiZnVuY3Rpb24gZGVsZXRlSXRlbXNJbkRpdihpdGVtcykge1xuICB3aGlsZSAoaXRlbXMuZmlyc3RDaGlsZCkgaXRlbXMucmVtb3ZlQ2hpbGQoaXRlbXMuZmlyc3RDaGlsZCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlbGV0ZUl0ZW1zSW5EaXY7XG4iLCJpbXBvcnQgYnJva2VuY2xvdWRzZCBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL2Jyb2tlbi1jbG91ZHMuanBnJztcbmltcG9ydCBjbGVhcnNreWQgZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9jbGVhci1za3ktZGF5LmpwZyc7XG5pbXBvcnQgY2xlYXJza3luIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvY2xlYXItc2t5LW5pZ2h0LmpwZyc7XG5pbXBvcnQgZmV3Y2xvdWRzZCBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL2Zldy1jbG91ZHMtZGF5LmpwZyc7XG5pbXBvcnQgZmV3Y2xvdWRzbiBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL2Zldy1jbG91ZHMtbmlnaHQuanBnJztcbmltcG9ydCBmb2dkIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvZm9nLWRheS5qcGcnO1xuaW1wb3J0IGZvZ24gZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9mb2ctbmlnaHQuanBnJztcbmltcG9ydCByYWluZCBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL3JhaW4tZGF5LmpwZyc7XG5pbXBvcnQgcmFpbm4gZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9yYWluLW5pZ2h0LmpwZyc7XG5pbXBvcnQgc2NhdHRlcmVkY2xvdWRzZCBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL3NjYXR0ZXJlZC1jbG91ZHMtZGF5LmpwZyc7XG5pbXBvcnQgc2NhdHRlcmVkY2xvdWRzbiBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL3NjYXR0ZXJlZC1jbG91ZHMtbmlnaHQuanBnJztcbmltcG9ydCBzbm93ZCBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL3Nub3ctZGF5LmpwZyc7XG5pbXBvcnQgc25vd24gZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9zbm93LW5pZ2h0LmpwZyc7XG5pbXBvcnQgdGh1bmRlcnN0b3JtZCBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL3RodW5kZXJzdG9ybS1kYXkuanBnJztcbmltcG9ydCB0aHVuZGVyc3Rvcm1uIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvdGh1bmRlcnN0b3JtLW5pZ2h0LmpwZyc7XG5cbmZ1bmN0aW9uIGNob29zZUJhY2tncm91bmQod2VhdGhlckRhdGEpIHtcbiAgLy8gR2V0cyB0aGUgYmFja2dyb3VuZCBjb3JyZXNwb25kaW5nIHRvIHRoZSBjdXJyZW50IHdlYXRoZXIgdGhyb3VnaCB0aGUgd2VhdGhlciBpY29uXG4gIHN3aXRjaCAod2VhdGhlckRhdGEuY3VycmVudC53ZWF0aGVyWzBdLmljb24pIHtcbiAgICBjYXNlICcwMWQnOlxuICAgICAgcmV0dXJuIGNsZWFyc2t5ZDtcbiAgICBjYXNlICcwMW4nOlxuICAgICAgcmV0dXJuIGNsZWFyc2t5bjtcbiAgICBjYXNlICcwMmQnOlxuICAgICAgcmV0dXJuIGZld2Nsb3Vkc2Q7XG4gICAgY2FzZSAnMDJuJzpcbiAgICAgIHJldHVybiBmZXdjbG91ZHNuO1xuICAgIGNhc2UgJzAzZCc6XG4gICAgICByZXR1cm4gc2NhdHRlcmVkY2xvdWRzZDtcbiAgICBjYXNlICcwM24nOlxuICAgICAgcmV0dXJuIHNjYXR0ZXJlZGNsb3Vkc247XG4gICAgY2FzZSAnMDRkJzpcbiAgICAgIHJldHVybiBicm9rZW5jbG91ZHNkO1xuICAgIGNhc2UgJzA0bic6XG4gICAgICByZXR1cm4gc2NhdHRlcmVkY2xvdWRzbjtcbiAgICBjYXNlICcwOWQnIHx8ICcxMGQnOlxuICAgICAgcmV0dXJuIHJhaW5kO1xuICAgIGNhc2UgJzA5bicgfHwgJzEwbic6XG4gICAgICByZXR1cm4gcmFpbm47XG4gICAgY2FzZSAnMTFkJzpcbiAgICAgIHJldHVybiB0aHVuZGVyc3Rvcm1kO1xuICAgIGNhc2UgJzExbic6XG4gICAgICByZXR1cm4gdGh1bmRlcnN0b3JtbjtcbiAgICBjYXNlICcxM2QnOlxuICAgICAgcmV0dXJuIHNub3dkO1xuICAgIGNhc2UgJzEzbic6XG4gICAgICByZXR1cm4gc25vd247XG4gICAgY2FzZSAnNTBkJzpcbiAgICAgIHJldHVybiBmb2dkO1xuICAgIGNhc2UgJzUwbic6XG4gICAgICByZXR1cm4gZm9nbjtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGNsZWFyc2t5ZDtcbiAgfVxufVxuXG5mdW5jdGlvbiBjaGFuZ2VCYWNrZ3JvdW5kV2VhdGhlcih3ZWF0aGVyRGF0YSkge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyRGl2Jyk7XG4gIGNvbnN0IGljb25CYWNrZ3JvdW5kID0gY2hvb3NlQmFja2dyb3VuZCh3ZWF0aGVyRGF0YSk7XG4gIGhlYWRlci5zdHlsZS5iYWNrZ3JvdW5kID0gYHVybCgke2ljb25CYWNrZ3JvdW5kfSkgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXJgO1xuICBoZWFkZXIuc3R5bGUuYmFja2dyb3VuZFNpemUgPSAnY292ZXInO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjaGFuZ2VCYWNrZ3JvdW5kV2VhdGhlcjtcbiIsImltcG9ydCAnLi9zdHlsZXMvc3R5bGUuc2Nzcyc7XG5pbXBvcnQgcmVuZGVyV2VhdGhlciBmcm9tICcuL2Z1bmN0aW9ucy9ldmVudExpc3RlbmVycyc7XG5cbnJlbmRlcldlYXRoZXIoJ0xvbmRvbicpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9