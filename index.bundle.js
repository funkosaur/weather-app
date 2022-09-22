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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n  scroll-behavior: smooth;\n}\n\n@font-face {\n  font-family: Roboto;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff\");\n}\n@font-face {\n  font-family: RobotoBlack;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff\");\n}\nbody {\n  width: 100%;\n  font-family: Roboto;\n  overflow-y: scroll;\n  scrollbar-gutter: auto;\n}\nbody ::-webkit-scrollbar {\n  width: 2em;\n  height: 0.8em;\n}\nbody ::-webkit-scrollbar-track {\n  background: Gray;\n  border-radius: 100vw;\n  margin-block: 0.5em;\n}\nbody ::-webkit-scrollbar-thumb {\n  background: lightGray;\n  border: 0.25em solid lightGray;\n  border-radius: 100vw;\n}\nbody ::-webkit-scrollbar-thumb:hover {\n  background: lightGray;\n}\n\n.headerDiv {\n  grid-column: 1/4;\n  grid-row: 1/2;\n  display: grid;\n  grid-template-columns: 0.3fr minmax(auto, 80em) 0.3fr;\n  height: 73vh;\n}\n\n.header {\n  grid-column: 2/4;\n  grid-row: 1/2;\n  display: grid;\n  grid-template-columns: 0.4fr 1fr 0.4fr;\n  grid-template-rows: 0.3fr 1fr 0.8fr;\n}\n.header .searchBarContainer {\n  grid-column: 2/3;\n  grid-row: 1/2;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n}\n.header .searchBarContainer #searchBar {\n  width: 80%;\n  height: 40px;\n  border: none;\n  outline: none;\n  font-size: 16px;\n  text-indent: 10px;\n  border-bottom-left-radius: 4px;\n  border-top-left-radius: 4px;\n}\n.header .searchBarContainer .buttonDiv {\n  height: 40px;\n  width: 10%;\n}\n.header .searchBarContainer .buttonDiv .searchButton {\n  width: 100%;\n  height: 100%;\n  border: none;\n  background-color: #eb6f4c;\n  color: white;\n  border-bottom-right-radius: 4px;\n  border-top-right-radius: 4px;\n  font-family: Roboto;\n  font-size: 15px;\n}\n.header .searchBarContainer .searchBarError {\n  border: 5px solid red;\n}\n.header .searchBarContainer .errorMessage {\n  position: absolute;\n  top: 4.7rem;\n  color: red;\n  display: none;\n  text-align: center;\n  animation: fadeIn 0.2s;\n}\n.header .currentTemperatureDiv {\n  grid-column: 1/2;\n  grid-row: 2/3;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.header .currentTemperatureDiv .currentTemperatureDiv2 {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 80%;\n  width: 70%;\n  border-radius: 8px;\n  background-color: rgba(255, 255, 255, 0.15);\n  backdrop-filter: blur(8px);\n  color: white;\n  font-size: 16px;\n}\n.header .currentTemperatureDiv .currentTemperatureDiv2 .highAndLow {\n  display: flex;\n  justify-content: space-around;\n  width: 100%;\n  height: 15%;\n  text-align: center;\n}\n.header .currentTemperatureDiv .currentTemperatureDiv2 .highAndLow #highTemp {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.header .currentTemperatureDiv .currentTemperatureDiv2 .highAndLow #lowTemp {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.header .currentTemperatureDiv .currentTemperatureDiv2 .currentTemperature {\n  width: 100%;\n  height: 70%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 70px;\n}\n.header .currentTemperatureDiv .currentTemperatureDiv2 .feelsLikeDiv {\n  height: 15%;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.header .currentLocation {\n  grid-column: 2/3;\n  grid-row: 2/3;\n  font-family: RobotoBlack;\n  font-size: 36px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.header .currentLocation .locationContainer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(255, 255, 255, 0.15);\n  backdrop-filter: blur(8px);\n  color: white;\n  border-radius: 8px;\n  width: 70%;\n  height: 130px;\n  flex-wrap: wrap;\n  padding: 10px;\n  text-align: center;\n  flex-direction: column;\n  justify-content: space-around;\n}\n.header .currentLocation .locationContainer .switchContainer {\n  display: flex;\n  flex-direction: row;\n  /* Rounded sliders */\n}\n.header .currentLocation .locationContainer .switchContainer #Celsius {\n  margin-right: 10px;\n}\n.header .currentLocation .locationContainer .switchContainer #Farenheit {\n  margin-left: 10px;\n}\n.header .currentLocation .locationContainer .switchContainer .switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n.header .currentLocation .locationContainer .switchContainer .switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.header .currentLocation .locationContainer .switchContainer .slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgb(48, 47, 47);\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n.header .currentLocation .locationContainer .switchContainer .slider:before {\n  position: absolute;\n  content: \"\";\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n.header .currentLocation .locationContainer .switchContainer input:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}\n.header .currentLocation .locationContainer .switchContainer .slider.round {\n  border-radius: 34px;\n}\n.header .currentLocation .locationContainer .switchContainer .slider.round:before {\n  border-radius: 50%;\n}\n.header .currentWeather {\n  grid-column: 3/4;\n  grid-row: 2/3;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.header .currentWeather .containerDiv {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 80%;\n  width: 70%;\n  border-radius: 8px;\n  background-color: rgba(255, 255, 255, 0.15);\n  backdrop-filter: blur(8px);\n  color: white;\n}\n.header .currentWeather .containerDiv .weatherIconDiv {\n  width: 100%;\n  height: 80%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.header .currentWeather .containerDiv .weatherIconDiv .weatherIcon {\n  height: 85%;\n}\n.header .currentWeather .containerDiv .weatherExplanation {\n  width: 100%;\n  height: 20%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n.header .currentHourlyWeather {\n  grid-column: 1/4;\n  grid-row: 3/4;\n  overflow-x: scroll;\n  white-space: nowrap;\n  border-top-left-radius: 24px;\n  border-top-right-radius: 24px;\n  border-bottom-left-radius: 12px;\n  border-bottom-right-radius: 12px;\n  display: flex;\n  padding-top: 20px;\n}\n.header .currentHourlyWeather .hourlyCards {\n  font-family: Roboto;\n  height: 90%;\n  min-width: 85px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  justify-content: space-around;\n  flex-direction: column;\n  margin-left: 15px;\n  margin-right: 15px;\n  font-size: 16px;\n  background-color: rgb(48, 47, 47);\n  margin-top: 10px;\n  border-radius: 8px;\n  color: white;\n}\n.header .currentHourlyWeather .hourlyCards .hourlyIcon {\n  width: 60px;\n  height: 60px;\n}\n.header .currentHourlyWeather .hourlyCards .hourlyPercip {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-size: 14px;\n}\n\n.footer {\n  grid-column: 1/4;\n  grid-row: 2/3;\n  background-color: rgb(49, 49, 49);\n  color: white;\n  height: 70%;\n}\n.footer .dailyTempTitle {\n  width: 100%;\n  height: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(17, 16, 16, 0.938);\n  border-bottom: 2px solid black;\n}\n.footer .dailyTemperatureDiv {\n  background-color: black;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n}\n.footer .dailyTemperatureDiv .dailyCards {\n  background-color: rgb(17, 16, 16);\n  width: 270px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  padding-top: 5px;\n  padding-left: 20px;\n  padding-right: 20px;\n  padding-bottom: 15px;\n  margin: 10px;\n}\n.footer .dailyTemperatureDiv .dailyCards .dailyTitle {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n}\n.footer .dailyTemperatureDiv .dailyCards .dailyTitle .dayAndForecast {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  align-items: flex-start;\n  width: 100%;\n}\n.footer .dailyTemperatureDiv .dailyCards .dailyTitle .weatherIcon {\n  width: 60px;\n  height: 60px;\n}\n.footer .dailyTemperatureDiv .dailyCards .dailyTitle .iconAndTemperature {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.footer .dailyTemperatureDiv .dailyCards .dailyTitle .highAndLowTemp {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n.footer .dailyTemperatureDiv .dailyCards .dailyDetails {\n  padding-left: 5px;\n  padding-right: 5px;\n  width: 100%;\n  height: 95px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.footer .dailyTemperatureDiv .dailyCards .dailyDetails .precipitationDiv,\n.footer .dailyTemperatureDiv .dailyCards .dailyDetails .windDiv,\n.footer .dailyTemperatureDiv .dailyCards .dailyDetails .humidityDiv,\n.footer .dailyTemperatureDiv .dailyCards .dailyDetails .uvIndexDiv,\n.footer .dailyTemperatureDiv .dailyCards .dailyDetails .sunriseSunset {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  justify-content: space-between;\n}\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n    top: 6rem;\n  }\n  100% {\n    opacity: 0.5;\n    top: 4.7rem;\n  }\n}\n@media only screen and (max-width: 1036px) {\n  .headerDiv {\n    height: 90vh;\n  }\n  .header {\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 0.4fr 0.4fr 0.8fr 0.8fr;\n  }\n  .header .searchBarContainer {\n    grid-column: 1/3;\n  }\n  .header .searchBarContainer .errorMessage {\n    font-size: 14px;\n    top: 6rem;\n  }\n  .header .currentLocation {\n    grid-column: 1/3;\n  }\n  .header .currentTemperatureDiv {\n    grid-row: 3/4;\n    grid-column: 1/2;\n  }\n  .header .currentTemperatureDiv .currentTemperatureDiv2 {\n    padding-top: 5px;\n    padding-bottom: 5px;\n  }\n  .header .currentWeather {\n    grid-row: 3/4;\n    grid-column: 2/3;\n  }\n  .header .currentWeather .containerDiv .weatherIconDiv {\n    height: 75%;\n  }\n  .header .currentWeather .containerDiv .weatherExplanation {\n    height: 25%;\n  }\n  .header .currentHourlyWeather {\n    grid-row: 4/5;\n    padding-top: 15px;\n  }\n  .header .currentHourlyWeather .hourlyCards {\n    padding-top: 5px;\n    padding-bottom: 5px;\n  }\n  @keyframes fadeIn {\n    0% {\n      opacity: 0;\n      top: 8rem;\n    }\n    100% {\n      opacity: 0.5;\n      top: 6rem;\n    }\n  }\n}\n@media only screen and (max-width: 570px) {\n  body {\n    position: relative;\n    display: grid;\n    grid-template-rows: 90vh 0.5fr;\n  }\n  .headerDiv {\n    grid-row: 1/2;\n    position: fixed;\n  }\n  #searchBar {\n    width: 70% !important;\n    height: 30px !important;\n  }\n  .buttonDiv {\n    width: 20% !important;\n    height: 30px !important;\n  }\n  .currentTemperatureDiv2 .highAndLow {\n    font-size: 14px;\n  }\n  .currentTemperatureDiv2 .currentTemperature {\n    font-size: 60px !important;\n  }\n  .currentTemperatureDiv2 .feelsLikeDiv {\n    font-size: 14px;\n  }\n  .footer {\n    grid-row: 2/3;\n    z-index: 10;\n    position: relative;\n  }\n}", "",{"version":3,"sources":["webpack://./src/styles/style.scss"],"names":[],"mappings":"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","sourcesContent":["@import './reset.css';\n\n* {\n  box-sizing: border-box;\n  scroll-behavior: smooth;\n}\n\n@font-face {\n  font-family: Roboto;\n  src: url('../assets/fonts/Roboto-Regular.woff') format('woff');\n}\n\n@font-face {\n  font-family: RobotoBlack;\n  src: url('../assets/fonts/Roboto-Black.woff') format('woff');\n}\n\n$Gray: rgb(63, 63, 63);\n$lightGray: rgb(139, 139, 139);\n\n@mixin flexCenter {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n@mixin scrollBar {\n  ::-webkit-scrollbar {\n    width: 2em;\n    height: 0.8em;\n  }\n\n  ::-webkit-scrollbar-track {\n    background: Gray;\n    border-radius: 100vw;\n    margin-block: 0.5em;\n  }\n\n  ::-webkit-scrollbar-thumb {\n    background: lightGray;\n    border: 0.25em solid lightGray;\n    border-radius: 100vw;\n  }\n\n  ::-webkit-scrollbar-thumb:hover {\n    background: lightGray;\n  }\n}\n\nbody {\n  width: 100%;\n  font-family: Roboto;\n  overflow-y: scroll;\n  scrollbar-gutter: auto;\n  @include scrollBar();\n}\n\n.headerDiv {\n  grid-column: 1/4;\n  grid-row: 1/2;\n  display: grid;\n  grid-template-columns: 0.3fr minmax(auto, 80em) 0.3fr;\n  height: 73vh;\n}\n\n.header {\n  grid-column: 2/4;\n  grid-row: 1/2;\n  display: grid;\n  grid-template-columns: 0.4fr 1fr 0.4fr;\n  grid-template-rows: 0.3fr 1fr 0.8fr;\n\n  .searchBarContainer {\n    grid-column: 2/3;\n    grid-row: 1/2;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n\n    #searchBar {\n      width: 80%;\n      height: 40px;\n      border: none;\n      outline: none;\n      font-size: 16px;\n      text-indent: 10px;\n      border-bottom-left-radius: 4px;\n      border-top-left-radius: 4px;\n    }\n    .buttonDiv {\n      height: 40px;\n      width: 10%;\n      .searchButton {\n        width: 100%;\n        height: 100%;\n        border: none;\n        background-color: #eb6f4c;\n        color: white;\n        border-bottom-right-radius: 4px;\n        border-top-right-radius: 4px;\n        font-family: Roboto;\n        font-size: 15px;\n      }\n    }\n    .searchBarError {\n      border: 5px solid red;\n    }\n    .errorMessage {\n      position: absolute;\n      top: 4.7rem;\n      color: red;\n      display: none;\n      text-align: center;\n      animation: fadeIn 0.2s;\n    }\n  }\n\n  .currentTemperatureDiv {\n    grid-column: 1/2;\n    grid-row: 2/3;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n\n    .currentTemperatureDiv2 {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n      height: 80%;\n      width: 70%;\n      border-radius: 8px;\n      background-color: rgba(255, 255, 255, 0.15);\n      backdrop-filter: blur(8px);\n      color: white;\n      font-size: 16px;\n\n      .highAndLow {\n        display: flex;\n        justify-content: space-around;\n        width: 100%;\n        height: 15%;\n        text-align: center;\n        #highTemp {\n          @include flexCenter();\n        }\n        #lowTemp {\n          @include flexCenter();\n        }\n      }\n\n      .currentTemperature {\n        width: 100%;\n        height: 70%;\n        @include flexCenter();\n        font-size: 70px;\n      }\n\n      .feelsLikeDiv {\n        height: 15%;\n        width: 100%;\n        @include flexCenter();\n      }\n    }\n  }\n\n  .currentLocation {\n    grid-column: 2/3;\n    grid-row: 2/3;\n    font-family: RobotoBlack;\n    font-size: 36px;\n    @include flexCenter();\n\n    .locationContainer {\n      @include flexCenter();\n      background-color: rgba(255, 255, 255, 0.15);\n      backdrop-filter: blur(8px);\n      color: white;\n      border-radius: 8px;\n      width: 70%;\n      height: 130px;\n      flex-wrap: wrap;\n      padding: 10px;\n      text-align: center;\n      flex-direction: column;\n      justify-content: space-around;\n\n      .switchContainer {\n        display: flex;\n        flex-direction: row;\n\n        #Celsius {\n          margin-right: 10px;\n        }\n\n        #Farenheit {\n          margin-left: 10px;\n        }\n\n        .switch {\n          position: relative;\n          display: inline-block;\n          width: 60px;\n          height: 34px;\n        }\n\n        .switch input {\n          opacity: 0;\n          width: 0;\n          height: 0;\n        }\n\n        .slider {\n          position: absolute;\n          cursor: pointer;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          background-color: rgba(48, 47, 47, 1);\n          -webkit-transition: 0.4s;\n          transition: 0.4s;\n        }\n\n        .slider:before {\n          position: absolute;\n          content: '';\n          height: 26px;\n          width: 26px;\n          left: 4px;\n          bottom: 4px;\n          background-color: white;\n          -webkit-transition: 0.4s;\n          transition: 0.4s;\n        }\n\n        input:checked + .slider:before {\n          -webkit-transform: translateX(26px);\n          -ms-transform: translateX(26px);\n          transform: translateX(26px);\n        }\n\n        /* Rounded sliders */\n        .slider.round {\n          border-radius: 34px;\n        }\n\n        .slider.round:before {\n          border-radius: 50%;\n        }\n      }\n    }\n  }\n\n  .currentWeather {\n    grid-column: 3/4;\n    grid-row: 2/3;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    .containerDiv {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n      height: 80%;\n      width: 70%;\n      border-radius: 8px;\n      background-color: rgba(255, 255, 255, 0.15);\n      backdrop-filter: blur(8px);\n      color: white;\n      .weatherIconDiv {\n        width: 100%;\n        height: 80%;\n        @include flexCenter();\n        .weatherIcon {\n          height: 85%;\n        }\n      }\n      .weatherExplanation {\n        width: 100%;\n        height: 20%;\n        @include flexCenter();\n        text-align: center;\n      }\n    }\n  }\n\n  .currentHourlyWeather {\n    grid-column: 1/4;\n    grid-row: 3/4;\n    overflow-x: scroll;\n    white-space: nowrap;\n    border-top-left-radius: 24px;\n    border-top-right-radius: 24px;\n    border-bottom-left-radius: 12px;\n    border-bottom-right-radius: 12px;\n    display: flex;\n    padding-top: 20px;\n    .hourlyCards {\n      font-family: Roboto;\n      height: 90%;\n      min-width: 85px;\n      @include flexCenter();\n      justify-content: space-around;\n      flex-direction: column;\n      margin-left: 15px;\n      margin-right: 15px;\n      font-size: 16px;\n      background-color: rgba(48, 47, 47, 1);\n      margin-top: 10px;\n      border-radius: 8px;\n      color: white;\n      .hourlyIcon {\n        width: 60px;\n        height: 60px;\n      }\n      .hourlyPercip {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        font-size: 14px;\n      }\n    }\n  }\n}\n\n.footer {\n  grid-column: 1/4;\n  grid-row: 2/3;\n  background-color: rgb(49, 49, 49);\n  color: white;\n  height: 70%;\n  .dailyTempTitle {\n    width: 100%;\n    height: 50px;\n    @include flexCenter();\n    background-color: rgba(17, 16, 16, 0.938);\n    border-bottom: 2px solid black;\n  }\n  .dailyTemperatureDiv {\n    background-color: black;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: center;\n    .dailyCards {\n      background-color: rgba(17, 16, 16);\n      width: 270px;\n      @include flexCenter();\n      flex-direction: column;\n      padding-top: 5px;\n      padding-left: 20px;\n      padding-right: 20px;\n      padding-bottom: 15px;\n      margin: 10px;\n      .dailyTitle {\n        @include flexCenter();\n        justify-content: space-between;\n        width: 100%;\n        .dayAndForecast {\n          @include flexCenter();\n          flex-direction: column;\n          align-items: flex-start;\n          width: 100%;\n        }\n        .weatherIcon {\n          width: 60px;\n          height: 60px;\n        }\n        .iconAndTemperature {\n          @include flexCenter();\n        }\n        .highAndLowTemp {\n          @include flexCenter();\n          flex-direction: column;\n        }\n      }\n      .dailyDetails {\n        padding-left: 5px;\n        padding-right: 5px;\n        width: 100%;\n        height: 95px;\n        display: flex;\n        flex-direction: column;\n        justify-content: space-between;\n        .precipitationDiv,\n        .windDiv,\n        .humidityDiv,\n        .uvIndexDiv,\n        .sunriseSunset {\n          @include flexCenter();\n          justify-content: space-between;\n        }\n      }\n    }\n  }\n}\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n    top: 6rem;\n  }\n  100% {\n    opacity: 0.5;\n    top: 4.7rem;\n  }\n}\n\n@media only screen and (max-width: 1036px) {\n  .headerDiv {\n    height: 90vh;\n  }\n  .header {\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 0.4fr 0.4fr 0.8fr 0.8fr;\n\n    .searchBarContainer {\n      grid-column: 1/3;\n\n      .errorMessage {\n        font-size: 14px;\n        top: 6rem;\n      }\n    }\n\n    .currentLocation {\n      grid-column: 1/3;\n    }\n\n    .currentTemperatureDiv {\n      grid-row: 3/4;\n      grid-column: 1/2;\n      .currentTemperatureDiv2 {\n        padding-top: 5px;\n        padding-bottom: 5px;\n      }\n    }\n    .currentWeather {\n      grid-row: 3/4;\n      grid-column: 2/3;\n      .containerDiv {\n        .weatherIconDiv {\n          height: 75%;\n        }\n        .weatherExplanation {\n          height: 25%;\n        }\n      }\n    }\n    .currentHourlyWeather {\n      grid-row: 4/5;\n      padding-top: 15px;\n      .hourlyCards {\n        padding-top: 5px;\n        padding-bottom: 5px;\n      }\n    }\n  }\n  @keyframes fadeIn {\n    0% {\n      opacity: 0;\n      top: 8rem;\n    }\n    100% {\n      opacity: 0.5;\n      top: 6rem;\n    }\n  }\n}\n\n@media only screen and (max-width: 570px) {\n  body {\n    position: relative;\n    display: grid;\n    grid-template-rows: 90vh 0.5fr;\n  }\n\n  .headerDiv {\n    grid-row: 1/2;\n    position: fixed;\n  }\n  #searchBar {\n    width: 70% !important;\n    height: 30px !important;\n  }\n\n  .buttonDiv {\n    width: 20% !important;\n    height: 30px !important;\n  }\n  .currentTemperatureDiv2 {\n    .highAndLow {\n      font-size: 14px;\n    }\n    .currentTemperature {\n      font-size: 60px !important;\n    }\n    .feelsLikeDiv {\n      font-size: 14px;\n    }\n  }\n  .footer {\n    grid-row: 2/3;\n    z-index: 10;\n    position: relative;\n  }\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsWUFBWSxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsWUFBWSxNQUFNLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLE1BQU0sV0FBVyxXQUFXLFVBQVUsVUFBVSxLQUFLLE1BQU0sVUFBVSxVQUFVLFVBQVUsS0FBSyxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxZQUFZLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxZQUFZLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFlBQVksV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsWUFBWSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsS0FBSyxNQUFNLFdBQVcsV0FBVyxXQUFXLFlBQVksVUFBVSxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsWUFBWSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFlBQVksS0FBSyxLQUFLLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsS0FBSyxTQUFTLFdBQVcsV0FBVyxXQUFXLFlBQVksTUFBTSxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLEtBQUssS0FBSyxVQUFVLEtBQUss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QUFDQSxhQUFhLDZEQUFTO0FBQ3RCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLGVBQWU7QUFDbEQ7QUFDQTs7QUFFQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDL0RWO0FBQzBCOztBQUV2RCxxRUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlcy9zdHlsZS5zY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlcy9yZXNldC5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RlZ3JlZXMtdG8tZGlyZWN0aW9uL2xpYi5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZXMvc3R5bGUuc2Nzcz9lNWQ4Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZnVuY3Rpb25zL2FwaUZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9mdW5jdGlvbnMvY2hhbmdlTWFpbldlYXRoZXJGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZnVuY3Rpb25zL2NyZWF0ZURhaWx5Q2FyZHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZnVuY3Rpb25zL2NyZWF0ZUhvdXJseUNhcmRzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Z1bmN0aW9ucy9lcnJvckhhbmRsaW5nLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Z1bmN0aW9ucy9ldmVudExpc3RlbmVycy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9mdW5jdGlvbnMvdXRpbGl0eS9jYXBpdGFsaXplRWFjaExldHRlckluV29yZC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9mdW5jdGlvbnMvdXRpbGl0eS9jb252ZXJ0VW5peFRpbWUuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZnVuY3Rpb25zL3V0aWxpdHkvZGVsZXRlSXRlbXNJbkRpdi5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9mdW5jdGlvbnMvd2VhdGhlckJhY2tncm91bmRDaGFuZ2UuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVzZXQuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9mb250cy9Sb2JvdG8tUmVndWxhci53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ZvbnRzL1JvYm90by1CbGFjay53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFJvYm90b0JsYWNrO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcbn1cXG5ib2R5IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gIHNjcm9sbGJhci1ndXR0ZXI6IGF1dG87XFxufVxcbmJvZHkgOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICB3aWR0aDogMmVtO1xcbiAgaGVpZ2h0OiAwLjhlbTtcXG59XFxuYm9keSA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gIGJhY2tncm91bmQ6IEdyYXk7XFxuICBib3JkZXItcmFkaXVzOiAxMDB2dztcXG4gIG1hcmdpbi1ibG9jazogMC41ZW07XFxufVxcbmJvZHkgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBiYWNrZ3JvdW5kOiBsaWdodEdyYXk7XFxuICBib3JkZXI6IDAuMjVlbSBzb2xpZCBsaWdodEdyYXk7XFxuICBib3JkZXItcmFkaXVzOiAxMDB2dztcXG59XFxuYm9keSA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IGxpZ2h0R3JheTtcXG59XFxuXFxuLmhlYWRlckRpdiB7XFxuICBncmlkLWNvbHVtbjogMS80O1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuM2ZyIG1pbm1heChhdXRvLCA4MGVtKSAwLjNmcjtcXG4gIGhlaWdodDogNzN2aDtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBncmlkLWNvbHVtbjogMi80O1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuNGZyIDFmciAwLjRmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMC4zZnIgMWZyIDAuOGZyO1xcbn1cXG4uaGVhZGVyIC5zZWFyY2hCYXJDb250YWluZXIge1xcbiAgZ3JpZC1jb2x1bW46IDIvMztcXG4gIGdyaWQtcm93OiAxLzI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uaGVhZGVyIC5zZWFyY2hCYXJDb250YWluZXIgI3NlYXJjaEJhciB7XFxuICB3aWR0aDogODAlO1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIHRleHQtaW5kZW50OiAxMHB4O1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNHB4O1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNHB4O1xcbn1cXG4uaGVhZGVyIC5zZWFyY2hCYXJDb250YWluZXIgLmJ1dHRvbkRpdiB7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICB3aWR0aDogMTAlO1xcbn1cXG4uaGVhZGVyIC5zZWFyY2hCYXJDb250YWluZXIgLmJ1dHRvbkRpdiAuc2VhcmNoQnV0dG9uIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ViNmY0YztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA0cHg7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNHB4O1xcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG59XFxuLmhlYWRlciAuc2VhcmNoQmFyQ29udGFpbmVyIC5zZWFyY2hCYXJFcnJvciB7XFxuICBib3JkZXI6IDVweCBzb2xpZCByZWQ7XFxufVxcbi5oZWFkZXIgLnNlYXJjaEJhckNvbnRhaW5lciAuZXJyb3JNZXNzYWdlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNC43cmVtO1xcbiAgY29sb3I6IHJlZDtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBhbmltYXRpb246IGZhZGVJbiAwLjJzO1xcbn1cXG4uaGVhZGVyIC5jdXJyZW50VGVtcGVyYXR1cmVEaXYge1xcbiAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gIGdyaWQtcm93OiAyLzM7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmhlYWRlciAuY3VycmVudFRlbXBlcmF0dXJlRGl2IC5jdXJyZW50VGVtcGVyYXR1cmVEaXYyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiA4MCU7XFxuICB3aWR0aDogNzAlO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG4uaGVhZGVyIC5jdXJyZW50VGVtcGVyYXR1cmVEaXYgLmN1cnJlbnRUZW1wZXJhdHVyZURpdjIgLmhpZ2hBbmRMb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDE1JTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmhlYWRlciAuY3VycmVudFRlbXBlcmF0dXJlRGl2IC5jdXJyZW50VGVtcGVyYXR1cmVEaXYyIC5oaWdoQW5kTG93ICNoaWdoVGVtcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uaGVhZGVyIC5jdXJyZW50VGVtcGVyYXR1cmVEaXYgLmN1cnJlbnRUZW1wZXJhdHVyZURpdjIgLmhpZ2hBbmRMb3cgI2xvd1RlbXAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmhlYWRlciAuY3VycmVudFRlbXBlcmF0dXJlRGl2IC5jdXJyZW50VGVtcGVyYXR1cmVEaXYyIC5jdXJyZW50VGVtcGVyYXR1cmUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDcwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDcwcHg7XFxufVxcbi5oZWFkZXIgLmN1cnJlbnRUZW1wZXJhdHVyZURpdiAuY3VycmVudFRlbXBlcmF0dXJlRGl2MiAuZmVlbHNMaWtlRGl2IHtcXG4gIGhlaWdodDogMTUlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uaGVhZGVyIC5jdXJyZW50TG9jYXRpb24ge1xcbiAgZ3JpZC1jb2x1bW46IDIvMztcXG4gIGdyaWQtcm93OiAyLzM7XFxuICBmb250LWZhbWlseTogUm9ib3RvQmxhY2s7XFxuICBmb250LXNpemU6IDM2cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uaGVhZGVyIC5jdXJyZW50TG9jYXRpb24gLmxvY2F0aW9uQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICB3aWR0aDogNzAlO1xcbiAgaGVpZ2h0OiAxMzBweDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcbi5oZWFkZXIgLmN1cnJlbnRMb2NhdGlvbiAubG9jYXRpb25Db250YWluZXIgLnN3aXRjaENvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIC8qIFJvdW5kZWQgc2xpZGVycyAqL1xcbn1cXG4uaGVhZGVyIC5jdXJyZW50TG9jYXRpb24gLmxvY2F0aW9uQ29udGFpbmVyIC5zd2l0Y2hDb250YWluZXIgI0NlbHNpdXMge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG4uaGVhZGVyIC5jdXJyZW50TG9jYXRpb24gLmxvY2F0aW9uQ29udGFpbmVyIC5zd2l0Y2hDb250YWluZXIgI0ZhcmVuaGVpdCB7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuLmhlYWRlciAuY3VycmVudExvY2F0aW9uIC5sb2NhdGlvbkNvbnRhaW5lciAuc3dpdGNoQ29udGFpbmVyIC5zd2l0Y2gge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDYwcHg7XFxuICBoZWlnaHQ6IDM0cHg7XFxufVxcbi5oZWFkZXIgLmN1cnJlbnRMb2NhdGlvbiAubG9jYXRpb25Db250YWluZXIgLnN3aXRjaENvbnRhaW5lciAuc3dpdGNoIGlucHV0IHtcXG4gIG9wYWNpdHk6IDA7XFxuICB3aWR0aDogMDtcXG4gIGhlaWdodDogMDtcXG59XFxuLmhlYWRlciAuY3VycmVudExvY2F0aW9uIC5sb2NhdGlvbkNvbnRhaW5lciAuc3dpdGNoQ29udGFpbmVyIC5zbGlkZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ4LCA0NywgNDcpO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xcbiAgdHJhbnNpdGlvbjogMC40cztcXG59XFxuLmhlYWRlciAuY3VycmVudExvY2F0aW9uIC5sb2NhdGlvbkNvbnRhaW5lciAuc3dpdGNoQ29udGFpbmVyIC5zbGlkZXI6YmVmb3JlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgaGVpZ2h0OiAyNnB4O1xcbiAgd2lkdGg6IDI2cHg7XFxuICBsZWZ0OiA0cHg7XFxuICBib3R0b206IDRweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xcbiAgdHJhbnNpdGlvbjogMC40cztcXG59XFxuLmhlYWRlciAuY3VycmVudExvY2F0aW9uIC5sb2NhdGlvbkNvbnRhaW5lciAuc3dpdGNoQ29udGFpbmVyIGlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxufVxcbi5oZWFkZXIgLmN1cnJlbnRMb2NhdGlvbiAubG9jYXRpb25Db250YWluZXIgLnN3aXRjaENvbnRhaW5lciAuc2xpZGVyLnJvdW5kIHtcXG4gIGJvcmRlci1yYWRpdXM6IDM0cHg7XFxufVxcbi5oZWFkZXIgLmN1cnJlbnRMb2NhdGlvbiAubG9jYXRpb25Db250YWluZXIgLnN3aXRjaENvbnRhaW5lciAuc2xpZGVyLnJvdW5kOmJlZm9yZSB7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcbi5oZWFkZXIgLmN1cnJlbnRXZWF0aGVyIHtcXG4gIGdyaWQtY29sdW1uOiAzLzQ7XFxuICBncmlkLXJvdzogMi8zO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5oZWFkZXIgLmN1cnJlbnRXZWF0aGVyIC5jb250YWluZXJEaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDgwJTtcXG4gIHdpZHRoOiA3MCU7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCk7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbi5oZWFkZXIgLmN1cnJlbnRXZWF0aGVyIC5jb250YWluZXJEaXYgLndlYXRoZXJJY29uRGl2IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA4MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uaGVhZGVyIC5jdXJyZW50V2VhdGhlciAuY29udGFpbmVyRGl2IC53ZWF0aGVySWNvbkRpdiAud2VhdGhlckljb24ge1xcbiAgaGVpZ2h0OiA4NSU7XFxufVxcbi5oZWFkZXIgLmN1cnJlbnRXZWF0aGVyIC5jb250YWluZXJEaXYgLndlYXRoZXJFeHBsYW5hdGlvbiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMjAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmhlYWRlciAuY3VycmVudEhvdXJseVdlYXRoZXIge1xcbiAgZ3JpZC1jb2x1bW46IDEvNDtcXG4gIGdyaWQtcm93OiAzLzQ7XFxuICBvdmVyZmxvdy14OiBzY3JvbGw7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjRweDtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyNHB4O1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTJweDtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMnB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xcbn1cXG4uaGVhZGVyIC5jdXJyZW50SG91cmx5V2VhdGhlciAuaG91cmx5Q2FyZHMge1xcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcXG4gIGhlaWdodDogOTAlO1xcbiAgbWluLXdpZHRoOiA4NXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ4LCA0NywgNDcpO1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuLmhlYWRlciAuY3VycmVudEhvdXJseVdlYXRoZXIgLmhvdXJseUNhcmRzIC5ob3VybHlJY29uIHtcXG4gIHdpZHRoOiA2MHB4O1xcbiAgaGVpZ2h0OiA2MHB4O1xcbn1cXG4uaGVhZGVyIC5jdXJyZW50SG91cmx5V2VhdGhlciAuaG91cmx5Q2FyZHMgLmhvdXJseVBlcmNpcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuXFxuLmZvb3RlciB7XFxuICBncmlkLWNvbHVtbjogMS80O1xcbiAgZ3JpZC1yb3c6IDIvMztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig0OSwgNDksIDQ5KTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGhlaWdodDogNzAlO1xcbn1cXG4uZm9vdGVyIC5kYWlseVRlbXBUaXRsZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE3LCAxNiwgMTYsIDAuOTM4KTtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcXG59XFxuLmZvb3RlciAuZGFpbHlUZW1wZXJhdHVyZURpdiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5mb290ZXIgLmRhaWx5VGVtcGVyYXR1cmVEaXYgLmRhaWx5Q2FyZHMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3LCAxNiwgMTYpO1xcbiAgd2lkdGg6IDI3MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nLXRvcDogNXB4O1xcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgcGFkZGluZy1yaWdodDogMjBweDtcXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xcbiAgbWFyZ2luOiAxMHB4O1xcbn1cXG4uZm9vdGVyIC5kYWlseVRlbXBlcmF0dXJlRGl2IC5kYWlseUNhcmRzIC5kYWlseVRpdGxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLmZvb3RlciAuZGFpbHlUZW1wZXJhdHVyZURpdiAuZGFpbHlDYXJkcyAuZGFpbHlUaXRsZSAuZGF5QW5kRm9yZWNhc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4uZm9vdGVyIC5kYWlseVRlbXBlcmF0dXJlRGl2IC5kYWlseUNhcmRzIC5kYWlseVRpdGxlIC53ZWF0aGVySWNvbiB7XFxuICB3aWR0aDogNjBweDtcXG4gIGhlaWdodDogNjBweDtcXG59XFxuLmZvb3RlciAuZGFpbHlUZW1wZXJhdHVyZURpdiAuZGFpbHlDYXJkcyAuZGFpbHlUaXRsZSAuaWNvbkFuZFRlbXBlcmF0dXJlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5mb290ZXIgLmRhaWx5VGVtcGVyYXR1cmVEaXYgLmRhaWx5Q2FyZHMgLmRhaWx5VGl0bGUgLmhpZ2hBbmRMb3dUZW1wIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4uZm9vdGVyIC5kYWlseVRlbXBlcmF0dXJlRGl2IC5kYWlseUNhcmRzIC5kYWlseURldGFpbHMge1xcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XFxuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogOTVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4uZm9vdGVyIC5kYWlseVRlbXBlcmF0dXJlRGl2IC5kYWlseUNhcmRzIC5kYWlseURldGFpbHMgLnByZWNpcGl0YXRpb25EaXYsXFxuLmZvb3RlciAuZGFpbHlUZW1wZXJhdHVyZURpdiAuZGFpbHlDYXJkcyAuZGFpbHlEZXRhaWxzIC53aW5kRGl2LFxcbi5mb290ZXIgLmRhaWx5VGVtcGVyYXR1cmVEaXYgLmRhaWx5Q2FyZHMgLmRhaWx5RGV0YWlscyAuaHVtaWRpdHlEaXYsXFxuLmZvb3RlciAuZGFpbHlUZW1wZXJhdHVyZURpdiAuZGFpbHlDYXJkcyAuZGFpbHlEZXRhaWxzIC51dkluZGV4RGl2LFxcbi5mb290ZXIgLmRhaWx5VGVtcGVyYXR1cmVEaXYgLmRhaWx5Q2FyZHMgLmRhaWx5RGV0YWlscyAuc3VucmlzZVN1bnNldCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRvcDogNnJlbTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAwLjU7XFxuICAgIHRvcDogNC43cmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMzZweCkge1xcbiAgLmhlYWRlckRpdiB7XFxuICAgIGhlaWdodDogOTB2aDtcXG4gIH1cXG4gIC5oZWFkZXIge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMC40ZnIgMC40ZnIgMC44ZnIgMC44ZnI7XFxuICB9XFxuICAuaGVhZGVyIC5zZWFyY2hCYXJDb250YWluZXIge1xcbiAgICBncmlkLWNvbHVtbjogMS8zO1xcbiAgfVxcbiAgLmhlYWRlciAuc2VhcmNoQmFyQ29udGFpbmVyIC5lcnJvck1lc3NhZ2Uge1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIHRvcDogNnJlbTtcXG4gIH1cXG4gIC5oZWFkZXIgLmN1cnJlbnRMb2NhdGlvbiB7XFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxuICB9XFxuICAuaGVhZGVyIC5jdXJyZW50VGVtcGVyYXR1cmVEaXYge1xcbiAgICBncmlkLXJvdzogMy80O1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgfVxcbiAgLmhlYWRlciAuY3VycmVudFRlbXBlcmF0dXJlRGl2IC5jdXJyZW50VGVtcGVyYXR1cmVEaXYyIHtcXG4gICAgcGFkZGluZy10b3A6IDVweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcXG4gIH1cXG4gIC5oZWFkZXIgLmN1cnJlbnRXZWF0aGVyIHtcXG4gICAgZ3JpZC1yb3c6IDMvNDtcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXG4gIH1cXG4gIC5oZWFkZXIgLmN1cnJlbnRXZWF0aGVyIC5jb250YWluZXJEaXYgLndlYXRoZXJJY29uRGl2IHtcXG4gICAgaGVpZ2h0OiA3NSU7XFxuICB9XFxuICAuaGVhZGVyIC5jdXJyZW50V2VhdGhlciAuY29udGFpbmVyRGl2IC53ZWF0aGVyRXhwbGFuYXRpb24ge1xcbiAgICBoZWlnaHQ6IDI1JTtcXG4gIH1cXG4gIC5oZWFkZXIgLmN1cnJlbnRIb3VybHlXZWF0aGVyIHtcXG4gICAgZ3JpZC1yb3c6IDQvNTtcXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XFxuICB9XFxuICAuaGVhZGVyIC5jdXJyZW50SG91cmx5V2VhdGhlciAuaG91cmx5Q2FyZHMge1xcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbiAgfVxcbiAgQGtleWZyYW1lcyBmYWRlSW4ge1xcbiAgICAwJSB7XFxuICAgICAgb3BhY2l0eTogMDtcXG4gICAgICB0b3A6IDhyZW07XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgb3BhY2l0eTogMC41O1xcbiAgICAgIHRvcDogNnJlbTtcXG4gICAgfVxcbiAgfVxcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3MHB4KSB7XFxuICBib2R5IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDkwdmggMC41ZnI7XFxuICB9XFxuICAuaGVhZGVyRGl2IHtcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgfVxcbiAgI3NlYXJjaEJhciB7XFxuICAgIHdpZHRoOiA3MCUgIWltcG9ydGFudDtcXG4gICAgaGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuYnV0dG9uRGl2IHtcXG4gICAgd2lkdGg6IDIwJSAhaW1wb3J0YW50O1xcbiAgICBoZWlnaHQ6IDMwcHggIWltcG9ydGFudDtcXG4gIH1cXG4gIC5jdXJyZW50VGVtcGVyYXR1cmVEaXYyIC5oaWdoQW5kTG93IHtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgfVxcbiAgLmN1cnJlbnRUZW1wZXJhdHVyZURpdjIgLmN1cnJlbnRUZW1wZXJhdHVyZSB7XFxuICAgIGZvbnQtc2l6ZTogNjBweCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmN1cnJlbnRUZW1wZXJhdHVyZURpdjIgLmZlZWxzTGlrZURpdiB7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gIH1cXG4gIC5mb290ZXIge1xcbiAgICBncmlkLXJvdzogMi8zO1xcbiAgICB6LWluZGV4OiAxMDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxzQkFBQTtFQUNBLHVCQUFBO0FBQUY7O0FBR0E7RUFDRSxtQkFBQTtFQUNBLDJEQUFBO0FBQUY7QUFHQTtFQUNFLHdCQUFBO0VBQ0EsMkRBQUE7QUFERjtBQW9DQTtFQUNFLFdB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QTtFQVJKO0VBVUk7SUFDRSxlQUFBO0lBQ0EsU0FBQTtFQVJOO0VBWUU7SUFDRSxnQkFBQTtFQVZKO0VBYUU7SUFDRSxhQUFBO0lBQ0EsZ0JBQUE7RUFYSjtFQVlJO0lBQ0UsZ0JBQUE7SUFDQSxtQkFBQTtFQVZOO0VBYUU7SUFDRSxhQUFBO0lBQ0EsZ0JBQUE7RUFYSjtFQWFNO0lBQ0UsV0FBQTtFQVhSO0VBYU07SUFDRSxXQUFBO0VBWFI7RUFlRTtJQUNFLGFBQUE7SUFDQSxpQkFBQTtFQWJKO0VBY0k7SUFDRSxnQkFBQTtJQUNBLG1CQUFBO0VBWk47RUFnQkE7SUFDRTtNQUNFLFVBQUE7TUFDQSxTQUFBO0lBZEY7SUFnQkE7TUFDRSxZQUFBO01BQ0EsU0FBQTtJQWRGO0VBQ0Y7QUFDRjtBQWlCQTtFQUNFO0lBQ0Usa0JBQUE7SUFDQSxhQUFBO0lBQ0EsOEJBQUE7RUFmRjtFQWtCQTtJQUNFLGFBQUE7SUFDQSxlQUFBO0VBaEJGO0VBa0JBO0lBQ0UscUJBQUE7SUFDQSx1QkFBQTtFQWhCRjtFQW1CQTtJQUNFLHFCQUFBO0lBQ0EsdUJBQUE7RUFqQkY7RUFvQkU7SUFDRSxlQUFBO0VBbEJKO0VBb0JFO0lBQ0UsMEJBQUE7RUFsQko7RUFvQkU7SUFDRSxlQUFBO0VBbEJKO0VBcUJBO0lBQ0UsYUFBQTtJQUNBLFdBQUE7SUFDQSxrQkFBQTtFQW5CRjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgJy4vcmVzZXQuY3NzJztcXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogUm9ib3RvO1xcbiAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9Sb2JvdG8tUmVndWxhci53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFJvYm90b0JsYWNrO1xcbiAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9Sb2JvdG8tQmxhY2sud29mZicpIGZvcm1hdCgnd29mZicpO1xcbn1cXG5cXG4kR3JheTogcmdiKDYzLCA2MywgNjMpO1xcbiRsaWdodEdyYXk6IHJnYigxMzksIDEzOSwgMTM5KTtcXG5cXG5AbWl4aW4gZmxleENlbnRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5AbWl4aW4gc2Nyb2xsQmFyIHtcXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICB3aWR0aDogMmVtO1xcbiAgICBoZWlnaHQ6IDAuOGVtO1xcbiAgfVxcblxcbiAgOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICAgIGJhY2tncm91bmQ6IEdyYXk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHZ3O1xcbiAgICBtYXJnaW4tYmxvY2s6IDAuNWVtO1xcbiAgfVxcblxcbiAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICAgIGJhY2tncm91bmQ6IGxpZ2h0R3JheTtcXG4gICAgYm9yZGVyOiAwLjI1ZW0gc29saWQgbGlnaHRHcmF5O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDB2dztcXG4gIH1cXG5cXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiBsaWdodEdyYXk7XFxuICB9XFxufVxcblxcbmJvZHkge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LWZhbWlseTogUm9ib3RvO1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgc2Nyb2xsYmFyLWd1dHRlcjogYXV0bztcXG4gIEBpbmNsdWRlIHNjcm9sbEJhcigpO1xcbn1cXG5cXG4uaGVhZGVyRGl2IHtcXG4gIGdyaWQtY29sdW1uOiAxLzQ7XFxuICBncmlkLXJvdzogMS8yO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC4zZnIgbWlubWF4KGF1dG8sIDgwZW0pIDAuM2ZyO1xcbiAgaGVpZ2h0OiA3M3ZoO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGdyaWQtY29sdW1uOiAyLzQ7XFxuICBncmlkLXJvdzogMS8yO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC40ZnIgMWZyIDAuNGZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjNmciAxZnIgMC44ZnI7XFxuXFxuICAuc2VhcmNoQmFyQ29udGFpbmVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gICAgI3NlYXJjaEJhciB7XFxuICAgICAgd2lkdGg6IDgwJTtcXG4gICAgICBoZWlnaHQ6IDQwcHg7XFxuICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgIG91dGxpbmU6IG5vbmU7XFxuICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICAgIHRleHQtaW5kZW50OiAxMHB4O1xcbiAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDRweDtcXG4gICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0cHg7XFxuICAgIH1cXG4gICAgLmJ1dHRvbkRpdiB7XFxuICAgICAgaGVpZ2h0OiA0MHB4O1xcbiAgICAgIHdpZHRoOiAxMCU7XFxuICAgICAgLnNlYXJjaEJ1dHRvbiB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlYjZmNGM7XFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNHB4O1xcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDRweDtcXG4gICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XFxuICAgICAgICBmb250LXNpemU6IDE1cHg7XFxuICAgICAgfVxcbiAgICB9XFxuICAgIC5zZWFyY2hCYXJFcnJvciB7XFxuICAgICAgYm9yZGVyOiA1cHggc29saWQgcmVkO1xcbiAgICB9XFxuICAgIC5lcnJvck1lc3NhZ2Uge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB0b3A6IDQuN3JlbTtcXG4gICAgICBjb2xvcjogcmVkO1xcbiAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgIGFuaW1hdGlvbjogZmFkZUluIDAuMnM7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5jdXJyZW50VGVtcGVyYXR1cmVEaXYge1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBncmlkLXJvdzogMi8zO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgLmN1cnJlbnRUZW1wZXJhdHVyZURpdjIge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIGhlaWdodDogODAlO1xcbiAgICAgIHdpZHRoOiA3MCU7XFxuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XFxuICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCk7XFxuICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG5cXG4gICAgICAuaGlnaEFuZExvdyB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogMTUlO1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgI2hpZ2hUZW1wIHtcXG4gICAgICAgICAgQGluY2x1ZGUgZmxleENlbnRlcigpO1xcbiAgICAgICAgfVxcbiAgICAgICAgI2xvd1RlbXAge1xcbiAgICAgICAgICBAaW5jbHVkZSBmbGV4Q2VudGVyKCk7XFxuICAgICAgICB9XFxuICAgICAgfVxcblxcbiAgICAgIC5jdXJyZW50VGVtcGVyYXR1cmUge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IDcwJTtcXG4gICAgICAgIEBpbmNsdWRlIGZsZXhDZW50ZXIoKTtcXG4gICAgICAgIGZvbnQtc2l6ZTogNzBweDtcXG4gICAgICB9XFxuXFxuICAgICAgLmZlZWxzTGlrZURpdiB7XFxuICAgICAgICBoZWlnaHQ6IDE1JTtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgQGluY2x1ZGUgZmxleENlbnRlcigpO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcblxcbiAgLmN1cnJlbnRMb2NhdGlvbiB7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxuICAgIGdyaWQtcm93OiAyLzM7XFxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG9CbGFjaztcXG4gICAgZm9udC1zaXplOiAzNnB4O1xcbiAgICBAaW5jbHVkZSBmbGV4Q2VudGVyKCk7XFxuXFxuICAgIC5sb2NhdGlvbkNvbnRhaW5lciB7XFxuICAgICAgQGluY2x1ZGUgZmxleENlbnRlcigpO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XFxuICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCk7XFxuICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgICB3aWR0aDogNzAlO1xcbiAgICAgIGhlaWdodDogMTMwcHg7XFxuICAgICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuXFxuICAgICAgLnN3aXRjaENvbnRhaW5lciB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG5cXG4gICAgICAgICNDZWxzaXVzIHtcXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgI0ZhcmVuaGVpdCB7XFxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnN3aXRjaCB7XFxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgICAgICB3aWR0aDogNjBweDtcXG4gICAgICAgICAgaGVpZ2h0OiAzNHB4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnN3aXRjaCBpbnB1dCB7XFxuICAgICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICAgIHdpZHRoOiAwO1xcbiAgICAgICAgICBoZWlnaHQ6IDA7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuc2xpZGVyIHtcXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgIHRvcDogMDtcXG4gICAgICAgICAgbGVmdDogMDtcXG4gICAgICAgICAgcmlnaHQ6IDA7XFxuICAgICAgICAgIGJvdHRvbTogMDtcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0OCwgNDcsIDQ3LCAxKTtcXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjRzO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnNsaWRlcjpiZWZvcmUge1xcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgIGNvbnRlbnQ6ICcnO1xcbiAgICAgICAgICBoZWlnaHQ6IDI2cHg7XFxuICAgICAgICAgIHdpZHRoOiAyNnB4O1xcbiAgICAgICAgICBsZWZ0OiA0cHg7XFxuICAgICAgICAgIGJvdHRvbTogNHB4O1xcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjRzO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxuICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC8qIFJvdW5kZWQgc2xpZGVycyAqL1xcbiAgICAgICAgLnNsaWRlci5yb3VuZCB7XFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDM0cHg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuc2xpZGVyLnJvdW5kOmJlZm9yZSB7XFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5jdXJyZW50V2VhdGhlciB7XFxuICAgIGdyaWQtY29sdW1uOiAzLzQ7XFxuICAgIGdyaWQtcm93OiAyLzM7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAuY29udGFpbmVyRGl2IHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICBoZWlnaHQ6IDgwJTtcXG4gICAgICB3aWR0aDogNzAlO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xcbiAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xcbiAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAud2VhdGhlckljb25EaXYge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IDgwJTtcXG4gICAgICAgIEBpbmNsdWRlIGZsZXhDZW50ZXIoKTtcXG4gICAgICAgIC53ZWF0aGVySWNvbiB7XFxuICAgICAgICAgIGhlaWdodDogODUlO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgICAud2VhdGhlckV4cGxhbmF0aW9uIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgaGVpZ2h0OiAyMCU7XFxuICAgICAgICBAaW5jbHVkZSBmbGV4Q2VudGVyKCk7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxuXFxuICAuY3VycmVudEhvdXJseVdlYXRoZXIge1xcbiAgICBncmlkLWNvbHVtbjogMS80O1xcbiAgICBncmlkLXJvdzogMy80O1xcbiAgICBvdmVyZmxvdy14OiBzY3JvbGw7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDI0cHg7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyNHB4O1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMnB4O1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTJweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XFxuICAgIC5ob3VybHlDYXJkcyB7XFxuICAgICAgZm9udC1mYW1pbHk6IFJvYm90bztcXG4gICAgICBoZWlnaHQ6IDkwJTtcXG4gICAgICBtaW4td2lkdGg6IDg1cHg7XFxuICAgICAgQGluY2x1ZGUgZmxleENlbnRlcigpO1xcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XFxuICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQ4LCA0NywgNDcsIDEpO1xcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAuaG91cmx5SWNvbiB7XFxuICAgICAgICB3aWR0aDogNjBweDtcXG4gICAgICAgIGhlaWdodDogNjBweDtcXG4gICAgICB9XFxuICAgICAgLmhvdXJseVBlcmNpcCB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLmZvb3RlciB7XFxuICBncmlkLWNvbHVtbjogMS80O1xcbiAgZ3JpZC1yb3c6IDIvMztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig0OSwgNDksIDQ5KTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGhlaWdodDogNzAlO1xcbiAgLmRhaWx5VGVtcFRpdGxlIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgQGluY2x1ZGUgZmxleENlbnRlcigpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE3LCAxNiwgMTYsIDAuOTM4KTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xcbiAgfVxcbiAgLmRhaWx5VGVtcGVyYXR1cmVEaXYge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgLmRhaWx5Q2FyZHMge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTcsIDE2LCAxNik7XFxuICAgICAgd2lkdGg6IDI3MHB4O1xcbiAgICAgIEBpbmNsdWRlIGZsZXhDZW50ZXIoKTtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgIHBhZGRpbmctdG9wOiA1cHg7XFxuICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxuICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XFxuICAgICAgbWFyZ2luOiAxMHB4O1xcbiAgICAgIC5kYWlseVRpdGxlIHtcXG4gICAgICAgIEBpbmNsdWRlIGZsZXhDZW50ZXIoKTtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgLmRheUFuZEZvcmVjYXN0IHtcXG4gICAgICAgICAgQGluY2x1ZGUgZmxleENlbnRlcigpO1xcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICB9XFxuICAgICAgICAud2VhdGhlckljb24ge1xcbiAgICAgICAgICB3aWR0aDogNjBweDtcXG4gICAgICAgICAgaGVpZ2h0OiA2MHB4O1xcbiAgICAgICAgfVxcbiAgICAgICAgLmljb25BbmRUZW1wZXJhdHVyZSB7XFxuICAgICAgICAgIEBpbmNsdWRlIGZsZXhDZW50ZXIoKTtcXG4gICAgICAgIH1cXG4gICAgICAgIC5oaWdoQW5kTG93VGVtcCB7XFxuICAgICAgICAgIEBpbmNsdWRlIGZsZXhDZW50ZXIoKTtcXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgICAgLmRhaWx5RGV0YWlscyB7XFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgaGVpZ2h0OiA5NXB4O1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICAucHJlY2lwaXRhdGlvbkRpdixcXG4gICAgICAgIC53aW5kRGl2LFxcbiAgICAgICAgLmh1bWlkaXR5RGl2LFxcbiAgICAgICAgLnV2SW5kZXhEaXYsXFxuICAgICAgICAuc3VucmlzZVN1bnNldCB7XFxuICAgICAgICAgIEBpbmNsdWRlIGZsZXhDZW50ZXIoKTtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRvcDogNnJlbTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAwLjU7XFxuICAgIHRvcDogNC43cmVtO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMzZweCkge1xcbiAgLmhlYWRlckRpdiB7XFxuICAgIGhlaWdodDogOTB2aDtcXG4gIH1cXG4gIC5oZWFkZXIge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMC40ZnIgMC40ZnIgMC44ZnIgMC44ZnI7XFxuXFxuICAgIC5zZWFyY2hCYXJDb250YWluZXIge1xcbiAgICAgIGdyaWQtY29sdW1uOiAxLzM7XFxuXFxuICAgICAgLmVycm9yTWVzc2FnZSB7XFxuICAgICAgICBmb250LXNpemU6IDE0cHg7XFxuICAgICAgICB0b3A6IDZyZW07XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC5jdXJyZW50TG9jYXRpb24ge1xcbiAgICAgIGdyaWQtY29sdW1uOiAxLzM7XFxuICAgIH1cXG5cXG4gICAgLmN1cnJlbnRUZW1wZXJhdHVyZURpdiB7XFxuICAgICAgZ3JpZC1yb3c6IDMvNDtcXG4gICAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICAgIC5jdXJyZW50VGVtcGVyYXR1cmVEaXYyIHtcXG4gICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbiAgICAgIH1cXG4gICAgfVxcbiAgICAuY3VycmVudFdlYXRoZXIge1xcbiAgICAgIGdyaWQtcm93OiAzLzQ7XFxuICAgICAgZ3JpZC1jb2x1bW46IDIvMztcXG4gICAgICAuY29udGFpbmVyRGl2IHtcXG4gICAgICAgIC53ZWF0aGVySWNvbkRpdiB7XFxuICAgICAgICAgIGhlaWdodDogNzUlO1xcbiAgICAgICAgfVxcbiAgICAgICAgLndlYXRoZXJFeHBsYW5hdGlvbiB7XFxuICAgICAgICAgIGhlaWdodDogMjUlO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcbiAgICAuY3VycmVudEhvdXJseVdlYXRoZXIge1xcbiAgICAgIGdyaWQtcm93OiA0LzU7XFxuICAgICAgcGFkZGluZy10b3A6IDE1cHg7XFxuICAgICAgLmhvdXJseUNhcmRzIHtcXG4gICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbiAgQGtleWZyYW1lcyBmYWRlSW4ge1xcbiAgICAwJSB7XFxuICAgICAgb3BhY2l0eTogMDtcXG4gICAgICB0b3A6IDhyZW07XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgb3BhY2l0eTogMC41O1xcbiAgICAgIHRvcDogNnJlbTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3MHB4KSB7XFxuICBib2R5IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDkwdmggMC41ZnI7XFxuICB9XFxuXFxuICAuaGVhZGVyRGl2IHtcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgfVxcbiAgI3NlYXJjaEJhciB7XFxuICAgIHdpZHRoOiA3MCUgIWltcG9ydGFudDtcXG4gICAgaGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7XFxuICB9XFxuXFxuICAuYnV0dG9uRGl2IHtcXG4gICAgd2lkdGg6IDIwJSAhaW1wb3J0YW50O1xcbiAgICBoZWlnaHQ6IDMwcHggIWltcG9ydGFudDtcXG4gIH1cXG4gIC5jdXJyZW50VGVtcGVyYXR1cmVEaXYyIHtcXG4gICAgLmhpZ2hBbmRMb3cge1xcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgfVxcbiAgICAuY3VycmVudFRlbXBlcmF0dXJlIHtcXG4gICAgICBmb250LXNpemU6IDYwcHggIWltcG9ydGFudDtcXG4gICAgfVxcbiAgICAuZmVlbHNMaWtlRGl2IHtcXG4gICAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIH1cXG4gIH1cXG4gIC5mb290ZXIge1xcbiAgICBncmlkLXJvdzogMi8zO1xcbiAgICB6LWluZGV4OiAxMDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuXFxuaHRtbCxcXG5ib2R5LFxcbmRpdixcXG5zcGFuLFxcbmFwcGxldCxcXG5vYmplY3QsXFxuaWZyYW1lLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbnAsXFxuYmxvY2txdW90ZSxcXG5wcmUsXFxuYSxcXG5hYmJyLFxcbmFjcm9ueW0sXFxuYWRkcmVzcyxcXG5iaWcsXFxuY2l0ZSxcXG5jb2RlLFxcbmRlbCxcXG5kZm4sXFxuZW0sXFxuaW1nLFxcbmlucyxcXG5rYmQsXFxucSxcXG5zLFxcbnNhbXAsXFxuc21hbGwsXFxuc3RyaWtlLFxcbnN0cm9uZyxcXG5zdWIsXFxuc3VwLFxcbnR0LFxcbnZhcixcXG5iLFxcbnUsXFxuaSxcXG5jZW50ZXIsXFxuZGwsXFxuZHQsXFxuZGQsXFxub2wsXFxudWwsXFxubGksXFxuZmllbGRzZXQsXFxuZm9ybSxcXG5sYWJlbCxcXG5sZWdlbmQsXFxudGFibGUsXFxuY2FwdGlvbixcXG50Ym9keSxcXG50Zm9vdCxcXG50aGVhZCxcXG50cixcXG50aCxcXG50ZCxcXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmNhbnZhcyxcXG5kZXRhaWxzLFxcbmVtYmVkLFxcbmZpZ3VyZSxcXG5maWdjYXB0aW9uLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbm91dHB1dCxcXG5ydWJ5LFxcbnNlY3Rpb24sXFxuc3VtbWFyeSxcXG50aW1lLFxcbm1hcmssXFxuYXVkaW8sXFxudmlkZW8ge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmRldGFpbHMsXFxuZmlnY2FwdGlvbixcXG5maWd1cmUsXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxuc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxub2wsXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSxcXG5xIHtcXG4gIHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsXFxuYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSxcXG5xOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgY29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3Jlc2V0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0NBR0M7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWlGRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLFNBQVM7RUFDVCxlQUFlO0VBQ2YsYUFBYTtFQUNiLHdCQUF3QjtBQUMxQjtBQUNBLGdEQUFnRDtBQUNoRDs7Ozs7Ozs7Ozs7RUFXRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7O0VBRUUsZ0JBQWdCO0FBQ2xCO0FBQ0E7O0VBRUUsWUFBWTtBQUNkO0FBQ0E7Ozs7RUFJRSxXQUFXO0VBQ1gsYUFBYTtBQUNmO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsaUJBQWlCO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5cXG5odG1sLFxcbmJvZHksXFxuZGl2LFxcbnNwYW4sXFxuYXBwbGV0LFxcbm9iamVjdCxcXG5pZnJhbWUsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxucCxcXG5ibG9ja3F1b3RlLFxcbnByZSxcXG5hLFxcbmFiYnIsXFxuYWNyb255bSxcXG5hZGRyZXNzLFxcbmJpZyxcXG5jaXRlLFxcbmNvZGUsXFxuZGVsLFxcbmRmbixcXG5lbSxcXG5pbWcsXFxuaW5zLFxcbmtiZCxcXG5xLFxcbnMsXFxuc2FtcCxcXG5zbWFsbCxcXG5zdHJpa2UsXFxuc3Ryb25nLFxcbnN1YixcXG5zdXAsXFxudHQsXFxudmFyLFxcbmIsXFxudSxcXG5pLFxcbmNlbnRlcixcXG5kbCxcXG5kdCxcXG5kZCxcXG5vbCxcXG51bCxcXG5saSxcXG5maWVsZHNldCxcXG5mb3JtLFxcbmxhYmVsLFxcbmxlZ2VuZCxcXG50YWJsZSxcXG5jYXB0aW9uLFxcbnRib2R5LFxcbnRmb290LFxcbnRoZWFkLFxcbnRyLFxcbnRoLFxcbnRkLFxcbmFydGljbGUsXFxuYXNpZGUsXFxuY2FudmFzLFxcbmRldGFpbHMsXFxuZW1iZWQsXFxuZmlndXJlLFxcbmZpZ2NhcHRpb24sXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxub3V0cHV0LFxcbnJ1YnksXFxuc2VjdGlvbixcXG5zdW1tYXJ5LFxcbnRpbWUsXFxubWFyayxcXG5hdWRpbyxcXG52aWRlbyB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsXFxuYXNpZGUsXFxuZGV0YWlscyxcXG5maWdjYXB0aW9uLFxcbmZpZ3VyZSxcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCxcXG51bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLFxcbnEge1xcbiAgcXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSxcXG5ibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLFxcbnE6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZCkge1xuICBpZiAodHlwZW9mIGQgIT09ICdudW1iZXInIHx8IGlzTmFOKGQpKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG5cbiAgLy8ga2VlcCB3aXRoaW4gdGhlIHJhbmdlOiAwIDw9IGQgPCAzNjBcbiAgZCA9IGQgJSAzNjA7XG5cbiAgaWYgKDExLjI1IDw9IGQgJiYgZCA8IDMzLjc1KSB7XG4gICAgcmV0dXJuIFwiTk5FXCI7XG4gIH0gZWxzZSBpZiAoMzMuNzUgPD0gZCAmJiBkIDwgNTYuMjUpIHtcbiAgICByZXR1cm4gXCJORVwiO1xuICB9IGVsc2UgaWYgKDU2LjI1IDw9IGQgJiYgZCA8IDc4Ljc1KSB7XG4gICAgcmV0dXJuIFwiRU5FXCI7XG4gIH0gZWxzZSBpZiAoNzguNzUgPD0gZCAmJiBkIDwgMTAxLjI1KSB7XG4gICAgcmV0dXJuIFwiRVwiO1xuICB9IGVsc2UgaWYgKDEwMS4yNSA8PSBkICYmIGQgPCAxMjMuNzUpIHtcbiAgICByZXR1cm4gXCJFU0VcIjtcbiAgfSBlbHNlIGlmICgxMjMuNzUgPD0gZCAmJiBkIDwgMTQ2LjI1KSB7XG4gICAgcmV0dXJuIFwiU0VcIjtcbiAgfSBlbHNlIGlmICgxNDYuMjUgPD0gZCAmJiBkIDwgMTY4Ljc1KSB7XG4gICAgcmV0dXJuIFwiU1NFXCI7XG4gIH0gZWxzZSBpZiAoMTY4Ljc1IDw9IGQgJiYgZCA8IDE5MS4yNSkge1xuICAgIHJldHVybiBcIlNcIjtcbiAgfSBlbHNlIGlmICgxOTEuMjUgPD0gZCAmJiBkIDwgMjEzLjc1KSB7XG4gICAgcmV0dXJuIFwiU1NXXCI7XG4gIH0gZWxzZSBpZiAoMjEzLjc1IDw9IGQgJiYgZCA8IDIzNi4yNSkge1xuICAgIHJldHVybiBcIlNXXCI7XG4gIH0gZWxzZSBpZiAoMjM2LjI1IDw9IGQgJiYgZCA8IDI1OC43NSkge1xuICAgIHJldHVybiBcIldTV1wiO1xuICB9IGVsc2UgaWYgKDI1OC43NSA8PSBkICYmIGQgPCAyODEuMjUpIHtcbiAgICByZXR1cm4gXCJXXCI7XG4gIH0gZWxzZSBpZiAoMjgxLjI1IDw9IGQgJiYgZCA8IDMwMy43NSkge1xuICAgIHJldHVybiBcIldOV1wiO1xuICB9IGVsc2UgaWYgKDMwMy43NSA8PSBkICYmIGQgPCAzMjYuMjUpIHtcbiAgICByZXR1cm4gXCJOV1wiO1xuICB9IGVsc2UgaWYgKDMyNi4yNSA8PSBkICYmIGQgPCAzNDguNzUpIHtcbiAgICByZXR1cm4gXCJOTldcIjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gXCJOXCI7XG4gIH1cbn07XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImFzeW5jIGZ1bmN0aW9uIGdldExvY2F0aW9uKGNpdHlOYW1lKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgVVJMID0gYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2dlby8xLjAvZGlyZWN0P3E9JHtjaXR5TmFtZX0mbGltaXQ9MSZhcHBpZD0yNGM0ODFmYzliNzNjNjg3Mzc3MThkYjJjMTRiMTIxMWA7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChVUkwpO1xuICAgIGNvbnN0IGxvY2F0aW9uRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAvLyBSZXR1cm5zIHRoZSBmaXJzdCBpbmRleCBvZiB0aGUgYXJyYXkgb2YgY2l0aWVzIGdpdmVuIGJ5IHRoZSBBUElcbiAgICByZXR1cm4gbG9jYXRpb25EYXRhWzBdO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlckZvckxvY2F0aW9uKGNpdHlOYW1lKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgbG9jYXRpb25EYXRhID0gYXdhaXQgZ2V0TG9jYXRpb24oYCR7Y2l0eU5hbWV9YCk7XG4gICAgLy8gRXh0cmFjdGluZyBsYXRpdHVkZSBhbmQgbG9uZ2l0dWRlIGZyb20gbG9jYXRpb24gZGF0YSB0byByZXRyaWV2ZSB0aGUgd2VhdGhlclxuICAgIGNvbnN0IHsgbGF0LCBsb24gfSA9IGxvY2F0aW9uRGF0YTtcbiAgICBjb25zdCB0ZW1wQ2hlY2tib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGVtcENoZWNrYm94Jyk7XG4gICAgLy8gQ2hlY2sgaWYgY2Vsc2l1cyBvciBmYXJlbmhlaXQgaXMgc2VsZWN0ZWRcbiAgICBjb25zdCB1bml0VHlwZSA9IHRlbXBDaGVja2JveC5jaGVja2VkID8gJ2ltcGVyaWFsJyA6ICdtZXRyaWMnO1xuICAgIGNvbnN0IFVSTCA9IGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvb25lY2FsbD9sYXQ9JHtsYXR9Jmxvbj0ke2xvbn0mZXhjbHVkZT1taW51dGVseSZ1bml0cz0ke3VuaXRUeXBlfSZhcHBpZD0yNGM0ODFmYzliNzNjNjg3Mzc3MThkYjJjMTRiMTIxMWA7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChVUkwpO1xuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIC8vIEFzc2lnbmluZyB0aGUgbmFtZSBhbmQgY291bnRyeSB0byB0aGUgb2JqZWN0IGJlY2F1c2UgdGhleSBhcmUgbm90IGluY2x1ZGVkIGluIHRoZSByZXNwb25zZVxuICAgIHdlYXRoZXJEYXRhLm5hbWUgPSBsb2NhdGlvbkRhdGEubmFtZTtcbiAgICB3ZWF0aGVyRGF0YS5jb3VudHJ5ID0gbG9jYXRpb25EYXRhLmNvdW50cnk7XG4gICAgcmV0dXJuIHdlYXRoZXJEYXRhO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0V2VhdGhlckZvckxvY2F0aW9uO1xuIiwiaW1wb3J0IGNhcGl0YWxpemVFYWNoTGV0dGVySW5Xb3JkIGZyb20gJy4vdXRpbGl0eS9jYXBpdGFsaXplRWFjaExldHRlckluV29yZCc7XG5cbmZ1bmN0aW9uIGNoYW5nZUNpdHlUZW1wZXJhdHVyZSh3ZWF0aGVyRGF0YSkge1xuICBjb25zdCBtYWluVGVtcGVyYXR1cmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudFRlbXBlcmF0dXJlJyk7XG4gIGNvbnN0IGhpZ2hUZW1wZXJhdHVyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNoaWdoVGVtcCcpO1xuICBjb25zdCBsb3dUZW1wZXJhdHVyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb3dUZW1wJyk7XG4gIGNvbnN0IGZlZWxzTGlrZVRlbXBlcmF0dXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZlZWxzTGlrZURpdicpO1xuXG4gIG1haW5UZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IGAke01hdGguZmxvb3Iod2VhdGhlckRhdGEuY3VycmVudC50ZW1wKX3CsGA7XG4gIGhpZ2hUZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IGBIaWdoOiAke01hdGguZmxvb3IoXG4gICAgd2VhdGhlckRhdGEuZGFpbHlbMF0udGVtcC5tYXgsXG4gICl9wrBgO1xuICBsb3dUZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IGBMb3c6ICR7TWF0aC5mbG9vcihcbiAgICB3ZWF0aGVyRGF0YS5kYWlseVswXS50ZW1wLm1pbixcbiAgKX3CsGA7XG4gIGZlZWxzTGlrZVRlbXBlcmF0dXJlLnRleHRDb250ZW50ID0gYEZlZWxzIExpa2U6ICR7TWF0aC5mbG9vcihcbiAgICB3ZWF0aGVyRGF0YS5jdXJyZW50LmZlZWxzX2xpa2UsXG4gICl9wrBgO1xufVxuXG5mdW5jdGlvbiBjaGFuZ2VDaXR5TmFtZSh3ZWF0aGVyRGF0YSkge1xuICBjb25zdCBjaXR5TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaXR5TmFtZScpO1xuICBjaXR5TmFtZS50ZXh0Q29udGVudCA9IGAke3dlYXRoZXJEYXRhLm5hbWV9LCAke3dlYXRoZXJEYXRhLmNvdW50cnl9YDtcbn1cblxuZnVuY3Rpb24gY2hhbmdlV2VhdGhlckljb24od2VhdGhlckRhdGEpIHtcbiAgY29uc3Qgd2VhdGhlckljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlckljb24nKTtcbiAgY29uc3Qgd2VhdGhlckV4cGxhbmF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXJFeHBsYW5hdGlvbicpO1xuICAvLyBDaGFuZ2VzIHRoZSBpY29uIHdpdGggdGhlIG9uZXMgcHJvdmlkZWQgYnkgb3BlbndlYXRoZXJcbiAgd2VhdGhlckljb24uc3JjID0gYGh0dHBzOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke3dlYXRoZXJEYXRhLmN1cnJlbnQud2VhdGhlclswXS5pY29ufUAyeC5wbmdgO1xuICAvLyBDYXBpdGFsaXplcyB0aGUgbGV0dGVycyBpbiB0aGUgZ2l2ZW4gd29yZFxuICBjb25zdCBjYXBpdGFsaXplZFdlYXRoZXJFeHBsYW5hdGlvbiA9IGNhcGl0YWxpemVFYWNoTGV0dGVySW5Xb3JkKFxuICAgIHdlYXRoZXJEYXRhLmN1cnJlbnQud2VhdGhlclswXS5kZXNjcmlwdGlvbixcbiAgKTtcbiAgd2VhdGhlckV4cGxhbmF0aW9uLnRleHRDb250ZW50ID0gY2FwaXRhbGl6ZWRXZWF0aGVyRXhwbGFuYXRpb247XG59XG5cbmV4cG9ydCB7IGNoYW5nZUNpdHlUZW1wZXJhdHVyZSwgY2hhbmdlQ2l0eU5hbWUsIGNoYW5nZVdlYXRoZXJJY29uIH07XG4iLCJpbXBvcnQgY29udmVydFVuaXhUaW1lIGZyb20gJy4vdXRpbGl0eS9jb252ZXJ0VW5peFRpbWUnO1xuXG5jb25zdCBkMmQgPSByZXF1aXJlKCdkZWdyZWVzLXRvLWRpcmVjdGlvbicpO1xuXG5jb25zdCB0ZW1wQ2hlY2tib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGVtcENoZWNrYm94Jyk7XG5cbmZ1bmN0aW9uIGNyZWF0ZURhaWx5Q2FyZHMoZGFpbHlXZWF0aGVyRGF0YSkge1xuICBjb25zdCBkYWlseVRlbXBlcmF0dXJlRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhaWx5VGVtcGVyYXR1cmVEaXYnKTtcbiAgY29uc3QgZGFpbHlDYXJkcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkYWlseUNhcmRzLmNsYXNzTGlzdC5hZGQoJ2RhaWx5Q2FyZHMnKTtcbiAgZGFpbHlUZW1wZXJhdHVyZURpdi5hcHBlbmRDaGlsZChkYWlseUNhcmRzKTtcblxuICBjb25zdCBkYWlseUZvcmVjYXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRhaWx5Rm9yZWNhc3QuY2xhc3NMaXN0LmFkZCgnZGFpbHlUaXRsZScpO1xuICBkYWlseUNhcmRzLmFwcGVuZENoaWxkKGRhaWx5Rm9yZWNhc3QpO1xuXG4gIGNvbnN0IGRheUFuZEZvcmVjYXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRheUFuZEZvcmVjYXN0LmNsYXNzTGlzdC5hZGQoJ2RheUFuZEZvcmVjYXN0Jyk7XG4gIGRhaWx5Rm9yZWNhc3QuYXBwZW5kQ2hpbGQoZGF5QW5kRm9yZWNhc3QpO1xuXG4gIGNvbnN0IGRheVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGRheVNwYW4udGV4dENvbnRlbnQgPSBjb252ZXJ0VW5peFRpbWUoZGFpbHlXZWF0aGVyRGF0YS5kdCkuY29udmVydFRvRGF5cygpO1xuICBkYXlBbmRGb3JlY2FzdC5hcHBlbmRDaGlsZChkYXlTcGFuKTtcblxuICBjb25zdCBmb3JlY2FzdFNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGZvcmVjYXN0U3Bhbi50ZXh0Q29udGVudCA9IGAke2RhaWx5V2VhdGhlckRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbn1gO1xuICBkYXlBbmRGb3JlY2FzdC5hcHBlbmRDaGlsZChmb3JlY2FzdFNwYW4pO1xuXG4gIGNvbnN0IGljb25BbmRUZW1wZXJhdHVyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBpY29uQW5kVGVtcGVyYXR1cmUuY2xhc3NMaXN0LmFkZCgnaWNvbkFuZFRlbXBlcmF0dXJlJyk7XG4gIGRhaWx5Rm9yZWNhc3QuYXBwZW5kQ2hpbGQoaWNvbkFuZFRlbXBlcmF0dXJlKTtcblxuICBjb25zdCB3ZWF0aGVySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICB3ZWF0aGVySWNvbi5jbGFzc0xpc3QuYWRkKCd3ZWF0aGVySWNvbicpO1xuICAvLyBTZXRzIHRoZSBzb3VyY2Ugb2YgdGhlIGljb24gdG8gdGhlIGljb25zIGZyb20gdGhlIG9wZW53ZWF0aGVyIGFwaSBpY29uc1xuICB3ZWF0aGVySWNvbi5zcmMgPSBgaHR0cHM6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7ZGFpbHlXZWF0aGVyRGF0YS53ZWF0aGVyWzBdLmljb259QDJ4LnBuZ2A7XG4gIGljb25BbmRUZW1wZXJhdHVyZS5hcHBlbmRDaGlsZCh3ZWF0aGVySWNvbik7XG5cbiAgY29uc3QgaGlnaEFuZExvd1RlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaGlnaEFuZExvd1RlbXAuY2xhc3NMaXN0LmFkZCgnaGlnaEFuZExvd1RlbXAnKTtcbiAgaWNvbkFuZFRlbXBlcmF0dXJlLmFwcGVuZENoaWxkKGhpZ2hBbmRMb3dUZW1wKTtcblxuICBjb25zdCBoaWdoVGVtcFNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGhpZ2hUZW1wU3Bhbi50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoZGFpbHlXZWF0aGVyRGF0YS50ZW1wLm1heCl9wrBgO1xuICBoaWdoQW5kTG93VGVtcC5hcHBlbmRDaGlsZChoaWdoVGVtcFNwYW4pO1xuXG4gIGNvbnN0IGxvd1RlbXBTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBsb3dUZW1wU3Bhbi50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoZGFpbHlXZWF0aGVyRGF0YS50ZW1wLm1pbil9wrBgO1xuICBoaWdoQW5kTG93VGVtcC5hcHBlbmRDaGlsZChsb3dUZW1wU3Bhbik7XG5cbiAgY29uc3QgZGFpbHlEZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgZGFpbHlEZXRhaWxzLmNsYXNzTGlzdC5hZGQoJ2RhaWx5RGV0YWlscycpO1xuICBkYWlseUNhcmRzLmFwcGVuZENoaWxkKGRhaWx5RGV0YWlscyk7XG5cbiAgY29uc3QgcHJlY2lwaXRhdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIHByZWNpcGl0YXRpb25EaXYuY2xhc3NMaXN0LmFkZCgncHJlY2lwaXRhdGlvbkRpdicpO1xuICBkYWlseURldGFpbHMuYXBwZW5kQ2hpbGQocHJlY2lwaXRhdGlvbkRpdik7XG5cbiAgY29uc3QgcHJlY2lwaXRhdGlvblRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBwcmVjaXBpdGF0aW9uVGl0bGUudGV4dENvbnRlbnQgPSAnUHJlY2lwaXRhdGlvbjonO1xuICBwcmVjaXBpdGF0aW9uRGl2LmFwcGVuZENoaWxkKHByZWNpcGl0YXRpb25UaXRsZSk7XG5cbiAgY29uc3QgcHJlY2lwaXRhdGlvblBlcmNlbnRhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIC8vIFJvdW5kaW5nIHRoZSBwZXJjaXBpdGF0aW9uIG51bWJlciBhbmQgbXVsdGlwbHlpbmcgYnkgMTAwICB0byBtYWtlIGl0IGEgcGVyY2VudGFnZVxuICBwcmVjaXBpdGF0aW9uUGVyY2VudGFnZS50ZXh0Q29udGVudCA9IGAke01hdGguZmxvb3IoXG4gICAgZGFpbHlXZWF0aGVyRGF0YS5wb3AgKiAxMDAsXG4gICl9JWA7XG4gIHByZWNpcGl0YXRpb25EaXYuYXBwZW5kQ2hpbGQocHJlY2lwaXRhdGlvblBlcmNlbnRhZ2UpO1xuXG4gIGNvbnN0IHdpbmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICB3aW5kRGl2LmNsYXNzTGlzdC5hZGQoJ3dpbmREaXYnKTtcbiAgZGFpbHlEZXRhaWxzLmFwcGVuZENoaWxkKHdpbmREaXYpO1xuXG4gIGNvbnN0IHdpbmRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgd2luZFRpdGxlLnRleHRDb250ZW50ID0gJ1dpbmQ6JztcbiAgd2luZERpdi5hcHBlbmRDaGlsZCh3aW5kVGl0bGUpO1xuXG4gIGNvbnN0IHdpbmRQZXJjZW50YWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBjb25zdCB1bml0VHlwZSA9IHRlbXBDaGVja2JveC5jaGVja2VkID8gJ20vaCcgOiAna20vaCc7XG4gIC8vIFNldHMgdGhlIHdpbmQgc3BlZWQgZGVwZW5kZW50IG9mIHRoZSBtZXRyaWMgc3lzdGVtIHNlbGVjdGVkXG4gIC8vIEFuZCB1c2VzIHRoZSBkZWdyZWVzIHRvIGRpcmVjdGlvbiBsaWJyYXJ5IHRvIGRpc3BsYXkgdGhlIGRpcmVjdGlvbiBvZiB0aGUgd2luZFxuICB3aW5kUGVyY2VudGFnZS50ZXh0Q29udGVudCA9IGAke1xuICAgIGRhaWx5V2VhdGhlckRhdGEud2luZF9zcGVlZFxuICB9ICR7dW5pdFR5cGV9ICR7ZDJkKGRhaWx5V2VhdGhlckRhdGEud2luZF9kZWcpfWA7XG4gIHdpbmREaXYuYXBwZW5kQ2hpbGQod2luZFBlcmNlbnRhZ2UpO1xuXG4gIGNvbnN0IGh1bWlkaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgaHVtaWRpdHlEaXYuY2xhc3NMaXN0LmFkZCgnaHVtaWRpdHlEaXYnKTtcbiAgZGFpbHlEZXRhaWxzLmFwcGVuZENoaWxkKGh1bWlkaXR5RGl2KTtcblxuICBjb25zdCBodW1pZGl0eVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBodW1pZGl0eVRpdGxlLnRleHRDb250ZW50ID0gJ0h1bWlkaXR5Oic7XG4gIGh1bWlkaXR5RGl2LmFwcGVuZENoaWxkKGh1bWlkaXR5VGl0bGUpO1xuXG4gIGNvbnN0IGh1bWlkaXR5UGVyY2VudGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgaHVtaWRpdHlQZXJjZW50YWdlLnRleHRDb250ZW50ID0gYCR7ZGFpbHlXZWF0aGVyRGF0YS5odW1pZGl0eX0lYDtcbiAgaHVtaWRpdHlEaXYuYXBwZW5kQ2hpbGQoaHVtaWRpdHlQZXJjZW50YWdlKTtcblxuICBjb25zdCB1dkluZGV4RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgdXZJbmRleERpdi5jbGFzc0xpc3QuYWRkKCd1dkluZGV4RGl2Jyk7XG4gIGRhaWx5RGV0YWlscy5hcHBlbmRDaGlsZCh1dkluZGV4RGl2KTtcblxuICBjb25zdCB1dkluZGV4VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIHV2SW5kZXhUaXRsZS50ZXh0Q29udGVudCA9ICdVViBJbmRleCc7XG4gIHV2SW5kZXhEaXYuYXBwZW5kQ2hpbGQodXZJbmRleFRpdGxlKTtcblxuICBjb25zdCB1dkluZGV4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICB1dkluZGV4LnRleHRDb250ZW50ID0gYCR7ZGFpbHlXZWF0aGVyRGF0YS51dml9YDtcbiAgdXZJbmRleERpdi5hcHBlbmRDaGlsZCh1dkluZGV4KTtcblxuICBjb25zdCBzdW5yaXNlU3Vuc2V0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgc3VucmlzZVN1bnNldERpdi5jbGFzc0xpc3QuYWRkKCdzdW5yaXNlU3Vuc2V0Jyk7XG4gIGRhaWx5RGV0YWlscy5hcHBlbmRDaGlsZChzdW5yaXNlU3Vuc2V0RGl2KTtcblxuICBjb25zdCBzdW5yaXNlU3Vuc2V0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIHN1bnJpc2VTdW5zZXRUaXRsZS50ZXh0Q29udGVudCA9ICdTdW5yaXNlL1N1bnNldCc7XG4gIHN1bnJpc2VTdW5zZXREaXYuYXBwZW5kQ2hpbGQoc3VucmlzZVN1bnNldFRpdGxlKTtcblxuICBjb25zdCBzdW5yaXNlU3Vuc2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBzdW5yaXNlU3Vuc2V0LnRleHRDb250ZW50ID0gYCR7Y29udmVydFVuaXhUaW1lKFxuICAgIGRhaWx5V2VhdGhlckRhdGEuc3VucmlzZSxcbiAgKS5jb252ZXJ0VG9Ib3VycygpfS8ke2NvbnZlcnRVbml4VGltZShcbiAgICBkYWlseVdlYXRoZXJEYXRhLnN1bnNldCxcbiAgKS5jb252ZXJ0VG9Ib3VycygpfWA7XG4gIHN1bnJpc2VTdW5zZXREaXYuYXBwZW5kQ2hpbGQoc3VucmlzZVN1bnNldCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZURhaWx5Q2FyZHM7XG4iLCJpbXBvcnQgY29udmVydFVuaXhUaW1lIGZyb20gJy4vdXRpbGl0eS9jb252ZXJ0VW5peFRpbWUnO1xuXG5mdW5jdGlvbiBjcmVhdGVIb3VybHlDYXJkcyhob3VybHlXZWF0aGVyRGF0YSkge1xuICBjb25zdCBjdXJyZW50SG91cmx5V2VhdGhlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50SG91cmx5V2VhdGhlcicpO1xuICBjb25zdCBob3VybHlDYXJkcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBob3VybHlDYXJkcy5jbGFzc0xpc3QuYWRkKCdob3VybHlDYXJkcycpO1xuICBjdXJyZW50SG91cmx5V2VhdGhlci5hcHBlbmRDaGlsZChob3VybHlDYXJkcyk7XG5cbiAgY29uc3QgaG91cmx5VGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBob3VybHlUZW1wLmNsYXNzTGlzdC5hZGQoJ2hvdXJseVRlbXAnKTtcbiAgaG91cmx5VGVtcC50ZXh0Q29udGVudCA9IGAke01hdGguZmxvb3IoaG91cmx5V2VhdGhlckRhdGEudGVtcCl9wrBgO1xuICBob3VybHlDYXJkcy5hcHBlbmRDaGlsZChob3VybHlUZW1wKTtcblxuICBjb25zdCBob3VybHlJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGhvdXJseUljb24uY2xhc3NMaXN0LmFkZCgnaG91cmx5SWNvbicpO1xuICAvLyBTZXRzIHRoZSBzb3VyY2Ugb2YgdGhlIGljb24gdG8gdGhlIGljb25zIGZyb20gdGhlIG9wZW53ZWF0aGVyIGFwaSBpY29uc1xuICBob3VybHlJY29uLnNyYyA9IGBodHRwczovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHtob3VybHlXZWF0aGVyRGF0YS53ZWF0aGVyWzBdLmljb259QDJ4LnBuZ2A7XG4gIGhvdXJseUNhcmRzLmFwcGVuZENoaWxkKGhvdXJseUljb24pO1xuXG4gIGNvbnN0IGhvdXJseVBlcmNpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBob3VybHlQZXJjaXAuY2xhc3NMaXN0LmFkZCgnaG91cmx5UGVyY2lwJyk7XG4gIGhvdXJseUNhcmRzLmFwcGVuZENoaWxkKGhvdXJseVBlcmNpcCk7XG5cbiAgY29uc3QgaG91cmx5UGVyY2lwU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgaG91cmx5UGVyY2lwU3Bhbi50ZXh0Q29udGVudCA9ICdQZXJjaXA6JztcbiAgaG91cmx5UGVyY2lwLmFwcGVuZENoaWxkKGhvdXJseVBlcmNpcFNwYW4pO1xuXG4gIGNvbnN0IGhvdXJseVBlcmNpcFNwYW5QZXJjZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAvLyBSb3VuZGluZyB0aGUgcGVyY2lwaXRhdGlvbiBudW1iZXIgYW5kIG11bHRpcGx5aW5nIGJ5IDEwMCAgdG8gbWFrZSBpdCBhIHBlcmNlbnRhZ2VcbiAgaG91cmx5UGVyY2lwU3BhblBlcmNlbnQudGV4dENvbnRlbnQgPSBgJHtNYXRoLmZsb29yKFxuICAgIGhvdXJseVdlYXRoZXJEYXRhLnBvcCAqIDEwMCxcbiAgKX0lYDtcbiAgaG91cmx5UGVyY2lwLmFwcGVuZENoaWxkKGhvdXJseVBlcmNpcFNwYW5QZXJjZW50KTtcblxuICBjb25zdCBob3VybHlIb3VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhvdXJseUhvdXIuY2xhc3NMaXN0LmFkZCgnaG91cmx5SG91cicpO1xuICAvLyBjb252ZXJ0cyB0aGUgdW5peCB0aW1lIHRvIHJlZ3VsYXIgdGltZSBhbmQgcmV0dXJucyBqdXN0IHRoZSBob3Vyc1xuICBob3VybHlIb3VyLnRleHRDb250ZW50ID0gY29udmVydFVuaXhUaW1lKFxuICAgIGhvdXJseVdlYXRoZXJEYXRhLmR0LFxuICApLmNvbnZlcnRUb0hvdXJzKCk7XG4gIGhvdXJseUNhcmRzLmFwcGVuZENoaWxkKGhvdXJseUhvdXIpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVIb3VybHlDYXJkcztcbiIsImNvbnN0IHNlYXJjaEJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2hCYXInKTtcbmNvbnN0IGVycm9yTWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lcnJvck1lc3NhZ2UnKTtcbmNvbnN0IHNlYXJjaEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2hCdXR0b24nKTtcblxuZnVuY3Rpb24gZXJyb3JIYW5kbGVyKCkge1xuICBzZWFyY2hCYXIuc3R5bGUub3V0bGluZSA9ICcycHggc29saWQgcmVkJztcbiAgc2VhcmNoQnV0dG9uLnN0eWxlLm91dGxpbmUgPSAnMnB4IHNvbGlkIHJlZCc7XG4gIGVycm9yTWVzc2FnZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbn1cblxuZnVuY3Rpb24gbm9FcnJvcigpIHtcbiAgc2VhcmNoQmFyLnN0eWxlLm91dGxpbmUgPSAnbm9uZSc7XG4gIHNlYXJjaEJ1dHRvbi5zdHlsZS5vdXRsaW5lID0gJ25vbmUnO1xuICBlcnJvck1lc3NhZ2Uuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn1cblxuZXhwb3J0IHsgZXJyb3JIYW5kbGVyLCBub0Vycm9yIH07XG4iLCJpbXBvcnQgZ2V0V2VhdGhlckZvckxvY2F0aW9uIGZyb20gJy4vYXBpRnVuY3Rpb25zJztcbmltcG9ydCB7XG4gIGNoYW5nZUNpdHlUZW1wZXJhdHVyZSxcbiAgY2hhbmdlQ2l0eU5hbWUsXG4gIGNoYW5nZVdlYXRoZXJJY29uLFxufSBmcm9tICcuL2NoYW5nZU1haW5XZWF0aGVyRnVuY3Rpb25zJztcbmltcG9ydCBkZWxldGVJdGVtc0luRGl2IGZyb20gJy4vdXRpbGl0eS9kZWxldGVJdGVtc0luRGl2JztcbmltcG9ydCBjcmVhdGVIb3VybHlDYXJkcyBmcm9tICcuL2NyZWF0ZUhvdXJseUNhcmRzJztcbmltcG9ydCBjcmVhdGVEYWlseUNhcmRzIGZyb20gJy4vY3JlYXRlRGFpbHlDYXJkcyc7XG5pbXBvcnQgY2hhbmdlQmFja2dyb3VuZFdlYXRoZXIgZnJvbSAnLi93ZWF0aGVyQmFja2dyb3VuZENoYW5nZSc7XG5pbXBvcnQgeyBlcnJvckhhbmRsZXIsIG5vRXJyb3IgfSBmcm9tICcuL2Vycm9ySGFuZGxpbmcnO1xuXG5jb25zdCBzZWFyY2hCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoQmFyJyk7XG5jb25zdCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoQnV0dG9uJyk7XG5jb25zdCBjdXJyZW50SG91cmx5V2VhdGhlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50SG91cmx5V2VhdGhlcicpO1xuY29uc3QgZGFpbHlUZW1wZXJhdHVyZURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYWlseVRlbXBlcmF0dXJlRGl2Jyk7XG5jb25zdCB0ZW1wZXJhdHVyZVN3aXRjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXInKTtcbmNvbnN0IGNpdHlOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NpdHlOYW1lJyk7XG5cbmZ1bmN0aW9uIHJlbmRlcldlYXRoZXIoY2l0eVZhbHVlKSB7XG4gIC8vIEdldHMgdGhlIHdlYXRoZXIgdG8gdGhlIGdpdmVuIGxvY2F0aW9uIGFuZCByZW5kZXJzIHRoZSB3aG9sZSB3ZWJwYWdlIHdpdGggdGhhdCBpbmZvcm1hdGlvbi5cbiAgLy8gQ2FsbHMgYWxsIHRoZSBmdW5jdGlvbnMgdGhyb3VnaG91dCB0aGUgZmlsZXMgdG8gcmVuZGVyIGV2ZXJ5dGhpbmcgYW5kIGhhbmRsZSBlcnJvcnNcbiAgZ2V0V2VhdGhlckZvckxvY2F0aW9uKGNpdHlWYWx1ZSlcbiAgICAudGhlbigoY3VycmVudFdlYXRoZXJEYXRhKSA9PiB7XG4gICAgICBjaGFuZ2VCYWNrZ3JvdW5kV2VhdGhlcihjdXJyZW50V2VhdGhlckRhdGEpO1xuICAgICAgY2hhbmdlQ2l0eVRlbXBlcmF0dXJlKGN1cnJlbnRXZWF0aGVyRGF0YSk7XG4gICAgICBjaGFuZ2VDaXR5TmFtZShjdXJyZW50V2VhdGhlckRhdGEpO1xuICAgICAgY2hhbmdlV2VhdGhlckljb24oY3VycmVudFdlYXRoZXJEYXRhKTtcbiAgICAgIGRlbGV0ZUl0ZW1zSW5EaXYoY3VycmVudEhvdXJseVdlYXRoZXIpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyNDsgaSArPSAxKSB7XG4gICAgICAgIGNyZWF0ZUhvdXJseUNhcmRzKGN1cnJlbnRXZWF0aGVyRGF0YS5ob3VybHlbaV0pO1xuICAgICAgfVxuICAgICAgZGVsZXRlSXRlbXNJbkRpdihkYWlseVRlbXBlcmF0dXJlRGl2KTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgODsgaSArPSAxKSB7XG4gICAgICAgIGNyZWF0ZURhaWx5Q2FyZHMoY3VycmVudFdlYXRoZXJEYXRhLmRhaWx5W2ldKTtcbiAgICAgIH1cbiAgICAgIG5vRXJyb3IoKTtcbiAgICB9KVxuICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICBlcnJvckhhbmRsZXIoKTtcbiAgICB9KTtcbn1cblxuc2VhcmNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgLy8gUmVuZGVycyB0aGUgd2VhdGhlciBmcm9tIHRoZSBsb2NhdGlvbiBpbiB0aGUgc2VhcmNoIGJhclxuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGlmIChzZWFyY2hCYXIudmFsdWUgPT09ICcnKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHJlbmRlcldlYXRoZXIoc2VhcmNoQmFyLnZhbHVlKTtcbiAgc2VhcmNoQmFyLnZhbHVlID0gJyc7XG59KTtcbnRlbXBlcmF0dXJlU3dpdGNoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAvLyBSZW5kZXJzIHRoZSB3ZWF0aGVyIGZyb20gdGhlIHByZXZpb3VzbHkgc2VhcmNoZWQgbG9jYXRpb25cbiAgcmVuZGVyV2VhdGhlcihjaXR5TmFtZS50ZXh0Q29udGVudCk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyV2VhdGhlcjtcbiIsImZ1bmN0aW9uIGNhcGl0YWxpemVFYWNoTGV0dGVySW5Xb3JkKHdvcmRTdHJpbmcpIHtcbiAgcmV0dXJuIHdvcmRTdHJpbmdcbiAgICAuc3BsaXQoJyAnKVxuICAgIC5tYXAoKHdvcmQpID0+IHdvcmQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB3b3JkLnN1YnN0cmluZygxKSlcbiAgICAuam9pbignICcpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjYXBpdGFsaXplRWFjaExldHRlckluV29yZDtcbiIsImZ1bmN0aW9uIGNvbnZlcnRVbml4VGltZSh1bml4VGltZSkge1xuICBjb25zdCBub3JtYWxEYXRlID0gbmV3IERhdGUodW5peFRpbWUgKiAxMDAwKTtcblxuICBmdW5jdGlvbiBjb252ZXJ0VG9Ib3VycygpIHtcbiAgICByZXR1cm4gbm9ybWFsRGF0ZS50b1RpbWVTdHJpbmcoKS5zbGljZSgwLCA1KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbnZlcnRUb0RheXMoKSB7XG4gICAgc3dpdGNoIChub3JtYWxEYXRlLnRvRGF0ZVN0cmluZygpLnNsaWNlKDAsIDMpKSB7XG4gICAgICBjYXNlICdNb24nOlxuICAgICAgICByZXR1cm4gJ01vbmRheSc7XG5cbiAgICAgIGNhc2UgJ1R1ZSc6XG4gICAgICAgIHJldHVybiAnVHVlc2RheSc7XG5cbiAgICAgIGNhc2UgJ1dlZCc6XG4gICAgICAgIHJldHVybiAnV2VkbmVzZGF5JztcblxuICAgICAgY2FzZSAnVGh1JzpcbiAgICAgICAgcmV0dXJuICdUaHVyc2RheSc7XG5cbiAgICAgIGNhc2UgJ0ZyaSc6XG4gICAgICAgIHJldHVybiAnRnJpZGF5JztcblxuICAgICAgY2FzZSAnU2F0JzpcbiAgICAgICAgcmV0dXJuICdTYXR1cmRheSc7XG5cbiAgICAgIGNhc2UgJ1N1bic6XG4gICAgICAgIHJldHVybiAnU3VuZGF5JztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICdVbmtub3duJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4geyBjb252ZXJ0VG9Ib3VycywgY29udmVydFRvRGF5cyB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb252ZXJ0VW5peFRpbWU7XG4iLCJmdW5jdGlvbiBkZWxldGVJdGVtc0luRGl2KGl0ZW1zKSB7XG4gIHdoaWxlIChpdGVtcy5maXJzdENoaWxkKSBpdGVtcy5yZW1vdmVDaGlsZChpdGVtcy5maXJzdENoaWxkKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGVsZXRlSXRlbXNJbkRpdjtcbiIsImltcG9ydCBicm9rZW5jbG91ZHNkIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvYnJva2VuLWNsb3Vkcy5qcGcnO1xuaW1wb3J0IGNsZWFyc2t5ZCBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL2NsZWFyLXNreS1kYXkuanBnJztcbmltcG9ydCBjbGVhcnNreW4gZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9jbGVhci1za3ktbmlnaHQuanBnJztcbmltcG9ydCBmZXdjbG91ZHNkIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvZmV3LWNsb3Vkcy1kYXkuanBnJztcbmltcG9ydCBmZXdjbG91ZHNuIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvZmV3LWNsb3Vkcy1uaWdodC5qcGcnO1xuaW1wb3J0IGZvZ2QgZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9mb2ctZGF5LmpwZyc7XG5pbXBvcnQgZm9nbiBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL2ZvZy1uaWdodC5qcGcnO1xuaW1wb3J0IHJhaW5kIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvcmFpbi1kYXkuanBnJztcbmltcG9ydCByYWlubiBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL3JhaW4tbmlnaHQuanBnJztcbmltcG9ydCBzY2F0dGVyZWRjbG91ZHNkIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvc2NhdHRlcmVkLWNsb3Vkcy1kYXkuanBnJztcbmltcG9ydCBzY2F0dGVyZWRjbG91ZHNuIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvc2NhdHRlcmVkLWNsb3Vkcy1uaWdodC5qcGcnO1xuaW1wb3J0IHNub3dkIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvc25vdy1kYXkuanBnJztcbmltcG9ydCBzbm93biBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL3Nub3ctbmlnaHQuanBnJztcbmltcG9ydCB0aHVuZGVyc3Rvcm1kIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvdGh1bmRlcnN0b3JtLWRheS5qcGcnO1xuaW1wb3J0IHRodW5kZXJzdG9ybW4gZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy90aHVuZGVyc3Rvcm0tbmlnaHQuanBnJztcblxuZnVuY3Rpb24gY2hvb3NlQmFja2dyb3VuZCh3ZWF0aGVyRGF0YSkge1xuICAvLyBHZXRzIHRoZSBiYWNrZ3JvdW5kIGNvcnJlc3BvbmRpbmcgdG8gdGhlIGN1cnJlbnQgd2VhdGhlciB0aHJvdWdoIHRoZSB3ZWF0aGVyIGljb25cbiAgc3dpdGNoICh3ZWF0aGVyRGF0YS5jdXJyZW50LndlYXRoZXJbMF0uaWNvbikge1xuICAgIGNhc2UgJzAxZCc6XG4gICAgICByZXR1cm4gY2xlYXJza3lkO1xuICAgIGNhc2UgJzAxbic6XG4gICAgICByZXR1cm4gY2xlYXJza3luO1xuICAgIGNhc2UgJzAyZCc6XG4gICAgICByZXR1cm4gZmV3Y2xvdWRzZDtcbiAgICBjYXNlICcwMm4nOlxuICAgICAgcmV0dXJuIGZld2Nsb3Vkc247XG4gICAgY2FzZSAnMDNkJzpcbiAgICAgIHJldHVybiBzY2F0dGVyZWRjbG91ZHNkO1xuICAgIGNhc2UgJzAzbic6XG4gICAgICByZXR1cm4gc2NhdHRlcmVkY2xvdWRzbjtcbiAgICBjYXNlICcwNGQnOlxuICAgICAgcmV0dXJuIGJyb2tlbmNsb3Vkc2Q7XG4gICAgY2FzZSAnMDRuJzpcbiAgICAgIHJldHVybiBzY2F0dGVyZWRjbG91ZHNuO1xuICAgIGNhc2UgJzA5ZCcgfHwgJzEwZCc6XG4gICAgICByZXR1cm4gcmFpbmQ7XG4gICAgY2FzZSAnMDluJyB8fCAnMTBuJzpcbiAgICAgIHJldHVybiByYWlubjtcbiAgICBjYXNlICcxMWQnOlxuICAgICAgcmV0dXJuIHRodW5kZXJzdG9ybWQ7XG4gICAgY2FzZSAnMTFuJzpcbiAgICAgIHJldHVybiB0aHVuZGVyc3Rvcm1uO1xuICAgIGNhc2UgJzEzZCc6XG4gICAgICByZXR1cm4gc25vd2Q7XG4gICAgY2FzZSAnMTNuJzpcbiAgICAgIHJldHVybiBzbm93bjtcbiAgICBjYXNlICc1MGQnOlxuICAgICAgcmV0dXJuIGZvZ2Q7XG4gICAgY2FzZSAnNTBuJzpcbiAgICAgIHJldHVybiBmb2duO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gY2xlYXJza3lkO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNoYW5nZUJhY2tncm91bmRXZWF0aGVyKHdlYXRoZXJEYXRhKSB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJEaXYnKTtcbiAgY29uc3QgaWNvbkJhY2tncm91bmQgPSBjaG9vc2VCYWNrZ3JvdW5kKHdlYXRoZXJEYXRhKTtcbiAgaGVhZGVyLnN0eWxlLmJhY2tncm91bmQgPSBgdXJsKCR7aWNvbkJhY2tncm91bmR9KSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcmA7XG4gIGhlYWRlci5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9ICdjb3Zlcic7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNoYW5nZUJhY2tncm91bmRXZWF0aGVyO1xuIiwiaW1wb3J0ICcuL3N0eWxlcy9zdHlsZS5zY3NzJztcbmltcG9ydCByZW5kZXJXZWF0aGVyIGZyb20gJy4vZnVuY3Rpb25zL2V2ZW50TGlzdGVuZXJzJztcblxucmVuZGVyV2VhdGhlcignTG9uZG9uJyk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=