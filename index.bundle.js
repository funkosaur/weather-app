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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n  scroll-behavior: smooth;\n}\n\n@font-face {\n  font-family: Roboto;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff\");\n}\n@font-face {\n  font-family: RobotoBlack;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff\");\n}\nbody {\n  width: 100%;\n  font-family: Roboto;\n  overflow-y: scroll;\n  scrollbar-gutter: auto;\n}\nbody ::-webkit-scrollbar {\n  width: 2em;\n  height: 0.8em;\n}\nbody ::-webkit-scrollbar-track {\n  background: Gray;\n  border-radius: 100vw;\n  margin-block: 0.5em;\n}\nbody ::-webkit-scrollbar-thumb {\n  background: lightGray;\n  border: 0.25em solid lightGray;\n  border-radius: 100vw;\n}\nbody ::-webkit-scrollbar-thumb:hover {\n  background: lightGray;\n}\n\n.headerDiv {\n  grid-column: 1/4;\n  grid-row: 1/2;\n  display: grid;\n  grid-template-columns: 0.3fr minmax(auto, 80em) 0.3fr;\n  height: 73vh;\n}\n\n.header {\n  grid-column: 2/4;\n  grid-row: 1/2;\n  display: grid;\n  grid-template-columns: 0.4fr 1fr 0.4fr;\n  grid-template-rows: 0.3fr 1fr 0.8fr;\n}\n.header .searchBarContainer {\n  grid-column: 2/3;\n  grid-row: 1/2;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n}\n.header .searchBarContainer #searchBar {\n  width: 80%;\n  height: 40px;\n  border: none;\n  outline: none;\n  font-size: 16px;\n  text-indent: 10px;\n  border-bottom-left-radius: 4px;\n  border-top-left-radius: 4px;\n}\n.header .searchBarContainer .buttonDiv {\n  height: 40px;\n  width: 10%;\n}\n.header .searchBarContainer .buttonDiv .searchButton {\n  width: 100%;\n  height: 100%;\n  border: none;\n  background-color: #eb6f4c;\n  color: white;\n  border-bottom-right-radius: 4px;\n  border-top-right-radius: 4px;\n  font-family: Roboto;\n  font-size: 15px;\n}\n.header .searchBarContainer .searchBarError {\n  border: 5px solid red;\n}\n.header .searchBarContainer .errorMessage {\n  position: absolute;\n  bottom: 0;\n  color: red;\n  display: none;\n  text-align: center;\n}\n.header .currentTemperatureDiv {\n  grid-column: 1/2;\n  grid-row: 2/3;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.header .currentTemperatureDiv .currentTemperatureDiv2 {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 80%;\n  width: 70%;\n  border-radius: 8px;\n  background-color: rgba(255, 255, 255, 0.15);\n  backdrop-filter: blur(8px);\n  color: white;\n  font-size: 16px;\n}\n.header .currentTemperatureDiv .currentTemperatureDiv2 .highAndLow {\n  display: flex;\n  justify-content: space-around;\n  width: 100%;\n  height: 15%;\n  text-align: center;\n}\n.header .currentTemperatureDiv .currentTemperatureDiv2 .highAndLow #highTemp {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.header .currentTemperatureDiv .currentTemperatureDiv2 .highAndLow #lowTemp {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.header .currentTemperatureDiv .currentTemperatureDiv2 .currentTemperature {\n  width: 100%;\n  height: 70%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 70px;\n}\n.header .currentTemperatureDiv .currentTemperatureDiv2 .feelsLikeDiv {\n  height: 15%;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.header .currentLocation {\n  grid-column: 2/3;\n  grid-row: 2/3;\n  font-family: RobotoBlack;\n  font-size: 36px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.header .currentLocation .locationContainer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(255, 255, 255, 0.15);\n  backdrop-filter: blur(8px);\n  color: white;\n  border-radius: 8px;\n  width: 70%;\n  height: 130px;\n  flex-wrap: wrap;\n  padding: 10px;\n  text-align: center;\n  flex-direction: column;\n  justify-content: space-around;\n}\n.header .currentLocation .locationContainer .switchContainer {\n  display: flex;\n  flex-direction: row;\n  /* Rounded sliders */\n}\n.header .currentLocation .locationContainer .switchContainer #Celsius {\n  margin-right: 10px;\n}\n.header .currentLocation .locationContainer .switchContainer #Farenheit {\n  margin-left: 10px;\n}\n.header .currentLocation .locationContainer .switchContainer .switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n.header .currentLocation .locationContainer .switchContainer .switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.header .currentLocation .locationContainer .switchContainer .slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgb(48, 47, 47);\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n.header .currentLocation .locationContainer .switchContainer .slider:before {\n  position: absolute;\n  content: \"\";\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n.header .currentLocation .locationContainer .switchContainer input:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}\n.header .currentLocation .locationContainer .switchContainer .slider.round {\n  border-radius: 34px;\n}\n.header .currentLocation .locationContainer .switchContainer .slider.round:before {\n  border-radius: 50%;\n}\n.header .currentWeather {\n  grid-column: 3/4;\n  grid-row: 2/3;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.header .currentWeather .containerDiv {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 80%;\n  width: 70%;\n  border-radius: 8px;\n  background-color: rgba(255, 255, 255, 0.15);\n  backdrop-filter: blur(8px);\n  color: white;\n}\n.header .currentWeather .containerDiv .weatherIconDiv {\n  width: 100%;\n  height: 80%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.header .currentWeather .containerDiv .weatherIconDiv .weatherIcon {\n  height: 85%;\n}\n.header .currentWeather .containerDiv .weatherExplanation {\n  width: 100%;\n  height: 20%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n.header .currentHourlyWeather {\n  grid-column: 1/4;\n  grid-row: 3/4;\n  overflow-x: scroll;\n  white-space: nowrap;\n  border-top-left-radius: 24px;\n  border-top-right-radius: 24px;\n  border-bottom-left-radius: 12px;\n  border-bottom-right-radius: 12px;\n  display: flex;\n  padding-top: 20px;\n}\n.header .currentHourlyWeather .hourlyCards {\n  font-family: Roboto;\n  height: 90%;\n  min-width: 85px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  justify-content: space-around;\n  flex-direction: column;\n  margin-left: 15px;\n  margin-right: 15px;\n  font-size: 16px;\n  background-color: rgb(48, 47, 47);\n  margin-top: 10px;\n  border-radius: 8px;\n  color: white;\n}\n.header .currentHourlyWeather .hourlyCards .hourlyIcon {\n  width: 60px;\n  height: 60px;\n}\n.header .currentHourlyWeather .hourlyCards .hourlyPercip {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-size: 14px;\n}\n\n.footer {\n  grid-column: 1/4;\n  grid-row: 2/3;\n  background-color: rgb(49, 49, 49);\n  color: white;\n  height: 70%;\n}\n.footer .dailyTempTitle {\n  width: 100%;\n  height: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(17, 16, 16, 0.938);\n  border-bottom: 2px solid black;\n}\n.footer .dailyTemperatureDiv {\n  background-color: black;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n}\n.footer .dailyTemperatureDiv .dailyCards {\n  background-color: rgb(17, 16, 16);\n  width: 270px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  padding-top: 5px;\n  padding-left: 20px;\n  padding-right: 20px;\n  padding-bottom: 15px;\n  margin: 10px;\n}\n.footer .dailyTemperatureDiv .dailyCards .dailyTitle {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n}\n.footer .dailyTemperatureDiv .dailyCards .dailyTitle .dayAndForecast {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  align-items: flex-start;\n  width: 100%;\n}\n.footer .dailyTemperatureDiv .dailyCards .dailyTitle .weatherIcon {\n  width: 60px;\n  height: 60px;\n}\n.footer .dailyTemperatureDiv .dailyCards .dailyTitle .iconAndTemperature {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.footer .dailyTemperatureDiv .dailyCards .dailyTitle .highAndLowTemp {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n.footer .dailyTemperatureDiv .dailyCards .dailyDetails {\n  padding-left: 5px;\n  padding-right: 5px;\n  width: 100%;\n  height: 95px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.footer .dailyTemperatureDiv .dailyCards .dailyDetails .precipitationDiv,\n.footer .dailyTemperatureDiv .dailyCards .dailyDetails .windDiv,\n.footer .dailyTemperatureDiv .dailyCards .dailyDetails .humidityDiv,\n.footer .dailyTemperatureDiv .dailyCards .dailyDetails .uvIndexDiv,\n.footer .dailyTemperatureDiv .dailyCards .dailyDetails .sunriseSunset {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.fadeIn {\n  animation: fadeIn 0.3s;\n}\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n    bottom: 50;\n  }\n  100% {\n    opacity: 0.5;\n    bottom: 0;\n  }\n}\n@media only screen and (max-width: 1036px) {\n  .headerDiv {\n    height: 90vh;\n  }\n  .header {\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 0.4fr 0.4fr 0.8fr 0.8fr;\n  }\n  .header .searchBarContainer {\n    grid-column: 1/3;\n  }\n  .header .searchBarContainer .errorMessage {\n    font-size: 14px;\n  }\n  .header .currentLocation {\n    grid-column: 1/3;\n  }\n  .header .currentTemperatureDiv {\n    grid-row: 3/4;\n    grid-column: 1/2;\n  }\n  .header .currentTemperatureDiv .currentTemperatureDiv2 {\n    padding-top: 5px;\n    padding-bottom: 5px;\n  }\n  .header .currentWeather {\n    grid-row: 3/4;\n    grid-column: 2/3;\n  }\n  .header .currentWeather .containerDiv .weatherIconDiv {\n    height: 75%;\n  }\n  .header .currentWeather .containerDiv .weatherExplanation {\n    height: 25%;\n  }\n  .header .currentHourlyWeather {\n    grid-row: 4/5;\n    padding-top: 15px;\n  }\n  .header .currentHourlyWeather .hourlyCards {\n    padding-top: 5px;\n    padding-bottom: 5px;\n  }\n}\n@media only screen and (max-width: 570px) {\n  body {\n    position: relative;\n    display: grid;\n    grid-template-rows: 90vh 0.5fr;\n  }\n  .headerDiv {\n    grid-row: 1/2;\n    position: fixed;\n  }\n  #searchBar {\n    width: 70% !important;\n    height: 30px !important;\n  }\n  .buttonDiv {\n    width: 20% !important;\n    height: 30px !important;\n  }\n  .currentTemperatureDiv2 .highAndLow {\n    font-size: 14px;\n  }\n  .currentTemperatureDiv2 .currentTemperature {\n    font-size: 60px !important;\n  }\n  .currentTemperatureDiv2 .feelsLikeDiv {\n    font-size: 14px;\n  }\n  .footer {\n    grid-row: 2/3;\n    z-index: 10;\n    position: relative;\n  }\n}", "",{"version":3,"sources":["webpack://./src/styles/style.scss"],"names":[],"mappings":"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","sourcesContent":["@import './reset.css';\n\n* {\n  box-sizing: border-box;\n  scroll-behavior: smooth;\n}\n\n@font-face {\n  font-family: Roboto;\n  src: url('../assets/fonts/Roboto-Regular.woff') format('woff');\n}\n\n@font-face {\n  font-family: RobotoBlack;\n  src: url('../assets/fonts/Roboto-Black.woff') format('woff');\n}\n\n$Gray: rgb(63, 63, 63);\n$lightGray: rgb(139, 139, 139);\n\n@mixin flexCenter {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n@mixin scrollBar {\n  ::-webkit-scrollbar {\n    width: 2em;\n    height: 0.8em;\n  }\n\n  ::-webkit-scrollbar-track {\n    background: Gray;\n    border-radius: 100vw;\n    margin-block: 0.5em;\n  }\n\n  ::-webkit-scrollbar-thumb {\n    background: lightGray;\n    border: 0.25em solid lightGray;\n    border-radius: 100vw;\n  }\n\n  ::-webkit-scrollbar-thumb:hover {\n    background: lightGray;\n  }\n}\n\nbody {\n  width: 100%;\n  font-family: Roboto;\n  overflow-y: scroll;\n  scrollbar-gutter: auto;\n  @include scrollBar();\n}\n\n.headerDiv {\n  grid-column: 1/4;\n  grid-row: 1/2;\n  display: grid;\n  grid-template-columns: 0.3fr minmax(auto, 80em) 0.3fr;\n  height: 73vh;\n}\n\n.header {\n  grid-column: 2/4;\n  grid-row: 1/2;\n  display: grid;\n  grid-template-columns: 0.4fr 1fr 0.4fr;\n  grid-template-rows: 0.3fr 1fr 0.8fr;\n\n  .searchBarContainer {\n    grid-column: 2/3;\n    grid-row: 1/2;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n\n    #searchBar {\n      width: 80%;\n      height: 40px;\n      border: none;\n      outline: none;\n      font-size: 16px;\n      text-indent: 10px;\n      border-bottom-left-radius: 4px;\n      border-top-left-radius: 4px;\n    }\n    .buttonDiv {\n      height: 40px;\n      width: 10%;\n      .searchButton {\n        width: 100%;\n        height: 100%;\n        border: none;\n        background-color: #eb6f4c;\n        color: white;\n        border-bottom-right-radius: 4px;\n        border-top-right-radius: 4px;\n        font-family: Roboto;\n        font-size: 15px;\n      }\n    }\n    .searchBarError {\n      border: 5px solid red;\n    }\n    .errorMessage {\n      position: absolute;\n      bottom: 0;\n      color: red;\n      display: none;\n      text-align: center;\n    }\n  }\n\n  .currentTemperatureDiv {\n    grid-column: 1/2;\n    grid-row: 2/3;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n\n    .currentTemperatureDiv2 {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n      height: 80%;\n      width: 70%;\n      border-radius: 8px;\n      background-color: rgba(255, 255, 255, 0.15);\n      backdrop-filter: blur(8px);\n      color: white;\n      font-size: 16px;\n\n      .highAndLow {\n        display: flex;\n        justify-content: space-around;\n        width: 100%;\n        height: 15%;\n        text-align: center;\n        #highTemp {\n          @include flexCenter();\n        }\n        #lowTemp {\n          @include flexCenter();\n        }\n      }\n\n      .currentTemperature {\n        width: 100%;\n        height: 70%;\n        @include flexCenter();\n        font-size: 70px;\n      }\n\n      .feelsLikeDiv {\n        height: 15%;\n        width: 100%;\n        @include flexCenter();\n      }\n    }\n  }\n\n  .currentLocation {\n    grid-column: 2/3;\n    grid-row: 2/3;\n    font-family: RobotoBlack;\n    font-size: 36px;\n    @include flexCenter();\n\n    .locationContainer {\n      @include flexCenter();\n      background-color: rgba(255, 255, 255, 0.15);\n      backdrop-filter: blur(8px);\n      color: white;\n      border-radius: 8px;\n      width: 70%;\n      height: 130px;\n      flex-wrap: wrap;\n      padding: 10px;\n      text-align: center;\n      flex-direction: column;\n      justify-content: space-around;\n\n      .switchContainer {\n        display: flex;\n        flex-direction: row;\n\n        #Celsius {\n          margin-right: 10px;\n        }\n\n        #Farenheit {\n          margin-left: 10px;\n        }\n\n        .switch {\n          position: relative;\n          display: inline-block;\n          width: 60px;\n          height: 34px;\n        }\n\n        .switch input {\n          opacity: 0;\n          width: 0;\n          height: 0;\n        }\n\n        .slider {\n          position: absolute;\n          cursor: pointer;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          background-color: rgba(48, 47, 47, 1);\n          -webkit-transition: 0.4s;\n          transition: 0.4s;\n        }\n\n        .slider:before {\n          position: absolute;\n          content: '';\n          height: 26px;\n          width: 26px;\n          left: 4px;\n          bottom: 4px;\n          background-color: white;\n          -webkit-transition: 0.4s;\n          transition: 0.4s;\n        }\n\n        input:checked + .slider:before {\n          -webkit-transform: translateX(26px);\n          -ms-transform: translateX(26px);\n          transform: translateX(26px);\n        }\n\n        /* Rounded sliders */\n        .slider.round {\n          border-radius: 34px;\n        }\n\n        .slider.round:before {\n          border-radius: 50%;\n        }\n      }\n    }\n  }\n\n  .currentWeather {\n    grid-column: 3/4;\n    grid-row: 2/3;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    .containerDiv {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n      height: 80%;\n      width: 70%;\n      border-radius: 8px;\n      background-color: rgba(255, 255, 255, 0.15);\n      backdrop-filter: blur(8px);\n      color: white;\n      .weatherIconDiv {\n        width: 100%;\n        height: 80%;\n        @include flexCenter();\n        .weatherIcon {\n          height: 85%;\n        }\n      }\n      .weatherExplanation {\n        width: 100%;\n        height: 20%;\n        @include flexCenter();\n        text-align: center;\n      }\n    }\n  }\n\n  .currentHourlyWeather {\n    grid-column: 1/4;\n    grid-row: 3/4;\n    overflow-x: scroll;\n    white-space: nowrap;\n    border-top-left-radius: 24px;\n    border-top-right-radius: 24px;\n    border-bottom-left-radius: 12px;\n    border-bottom-right-radius: 12px;\n    display: flex;\n    padding-top: 20px;\n    .hourlyCards {\n      font-family: Roboto;\n      height: 90%;\n      min-width: 85px;\n      @include flexCenter();\n      justify-content: space-around;\n      flex-direction: column;\n      margin-left: 15px;\n      margin-right: 15px;\n      font-size: 16px;\n      background-color: rgba(48, 47, 47, 1);\n      margin-top: 10px;\n      border-radius: 8px;\n      color: white;\n      .hourlyIcon {\n        width: 60px;\n        height: 60px;\n      }\n      .hourlyPercip {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        font-size: 14px;\n      }\n    }\n  }\n}\n\n.footer {\n  grid-column: 1/4;\n  grid-row: 2/3;\n  background-color: rgb(49, 49, 49);\n  color: white;\n  height: 70%;\n  .dailyTempTitle {\n    width: 100%;\n    height: 50px;\n    @include flexCenter();\n    background-color: rgba(17, 16, 16, 0.938);\n    border-bottom: 2px solid black;\n  }\n  .dailyTemperatureDiv {\n    background-color: black;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: center;\n    .dailyCards {\n      background-color: rgba(17, 16, 16);\n      width: 270px;\n      @include flexCenter();\n      flex-direction: column;\n      padding-top: 5px;\n      padding-left: 20px;\n      padding-right: 20px;\n      padding-bottom: 15px;\n      margin: 10px;\n      .dailyTitle {\n        @include flexCenter();\n        justify-content: space-between;\n        width: 100%;\n        .dayAndForecast {\n          @include flexCenter();\n          flex-direction: column;\n          align-items: flex-start;\n          width: 100%;\n        }\n        .weatherIcon {\n          width: 60px;\n          height: 60px;\n        }\n        .iconAndTemperature {\n          @include flexCenter();\n        }\n        .highAndLowTemp {\n          @include flexCenter();\n          flex-direction: column;\n        }\n      }\n      .dailyDetails {\n        padding-left: 5px;\n        padding-right: 5px;\n        width: 100%;\n        height: 95px;\n        display: flex;\n        flex-direction: column;\n        justify-content: space-between;\n        .precipitationDiv,\n        .windDiv,\n        .humidityDiv,\n        .uvIndexDiv,\n        .sunriseSunset {\n          @include flexCenter();\n          justify-content: space-between;\n        }\n      }\n    }\n  }\n}\n\n.fadeIn {\n  animation: fadeIn 0.3s;\n}\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n    bottom: 50;\n  }\n  100% {\n    opacity: 0.5;\n    bottom: 0;\n  }\n}\n\n@media only screen and (max-width: 1036px) {\n  .headerDiv {\n    height: 90vh;\n  }\n  .header {\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 0.4fr 0.4fr 0.8fr 0.8fr;\n\n    .searchBarContainer {\n      grid-column: 1/3;\n\n      .errorMessage {\n        font-size: 14px;\n      }\n    }\n\n    .currentLocation {\n      grid-column: 1/3;\n    }\n\n    .currentTemperatureDiv {\n      grid-row: 3/4;\n      grid-column: 1/2;\n      .currentTemperatureDiv2 {\n        padding-top: 5px;\n        padding-bottom: 5px;\n      }\n    }\n    .currentWeather {\n      grid-row: 3/4;\n      grid-column: 2/3;\n      .containerDiv {\n        .weatherIconDiv {\n          height: 75%;\n        }\n        .weatherExplanation {\n          height: 25%;\n        }\n      }\n    }\n    .currentHourlyWeather {\n      grid-row: 4/5;\n      padding-top: 15px;\n      .hourlyCards {\n        padding-top: 5px;\n        padding-bottom: 5px;\n      }\n    }\n  }\n}\n\n@media only screen and (max-width: 570px) {\n  body {\n    position: relative;\n    display: grid;\n    grid-template-rows: 90vh 0.5fr;\n  }\n\n  .headerDiv {\n    grid-row: 1/2;\n    position: fixed;\n  }\n  #searchBar {\n    width: 70% !important;\n    height: 30px !important;\n  }\n\n  .buttonDiv {\n    width: 20% !important;\n    height: 30px !important;\n  }\n  .currentTemperatureDiv2 {\n    .highAndLow {\n      font-size: 14px;\n    }\n    .currentTemperature {\n      font-size: 60px !important;\n    }\n    .feelsLikeDiv {\n      font-size: 14px;\n    }\n  }\n  .footer {\n    grid-row: 2/3;\n    z-index: 10;\n    position: relative;\n  }\n}\n"],"sourceRoot":""}]);
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
  weatherIcon.src = `https://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}@2x.png`;
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
  errorMessage.classList.add('fadeIn');
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
  e.preventDefault();
  if (searchBar.value === '') {
    return;
  }
  renderWeather(searchBar.value);
  searchBar.value = '';
});
temperatureSwitch.addEventListener('click', () => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxZQUFZLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxZQUFZLE1BQU0sS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssTUFBTSxXQUFXLFdBQVcsVUFBVSxVQUFVLEtBQUssTUFBTSxVQUFVLFVBQVUsVUFBVSxLQUFLLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFlBQVksTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFlBQVksV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsWUFBWSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxZQUFZLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxLQUFLLE1BQU0sV0FBVyxXQUFXLFdBQVcsWUFBWSxVQUFVLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxZQUFZLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsWUFBWSxLQUFLLEtBQUssV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxLQUFLLFNBQVMsV0FBVyxXQUFXLFdBQVcsWUFBWSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFL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cyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZXMvcmVzZXQuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kZWdyZWVzLXRvLWRpcmVjdGlvbi9saWIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGVzL3N0eWxlLnNjc3M/ZTVkOCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Z1bmN0aW9ucy9hcGlGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZnVuY3Rpb25zL2NoYW5nZU1haW5XZWF0aGVyRnVuY3Rpb25zLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Z1bmN0aW9ucy9jcmVhdGVEYWlseUNhcmRzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Z1bmN0aW9ucy9jcmVhdGVIb3VybHlDYXJkcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9mdW5jdGlvbnMvZXJyb3JIYW5kbGluZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9mdW5jdGlvbnMvZXZlbnRMaXN0ZW5lcnMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZnVuY3Rpb25zL3V0aWxpdHkvY2FwaXRhbGl6ZUVhY2hMZXR0ZXJJbldvcmQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZnVuY3Rpb25zL3V0aWxpdHkvY29udmVydFVuaXhUaW1lLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Z1bmN0aW9ucy91dGlsaXR5L2RlbGV0ZUl0ZW1zSW5EaXYuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZnVuY3Rpb25zL3dlYXRoZXJCYWNrZ3JvdW5kQ2hhbmdlLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2V0LmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvZm9udHMvUm9ib3RvLVJlZ3VsYXIud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9mb250cy9Sb2JvdG8tQmxhY2sud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogUm9ib3RvO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG9CbGFjaztcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTtcXG59XFxuYm9keSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICBzY3JvbGxiYXItZ3V0dGVyOiBhdXRvO1xcbn1cXG5ib2R5IDo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDJlbTtcXG4gIGhlaWdodDogMC44ZW07XFxufVxcbmJvZHkgOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICBiYWNrZ3JvdW5kOiBHcmF5O1xcbiAgYm9yZGVyLXJhZGl1czogMTAwdnc7XFxuICBtYXJnaW4tYmxvY2s6IDAuNWVtO1xcbn1cXG5ib2R5IDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgYmFja2dyb3VuZDogbGlnaHRHcmF5O1xcbiAgYm9yZGVyOiAwLjI1ZW0gc29saWQgbGlnaHRHcmF5O1xcbiAgYm9yZGVyLXJhZGl1czogMTAwdnc7XFxufVxcbmJvZHkgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiBsaWdodEdyYXk7XFxufVxcblxcbi5oZWFkZXJEaXYge1xcbiAgZ3JpZC1jb2x1bW46IDEvNDtcXG4gIGdyaWQtcm93OiAxLzI7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjNmciBtaW5tYXgoYXV0bywgODBlbSkgMC4zZnI7XFxuICBoZWlnaHQ6IDczdmg7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZ3JpZC1jb2x1bW46IDIvNDtcXG4gIGdyaWQtcm93OiAxLzI7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjRmciAxZnIgMC40ZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuM2ZyIDFmciAwLjhmcjtcXG59XFxuLmhlYWRlciAuc2VhcmNoQmFyQ29udGFpbmVyIHtcXG4gIGdyaWQtY29sdW1uOiAyLzM7XFxuICBncmlkLXJvdzogMS8yO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmhlYWRlciAuc2VhcmNoQmFyQ29udGFpbmVyICNzZWFyY2hCYXIge1xcbiAgd2lkdGg6IDgwJTtcXG4gIGhlaWdodDogNDBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICB0ZXh0LWluZGVudDogMTBweDtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDRweDtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDRweDtcXG59XFxuLmhlYWRlciAuc2VhcmNoQmFyQ29udGFpbmVyIC5idXR0b25EaXYge1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgd2lkdGg6IDEwJTtcXG59XFxuLmhlYWRlciAuc2VhcmNoQmFyQ29udGFpbmVyIC5idXR0b25EaXYgLnNlYXJjaEJ1dHRvbiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlYjZmNGM7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNHB4O1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDRweDtcXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XFxuICBmb250LXNpemU6IDE1cHg7XFxufVxcbi5oZWFkZXIgLnNlYXJjaEJhckNvbnRhaW5lciAuc2VhcmNoQmFyRXJyb3Ige1xcbiAgYm9yZGVyOiA1cHggc29saWQgcmVkO1xcbn1cXG4uaGVhZGVyIC5zZWFyY2hCYXJDb250YWluZXIgLmVycm9yTWVzc2FnZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDA7XFxuICBjb2xvcjogcmVkO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmhlYWRlciAuY3VycmVudFRlbXBlcmF0dXJlRGl2IHtcXG4gIGdyaWQtY29sdW1uOiAxLzI7XFxuICBncmlkLXJvdzogMi8zO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5oZWFkZXIgLmN1cnJlbnRUZW1wZXJhdHVyZURpdiAuY3VycmVudFRlbXBlcmF0dXJlRGl2MiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogODAlO1xcbiAgd2lkdGg6IDcwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuLmhlYWRlciAuY3VycmVudFRlbXBlcmF0dXJlRGl2IC5jdXJyZW50VGVtcGVyYXR1cmVEaXYyIC5oaWdoQW5kTG93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxNSU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5oZWFkZXIgLmN1cnJlbnRUZW1wZXJhdHVyZURpdiAuY3VycmVudFRlbXBlcmF0dXJlRGl2MiAuaGlnaEFuZExvdyAjaGlnaFRlbXAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmhlYWRlciAuY3VycmVudFRlbXBlcmF0dXJlRGl2IC5jdXJyZW50VGVtcGVyYXR1cmVEaXYyIC5oaWdoQW5kTG93ICNsb3dUZW1wIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5oZWFkZXIgLmN1cnJlbnRUZW1wZXJhdHVyZURpdiAuY3VycmVudFRlbXBlcmF0dXJlRGl2MiAuY3VycmVudFRlbXBlcmF0dXJlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA3MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiA3MHB4O1xcbn1cXG4uaGVhZGVyIC5jdXJyZW50VGVtcGVyYXR1cmVEaXYgLmN1cnJlbnRUZW1wZXJhdHVyZURpdjIgLmZlZWxzTGlrZURpdiB7XFxuICBoZWlnaHQ6IDE1JTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmhlYWRlciAuY3VycmVudExvY2F0aW9uIHtcXG4gIGdyaWQtY29sdW1uOiAyLzM7XFxuICBncmlkLXJvdzogMi8zO1xcbiAgZm9udC1mYW1pbHk6IFJvYm90b0JsYWNrO1xcbiAgZm9udC1zaXplOiAzNnB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmhlYWRlciAuY3VycmVudExvY2F0aW9uIC5sb2NhdGlvbkNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgd2lkdGg6IDcwJTtcXG4gIGhlaWdodDogMTMwcHg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG4uaGVhZGVyIC5jdXJyZW50TG9jYXRpb24gLmxvY2F0aW9uQ29udGFpbmVyIC5zd2l0Y2hDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAvKiBSb3VuZGVkIHNsaWRlcnMgKi9cXG59XFxuLmhlYWRlciAuY3VycmVudExvY2F0aW9uIC5sb2NhdGlvbkNvbnRhaW5lciAuc3dpdGNoQ29udGFpbmVyICNDZWxzaXVzIHtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuLmhlYWRlciAuY3VycmVudExvY2F0aW9uIC5sb2NhdGlvbkNvbnRhaW5lciAuc3dpdGNoQ29udGFpbmVyICNGYXJlbmhlaXQge1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcbi5oZWFkZXIgLmN1cnJlbnRMb2NhdGlvbiAubG9jYXRpb25Db250YWluZXIgLnN3aXRjaENvbnRhaW5lciAuc3dpdGNoIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiA2MHB4O1xcbiAgaGVpZ2h0OiAzNHB4O1xcbn1cXG4uaGVhZGVyIC5jdXJyZW50TG9jYXRpb24gLmxvY2F0aW9uQ29udGFpbmVyIC5zd2l0Y2hDb250YWluZXIgLnN3aXRjaCBpbnB1dCB7XFxuICBvcGFjaXR5OiAwO1xcbiAgd2lkdGg6IDA7XFxuICBoZWlnaHQ6IDA7XFxufVxcbi5oZWFkZXIgLmN1cnJlbnRMb2NhdGlvbiAubG9jYXRpb25Db250YWluZXIgLnN3aXRjaENvbnRhaW5lciAuc2xpZGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig0OCwgNDcsIDQ3KTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC40cztcXG4gIHRyYW5zaXRpb246IDAuNHM7XFxufVxcbi5oZWFkZXIgLmN1cnJlbnRMb2NhdGlvbiAubG9jYXRpb25Db250YWluZXIgLnN3aXRjaENvbnRhaW5lciAuc2xpZGVyOmJlZm9yZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGhlaWdodDogMjZweDtcXG4gIHdpZHRoOiAyNnB4O1xcbiAgbGVmdDogNHB4O1xcbiAgYm90dG9tOiA0cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC40cztcXG4gIHRyYW5zaXRpb246IDAuNHM7XFxufVxcbi5oZWFkZXIgLmN1cnJlbnRMb2NhdGlvbiAubG9jYXRpb25Db250YWluZXIgLnN3aXRjaENvbnRhaW5lciBpbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xcbn1cXG4uaGVhZGVyIC5jdXJyZW50TG9jYXRpb24gLmxvY2F0aW9uQ29udGFpbmVyIC5zd2l0Y2hDb250YWluZXIgLnNsaWRlci5yb3VuZCB7XFxuICBib3JkZXItcmFkaXVzOiAzNHB4O1xcbn1cXG4uaGVhZGVyIC5jdXJyZW50TG9jYXRpb24gLmxvY2F0aW9uQ29udGFpbmVyIC5zd2l0Y2hDb250YWluZXIgLnNsaWRlci5yb3VuZDpiZWZvcmUge1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG4uaGVhZGVyIC5jdXJyZW50V2VhdGhlciB7XFxuICBncmlkLWNvbHVtbjogMy80O1xcbiAgZ3JpZC1yb3c6IDIvMztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uaGVhZGVyIC5jdXJyZW50V2VhdGhlciAuY29udGFpbmVyRGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiA4MCU7XFxuICB3aWR0aDogNzAlO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG4uaGVhZGVyIC5jdXJyZW50V2VhdGhlciAuY29udGFpbmVyRGl2IC53ZWF0aGVySWNvbkRpdiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogODAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmhlYWRlciAuY3VycmVudFdlYXRoZXIgLmNvbnRhaW5lckRpdiAud2VhdGhlckljb25EaXYgLndlYXRoZXJJY29uIHtcXG4gIGhlaWdodDogODUlO1xcbn1cXG4uaGVhZGVyIC5jdXJyZW50V2VhdGhlciAuY29udGFpbmVyRGl2IC53ZWF0aGVyRXhwbGFuYXRpb24ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDIwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5oZWFkZXIgLmN1cnJlbnRIb3VybHlXZWF0aGVyIHtcXG4gIGdyaWQtY29sdW1uOiAxLzQ7XFxuICBncmlkLXJvdzogMy80O1xcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDI0cHg7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjRweDtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEycHg7XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTJweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nLXRvcDogMjBweDtcXG59XFxuLmhlYWRlciAuY3VycmVudEhvdXJseVdlYXRoZXIgLmhvdXJseUNhcmRzIHtcXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XFxuICBoZWlnaHQ6IDkwJTtcXG4gIG1pbi13aWR0aDogODVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW4tbGVmdDogMTVweDtcXG4gIG1hcmdpbi1yaWdodDogMTVweDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig0OCwgNDcsIDQ3KTtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbi5oZWFkZXIgLmN1cnJlbnRIb3VybHlXZWF0aGVyIC5ob3VybHlDYXJkcyAuaG91cmx5SWNvbiB7XFxuICB3aWR0aDogNjBweDtcXG4gIGhlaWdodDogNjBweDtcXG59XFxuLmhlYWRlciAuY3VycmVudEhvdXJseVdlYXRoZXIgLmhvdXJseUNhcmRzIC5ob3VybHlQZXJjaXAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDE0cHg7XFxufVxcblxcbi5mb290ZXIge1xcbiAgZ3JpZC1jb2x1bW46IDEvNDtcXG4gIGdyaWQtcm93OiAyLzM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDksIDQ5LCA0OSk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBoZWlnaHQ6IDcwJTtcXG59XFxuLmZvb3RlciAuZGFpbHlUZW1wVGl0bGUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNywgMTYsIDE2LCAwLjkzOCk7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XFxufVxcbi5mb290ZXIgLmRhaWx5VGVtcGVyYXR1cmVEaXYge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uZm9vdGVyIC5kYWlseVRlbXBlcmF0dXJlRGl2IC5kYWlseUNhcmRzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNywgMTYsIDE2KTtcXG4gIHdpZHRoOiAyNzBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZy10b3A6IDVweDtcXG4gIHBhZGRpbmctbGVmdDogMjBweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcXG4gIG1hcmdpbjogMTBweDtcXG59XFxuLmZvb3RlciAuZGFpbHlUZW1wZXJhdHVyZURpdiAuZGFpbHlDYXJkcyAuZGFpbHlUaXRsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5mb290ZXIgLmRhaWx5VGVtcGVyYXR1cmVEaXYgLmRhaWx5Q2FyZHMgLmRhaWx5VGl0bGUgLmRheUFuZEZvcmVjYXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLmZvb3RlciAuZGFpbHlUZW1wZXJhdHVyZURpdiAuZGFpbHlDYXJkcyAuZGFpbHlUaXRsZSAud2VhdGhlckljb24ge1xcbiAgd2lkdGg6IDYwcHg7XFxuICBoZWlnaHQ6IDYwcHg7XFxufVxcbi5mb290ZXIgLmRhaWx5VGVtcGVyYXR1cmVEaXYgLmRhaWx5Q2FyZHMgLmRhaWx5VGl0bGUgLmljb25BbmRUZW1wZXJhdHVyZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uZm9vdGVyIC5kYWlseVRlbXBlcmF0dXJlRGl2IC5kYWlseUNhcmRzIC5kYWlseVRpdGxlIC5oaWdoQW5kTG93VGVtcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLmZvb3RlciAuZGFpbHlUZW1wZXJhdHVyZURpdiAuZGFpbHlDYXJkcyAuZGFpbHlEZXRhaWxzIHtcXG4gIHBhZGRpbmctbGVmdDogNXB4O1xcbiAgcGFkZGluZy1yaWdodDogNXB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDk1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLmZvb3RlciAuZGFpbHlUZW1wZXJhdHVyZURpdiAuZGFpbHlDYXJkcyAuZGFpbHlEZXRhaWxzIC5wcmVjaXBpdGF0aW9uRGl2LFxcbi5mb290ZXIgLmRhaWx5VGVtcGVyYXR1cmVEaXYgLmRhaWx5Q2FyZHMgLmRhaWx5RGV0YWlscyAud2luZERpdixcXG4uZm9vdGVyIC5kYWlseVRlbXBlcmF0dXJlRGl2IC5kYWlseUNhcmRzIC5kYWlseURldGFpbHMgLmh1bWlkaXR5RGl2LFxcbi5mb290ZXIgLmRhaWx5VGVtcGVyYXR1cmVEaXYgLmRhaWx5Q2FyZHMgLmRhaWx5RGV0YWlscyAudXZJbmRleERpdixcXG4uZm9vdGVyIC5kYWlseVRlbXBlcmF0dXJlRGl2IC5kYWlseUNhcmRzIC5kYWlseURldGFpbHMgLnN1bnJpc2VTdW5zZXQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmZhZGVJbiB7XFxuICBhbmltYXRpb246IGZhZGVJbiAwLjNzO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGJvdHRvbTogNTA7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMC41O1xcbiAgICBib3R0b206IDA7XFxuICB9XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAzNnB4KSB7XFxuICAuaGVhZGVyRGl2IHtcXG4gICAgaGVpZ2h0OiA5MHZoO1xcbiAgfVxcbiAgLmhlYWRlciB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjRmciAwLjRmciAwLjhmciAwLjhmcjtcXG4gIH1cXG4gIC5oZWFkZXIgLnNlYXJjaEJhckNvbnRhaW5lciB7XFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxuICB9XFxuICAuaGVhZGVyIC5zZWFyY2hCYXJDb250YWluZXIgLmVycm9yTWVzc2FnZSB7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gIH1cXG4gIC5oZWFkZXIgLmN1cnJlbnRMb2NhdGlvbiB7XFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxuICB9XFxuICAuaGVhZGVyIC5jdXJyZW50VGVtcGVyYXR1cmVEaXYge1xcbiAgICBncmlkLXJvdzogMy80O1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgfVxcbiAgLmhlYWRlciAuY3VycmVudFRlbXBlcmF0dXJlRGl2IC5jdXJyZW50VGVtcGVyYXR1cmVEaXYyIHtcXG4gICAgcGFkZGluZy10b3A6IDVweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcXG4gIH1cXG4gIC5oZWFkZXIgLmN1cnJlbnRXZWF0aGVyIHtcXG4gICAgZ3JpZC1yb3c6IDMvNDtcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXG4gIH1cXG4gIC5oZWFkZXIgLmN1cnJlbnRXZWF0aGVyIC5jb250YWluZXJEaXYgLndlYXRoZXJJY29uRGl2IHtcXG4gICAgaGVpZ2h0OiA3NSU7XFxuICB9XFxuICAuaGVhZGVyIC5jdXJyZW50V2VhdGhlciAuY29udGFpbmVyRGl2IC53ZWF0aGVyRXhwbGFuYXRpb24ge1xcbiAgICBoZWlnaHQ6IDI1JTtcXG4gIH1cXG4gIC5oZWFkZXIgLmN1cnJlbnRIb3VybHlXZWF0aGVyIHtcXG4gICAgZ3JpZC1yb3c6IDQvNTtcXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XFxuICB9XFxuICAuaGVhZGVyIC5jdXJyZW50SG91cmx5V2VhdGhlciAuaG91cmx5Q2FyZHMge1xcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbiAgfVxcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3MHB4KSB7XFxuICBib2R5IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDkwdmggMC41ZnI7XFxuICB9XFxuICAuaGVhZGVyRGl2IHtcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgfVxcbiAgI3NlYXJjaEJhciB7XFxuICAgIHdpZHRoOiA3MCUgIWltcG9ydGFudDtcXG4gICAgaGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuYnV0dG9uRGl2IHtcXG4gICAgd2lkdGg6IDIwJSAhaW1wb3J0YW50O1xcbiAgICBoZWlnaHQ6IDMwcHggIWltcG9ydGFudDtcXG4gIH1cXG4gIC5jdXJyZW50VGVtcGVyYXR1cmVEaXYyIC5oaWdoQW5kTG93IHtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgfVxcbiAgLmN1cnJlbnRUZW1wZXJhdHVyZURpdjIgLmN1cnJlbnRUZW1wZXJhdHVyZSB7XFxuICAgIGZvbnQtc2l6ZTogNjBweCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmN1cnJlbnRUZW1wZXJhdHVyZURpdjIgLmZlZWxzTGlrZURpdiB7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gIH1cXG4gIC5mb290ZXIge1xcbiAgICBncmlkLXJvdzogMi8zO1xcbiAgICB6LWluZGV4OiAxMDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxzQkFBQTtFQUNBLHVCQUFBO0FBQUY7O0FBR0E7RUFDRSxtQkFBQTtFQUNBLDJEQUFBO0FBQUY7QUFHQTtFQUNFLHdCQUFBO0VBQ0EsMkRBQUE7QUFERjtBQW9DQTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUFsQ0Y7QUFRRTtFQUNFLFVBQUE7RUFDQSxhQUFBO0FBTko7QUFTRTtFQUNFLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtBQVBKO0FBVUU7RUFDRSxxQkFBQTtFQUNBLDhCQUFBO0VBQ0Esb0JBQUE7QUFSSjtBQVdFO0VBQ0UscUJBQUE7QUFUSjs7QUFxQkE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EscURBQUE7RUFDQSxZQUFBO0FBbEJGOztBQXFCQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQ0FBQTtFQUNBLG1DQUFBO0FBbEJGO0FBb0JFO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Es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QWtCQTtJQUNFLHFCQUFBO0lBQ0EsdUJBQUE7RUFoQkY7RUFtQkE7SUFDRSxxQkFBQTtJQUNBLHVCQUFBO0VBakJGO0VBb0JFO0lBQ0UsZUFBQTtFQWxCSjtFQW9CRTtJQUNFLDBCQUFBO0VBbEJKO0VBb0JFO0lBQ0UsZUFBQTtFQWxCSjtFQXFCQTtJQUNFLGFBQUE7SUFDQSxXQUFBO0lBQ0Esa0JBQUE7RUFuQkY7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0ICcuL3Jlc2V0LmNzcyc7XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcXG4gIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvUm9ib3RvLVJlZ3VsYXIud29mZicpIGZvcm1hdCgnd29mZicpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG9CbGFjaztcXG4gIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvUm9ib3RvLUJsYWNrLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcXG59XFxuXFxuJEdyYXk6IHJnYig2MywgNjMsIDYzKTtcXG4kbGlnaHRHcmF5OiByZ2IoMTM5LCAxMzksIDEzOSk7XFxuXFxuQG1peGluIGZsZXhDZW50ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuQG1peGluIHNjcm9sbEJhciB7XFxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgd2lkdGg6IDJlbTtcXG4gICAgaGVpZ2h0OiAwLjhlbTtcXG4gIH1cXG5cXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgICBiYWNrZ3JvdW5kOiBHcmF5O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDB2dztcXG4gICAgbWFyZ2luLWJsb2NrOiAwLjVlbTtcXG4gIH1cXG5cXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgICBiYWNrZ3JvdW5kOiBsaWdodEdyYXk7XFxuICAgIGJvcmRlcjogMC4yNWVtIHNvbGlkIGxpZ2h0R3JheTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwdnc7XFxuICB9XFxuXFxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogbGlnaHRHcmF5O1xcbiAgfVxcbn1cXG5cXG5ib2R5IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gIHNjcm9sbGJhci1ndXR0ZXI6IGF1dG87XFxuICBAaW5jbHVkZSBzY3JvbGxCYXIoKTtcXG59XFxuXFxuLmhlYWRlckRpdiB7XFxuICBncmlkLWNvbHVtbjogMS80O1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuM2ZyIG1pbm1heChhdXRvLCA4MGVtKSAwLjNmcjtcXG4gIGhlaWdodDogNzN2aDtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBncmlkLWNvbHVtbjogMi80O1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuNGZyIDFmciAwLjRmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMC4zZnIgMWZyIDAuOGZyO1xcblxcbiAgLnNlYXJjaEJhckNvbnRhaW5lciB7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICAgICNzZWFyY2hCYXIge1xcbiAgICAgIHdpZHRoOiA4MCU7XFxuICAgICAgaGVpZ2h0OiA0MHB4O1xcbiAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICBvdXRsaW5lOiBub25lO1xcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgICB0ZXh0LWluZGVudDogMTBweDtcXG4gICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA0cHg7XFxuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNHB4O1xcbiAgICB9XFxuICAgIC5idXR0b25EaXYge1xcbiAgICAgIGhlaWdodDogNDBweDtcXG4gICAgICB3aWR0aDogMTAlO1xcbiAgICAgIC5zZWFyY2hCdXR0b24ge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWI2ZjRjO1xcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDRweDtcXG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0cHg7XFxuICAgICAgICBmb250LWZhbWlseTogUm9ib3RvO1xcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICAgIH1cXG4gICAgfVxcbiAgICAuc2VhcmNoQmFyRXJyb3Ige1xcbiAgICAgIGJvcmRlcjogNXB4IHNvbGlkIHJlZDtcXG4gICAgfVxcbiAgICAuZXJyb3JNZXNzYWdlIHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgYm90dG9tOiAwO1xcbiAgICAgIGNvbG9yOiByZWQ7XFxuICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5jdXJyZW50VGVtcGVyYXR1cmVEaXYge1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBncmlkLXJvdzogMi8zO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgLmN1cnJlbnRUZW1wZXJhdHVyZURpdjIge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIGhlaWdodDogODAlO1xcbiAgICAgIHdpZHRoOiA3MCU7XFxuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XFxuICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCk7XFxuICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG5cXG4gICAgICAuaGlnaEFuZExvdyB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogMTUlO1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgI2hpZ2hUZW1wIHtcXG4gICAgICAgICAgQGluY2x1ZGUgZmxleENlbnRlcigpO1xcbiAgICAgICAgfVxcbiAgICAgICAgI2xvd1RlbXAge1xcbiAgICAgICAgICBAaW5jbHVkZSBmbGV4Q2VudGVyKCk7XFxuICAgICAgICB9XFxuICAgICAgfVxcblxcbiAgICAgIC5jdXJyZW50VGVtcGVyYXR1cmUge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IDcwJTtcXG4gICAgICAgIEBpbmNsdWRlIGZsZXhDZW50ZXIoKTtcXG4gICAgICAgIGZvbnQtc2l6ZTogNzBweDtcXG4gICAgICB9XFxuXFxuICAgICAgLmZlZWxzTGlrZURpdiB7XFxuICAgICAgICBoZWlnaHQ6IDE1JTtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgQGluY2x1ZGUgZmxleENlbnRlcigpO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcblxcbiAgLmN1cnJlbnRMb2NhdGlvbiB7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxuICAgIGdyaWQtcm93OiAyLzM7XFxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG9CbGFjaztcXG4gICAgZm9udC1zaXplOiAzNnB4O1xcbiAgICBAaW5jbHVkZSBmbGV4Q2VudGVyKCk7XFxuXFxuICAgIC5sb2NhdGlvbkNvbnRhaW5lciB7XFxuICAgICAgQGluY2x1ZGUgZmxleENlbnRlcigpO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XFxuICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCk7XFxuICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgICB3aWR0aDogNzAlO1xcbiAgICAgIGhlaWdodDogMTMwcHg7XFxuICAgICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuXFxuICAgICAgLnN3aXRjaENvbnRhaW5lciB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG5cXG4gICAgICAgICNDZWxzaXVzIHtcXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgI0ZhcmVuaGVpdCB7XFxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnN3aXRjaCB7XFxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgICAgICB3aWR0aDogNjBweDtcXG4gICAgICAgICAgaGVpZ2h0OiAzNHB4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnN3aXRjaCBpbnB1dCB7XFxuICAgICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICAgIHdpZHRoOiAwO1xcbiAgICAgICAgICBoZWlnaHQ6IDA7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuc2xpZGVyIHtcXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgIHRvcDogMDtcXG4gICAgICAgICAgbGVmdDogMDtcXG4gICAgICAgICAgcmlnaHQ6IDA7XFxuICAgICAgICAgIGJvdHRvbTogMDtcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0OCwgNDcsIDQ3LCAxKTtcXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjRzO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnNsaWRlcjpiZWZvcmUge1xcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgIGNvbnRlbnQ6ICcnO1xcbiAgICAgICAgICBoZWlnaHQ6IDI2cHg7XFxuICAgICAgICAgIHdpZHRoOiAyNnB4O1xcbiAgICAgICAgICBsZWZ0OiA0cHg7XFxuICAgICAgICAgIGJvdHRvbTogNHB4O1xcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjRzO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxuICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC8qIFJvdW5kZWQgc2xpZGVycyAqL1xcbiAgICAgICAgLnNsaWRlci5yb3VuZCB7XFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDM0cHg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuc2xpZGVyLnJvdW5kOmJlZm9yZSB7XFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5jdXJyZW50V2VhdGhlciB7XFxuICAgIGdyaWQtY29sdW1uOiAzLzQ7XFxuICAgIGdyaWQtcm93OiAyLzM7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAuY29udGFpbmVyRGl2IHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICBoZWlnaHQ6IDgwJTtcXG4gICAgICB3aWR0aDogNzAlO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xcbiAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xcbiAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAud2VhdGhlckljb25EaXYge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IDgwJTtcXG4gICAgICAgIEBpbmNsdWRlIGZsZXhDZW50ZXIoKTtcXG4gICAgICAgIC53ZWF0aGVySWNvbiB7XFxuICAgICAgICAgIGhlaWdodDogODUlO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgICAud2VhdGhlckV4cGxhbmF0aW9uIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgaGVpZ2h0OiAyMCU7XFxuICAgICAgICBAaW5jbHVkZSBmbGV4Q2VudGVyKCk7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxuXFxuICAuY3VycmVudEhvdXJseVdlYXRoZXIge1xcbiAgICBncmlkLWNvbHVtbjogMS80O1xcbiAgICBncmlkLXJvdzogMy80O1xcbiAgICBvdmVyZmxvdy14OiBzY3JvbGw7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDI0cHg7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyNHB4O1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMnB4O1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTJweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XFxuICAgIC5ob3VybHlDYXJkcyB7XFxuICAgICAgZm9udC1mYW1pbHk6IFJvYm90bztcXG4gICAgICBoZWlnaHQ6IDkwJTtcXG4gICAgICBtaW4td2lkdGg6IDg1cHg7XFxuICAgICAgQGluY2x1ZGUgZmxleENlbnRlcigpO1xcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XFxuICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQ4LCA0NywgNDcsIDEpO1xcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAuaG91cmx5SWNvbiB7XFxuICAgICAgICB3aWR0aDogNjBweDtcXG4gICAgICAgIGhlaWdodDogNjBweDtcXG4gICAgICB9XFxuICAgICAgLmhvdXJseVBlcmNpcCB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLmZvb3RlciB7XFxuICBncmlkLWNvbHVtbjogMS80O1xcbiAgZ3JpZC1yb3c6IDIvMztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig0OSwgNDksIDQ5KTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGhlaWdodDogNzAlO1xcbiAgLmRhaWx5VGVtcFRpdGxlIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgQGluY2x1ZGUgZmxleENlbnRlcigpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE3LCAxNiwgMTYsIDAuOTM4KTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xcbiAgfVxcbiAgLmRhaWx5VGVtcGVyYXR1cmVEaXYge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgLmRhaWx5Q2FyZHMge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTcsIDE2LCAxNik7XFxuICAgICAgd2lkdGg6IDI3MHB4O1xcbiAgICAgIEBpbmNsdWRlIGZsZXhDZW50ZXIoKTtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgIHBhZGRpbmctdG9wOiA1cHg7XFxuICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxuICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XFxuICAgICAgbWFyZ2luOiAxMHB4O1xcbiAgICAgIC5kYWlseVRpdGxlIHtcXG4gICAgICAgIEBpbmNsdWRlIGZsZXhDZW50ZXIoKTtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgLmRheUFuZEZvcmVjYXN0IHtcXG4gICAgICAgICAgQGluY2x1ZGUgZmxleENlbnRlcigpO1xcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICB9XFxuICAgICAgICAud2VhdGhlckljb24ge1xcbiAgICAgICAgICB3aWR0aDogNjBweDtcXG4gICAgICAgICAgaGVpZ2h0OiA2MHB4O1xcbiAgICAgICAgfVxcbiAgICAgICAgLmljb25BbmRUZW1wZXJhdHVyZSB7XFxuICAgICAgICAgIEBpbmNsdWRlIGZsZXhDZW50ZXIoKTtcXG4gICAgICAgIH1cXG4gICAgICAgIC5oaWdoQW5kTG93VGVtcCB7XFxuICAgICAgICAgIEBpbmNsdWRlIGZsZXhDZW50ZXIoKTtcXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgICAgLmRhaWx5RGV0YWlscyB7XFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgaGVpZ2h0OiA5NXB4O1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICAucHJlY2lwaXRhdGlvbkRpdixcXG4gICAgICAgIC53aW5kRGl2LFxcbiAgICAgICAgLmh1bWlkaXR5RGl2LFxcbiAgICAgICAgLnV2SW5kZXhEaXYsXFxuICAgICAgICAuc3VucmlzZVN1bnNldCB7XFxuICAgICAgICAgIEBpbmNsdWRlIGZsZXhDZW50ZXIoKTtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4uZmFkZUluIHtcXG4gIGFuaW1hdGlvbjogZmFkZUluIDAuM3M7XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkZUluIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgYm90dG9tOiA1MDtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAwLjU7XFxuICAgIGJvdHRvbTogMDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDM2cHgpIHtcXG4gIC5oZWFkZXJEaXYge1xcbiAgICBoZWlnaHQ6IDkwdmg7XFxuICB9XFxuICAuaGVhZGVyIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuNGZyIDAuNGZyIDAuOGZyIDAuOGZyO1xcblxcbiAgICAuc2VhcmNoQmFyQ29udGFpbmVyIHtcXG4gICAgICBncmlkLWNvbHVtbjogMS8zO1xcblxcbiAgICAgIC5lcnJvck1lc3NhZ2Uge1xcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICAuY3VycmVudExvY2F0aW9uIHtcXG4gICAgICBncmlkLWNvbHVtbjogMS8zO1xcbiAgICB9XFxuXFxuICAgIC5jdXJyZW50VGVtcGVyYXR1cmVEaXYge1xcbiAgICAgIGdyaWQtcm93OiAzLzQ7XFxuICAgICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgICAuY3VycmVudFRlbXBlcmF0dXJlRGl2MiB7XFxuICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcXG4gICAgICB9XFxuICAgIH1cXG4gICAgLmN1cnJlbnRXZWF0aGVyIHtcXG4gICAgICBncmlkLXJvdzogMy80O1xcbiAgICAgIGdyaWQtY29sdW1uOiAyLzM7XFxuICAgICAgLmNvbnRhaW5lckRpdiB7XFxuICAgICAgICAud2VhdGhlckljb25EaXYge1xcbiAgICAgICAgICBoZWlnaHQ6IDc1JTtcXG4gICAgICAgIH1cXG4gICAgICAgIC53ZWF0aGVyRXhwbGFuYXRpb24ge1xcbiAgICAgICAgICBoZWlnaHQ6IDI1JTtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG4gICAgLmN1cnJlbnRIb3VybHlXZWF0aGVyIHtcXG4gICAgICBncmlkLXJvdzogNC81O1xcbiAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xcbiAgICAgIC5ob3VybHlDYXJkcyB7XFxuICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzBweCkge1xcbiAgYm9keSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA5MHZoIDAuNWZyO1xcbiAgfVxcblxcbiAgLmhlYWRlckRpdiB7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gIH1cXG4gICNzZWFyY2hCYXIge1xcbiAgICB3aWR0aDogNzAlICFpbXBvcnRhbnQ7XFxuICAgIGhlaWdodDogMzBweCAhaW1wb3J0YW50O1xcbiAgfVxcblxcbiAgLmJ1dHRvbkRpdiB7XFxuICAgIHdpZHRoOiAyMCUgIWltcG9ydGFudDtcXG4gICAgaGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuY3VycmVudFRlbXBlcmF0dXJlRGl2MiB7XFxuICAgIC5oaWdoQW5kTG93IHtcXG4gICAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIH1cXG4gICAgLmN1cnJlbnRUZW1wZXJhdHVyZSB7XFxuICAgICAgZm9udC1zaXplOiA2MHB4ICFpbXBvcnRhbnQ7XFxuICAgIH1cXG4gICAgLmZlZWxzTGlrZURpdiB7XFxuICAgICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICB9XFxuICB9XFxuICAuZm9vdGVyIHtcXG4gICAgZ3JpZC1yb3c6IDIvMztcXG4gICAgei1pbmRleDogMTA7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcblxcbmh0bWwsXFxuYm9keSxcXG5kaXYsXFxuc3BhbixcXG5hcHBsZXQsXFxub2JqZWN0LFxcbmlmcmFtZSxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNixcXG5wLFxcbmJsb2NrcXVvdGUsXFxucHJlLFxcbmEsXFxuYWJicixcXG5hY3JvbnltLFxcbmFkZHJlc3MsXFxuYmlnLFxcbmNpdGUsXFxuY29kZSxcXG5kZWwsXFxuZGZuLFxcbmVtLFxcbmltZyxcXG5pbnMsXFxua2JkLFxcbnEsXFxucyxcXG5zYW1wLFxcbnNtYWxsLFxcbnN0cmlrZSxcXG5zdHJvbmcsXFxuc3ViLFxcbnN1cCxcXG50dCxcXG52YXIsXFxuYixcXG51LFxcbmksXFxuY2VudGVyLFxcbmRsLFxcbmR0LFxcbmRkLFxcbm9sLFxcbnVsLFxcbmxpLFxcbmZpZWxkc2V0LFxcbmZvcm0sXFxubGFiZWwsXFxubGVnZW5kLFxcbnRhYmxlLFxcbmNhcHRpb24sXFxudGJvZHksXFxudGZvb3QsXFxudGhlYWQsXFxudHIsXFxudGgsXFxudGQsXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5jYW52YXMsXFxuZGV0YWlscyxcXG5lbWJlZCxcXG5maWd1cmUsXFxuZmlnY2FwdGlvbixcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5vdXRwdXQsXFxucnVieSxcXG5zZWN0aW9uLFxcbnN1bW1hcnksXFxudGltZSxcXG5tYXJrLFxcbmF1ZGlvLFxcbnZpZGVvIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBmb250OiBpbmhlcml0O1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5kZXRhaWxzLFxcbmZpZ2NhcHRpb24sXFxuZmlndXJlLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbnNlY3Rpb24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxufVxcbm9sLFxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsXFxucSB7XFxuICBxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLFxcbmJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsXFxucTphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBib3JkZXItc3BhY2luZzogMDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9yZXNldC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztDQUdDOztBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFpRkUsU0FBUztFQUNULFVBQVU7RUFDVixTQUFTO0VBQ1QsZUFBZTtFQUNmLGFBQWE7RUFDYix3QkFBd0I7QUFDMUI7QUFDQSxnREFBZ0Q7QUFDaEQ7Ozs7Ozs7Ozs7O0VBV0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBOztFQUVFLGdCQUFnQjtBQUNsQjtBQUNBOztFQUVFLFlBQVk7QUFDZDtBQUNBOzs7O0VBSUUsV0FBVztFQUNYLGFBQWE7QUFDZjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGlCQUFpQjtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuXFxuaHRtbCxcXG5ib2R5LFxcbmRpdixcXG5zcGFuLFxcbmFwcGxldCxcXG5vYmplY3QsXFxuaWZyYW1lLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbnAsXFxuYmxvY2txdW90ZSxcXG5wcmUsXFxuYSxcXG5hYmJyLFxcbmFjcm9ueW0sXFxuYWRkcmVzcyxcXG5iaWcsXFxuY2l0ZSxcXG5jb2RlLFxcbmRlbCxcXG5kZm4sXFxuZW0sXFxuaW1nLFxcbmlucyxcXG5rYmQsXFxucSxcXG5zLFxcbnNhbXAsXFxuc21hbGwsXFxuc3RyaWtlLFxcbnN0cm9uZyxcXG5zdWIsXFxuc3VwLFxcbnR0LFxcbnZhcixcXG5iLFxcbnUsXFxuaSxcXG5jZW50ZXIsXFxuZGwsXFxuZHQsXFxuZGQsXFxub2wsXFxudWwsXFxubGksXFxuZmllbGRzZXQsXFxuZm9ybSxcXG5sYWJlbCxcXG5sZWdlbmQsXFxudGFibGUsXFxuY2FwdGlvbixcXG50Ym9keSxcXG50Zm9vdCxcXG50aGVhZCxcXG50cixcXG50aCxcXG50ZCxcXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmNhbnZhcyxcXG5kZXRhaWxzLFxcbmVtYmVkLFxcbmZpZ3VyZSxcXG5maWdjYXB0aW9uLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbm91dHB1dCxcXG5ydWJ5LFxcbnNlY3Rpb24sXFxuc3VtbWFyeSxcXG50aW1lLFxcbm1hcmssXFxuYXVkaW8sXFxudmlkZW8ge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmRldGFpbHMsXFxuZmlnY2FwdGlvbixcXG5maWd1cmUsXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxuc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxub2wsXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSxcXG5xIHtcXG4gIHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsXFxuYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSxcXG5xOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgY29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGQpIHtcbiAgaWYgKHR5cGVvZiBkICE9PSAnbnVtYmVyJyB8fCBpc05hTihkKSkge1xuICAgIHJldHVybiAtMTtcbiAgfVxuXG4gIC8vIGtlZXAgd2l0aGluIHRoZSByYW5nZTogMCA8PSBkIDwgMzYwXG4gIGQgPSBkICUgMzYwO1xuXG4gIGlmICgxMS4yNSA8PSBkICYmIGQgPCAzMy43NSkge1xuICAgIHJldHVybiBcIk5ORVwiO1xuICB9IGVsc2UgaWYgKDMzLjc1IDw9IGQgJiYgZCA8IDU2LjI1KSB7XG4gICAgcmV0dXJuIFwiTkVcIjtcbiAgfSBlbHNlIGlmICg1Ni4yNSA8PSBkICYmIGQgPCA3OC43NSkge1xuICAgIHJldHVybiBcIkVORVwiO1xuICB9IGVsc2UgaWYgKDc4Ljc1IDw9IGQgJiYgZCA8IDEwMS4yNSkge1xuICAgIHJldHVybiBcIkVcIjtcbiAgfSBlbHNlIGlmICgxMDEuMjUgPD0gZCAmJiBkIDwgMTIzLjc1KSB7XG4gICAgcmV0dXJuIFwiRVNFXCI7XG4gIH0gZWxzZSBpZiAoMTIzLjc1IDw9IGQgJiYgZCA8IDE0Ni4yNSkge1xuICAgIHJldHVybiBcIlNFXCI7XG4gIH0gZWxzZSBpZiAoMTQ2LjI1IDw9IGQgJiYgZCA8IDE2OC43NSkge1xuICAgIHJldHVybiBcIlNTRVwiO1xuICB9IGVsc2UgaWYgKDE2OC43NSA8PSBkICYmIGQgPCAxOTEuMjUpIHtcbiAgICByZXR1cm4gXCJTXCI7XG4gIH0gZWxzZSBpZiAoMTkxLjI1IDw9IGQgJiYgZCA8IDIxMy43NSkge1xuICAgIHJldHVybiBcIlNTV1wiO1xuICB9IGVsc2UgaWYgKDIxMy43NSA8PSBkICYmIGQgPCAyMzYuMjUpIHtcbiAgICByZXR1cm4gXCJTV1wiO1xuICB9IGVsc2UgaWYgKDIzNi4yNSA8PSBkICYmIGQgPCAyNTguNzUpIHtcbiAgICByZXR1cm4gXCJXU1dcIjtcbiAgfSBlbHNlIGlmICgyNTguNzUgPD0gZCAmJiBkIDwgMjgxLjI1KSB7XG4gICAgcmV0dXJuIFwiV1wiO1xuICB9IGVsc2UgaWYgKDI4MS4yNSA8PSBkICYmIGQgPCAzMDMuNzUpIHtcbiAgICByZXR1cm4gXCJXTldcIjtcbiAgfSBlbHNlIGlmICgzMDMuNzUgPD0gZCAmJiBkIDwgMzI2LjI1KSB7XG4gICAgcmV0dXJuIFwiTldcIjtcbiAgfSBlbHNlIGlmICgzMjYuMjUgPD0gZCAmJiBkIDwgMzQ4Ljc1KSB7XG4gICAgcmV0dXJuIFwiTk5XXCI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIFwiTlwiO1xuICB9XG59O1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJhc3luYyBmdW5jdGlvbiBnZXRMb2NhdGlvbihjaXR5TmFtZSkge1xuICB0cnkge1xuICAgIGNvbnN0IFVSTCA9IGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPSR7Y2l0eU5hbWV9JmxpbWl0PTEmYXBwaWQ9MjRjNDgxZmM5YjczYzY4NzM3NzE4ZGIyYzE0YjEyMTFgO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goVVJMKTtcbiAgICBjb25zdCBsb2NhdGlvbkRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgLy8gUmV0dXJucyB0aGUgZmlyc3QgaW5kZXggb2YgdGhlIGFycmF5IG9mIGNpdGllcyBnaXZlbiBieSB0aGUgQVBJXG4gICAgcmV0dXJuIGxvY2F0aW9uRGF0YVswXTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXJGb3JMb2NhdGlvbihjaXR5TmFtZSkge1xuICB0cnkge1xuICAgIGNvbnN0IGxvY2F0aW9uRGF0YSA9IGF3YWl0IGdldExvY2F0aW9uKGAke2NpdHlOYW1lfWApO1xuICAgIC8vIEV4dHJhY3RpbmcgbGF0aXR1ZGUgYW5kIGxvbmdpdHVkZSBmcm9tIGxvY2F0aW9uIGRhdGEgdG8gcmV0cmlldmUgdGhlIHdlYXRoZXJcbiAgICBjb25zdCB7IGxhdCwgbG9uIH0gPSBsb2NhdGlvbkRhdGE7XG4gICAgY29uc3QgdGVtcENoZWNrYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RlbXBDaGVja2JveCcpO1xuICAgIC8vIENoZWNrIGlmIGNlbHNpdXMgb3IgZmFyZW5oZWl0IGlzIHNlbGVjdGVkXG4gICAgY29uc3QgdW5pdFR5cGUgPSB0ZW1wQ2hlY2tib3guY2hlY2tlZCA/ICdpbXBlcmlhbCcgOiAnbWV0cmljJztcbiAgICBjb25zdCBVUkwgPSBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L29uZWNhbGw/bGF0PSR7bGF0fSZsb249JHtsb259JmV4Y2x1ZGU9bWludXRlbHkmdW5pdHM9JHt1bml0VHlwZX0mYXBwaWQ9MjRjNDgxZmM5YjczYzY4NzM3NzE4ZGIyYzE0YjEyMTFgO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goVVJMKTtcbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAvLyBBc3NpZ25pbmcgdGhlIG5hbWUgYW5kIGNvdW50cnkgdG8gdGhlIG9iamVjdCBiZWNhdXNlIHRoZXkgYXJlIG5vdCBpbmNsdWRlZCBpbiB0aGUgcmVzcG9uc2VcbiAgICB3ZWF0aGVyRGF0YS5uYW1lID0gbG9jYXRpb25EYXRhLm5hbWU7XG4gICAgd2VhdGhlckRhdGEuY291bnRyeSA9IGxvY2F0aW9uRGF0YS5jb3VudHJ5O1xuICAgIHJldHVybiB3ZWF0aGVyRGF0YTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldFdlYXRoZXJGb3JMb2NhdGlvbjtcbiIsImltcG9ydCBjYXBpdGFsaXplRWFjaExldHRlckluV29yZCBmcm9tICcuL3V0aWxpdHkvY2FwaXRhbGl6ZUVhY2hMZXR0ZXJJbldvcmQnO1xuXG5mdW5jdGlvbiBjaGFuZ2VDaXR5VGVtcGVyYXR1cmUod2VhdGhlckRhdGEpIHtcbiAgY29uc3QgbWFpblRlbXBlcmF0dXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnRUZW1wZXJhdHVyZScpO1xuICBjb25zdCBoaWdoVGVtcGVyYXR1cmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaGlnaFRlbXAnKTtcbiAgY29uc3QgbG93VGVtcGVyYXR1cmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG93VGVtcCcpO1xuICBjb25zdCBmZWVsc0xpa2VUZW1wZXJhdHVyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mZWVsc0xpa2VEaXYnKTtcblxuICBtYWluVGVtcGVyYXR1cmUudGV4dENvbnRlbnQgPSBgJHtNYXRoLmZsb29yKHdlYXRoZXJEYXRhLmN1cnJlbnQudGVtcCl9wrBgO1xuICBoaWdoVGVtcGVyYXR1cmUudGV4dENvbnRlbnQgPSBgSGlnaDogJHtNYXRoLmZsb29yKFxuICAgIHdlYXRoZXJEYXRhLmRhaWx5WzBdLnRlbXAubWF4LFxuICApfcKwYDtcbiAgbG93VGVtcGVyYXR1cmUudGV4dENvbnRlbnQgPSBgTG93OiAke01hdGguZmxvb3IoXG4gICAgd2VhdGhlckRhdGEuZGFpbHlbMF0udGVtcC5taW4sXG4gICl9wrBgO1xuICBmZWVsc0xpa2VUZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IGBGZWVscyBMaWtlOiAke01hdGguZmxvb3IoXG4gICAgd2VhdGhlckRhdGEuY3VycmVudC5mZWVsc19saWtlLFxuICApfcKwYDtcbn1cblxuZnVuY3Rpb24gY2hhbmdlQ2l0eU5hbWUod2VhdGhlckRhdGEpIHtcbiAgY29uc3QgY2l0eU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2l0eU5hbWUnKTtcbiAgY2l0eU5hbWUudGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyRGF0YS5uYW1lfSwgJHt3ZWF0aGVyRGF0YS5jb3VudHJ5fWA7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZVdlYXRoZXJJY29uKHdlYXRoZXJEYXRhKSB7XG4gIGNvbnN0IHdlYXRoZXJJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXJJY29uJyk7XG4gIGNvbnN0IHdlYXRoZXJFeHBsYW5hdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyRXhwbGFuYXRpb24nKTtcbiAgd2VhdGhlckljb24uc3JjID0gYGh0dHBzOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke3dlYXRoZXJEYXRhLmN1cnJlbnQud2VhdGhlclswXS5pY29ufUAyeC5wbmdgO1xuICBjb25zdCBjYXBpdGFsaXplZFdlYXRoZXJFeHBsYW5hdGlvbiA9IGNhcGl0YWxpemVFYWNoTGV0dGVySW5Xb3JkKFxuICAgIHdlYXRoZXJEYXRhLmN1cnJlbnQud2VhdGhlclswXS5kZXNjcmlwdGlvbixcbiAgKTtcbiAgd2VhdGhlckV4cGxhbmF0aW9uLnRleHRDb250ZW50ID0gY2FwaXRhbGl6ZWRXZWF0aGVyRXhwbGFuYXRpb247XG59XG5cbmV4cG9ydCB7IGNoYW5nZUNpdHlUZW1wZXJhdHVyZSwgY2hhbmdlQ2l0eU5hbWUsIGNoYW5nZVdlYXRoZXJJY29uIH07XG4iLCJpbXBvcnQgY29udmVydFVuaXhUaW1lIGZyb20gJy4vdXRpbGl0eS9jb252ZXJ0VW5peFRpbWUnO1xuXG5jb25zdCBkMmQgPSByZXF1aXJlKCdkZWdyZWVzLXRvLWRpcmVjdGlvbicpO1xuXG5jb25zdCB0ZW1wQ2hlY2tib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGVtcENoZWNrYm94Jyk7XG5cbmZ1bmN0aW9uIGNyZWF0ZURhaWx5Q2FyZHMoZGFpbHlXZWF0aGVyRGF0YSkge1xuICBjb25zdCBkYWlseVRlbXBlcmF0dXJlRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhaWx5VGVtcGVyYXR1cmVEaXYnKTtcbiAgY29uc3QgZGFpbHlDYXJkcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkYWlseUNhcmRzLmNsYXNzTGlzdC5hZGQoJ2RhaWx5Q2FyZHMnKTtcbiAgZGFpbHlUZW1wZXJhdHVyZURpdi5hcHBlbmRDaGlsZChkYWlseUNhcmRzKTtcblxuICBjb25zdCBkYWlseUZvcmVjYXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRhaWx5Rm9yZWNhc3QuY2xhc3NMaXN0LmFkZCgnZGFpbHlUaXRsZScpO1xuICBkYWlseUNhcmRzLmFwcGVuZENoaWxkKGRhaWx5Rm9yZWNhc3QpO1xuXG4gIGNvbnN0IGRheUFuZEZvcmVjYXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRheUFuZEZvcmVjYXN0LmNsYXNzTGlzdC5hZGQoJ2RheUFuZEZvcmVjYXN0Jyk7XG4gIGRhaWx5Rm9yZWNhc3QuYXBwZW5kQ2hpbGQoZGF5QW5kRm9yZWNhc3QpO1xuXG4gIGNvbnN0IGRheVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGRheVNwYW4udGV4dENvbnRlbnQgPSBjb252ZXJ0VW5peFRpbWUoZGFpbHlXZWF0aGVyRGF0YS5kdCkuY29udmVydFRvRGF5cygpO1xuICBkYXlBbmRGb3JlY2FzdC5hcHBlbmRDaGlsZChkYXlTcGFuKTtcblxuICBjb25zdCBmb3JlY2FzdFNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGZvcmVjYXN0U3Bhbi50ZXh0Q29udGVudCA9IGAke2RhaWx5V2VhdGhlckRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbn1gO1xuICBkYXlBbmRGb3JlY2FzdC5hcHBlbmRDaGlsZChmb3JlY2FzdFNwYW4pO1xuXG4gIGNvbnN0IGljb25BbmRUZW1wZXJhdHVyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBpY29uQW5kVGVtcGVyYXR1cmUuY2xhc3NMaXN0LmFkZCgnaWNvbkFuZFRlbXBlcmF0dXJlJyk7XG4gIGRhaWx5Rm9yZWNhc3QuYXBwZW5kQ2hpbGQoaWNvbkFuZFRlbXBlcmF0dXJlKTtcblxuICBjb25zdCB3ZWF0aGVySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICB3ZWF0aGVySWNvbi5jbGFzc0xpc3QuYWRkKCd3ZWF0aGVySWNvbicpO1xuICAvLyBTZXRzIHRoZSBzb3VyY2Ugb2YgdGhlIGljb24gdG8gdGhlIGljb25zIGZyb20gdGhlIG9wZW53ZWF0aGVyIGFwaSBpY29uc1xuICB3ZWF0aGVySWNvbi5zcmMgPSBgaHR0cHM6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7ZGFpbHlXZWF0aGVyRGF0YS53ZWF0aGVyWzBdLmljb259QDJ4LnBuZ2A7XG4gIGljb25BbmRUZW1wZXJhdHVyZS5hcHBlbmRDaGlsZCh3ZWF0aGVySWNvbik7XG5cbiAgY29uc3QgaGlnaEFuZExvd1RlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaGlnaEFuZExvd1RlbXAuY2xhc3NMaXN0LmFkZCgnaGlnaEFuZExvd1RlbXAnKTtcbiAgaWNvbkFuZFRlbXBlcmF0dXJlLmFwcGVuZENoaWxkKGhpZ2hBbmRMb3dUZW1wKTtcblxuICBjb25zdCBoaWdoVGVtcFNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGhpZ2hUZW1wU3Bhbi50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoZGFpbHlXZWF0aGVyRGF0YS50ZW1wLm1heCl9wrBgO1xuICBoaWdoQW5kTG93VGVtcC5hcHBlbmRDaGlsZChoaWdoVGVtcFNwYW4pO1xuXG4gIGNvbnN0IGxvd1RlbXBTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBsb3dUZW1wU3Bhbi50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoZGFpbHlXZWF0aGVyRGF0YS50ZW1wLm1pbil9wrBgO1xuICBoaWdoQW5kTG93VGVtcC5hcHBlbmRDaGlsZChsb3dUZW1wU3Bhbik7XG5cbiAgY29uc3QgZGFpbHlEZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgZGFpbHlEZXRhaWxzLmNsYXNzTGlzdC5hZGQoJ2RhaWx5RGV0YWlscycpO1xuICBkYWlseUNhcmRzLmFwcGVuZENoaWxkKGRhaWx5RGV0YWlscyk7XG5cbiAgY29uc3QgcHJlY2lwaXRhdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIHByZWNpcGl0YXRpb25EaXYuY2xhc3NMaXN0LmFkZCgncHJlY2lwaXRhdGlvbkRpdicpO1xuICBkYWlseURldGFpbHMuYXBwZW5kQ2hpbGQocHJlY2lwaXRhdGlvbkRpdik7XG5cbiAgY29uc3QgcHJlY2lwaXRhdGlvblRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBwcmVjaXBpdGF0aW9uVGl0bGUudGV4dENvbnRlbnQgPSAnUHJlY2lwaXRhdGlvbjonO1xuICBwcmVjaXBpdGF0aW9uRGl2LmFwcGVuZENoaWxkKHByZWNpcGl0YXRpb25UaXRsZSk7XG5cbiAgY29uc3QgcHJlY2lwaXRhdGlvblBlcmNlbnRhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIC8vIFJvdW5kaW5nIHRoZSBwZXJjaXBpdGF0aW9uIG51bWJlciBhbmQgbXVsdGlwbHlpbmcgYnkgMTAwICB0byBtYWtlIGl0IGEgcGVyY2VudGFnZVxuICBwcmVjaXBpdGF0aW9uUGVyY2VudGFnZS50ZXh0Q29udGVudCA9IGAke01hdGguZmxvb3IoXG4gICAgZGFpbHlXZWF0aGVyRGF0YS5wb3AgKiAxMDAsXG4gICl9JWA7XG4gIHByZWNpcGl0YXRpb25EaXYuYXBwZW5kQ2hpbGQocHJlY2lwaXRhdGlvblBlcmNlbnRhZ2UpO1xuXG4gIGNvbnN0IHdpbmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICB3aW5kRGl2LmNsYXNzTGlzdC5hZGQoJ3dpbmREaXYnKTtcbiAgZGFpbHlEZXRhaWxzLmFwcGVuZENoaWxkKHdpbmREaXYpO1xuXG4gIGNvbnN0IHdpbmRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgd2luZFRpdGxlLnRleHRDb250ZW50ID0gJ1dpbmQ6JztcbiAgd2luZERpdi5hcHBlbmRDaGlsZCh3aW5kVGl0bGUpO1xuXG4gIGNvbnN0IHdpbmRQZXJjZW50YWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBjb25zdCB1bml0VHlwZSA9IHRlbXBDaGVja2JveC5jaGVja2VkID8gJ20vaCcgOiAna20vaCc7XG4gIC8vIFNldHMgdGhlIHdpbmQgc3BlZWQgZGVwZW5kZW50IG9mIHRoZSBtZXRyaWMgc3lzdGVtIHNlbGVjdGVkXG4gIC8vIEFuZCB1c2VzIHRoZSBkZWdyZWVzIHRvIGRpcmVjdGlvbiBsaWJyYXJ5IHRvIGRpc3BsYXkgdGhlIGRpcmVjdGlvbiBvZiB0aGUgd2luZFxuICB3aW5kUGVyY2VudGFnZS50ZXh0Q29udGVudCA9IGAke1xuICAgIGRhaWx5V2VhdGhlckRhdGEud2luZF9zcGVlZFxuICB9ICR7dW5pdFR5cGV9ICR7ZDJkKGRhaWx5V2VhdGhlckRhdGEud2luZF9kZWcpfWA7XG4gIHdpbmREaXYuYXBwZW5kQ2hpbGQod2luZFBlcmNlbnRhZ2UpO1xuXG4gIGNvbnN0IGh1bWlkaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgaHVtaWRpdHlEaXYuY2xhc3NMaXN0LmFkZCgnaHVtaWRpdHlEaXYnKTtcbiAgZGFpbHlEZXRhaWxzLmFwcGVuZENoaWxkKGh1bWlkaXR5RGl2KTtcblxuICBjb25zdCBodW1pZGl0eVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBodW1pZGl0eVRpdGxlLnRleHRDb250ZW50ID0gJ0h1bWlkaXR5Oic7XG4gIGh1bWlkaXR5RGl2LmFwcGVuZENoaWxkKGh1bWlkaXR5VGl0bGUpO1xuXG4gIGNvbnN0IGh1bWlkaXR5UGVyY2VudGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgaHVtaWRpdHlQZXJjZW50YWdlLnRleHRDb250ZW50ID0gYCR7ZGFpbHlXZWF0aGVyRGF0YS5odW1pZGl0eX0lYDtcbiAgaHVtaWRpdHlEaXYuYXBwZW5kQ2hpbGQoaHVtaWRpdHlQZXJjZW50YWdlKTtcblxuICBjb25zdCB1dkluZGV4RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgdXZJbmRleERpdi5jbGFzc0xpc3QuYWRkKCd1dkluZGV4RGl2Jyk7XG4gIGRhaWx5RGV0YWlscy5hcHBlbmRDaGlsZCh1dkluZGV4RGl2KTtcblxuICBjb25zdCB1dkluZGV4VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIHV2SW5kZXhUaXRsZS50ZXh0Q29udGVudCA9ICdVViBJbmRleCc7XG4gIHV2SW5kZXhEaXYuYXBwZW5kQ2hpbGQodXZJbmRleFRpdGxlKTtcblxuICBjb25zdCB1dkluZGV4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICB1dkluZGV4LnRleHRDb250ZW50ID0gYCR7ZGFpbHlXZWF0aGVyRGF0YS51dml9YDtcbiAgdXZJbmRleERpdi5hcHBlbmRDaGlsZCh1dkluZGV4KTtcblxuICBjb25zdCBzdW5yaXNlU3Vuc2V0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgc3VucmlzZVN1bnNldERpdi5jbGFzc0xpc3QuYWRkKCdzdW5yaXNlU3Vuc2V0Jyk7XG4gIGRhaWx5RGV0YWlscy5hcHBlbmRDaGlsZChzdW5yaXNlU3Vuc2V0RGl2KTtcblxuICBjb25zdCBzdW5yaXNlU3Vuc2V0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIHN1bnJpc2VTdW5zZXRUaXRsZS50ZXh0Q29udGVudCA9ICdTdW5yaXNlL1N1bnNldCc7XG4gIHN1bnJpc2VTdW5zZXREaXYuYXBwZW5kQ2hpbGQoc3VucmlzZVN1bnNldFRpdGxlKTtcblxuICBjb25zdCBzdW5yaXNlU3Vuc2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBzdW5yaXNlU3Vuc2V0LnRleHRDb250ZW50ID0gYCR7Y29udmVydFVuaXhUaW1lKFxuICAgIGRhaWx5V2VhdGhlckRhdGEuc3VucmlzZSxcbiAgKS5jb252ZXJ0VG9Ib3VycygpfS8ke2NvbnZlcnRVbml4VGltZShcbiAgICBkYWlseVdlYXRoZXJEYXRhLnN1bnNldCxcbiAgKS5jb252ZXJ0VG9Ib3VycygpfWA7XG4gIHN1bnJpc2VTdW5zZXREaXYuYXBwZW5kQ2hpbGQoc3VucmlzZVN1bnNldCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZURhaWx5Q2FyZHM7XG4iLCJpbXBvcnQgY29udmVydFVuaXhUaW1lIGZyb20gJy4vdXRpbGl0eS9jb252ZXJ0VW5peFRpbWUnO1xuXG5mdW5jdGlvbiBjcmVhdGVIb3VybHlDYXJkcyhob3VybHlXZWF0aGVyRGF0YSkge1xuICBjb25zdCBjdXJyZW50SG91cmx5V2VhdGhlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50SG91cmx5V2VhdGhlcicpO1xuICBjb25zdCBob3VybHlDYXJkcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBob3VybHlDYXJkcy5jbGFzc0xpc3QuYWRkKCdob3VybHlDYXJkcycpO1xuICBjdXJyZW50SG91cmx5V2VhdGhlci5hcHBlbmRDaGlsZChob3VybHlDYXJkcyk7XG5cbiAgY29uc3QgaG91cmx5VGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBob3VybHlUZW1wLmNsYXNzTGlzdC5hZGQoJ2hvdXJseVRlbXAnKTtcbiAgaG91cmx5VGVtcC50ZXh0Q29udGVudCA9IGAke01hdGguZmxvb3IoaG91cmx5V2VhdGhlckRhdGEudGVtcCl9wrBgO1xuICBob3VybHlDYXJkcy5hcHBlbmRDaGlsZChob3VybHlUZW1wKTtcblxuICBjb25zdCBob3VybHlJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGhvdXJseUljb24uY2xhc3NMaXN0LmFkZCgnaG91cmx5SWNvbicpO1xuICAvLyBTZXRzIHRoZSBzb3VyY2Ugb2YgdGhlIGljb24gdG8gdGhlIGljb25zIGZyb20gdGhlIG9wZW53ZWF0aGVyIGFwaSBpY29uc1xuICBob3VybHlJY29uLnNyYyA9IGBodHRwczovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHtob3VybHlXZWF0aGVyRGF0YS53ZWF0aGVyWzBdLmljb259QDJ4LnBuZ2A7XG4gIGhvdXJseUNhcmRzLmFwcGVuZENoaWxkKGhvdXJseUljb24pO1xuXG4gIGNvbnN0IGhvdXJseVBlcmNpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBob3VybHlQZXJjaXAuY2xhc3NMaXN0LmFkZCgnaG91cmx5UGVyY2lwJyk7XG4gIGhvdXJseUNhcmRzLmFwcGVuZENoaWxkKGhvdXJseVBlcmNpcCk7XG5cbiAgY29uc3QgaG91cmx5UGVyY2lwU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgaG91cmx5UGVyY2lwU3Bhbi50ZXh0Q29udGVudCA9ICdQZXJjaXA6JztcbiAgaG91cmx5UGVyY2lwLmFwcGVuZENoaWxkKGhvdXJseVBlcmNpcFNwYW4pO1xuXG4gIGNvbnN0IGhvdXJseVBlcmNpcFNwYW5QZXJjZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAvLyBSb3VuZGluZyB0aGUgcGVyY2lwaXRhdGlvbiBudW1iZXIgYW5kIG11bHRpcGx5aW5nIGJ5IDEwMCAgdG8gbWFrZSBpdCBhIHBlcmNlbnRhZ2VcbiAgaG91cmx5UGVyY2lwU3BhblBlcmNlbnQudGV4dENvbnRlbnQgPSBgJHtNYXRoLmZsb29yKFxuICAgIGhvdXJseVdlYXRoZXJEYXRhLnBvcCAqIDEwMCxcbiAgKX0lYDtcbiAgaG91cmx5UGVyY2lwLmFwcGVuZENoaWxkKGhvdXJseVBlcmNpcFNwYW5QZXJjZW50KTtcblxuICBjb25zdCBob3VybHlIb3VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhvdXJseUhvdXIuY2xhc3NMaXN0LmFkZCgnaG91cmx5SG91cicpO1xuICAvLyBjb252ZXJ0cyB0aGUgdW5peCB0aW1lIHRvIHJlZ3VsYXIgdGltZSBhbmQgcmV0dXJucyBqdXN0IHRoZSBob3Vyc1xuICBob3VybHlIb3VyLnRleHRDb250ZW50ID0gY29udmVydFVuaXhUaW1lKFxuICAgIGhvdXJseVdlYXRoZXJEYXRhLmR0LFxuICApLmNvbnZlcnRUb0hvdXJzKCk7XG4gIGhvdXJseUNhcmRzLmFwcGVuZENoaWxkKGhvdXJseUhvdXIpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVIb3VybHlDYXJkcztcbiIsImNvbnN0IHNlYXJjaEJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2hCYXInKTtcbmNvbnN0IGVycm9yTWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lcnJvck1lc3NhZ2UnKTtcbmNvbnN0IHNlYXJjaEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2hCdXR0b24nKTtcblxuZnVuY3Rpb24gZXJyb3JIYW5kbGVyKCkge1xuICBzZWFyY2hCYXIuc3R5bGUub3V0bGluZSA9ICcycHggc29saWQgcmVkJztcbiAgc2VhcmNoQnV0dG9uLnN0eWxlLm91dGxpbmUgPSAnMnB4IHNvbGlkIHJlZCc7XG4gIGVycm9yTWVzc2FnZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgZXJyb3JNZXNzYWdlLmNsYXNzTGlzdC5hZGQoJ2ZhZGVJbicpO1xufVxuXG5mdW5jdGlvbiBub0Vycm9yKCkge1xuICBzZWFyY2hCYXIuc3R5bGUub3V0bGluZSA9ICdub25lJztcbiAgc2VhcmNoQnV0dG9uLnN0eWxlLm91dGxpbmUgPSAnbm9uZSc7XG4gIGVycm9yTWVzc2FnZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufVxuXG5leHBvcnQgeyBlcnJvckhhbmRsZXIsIG5vRXJyb3IgfTtcbiIsImltcG9ydCBnZXRXZWF0aGVyRm9yTG9jYXRpb24gZnJvbSAnLi9hcGlGdW5jdGlvbnMnO1xuaW1wb3J0IHtcbiAgY2hhbmdlQ2l0eVRlbXBlcmF0dXJlLFxuICBjaGFuZ2VDaXR5TmFtZSxcbiAgY2hhbmdlV2VhdGhlckljb24sXG59IGZyb20gJy4vY2hhbmdlTWFpbldlYXRoZXJGdW5jdGlvbnMnO1xuaW1wb3J0IGRlbGV0ZUl0ZW1zSW5EaXYgZnJvbSAnLi91dGlsaXR5L2RlbGV0ZUl0ZW1zSW5EaXYnO1xuaW1wb3J0IGNyZWF0ZUhvdXJseUNhcmRzIGZyb20gJy4vY3JlYXRlSG91cmx5Q2FyZHMnO1xuaW1wb3J0IGNyZWF0ZURhaWx5Q2FyZHMgZnJvbSAnLi9jcmVhdGVEYWlseUNhcmRzJztcbmltcG9ydCBjaGFuZ2VCYWNrZ3JvdW5kV2VhdGhlciBmcm9tICcuL3dlYXRoZXJCYWNrZ3JvdW5kQ2hhbmdlJztcbmltcG9ydCB7IGVycm9ySGFuZGxlciwgbm9FcnJvciB9IGZyb20gJy4vZXJyb3JIYW5kbGluZyc7XG5cbmNvbnN0IHNlYXJjaEJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2hCYXInKTtcbmNvbnN0IHNlYXJjaEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2hCdXR0b24nKTtcbmNvbnN0IGN1cnJlbnRIb3VybHlXZWF0aGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnRIb3VybHlXZWF0aGVyJyk7XG5jb25zdCBkYWlseVRlbXBlcmF0dXJlRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhaWx5VGVtcGVyYXR1cmVEaXYnKTtcbmNvbnN0IHRlbXBlcmF0dXJlU3dpdGNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNsaWRlcicpO1xuY29uc3QgY2l0eU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2l0eU5hbWUnKTtcblxuZnVuY3Rpb24gcmVuZGVyV2VhdGhlcihjaXR5VmFsdWUpIHtcbiAgZ2V0V2VhdGhlckZvckxvY2F0aW9uKGNpdHlWYWx1ZSlcbiAgICAudGhlbigoY3VycmVudFdlYXRoZXJEYXRhKSA9PiB7XG4gICAgICBjaGFuZ2VCYWNrZ3JvdW5kV2VhdGhlcihjdXJyZW50V2VhdGhlckRhdGEpO1xuICAgICAgY2hhbmdlQ2l0eVRlbXBlcmF0dXJlKGN1cnJlbnRXZWF0aGVyRGF0YSk7XG4gICAgICBjaGFuZ2VDaXR5TmFtZShjdXJyZW50V2VhdGhlckRhdGEpO1xuICAgICAgY2hhbmdlV2VhdGhlckljb24oY3VycmVudFdlYXRoZXJEYXRhKTtcbiAgICAgIGRlbGV0ZUl0ZW1zSW5EaXYoY3VycmVudEhvdXJseVdlYXRoZXIpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyNDsgaSArPSAxKSB7XG4gICAgICAgIGNyZWF0ZUhvdXJseUNhcmRzKGN1cnJlbnRXZWF0aGVyRGF0YS5ob3VybHlbaV0pO1xuICAgICAgfVxuICAgICAgZGVsZXRlSXRlbXNJbkRpdihkYWlseVRlbXBlcmF0dXJlRGl2KTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgODsgaSArPSAxKSB7XG4gICAgICAgIGNyZWF0ZURhaWx5Q2FyZHMoY3VycmVudFdlYXRoZXJEYXRhLmRhaWx5W2ldKTtcbiAgICAgIH1cbiAgICAgIG5vRXJyb3IoKTtcbiAgICB9KVxuICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICBlcnJvckhhbmRsZXIoKTtcbiAgICB9KTtcbn1cblxuc2VhcmNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBpZiAoc2VhcmNoQmFyLnZhbHVlID09PSAnJykge1xuICAgIHJldHVybjtcbiAgfVxuICByZW5kZXJXZWF0aGVyKHNlYXJjaEJhci52YWx1ZSk7XG4gIHNlYXJjaEJhci52YWx1ZSA9ICcnO1xufSk7XG50ZW1wZXJhdHVyZVN3aXRjaC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgcmVuZGVyV2VhdGhlcihjaXR5TmFtZS50ZXh0Q29udGVudCk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyV2VhdGhlcjtcbiIsImZ1bmN0aW9uIGNhcGl0YWxpemVFYWNoTGV0dGVySW5Xb3JkKHdvcmRTdHJpbmcpIHtcbiAgcmV0dXJuIHdvcmRTdHJpbmdcbiAgICAuc3BsaXQoJyAnKVxuICAgIC5tYXAoKHdvcmQpID0+IHdvcmQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB3b3JkLnN1YnN0cmluZygxKSlcbiAgICAuam9pbignICcpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjYXBpdGFsaXplRWFjaExldHRlckluV29yZDtcbiIsImZ1bmN0aW9uIGNvbnZlcnRVbml4VGltZSh1bml4VGltZSkge1xuICBjb25zdCBub3JtYWxEYXRlID0gbmV3IERhdGUodW5peFRpbWUgKiAxMDAwKTtcblxuICBmdW5jdGlvbiBjb252ZXJ0VG9Ib3VycygpIHtcbiAgICByZXR1cm4gbm9ybWFsRGF0ZS50b1RpbWVTdHJpbmcoKS5zbGljZSgwLCA1KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbnZlcnRUb0RheXMoKSB7XG4gICAgc3dpdGNoIChub3JtYWxEYXRlLnRvRGF0ZVN0cmluZygpLnNsaWNlKDAsIDMpKSB7XG4gICAgICBjYXNlICdNb24nOlxuICAgICAgICByZXR1cm4gJ01vbmRheSc7XG5cbiAgICAgIGNhc2UgJ1R1ZSc6XG4gICAgICAgIHJldHVybiAnVHVlc2RheSc7XG5cbiAgICAgIGNhc2UgJ1dlZCc6XG4gICAgICAgIHJldHVybiAnV2VkbmVzZGF5JztcblxuICAgICAgY2FzZSAnVGh1JzpcbiAgICAgICAgcmV0dXJuICdUaHVyc2RheSc7XG5cbiAgICAgIGNhc2UgJ0ZyaSc6XG4gICAgICAgIHJldHVybiAnRnJpZGF5JztcblxuICAgICAgY2FzZSAnU2F0JzpcbiAgICAgICAgcmV0dXJuICdTYXR1cmRheSc7XG5cbiAgICAgIGNhc2UgJ1N1bic6XG4gICAgICAgIHJldHVybiAnU3VuZGF5JztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICdVbmtub3duJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4geyBjb252ZXJ0VG9Ib3VycywgY29udmVydFRvRGF5cyB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb252ZXJ0VW5peFRpbWU7XG4iLCJmdW5jdGlvbiBkZWxldGVJdGVtc0luRGl2KGl0ZW1zKSB7XG4gIHdoaWxlIChpdGVtcy5maXJzdENoaWxkKSBpdGVtcy5yZW1vdmVDaGlsZChpdGVtcy5maXJzdENoaWxkKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGVsZXRlSXRlbXNJbkRpdjtcbiIsImltcG9ydCBicm9rZW5jbG91ZHNkIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvYnJva2VuLWNsb3Vkcy5qcGcnO1xuaW1wb3J0IGNsZWFyc2t5ZCBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL2NsZWFyLXNreS1kYXkuanBnJztcbmltcG9ydCBjbGVhcnNreW4gZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9jbGVhci1za3ktbmlnaHQuanBnJztcbmltcG9ydCBmZXdjbG91ZHNkIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvZmV3LWNsb3Vkcy1kYXkuanBnJztcbmltcG9ydCBmZXdjbG91ZHNuIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvZmV3LWNsb3Vkcy1uaWdodC5qcGcnO1xuaW1wb3J0IGZvZ2QgZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9mb2ctZGF5LmpwZyc7XG5pbXBvcnQgZm9nbiBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL2ZvZy1uaWdodC5qcGcnO1xuaW1wb3J0IHJhaW5kIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvcmFpbi1kYXkuanBnJztcbmltcG9ydCByYWlubiBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL3JhaW4tbmlnaHQuanBnJztcbmltcG9ydCBzY2F0dGVyZWRjbG91ZHNkIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvc2NhdHRlcmVkLWNsb3Vkcy1kYXkuanBnJztcbmltcG9ydCBzY2F0dGVyZWRjbG91ZHNuIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvc2NhdHRlcmVkLWNsb3Vkcy1uaWdodC5qcGcnO1xuaW1wb3J0IHNub3dkIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvc25vdy1kYXkuanBnJztcbmltcG9ydCBzbm93biBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL3Nub3ctbmlnaHQuanBnJztcbmltcG9ydCB0aHVuZGVyc3Rvcm1kIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvdGh1bmRlcnN0b3JtLWRheS5qcGcnO1xuaW1wb3J0IHRodW5kZXJzdG9ybW4gZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy90aHVuZGVyc3Rvcm0tbmlnaHQuanBnJztcblxuZnVuY3Rpb24gY2hvb3NlQmFja2dyb3VuZCh3ZWF0aGVyRGF0YSkge1xuICBzd2l0Y2ggKHdlYXRoZXJEYXRhLmN1cnJlbnQud2VhdGhlclswXS5pY29uKSB7XG4gICAgY2FzZSAnMDFkJzpcbiAgICAgIHJldHVybiBjbGVhcnNreWQ7XG4gICAgY2FzZSAnMDFuJzpcbiAgICAgIHJldHVybiBjbGVhcnNreW47XG4gICAgY2FzZSAnMDJkJzpcbiAgICAgIHJldHVybiBmZXdjbG91ZHNkO1xuICAgIGNhc2UgJzAybic6XG4gICAgICByZXR1cm4gZmV3Y2xvdWRzbjtcbiAgICBjYXNlICcwM2QnOlxuICAgICAgcmV0dXJuIHNjYXR0ZXJlZGNsb3Vkc2Q7XG4gICAgY2FzZSAnMDNuJzpcbiAgICAgIHJldHVybiBzY2F0dGVyZWRjbG91ZHNuO1xuICAgIGNhc2UgJzA0ZCc6XG4gICAgICByZXR1cm4gYnJva2VuY2xvdWRzZDtcbiAgICBjYXNlICcwNG4nOlxuICAgICAgcmV0dXJuIHNjYXR0ZXJlZGNsb3Vkc247XG4gICAgY2FzZSAnMDlkJyB8fCAnMTBkJzpcbiAgICAgIHJldHVybiByYWluZDtcbiAgICBjYXNlICcwOW4nIHx8ICcxMG4nOlxuICAgICAgcmV0dXJuIHJhaW5uO1xuICAgIGNhc2UgJzExZCc6XG4gICAgICByZXR1cm4gdGh1bmRlcnN0b3JtZDtcbiAgICBjYXNlICcxMW4nOlxuICAgICAgcmV0dXJuIHRodW5kZXJzdG9ybW47XG4gICAgY2FzZSAnMTNkJzpcbiAgICAgIHJldHVybiBzbm93ZDtcbiAgICBjYXNlICcxM24nOlxuICAgICAgcmV0dXJuIHNub3duO1xuICAgIGNhc2UgJzUwZCc6XG4gICAgICByZXR1cm4gZm9nZDtcbiAgICBjYXNlICc1MG4nOlxuICAgICAgcmV0dXJuIGZvZ247XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBjbGVhcnNreWQ7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hhbmdlQmFja2dyb3VuZFdlYXRoZXIod2VhdGhlckRhdGEpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlckRpdicpO1xuICBjb25zdCBpY29uQmFja2dyb3VuZCA9IGNob29zZUJhY2tncm91bmQod2VhdGhlckRhdGEpO1xuICBoZWFkZXIuc3R5bGUuYmFja2dyb3VuZCA9IGB1cmwoJHtpY29uQmFja2dyb3VuZH0pIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyYDtcbiAgaGVhZGVyLnN0eWxlLmJhY2tncm91bmRTaXplID0gJ2NvdmVyJztcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2hhbmdlQmFja2dyb3VuZFdlYXRoZXI7XG4iLCJpbXBvcnQgJy4vc3R5bGVzL3N0eWxlLnNjc3MnO1xuaW1wb3J0IHJlbmRlcldlYXRoZXIgZnJvbSAnLi9mdW5jdGlvbnMvZXZlbnRMaXN0ZW5lcnMnO1xuXG5yZW5kZXJXZWF0aGVyKCdMb25kb24nKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==