/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Big+Shoulders+Stencil+Text:wght@700;800;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n  --missed-shots-color: #85ffb3;\r\n  --hit-shots-color: #ff8585;\r\n  --boats-color: #444444;\r\n  --bg-color: #dddddd;\r\n}\r\n\r\nbody {\r\n  font-family: sans-serif;\r\n  margin: 0;\r\n  height: 100vh;\r\n  background-color: #eeeeee;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.game-title {\r\n  font-family: \"Big Shoulders Stencil Text\";\r\n  font-size: 6rem;\r\n  margin-top: 10px;\r\n  font-weight: 900;\r\n}\r\n\r\n.boards {\r\n  display: flex;\r\n  gap: 80px;\r\n}\r\n\r\n.board {\r\n  display: grid;\r\n  grid-template-columns: repeat(10, 1fr);\r\n  grid-template-rows: repeat(10, 1fr);\r\n  width: 400px;\r\n  height: 400px;\r\n  border: black 1px solid;\r\n}\r\n\r\n.board > div {\r\n  border: black 1px solid;\r\n}\r\n\r\n.computer-board .water:hover {\r\n  background-color: var(--bg-color);\r\n  cursor: pointer;\r\n}\r\n\r\n.boat {\r\n  background-color: var(--boats-color);\r\n}\r\n\r\n.missed {\r\n  background-color: var(--missed-shots-color);\r\n}\r\n\r\n.hit {\r\n  background-color: var(--hit-shots-color);\r\n}\r\n\r\n.winner-screen {\r\n  position: absolute;\r\n  z-index: 1;\r\n  top: calc(50% - 250px / 2);\r\n  width: 500px;\r\n  height: 250px;\r\n  background-color: var(--bg-color);\r\n  border-radius: 8px;\r\n  box-shadow: 0px 0px 5px 100vh rgba(0, 0, 0, 0.5);\r\n  display: none;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: space-evenly;\r\n}\r\n\r\n.winner-msg {\r\n  font-size: 3rem;\r\n  font-family: sans-serif;\r\n}\r\n\r\n.restart-btn {\r\n  background-color: black;\r\n  color: var(--bg-color);\r\n  width: 250px;\r\n  box-sizing: border-box;\r\n  font-size: 3rem;\r\n  border-radius: inherit;\r\n  padding: 5px;\r\n  cursor: pointer;\r\n}\r\n\r\n.starting-screen {\r\n  position: absolute;\r\n  z-index: 1;\r\n  top: calc(50% - 90vh / 2);\r\n  width: 450px;\r\n  height: 90vh;\r\n  background-color: var(--bg-color);\r\n  border-radius: 8px;\r\n  box-shadow: 0px 0px 5px 100vh rgba(0, 0, 0, 0.5);\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: 32px;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.welcome-msg {\r\n  font-size: 1.5rem;\r\n  margin-bottom: 32px;\r\n}\r\n\r\n.setup-msg {\r\n  font-size: 1.3rem;\r\n  margin-bottom: 32px;\r\n}\r\n\r\n#setup-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin-top: 50px;\r\n  width: 100%;\r\n  font-size: 1.1rem;\r\n  gap: 8px;\r\n}\r\n\r\n#setup-form > div {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\ninput[type=\"submit\"] {\r\n  align-self: center;\r\n  position: absolute;\r\n  bottom: 10%;\r\n  background-color: black;\r\n  color: var(--bg-color);\r\n  width: 70%;\r\n  font-size: 1.3rem;\r\n  border-radius: 8px;\r\n  cursor: pointer;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAEA;EACE,6BAA6B;EAC7B,0BAA0B;EAC1B,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;EACvB,SAAS;EACT,aAAa;EACb,yBAAyB;EACzB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,yCAAyC;EACzC,eAAe;EACf,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,aAAa;EACb,sCAAsC;EACtC,mCAAmC;EACnC,YAAY;EACZ,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,iCAAiC;EACjC,eAAe;AACjB;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,2CAA2C;AAC7C;;AAEA;EACE,wCAAwC;AAC1C;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,0BAA0B;EAC1B,YAAY;EACZ,aAAa;EACb,iCAAiC;EACjC,kBAAkB;EAClB,gDAAgD;EAChD,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,6BAA6B;AAC/B;;AAEA;EACE,eAAe;EACf,uBAAuB;AACzB;;AAEA;EACE,uBAAuB;EACvB,sBAAsB;EACtB,YAAY;EACZ,sBAAsB;EACtB,eAAe;EACf,sBAAsB;EACtB,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,yBAAyB;EACzB,YAAY;EACZ,YAAY;EACZ,iCAAiC;EACjC,kBAAkB;EAClB,gDAAgD;EAChD,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,gBAAgB;EAChB,WAAW;EACX,iBAAiB;EACjB,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,WAAW;EACX,uBAAuB;EACvB,sBAAsB;EACtB,UAAU;EACV,iBAAiB;EACjB,kBAAkB;EAClB,eAAe;AACjB","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Big+Shoulders+Stencil+Text:wght@700;800;900&display=swap\");\r\n\r\n:root {\r\n  --missed-shots-color: #85ffb3;\r\n  --hit-shots-color: #ff8585;\r\n  --boats-color: #444444;\r\n  --bg-color: #dddddd;\r\n}\r\n\r\nbody {\r\n  font-family: sans-serif;\r\n  margin: 0;\r\n  height: 100vh;\r\n  background-color: #eeeeee;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.game-title {\r\n  font-family: \"Big Shoulders Stencil Text\";\r\n  font-size: 6rem;\r\n  margin-top: 10px;\r\n  font-weight: 900;\r\n}\r\n\r\n.boards {\r\n  display: flex;\r\n  gap: 80px;\r\n}\r\n\r\n.board {\r\n  display: grid;\r\n  grid-template-columns: repeat(10, 1fr);\r\n  grid-template-rows: repeat(10, 1fr);\r\n  width: 400px;\r\n  height: 400px;\r\n  border: black 1px solid;\r\n}\r\n\r\n.board > div {\r\n  border: black 1px solid;\r\n}\r\n\r\n.computer-board .water:hover {\r\n  background-color: var(--bg-color);\r\n  cursor: pointer;\r\n}\r\n\r\n.boat {\r\n  background-color: var(--boats-color);\r\n}\r\n\r\n.missed {\r\n  background-color: var(--missed-shots-color);\r\n}\r\n\r\n.hit {\r\n  background-color: var(--hit-shots-color);\r\n}\r\n\r\n.winner-screen {\r\n  position: absolute;\r\n  z-index: 1;\r\n  top: calc(50% - 250px / 2);\r\n  width: 500px;\r\n  height: 250px;\r\n  background-color: var(--bg-color);\r\n  border-radius: 8px;\r\n  box-shadow: 0px 0px 5px 100vh rgba(0, 0, 0, 0.5);\r\n  display: none;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: space-evenly;\r\n}\r\n\r\n.winner-msg {\r\n  font-size: 3rem;\r\n  font-family: sans-serif;\r\n}\r\n\r\n.restart-btn {\r\n  background-color: black;\r\n  color: var(--bg-color);\r\n  width: 250px;\r\n  box-sizing: border-box;\r\n  font-size: 3rem;\r\n  border-radius: inherit;\r\n  padding: 5px;\r\n  cursor: pointer;\r\n}\r\n\r\n.starting-screen {\r\n  position: absolute;\r\n  z-index: 1;\r\n  top: calc(50% - 90vh / 2);\r\n  width: 450px;\r\n  height: 90vh;\r\n  background-color: var(--bg-color);\r\n  border-radius: 8px;\r\n  box-shadow: 0px 0px 5px 100vh rgba(0, 0, 0, 0.5);\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: 32px;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.welcome-msg {\r\n  font-size: 1.5rem;\r\n  margin-bottom: 32px;\r\n}\r\n\r\n.setup-msg {\r\n  font-size: 1.3rem;\r\n  margin-bottom: 32px;\r\n}\r\n\r\n#setup-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin-top: 50px;\r\n  width: 100%;\r\n  font-size: 1.1rem;\r\n  gap: 8px;\r\n}\r\n\r\n#setup-form > div {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\ninput[type=\"submit\"] {\r\n  align-self: center;\r\n  position: absolute;\r\n  bottom: 10%;\r\n  background-color: black;\r\n  color: var(--bg-color);\r\n  width: 70%;\r\n  font-size: 1.3rem;\r\n  border-radius: 8px;\r\n  cursor: pointer;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



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



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closeStartingScreen": () => (/* binding */ closeStartingScreen),
/* harmony export */   "handleClick": () => (/* binding */ handleClick),
/* harmony export */   "hideBoards": () => (/* binding */ hideBoards),
/* harmony export */   "removeWinScreen": () => (/* binding */ removeWinScreen),
/* harmony export */   "renderBoards": () => (/* binding */ renderBoards),
/* harmony export */   "renderStartingScreen": () => (/* binding */ renderStartingScreen),
/* harmony export */   "renderWinScreen": () => (/* binding */ renderWinScreen)
/* harmony export */ });
function renderBoards(player, computer) {
  const boardsDiv = document.querySelector(".boards");
  boardsDiv.innerHTML = "";
  const playerBoardDiv = document.createElement("div");
  const computerBoardDiv = document.createElement("div");
  playerBoardDiv.classList.add("player-board", "board");
  computerBoardDiv.classList.add("computer-board", "board");

  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
      const currSquare = player.gameBoard.board[y][x];
      const squareDiv = document.createElement("div");
      squareDiv.classList.add(`(${x},${y})`);
      // if shot hit
      if (
        player.gameBoard.shotsHit.filter((e) => e[0] === x && e[1] === y)
          .length !== 0
      ) {
        squareDiv.classList.add("hit");
      }
      // if a boat
      else if (currSquare !== "." && currSquare !== "x" && currSquare !== "o") {
        squareDiv.classList.add("boat");
      }
      // if shot missed
      else if (currSquare === "x") {
        squareDiv.classList.add("missed");
      }
      // nothing just water
      else {
        squareDiv.classList.add("water");
      }
      playerBoardDiv.appendChild(squareDiv);
    }
  }

  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
      const currSquare = computer.computerBoard.board[y][x];
      //console.log(currSquare, `(${x},${y})`);
      const squareDiv = document.createElement("div");
      squareDiv.classList.add(`(${x},${y})`);

      if (currSquare === "x") {
        squareDiv.classList.add("missed");
      } else if (
        computer.computerBoard.shotsHit.filter((e) => e[0] === x && e[1] === y)
          .length !== 0
      ) {
        squareDiv.classList.add("hit");
      } else {
        squareDiv.classList.add("water");
      }

      computerBoardDiv.appendChild(squareDiv);
    }
  }

  boardsDiv.append(playerBoardDiv, computerBoardDiv);
}

function handleClick(e, player, enemy) {
  const x = parseInt(e.target.classList[0].charAt(1));
  const y = parseInt(e.target.classList[0].charAt(3));
  player.playerAttack(enemy, x, y);
  enemy.computerAttack(player);
}

function renderWinScreen(player, enemy) {
  const winnerScreen = document.querySelector(".winner-screen");
  const winnerMsg = document.querySelector(".winner-msg");
  if (player.gameBoard.allSunk()) {
    winnerMsg.innerHTML = "Computer Won !";
  } else {
    winnerMsg.innerHTML = "You Won !";
  }
  winnerScreen.style.display = "flex";
}

function removeWinScreen() {
  const winnerScreen = document.querySelector(".winner-screen");
  winnerScreen.style.display = "none";
}

function closeStartingScreen() {
  const startingScreen = document.querySelector(".starting-screen");
  startingScreen.style.display = "none";
}

function renderStartingScreen() {
  const startingScreen = document.querySelector(".starting-screen");
  startingScreen.style.display = "flex";
}

function hideBoards() {
  const boards = document.querySelector(".boards");
  boards.innerHTML = "";
}




/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _players__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./players */ "./src/players.js");



function game() {
  // add an event listner on setup form that will
  // take all the input values and call placeship
  // with them

  const Ryan = (0,_players__WEBPACK_IMPORTED_MODULE_1__.Player)();
  const Asus = (0,_players__WEBPACK_IMPORTED_MODULE_1__.Computer)();

  const setupForm = document.querySelector("#setup-form");
  setupForm.onsubmit = (e) => {
    e.preventDefault();

    const carrierX = parseInt(document.querySelector("#carrier-x").value);
    const carrierY = parseInt(document.querySelector("#carrier-y").value);

    const battleshipX = parseInt(document.querySelector("#battleship-x").value);
    const battleshipY = parseInt(document.querySelector("#battleship-y").value);

    const destroyerX = parseInt(document.querySelector("#destroyer-x").value);
    const destroyerY = parseInt(document.querySelector("#destroyer-y").value);

    const submarineX = parseInt(document.querySelector("#submarine-x").value);
    const submarineY = parseInt(document.querySelector("#submarine-y").value);

    const patrolX = parseInt(document.querySelector("#patrol-x").value);
    const patrolY = parseInt(document.querySelector("#patrol-y").value);

    Ryan.gameBoard.placeShip(5, carrierX, carrierY);
    Ryan.gameBoard.placeShip(4, battleshipX, battleshipY);
    Ryan.gameBoard.placeShip(3, destroyerX, destroyerY);
    Ryan.gameBoard.placeShip(3, submarineX, submarineY);
    Ryan.gameBoard.placeShip(2, patrolX, patrolY);

    console.table(Ryan.gameBoard.board);
    let carrierPlaced = false;
    do {
      carrierPlaced = Asus.computerBoard.placeShip(
        5,
        Math.floor(Math.random() * 5),
        Math.floor(Math.random() * 10)
      );
    } while (!carrierPlaced);

    let battleshipPlaced = false;
    do {
      battleshipPlaced = Asus.computerBoard.placeShip(
        4,
        Math.floor(Math.random() * 6),
        Math.floor(Math.random() * 10)
      );
    } while (!battleshipPlaced);

    let destroyerPlaced = false;
    do {
      destroyerPlaced = Asus.computerBoard.placeShip(
        3,
        Math.floor(Math.random() * 7),
        Math.floor(Math.random() * 10)
      );
    } while (!destroyerPlaced);

    let submarinePlaced = false;
    do {
      submarinePlaced = Asus.computerBoard.placeShip(
        3,
        Math.floor(Math.random() * 7),
        Math.floor(Math.random() * 10)
      );
    } while (!submarinePlaced);

    let patrolPlaced = false;
    do {
      patrolPlaced = Asus.computerBoard.placeShip(
        2,
        Math.floor(Math.random() * 8),
        Math.floor(Math.random() * 10)
      );
    } while (!patrolPlaced);

    (0,_dom__WEBPACK_IMPORTED_MODULE_0__.closeStartingScreen)();
    (0,_dom__WEBPACK_IMPORTED_MODULE_0__.renderBoards)(Ryan, Asus);
  };

  let gameOver = false;

  const boards = document.querySelector(".boards");
  boards.addEventListener("click", (e) => {
    const computerBoard = document.querySelector(".computer-board");
    if (
      !gameOver &&
      e.target.classList[1] === "water" &&
      computerBoard.contains(e.target)
    ) {
      (0,_dom__WEBPACK_IMPORTED_MODULE_0__.handleClick)(e, Ryan, Asus);
      (0,_dom__WEBPACK_IMPORTED_MODULE_0__.renderBoards)(Ryan, Asus);
      if (Ryan.gameBoard.allSunk() || Asus.computerBoard.allSunk()) {
        gameOver = true;
        (0,_dom__WEBPACK_IMPORTED_MODULE_0__.renderWinScreen)(Ryan, Asus);
      }
    }
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (game);


/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/ship.js");


function Gameboard() {
  const board = [];
  const shotsHit = [];
  for (let i = 0; i < 10; i++) {
    board.push(Array(10).fill("."));
  }

  // place ship horizontally
  function placeShip(shipLength, x, y) {
    // check if the boat coordinates are in range
    if (shipLength + x < 10 && x >= 0 && y >= 0 && y < 10) {
      // check if there is space for the new boat (it won't overlap another one)
      for (let i = x; i < x + shipLength; i++) {
        if (typeof this.board[y][i] === "object") {
          return false;
        }
      }

      const newShip = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(shipLength);
      for (let i = x; i < x + shipLength; i++) {
        this.board[y][i] = newShip;
      }
      return true;
    } else {
      return false;
    }
  }

  function receiveAttack(x, y) {
    if (typeof this.board[y][x] === "object") {
      this.board[y][x].hit();
      this.shotsHit.push([x, y]);
    } else {
      this.board[y][x] = "x";
    }
  }

  function allSunk() {
    let allSunk = true;
    for (let y = 0; y < 10; y++) {
      for (let x = 0; x < 10; x++) {
        if (
          board[y][x] !== "." &&
          board[y][x] !== "x" &&
          !board[y][x].isSunk()
        ) {
          allSunk = false;
        }
      }
    }
    return allSunk;
  }

  return { board, shotsHit, placeShip, receiveAttack, allSunk };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);


/***/ }),

/***/ "./src/players.js":
/*!************************!*\
  !*** ./src/players.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Computer": () => (/* binding */ Computer),
/* harmony export */   "Player": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");


function Player() {
  const gameBoard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__["default"])();

  function playerAttack(enemy, x, y) {
    enemy.computerBoard.receiveAttack(x, y);
  }

  return { gameBoard, playerAttack };
}

function Computer() {
  const computerBoard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__["default"])();

  function computerAttack(enemy) {
    let x;
    let y;
    let valid = false;
    do {
      x = Math.floor(Math.random() * 10);
      y = Math.floor(Math.random() * 10);
      // if the target is water
      if (enemy.gameBoard.board[y][x] === ".") {
        valid = true;
      }
      // if target is a boat
      if (typeof enemy.gameBoard.board[y][x] == "object") {
        // more precisely if it's a square not hit of a boat
        if (
          enemy.gameBoard.shotsHit.filter((e) => e[0] === x && e[1] === y)
            .length === 0
        ) {
          valid = true;
        }
      }
    } while (!valid);
    enemy.gameBoard.receiveAttack(x, y);
  }

  return { computerBoard, computerAttack };
}




/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function Ship(length) {
  let hits = 0;

  function hit() {
    this.hits++;
  }

  function isSunk() {
    return this.hits == this.length ? true : false;
  }

  return { length, hits, hit, isSunk };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ "./src/game.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");




(0,_game__WEBPACK_IMPORTED_MODULE_1__["default"])();

const restartBtn = document.querySelector(".restart-btn");
restartBtn.onclick = () => {
  (0,_dom__WEBPACK_IMPORTED_MODULE_0__.removeWinScreen)();
  (0,_dom__WEBPACK_IMPORTED_MODULE_0__.renderStartingScreen)();
  (0,_dom__WEBPACK_IMPORTED_MODULE_0__.hideBoards)();
  (0,_game__WEBPACK_IMPORTED_MODULE_1__["default"])();
};

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dEI7QUFDQSxpREFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLEVBQUUscURBQWU7QUFDakIsRUFBRSwwREFBb0I7QUFDdEIsRUFBRSxnREFBVTtBQUNaLEVBQUUsaURBQUk7QUFDTiIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvcGxheWVycy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CaWcrU2hvdWxkZXJzK1N0ZW5jaWwrVGV4dDp3Z2h0QDcwMDs4MDA7OTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXHJcXG4gIC0tbWlzc2VkLXNob3RzLWNvbG9yOiAjODVmZmIzO1xcclxcbiAgLS1oaXQtc2hvdHMtY29sb3I6ICNmZjg1ODU7XFxyXFxuICAtLWJvYXRzLWNvbG9yOiAjNDQ0NDQ0O1xcclxcbiAgLS1iZy1jb2xvcjogI2RkZGRkZDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZS10aXRsZSB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIkJpZyBTaG91bGRlcnMgU3RlbmNpbCBUZXh0XFxcIjtcXHJcXG4gIGZvbnQtc2l6ZTogNnJlbTtcXHJcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICBmb250LXdlaWdodDogOTAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9hcmRzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDgwcHg7XFxyXFxufVxcclxcblxcclxcbi5ib2FyZCB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXHJcXG4gIHdpZHRoOiA0MDBweDtcXHJcXG4gIGhlaWdodDogNDAwcHg7XFxyXFxuICBib3JkZXI6IGJsYWNrIDFweCBzb2xpZDtcXHJcXG59XFxyXFxuXFxyXFxuLmJvYXJkID4gZGl2IHtcXHJcXG4gIGJvcmRlcjogYmxhY2sgMXB4IHNvbGlkO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tcHV0ZXItYm9hcmQgLndhdGVyOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJvYXQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9hdHMtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWlzc2VkIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1pc3NlZC1zaG90cy1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5oaXQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGl0LXNob3RzLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLndpbm5lci1zY3JlZW4ge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG4gIHRvcDogY2FsYyg1MCUgLSAyNTBweCAvIDIpO1xcclxcbiAgd2lkdGg6IDUwMHB4O1xcclxcbiAgaGVpZ2h0OiAyNTBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDEwMHZoIHJnYmEoMCwgMCwgMCwgMC41KTtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbn1cXHJcXG5cXHJcXG4ud2lubmVyLW1zZyB7XFxyXFxuICBmb250LXNpemU6IDNyZW07XFxyXFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc3RhcnQtYnRuIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXHJcXG4gIHdpZHRoOiAyNTBweDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBmb250LXNpemU6IDNyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhcnRpbmctc2NyZWVuIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxuICB0b3A6IGNhbGMoNTAlIC0gOTB2aCAvIDIpO1xcclxcbiAgd2lkdGg6IDQ1MHB4O1xcclxcbiAgaGVpZ2h0OiA5MHZoO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggMTAwdmggcmdiYSgwLCAwLCAwLCAwLjUpO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMzJweDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbi53ZWxjb21lLW1zZyB7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDMycHg7XFxyXFxufVxcclxcblxcclxcbi5zZXR1cC1tc2cge1xcclxcbiAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4jc2V0dXAtZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbiAgZ2FwOiA4cHg7XFxyXFxufVxcclxcblxcclxcbiNzZXR1cC1mb3JtID4gZGl2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJvdHRvbTogMTAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICBjb2xvcjogdmFyKC0tYmctY29sb3IpO1xcclxcbiAgd2lkdGg6IDcwJTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLDZCQUE2QjtFQUM3QiwwQkFBMEI7RUFDMUIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixTQUFTO0VBQ1QsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHlDQUF5QztFQUN6QyxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLG1DQUFtQztFQUNuQyxZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0Usd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDViwwQkFBMEI7RUFDMUIsWUFBWTtFQUNaLGFBQWE7RUFDYixpQ0FBaUM7RUFDakMsa0JBQWtCO0VBQ2xCLGdEQUFnRDtFQUNoRCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osWUFBWTtFQUNaLGlDQUFpQztFQUNqQyxrQkFBa0I7RUFDbEIsZ0RBQWdEO0VBQ2hELGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsUUFBUTtBQUNWOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CaWcrU2hvdWxkZXJzK1N0ZW5jaWwrVGV4dDp3Z2h0QDcwMDs4MDA7OTAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcblxcclxcbjpyb290IHtcXHJcXG4gIC0tbWlzc2VkLXNob3RzLWNvbG9yOiAjODVmZmIzO1xcclxcbiAgLS1oaXQtc2hvdHMtY29sb3I6ICNmZjg1ODU7XFxyXFxuICAtLWJvYXRzLWNvbG9yOiAjNDQ0NDQ0O1xcclxcbiAgLS1iZy1jb2xvcjogI2RkZGRkZDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZS10aXRsZSB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIkJpZyBTaG91bGRlcnMgU3RlbmNpbCBUZXh0XFxcIjtcXHJcXG4gIGZvbnQtc2l6ZTogNnJlbTtcXHJcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICBmb250LXdlaWdodDogOTAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9hcmRzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDgwcHg7XFxyXFxufVxcclxcblxcclxcbi5ib2FyZCB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXHJcXG4gIHdpZHRoOiA0MDBweDtcXHJcXG4gIGhlaWdodDogNDAwcHg7XFxyXFxuICBib3JkZXI6IGJsYWNrIDFweCBzb2xpZDtcXHJcXG59XFxyXFxuXFxyXFxuLmJvYXJkID4gZGl2IHtcXHJcXG4gIGJvcmRlcjogYmxhY2sgMXB4IHNvbGlkO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tcHV0ZXItYm9hcmQgLndhdGVyOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJvYXQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9hdHMtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWlzc2VkIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1pc3NlZC1zaG90cy1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5oaXQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGl0LXNob3RzLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLndpbm5lci1zY3JlZW4ge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG4gIHRvcDogY2FsYyg1MCUgLSAyNTBweCAvIDIpO1xcclxcbiAgd2lkdGg6IDUwMHB4O1xcclxcbiAgaGVpZ2h0OiAyNTBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDEwMHZoIHJnYmEoMCwgMCwgMCwgMC41KTtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbn1cXHJcXG5cXHJcXG4ud2lubmVyLW1zZyB7XFxyXFxuICBmb250LXNpemU6IDNyZW07XFxyXFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc3RhcnQtYnRuIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXHJcXG4gIHdpZHRoOiAyNTBweDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBmb250LXNpemU6IDNyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhcnRpbmctc2NyZWVuIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxuICB0b3A6IGNhbGMoNTAlIC0gOTB2aCAvIDIpO1xcclxcbiAgd2lkdGg6IDQ1MHB4O1xcclxcbiAgaGVpZ2h0OiA5MHZoO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggMTAwdmggcmdiYSgwLCAwLCAwLCAwLjUpO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMzJweDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbi53ZWxjb21lLW1zZyB7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDMycHg7XFxyXFxufVxcclxcblxcclxcbi5zZXR1cC1tc2cge1xcclxcbiAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4jc2V0dXAtZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbiAgZ2FwOiA4cHg7XFxyXFxufVxcclxcblxcclxcbiNzZXR1cC1mb3JtID4gZGl2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJvdHRvbTogMTAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICBjb2xvcjogdmFyKC0tYmctY29sb3IpO1xcclxcbiAgd2lkdGg6IDcwJTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJmdW5jdGlvbiByZW5kZXJCb2FyZHMocGxheWVyLCBjb21wdXRlcikge1xyXG4gIGNvbnN0IGJvYXJkc0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9hcmRzXCIpO1xyXG4gIGJvYXJkc0Rpdi5pbm5lckhUTUwgPSBcIlwiO1xyXG4gIGNvbnN0IHBsYXllckJvYXJkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBjb21wdXRlckJvYXJkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBwbGF5ZXJCb2FyZERpdi5jbGFzc0xpc3QuYWRkKFwicGxheWVyLWJvYXJkXCIsIFwiYm9hcmRcIik7XHJcbiAgY29tcHV0ZXJCb2FyZERpdi5jbGFzc0xpc3QuYWRkKFwiY29tcHV0ZXItYm9hcmRcIiwgXCJib2FyZFwiKTtcclxuXHJcbiAgZm9yIChsZXQgeSA9IDA7IHkgPCAxMDsgeSsrKSB7XHJcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IDEwOyB4KyspIHtcclxuICAgICAgY29uc3QgY3VyclNxdWFyZSA9IHBsYXllci5nYW1lQm9hcmQuYm9hcmRbeV1beF07XHJcbiAgICAgIGNvbnN0IHNxdWFyZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIHNxdWFyZURpdi5jbGFzc0xpc3QuYWRkKGAoJHt4fSwke3l9KWApO1xyXG4gICAgICAvLyBpZiBzaG90IGhpdFxyXG4gICAgICBpZiAoXHJcbiAgICAgICAgcGxheWVyLmdhbWVCb2FyZC5zaG90c0hpdC5maWx0ZXIoKGUpID0+IGVbMF0gPT09IHggJiYgZVsxXSA9PT0geSlcclxuICAgICAgICAgIC5sZW5ndGggIT09IDBcclxuICAgICAgKSB7XHJcbiAgICAgICAgc3F1YXJlRGl2LmNsYXNzTGlzdC5hZGQoXCJoaXRcIik7XHJcbiAgICAgIH1cclxuICAgICAgLy8gaWYgYSBib2F0XHJcbiAgICAgIGVsc2UgaWYgKGN1cnJTcXVhcmUgIT09IFwiLlwiICYmIGN1cnJTcXVhcmUgIT09IFwieFwiICYmIGN1cnJTcXVhcmUgIT09IFwib1wiKSB7XHJcbiAgICAgICAgc3F1YXJlRGl2LmNsYXNzTGlzdC5hZGQoXCJib2F0XCIpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIGlmIHNob3QgbWlzc2VkXHJcbiAgICAgIGVsc2UgaWYgKGN1cnJTcXVhcmUgPT09IFwieFwiKSB7XHJcbiAgICAgICAgc3F1YXJlRGl2LmNsYXNzTGlzdC5hZGQoXCJtaXNzZWRcIik7XHJcbiAgICAgIH1cclxuICAgICAgLy8gbm90aGluZyBqdXN0IHdhdGVyXHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIHNxdWFyZURpdi5jbGFzc0xpc3QuYWRkKFwid2F0ZXJcIik7XHJcbiAgICAgIH1cclxuICAgICAgcGxheWVyQm9hcmREaXYuYXBwZW5kQ2hpbGQoc3F1YXJlRGl2KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZvciAobGV0IHkgPSAwOyB5IDwgMTA7IHkrKykge1xyXG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCAxMDsgeCsrKSB7XHJcbiAgICAgIGNvbnN0IGN1cnJTcXVhcmUgPSBjb21wdXRlci5jb21wdXRlckJvYXJkLmJvYXJkW3ldW3hdO1xyXG4gICAgICAvL2NvbnNvbGUubG9nKGN1cnJTcXVhcmUsIGAoJHt4fSwke3l9KWApO1xyXG4gICAgICBjb25zdCBzcXVhcmVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBzcXVhcmVEaXYuY2xhc3NMaXN0LmFkZChgKCR7eH0sJHt5fSlgKTtcclxuXHJcbiAgICAgIGlmIChjdXJyU3F1YXJlID09PSBcInhcIikge1xyXG4gICAgICAgIHNxdWFyZURpdi5jbGFzc0xpc3QuYWRkKFwibWlzc2VkXCIpO1xyXG4gICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgIGNvbXB1dGVyLmNvbXB1dGVyQm9hcmQuc2hvdHNIaXQuZmlsdGVyKChlKSA9PiBlWzBdID09PSB4ICYmIGVbMV0gPT09IHkpXHJcbiAgICAgICAgICAubGVuZ3RoICE9PSAwXHJcbiAgICAgICkge1xyXG4gICAgICAgIHNxdWFyZURpdi5jbGFzc0xpc3QuYWRkKFwiaGl0XCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNxdWFyZURpdi5jbGFzc0xpc3QuYWRkKFwid2F0ZXJcIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbXB1dGVyQm9hcmREaXYuYXBwZW5kQ2hpbGQoc3F1YXJlRGl2KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGJvYXJkc0Rpdi5hcHBlbmQocGxheWVyQm9hcmREaXYsIGNvbXB1dGVyQm9hcmREaXYpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVDbGljayhlLCBwbGF5ZXIsIGVuZW15KSB7XHJcbiAgY29uc3QgeCA9IHBhcnNlSW50KGUudGFyZ2V0LmNsYXNzTGlzdFswXS5jaGFyQXQoMSkpO1xyXG4gIGNvbnN0IHkgPSBwYXJzZUludChlLnRhcmdldC5jbGFzc0xpc3RbMF0uY2hhckF0KDMpKTtcclxuICBwbGF5ZXIucGxheWVyQXR0YWNrKGVuZW15LCB4LCB5KTtcclxuICBlbmVteS5jb21wdXRlckF0dGFjayhwbGF5ZXIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJXaW5TY3JlZW4ocGxheWVyLCBlbmVteSkge1xyXG4gIGNvbnN0IHdpbm5lclNjcmVlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2lubmVyLXNjcmVlblwiKTtcclxuICBjb25zdCB3aW5uZXJNc2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndpbm5lci1tc2dcIik7XHJcbiAgaWYgKHBsYXllci5nYW1lQm9hcmQuYWxsU3VuaygpKSB7XHJcbiAgICB3aW5uZXJNc2cuaW5uZXJIVE1MID0gXCJDb21wdXRlciBXb24gIVwiO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB3aW5uZXJNc2cuaW5uZXJIVE1MID0gXCJZb3UgV29uICFcIjtcclxuICB9XHJcbiAgd2lubmVyU2NyZWVuLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlV2luU2NyZWVuKCkge1xyXG4gIGNvbnN0IHdpbm5lclNjcmVlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2lubmVyLXNjcmVlblwiKTtcclxuICB3aW5uZXJTY3JlZW4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbG9zZVN0YXJ0aW5nU2NyZWVuKCkge1xyXG4gIGNvbnN0IHN0YXJ0aW5nU2NyZWVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdGFydGluZy1zY3JlZW5cIik7XHJcbiAgc3RhcnRpbmdTY3JlZW4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJTdGFydGluZ1NjcmVlbigpIHtcclxuICBjb25zdCBzdGFydGluZ1NjcmVlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3RhcnRpbmctc2NyZWVuXCIpO1xyXG4gIHN0YXJ0aW5nU2NyZWVuLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxufVxyXG5cclxuZnVuY3Rpb24gaGlkZUJvYXJkcygpIHtcclxuICBjb25zdCBib2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvYXJkc1wiKTtcclxuICBib2FyZHMuaW5uZXJIVE1MID0gXCJcIjtcclxufVxyXG5cclxuZXhwb3J0IHtcclxuICByZW5kZXJCb2FyZHMsXHJcbiAgaGFuZGxlQ2xpY2ssXHJcbiAgcmVuZGVyV2luU2NyZWVuLFxyXG4gIHJlbW92ZVdpblNjcmVlbixcclxuICByZW5kZXJTdGFydGluZ1NjcmVlbixcclxuICBjbG9zZVN0YXJ0aW5nU2NyZWVuLFxyXG4gIGhpZGVCb2FyZHMsXHJcbn07XHJcbiIsImltcG9ydCB7XHJcbiAgY2xvc2VTdGFydGluZ1NjcmVlbixcclxuICBoYW5kbGVDbGljayxcclxuICByZW5kZXJCb2FyZHMsXHJcbiAgcmVuZGVyV2luU2NyZWVuLFxyXG59IGZyb20gXCIuL2RvbVwiO1xyXG5pbXBvcnQgeyBDb21wdXRlciwgUGxheWVyIH0gZnJvbSBcIi4vcGxheWVyc1wiO1xyXG5cclxuZnVuY3Rpb24gZ2FtZSgpIHtcclxuICAvLyBhZGQgYW4gZXZlbnQgbGlzdG5lciBvbiBzZXR1cCBmb3JtIHRoYXQgd2lsbFxyXG4gIC8vIHRha2UgYWxsIHRoZSBpbnB1dCB2YWx1ZXMgYW5kIGNhbGwgcGxhY2VzaGlwXHJcbiAgLy8gd2l0aCB0aGVtXHJcblxyXG4gIGNvbnN0IFJ5YW4gPSBQbGF5ZXIoKTtcclxuICBjb25zdCBBc3VzID0gQ29tcHV0ZXIoKTtcclxuXHJcbiAgY29uc3Qgc2V0dXBGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZXR1cC1mb3JtXCIpO1xyXG4gIHNldHVwRm9ybS5vbnN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgY29uc3QgY2FycmllclggPSBwYXJzZUludChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NhcnJpZXIteFwiKS52YWx1ZSk7XHJcbiAgICBjb25zdCBjYXJyaWVyWSA9IHBhcnNlSW50KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2Fycmllci15XCIpLnZhbHVlKTtcclxuXHJcbiAgICBjb25zdCBiYXR0bGVzaGlwWCA9IHBhcnNlSW50KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmF0dGxlc2hpcC14XCIpLnZhbHVlKTtcclxuICAgIGNvbnN0IGJhdHRsZXNoaXBZID0gcGFyc2VJbnQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNiYXR0bGVzaGlwLXlcIikudmFsdWUpO1xyXG5cclxuICAgIGNvbnN0IGRlc3Ryb3llclggPSBwYXJzZUludChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Rlc3Ryb3llci14XCIpLnZhbHVlKTtcclxuICAgIGNvbnN0IGRlc3Ryb3llclkgPSBwYXJzZUludChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Rlc3Ryb3llci15XCIpLnZhbHVlKTtcclxuXHJcbiAgICBjb25zdCBzdWJtYXJpbmVYID0gcGFyc2VJbnQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdWJtYXJpbmUteFwiKS52YWx1ZSk7XHJcbiAgICBjb25zdCBzdWJtYXJpbmVZID0gcGFyc2VJbnQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdWJtYXJpbmUteVwiKS52YWx1ZSk7XHJcblxyXG4gICAgY29uc3QgcGF0cm9sWCA9IHBhcnNlSW50KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGF0cm9sLXhcIikudmFsdWUpO1xyXG4gICAgY29uc3QgcGF0cm9sWSA9IHBhcnNlSW50KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGF0cm9sLXlcIikudmFsdWUpO1xyXG5cclxuICAgIFJ5YW4uZ2FtZUJvYXJkLnBsYWNlU2hpcCg1LCBjYXJyaWVyWCwgY2FycmllclkpO1xyXG4gICAgUnlhbi5nYW1lQm9hcmQucGxhY2VTaGlwKDQsIGJhdHRsZXNoaXBYLCBiYXR0bGVzaGlwWSk7XHJcbiAgICBSeWFuLmdhbWVCb2FyZC5wbGFjZVNoaXAoMywgZGVzdHJveWVyWCwgZGVzdHJveWVyWSk7XHJcbiAgICBSeWFuLmdhbWVCb2FyZC5wbGFjZVNoaXAoMywgc3VibWFyaW5lWCwgc3VibWFyaW5lWSk7XHJcbiAgICBSeWFuLmdhbWVCb2FyZC5wbGFjZVNoaXAoMiwgcGF0cm9sWCwgcGF0cm9sWSk7XHJcblxyXG4gICAgY29uc29sZS50YWJsZShSeWFuLmdhbWVCb2FyZC5ib2FyZCk7XHJcbiAgICBsZXQgY2FycmllclBsYWNlZCA9IGZhbHNlO1xyXG4gICAgZG8ge1xyXG4gICAgICBjYXJyaWVyUGxhY2VkID0gQXN1cy5jb21wdXRlckJvYXJkLnBsYWNlU2hpcChcclxuICAgICAgICA1LFxyXG4gICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDUpLFxyXG4gICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKVxyXG4gICAgICApO1xyXG4gICAgfSB3aGlsZSAoIWNhcnJpZXJQbGFjZWQpO1xyXG5cclxuICAgIGxldCBiYXR0bGVzaGlwUGxhY2VkID0gZmFsc2U7XHJcbiAgICBkbyB7XHJcbiAgICAgIGJhdHRsZXNoaXBQbGFjZWQgPSBBc3VzLmNvbXB1dGVyQm9hcmQucGxhY2VTaGlwKFxyXG4gICAgICAgIDQsXHJcbiAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNiksXHJcbiAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXHJcbiAgICAgICk7XHJcbiAgICB9IHdoaWxlICghYmF0dGxlc2hpcFBsYWNlZCk7XHJcblxyXG4gICAgbGV0IGRlc3Ryb3llclBsYWNlZCA9IGZhbHNlO1xyXG4gICAgZG8ge1xyXG4gICAgICBkZXN0cm95ZXJQbGFjZWQgPSBBc3VzLmNvbXB1dGVyQm9hcmQucGxhY2VTaGlwKFxyXG4gICAgICAgIDMsXHJcbiAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNyksXHJcbiAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXHJcbiAgICAgICk7XHJcbiAgICB9IHdoaWxlICghZGVzdHJveWVyUGxhY2VkKTtcclxuXHJcbiAgICBsZXQgc3VibWFyaW5lUGxhY2VkID0gZmFsc2U7XHJcbiAgICBkbyB7XHJcbiAgICAgIHN1Ym1hcmluZVBsYWNlZCA9IEFzdXMuY29tcHV0ZXJCb2FyZC5wbGFjZVNoaXAoXHJcbiAgICAgICAgMyxcclxuICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA3KSxcclxuICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMClcclxuICAgICAgKTtcclxuICAgIH0gd2hpbGUgKCFzdWJtYXJpbmVQbGFjZWQpO1xyXG5cclxuICAgIGxldCBwYXRyb2xQbGFjZWQgPSBmYWxzZTtcclxuICAgIGRvIHtcclxuICAgICAgcGF0cm9sUGxhY2VkID0gQXN1cy5jb21wdXRlckJvYXJkLnBsYWNlU2hpcChcclxuICAgICAgICAyLFxyXG4gICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDgpLFxyXG4gICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKVxyXG4gICAgICApO1xyXG4gICAgfSB3aGlsZSAoIXBhdHJvbFBsYWNlZCk7XHJcblxyXG4gICAgY2xvc2VTdGFydGluZ1NjcmVlbigpO1xyXG4gICAgcmVuZGVyQm9hcmRzKFJ5YW4sIEFzdXMpO1xyXG4gIH07XHJcblxyXG4gIGxldCBnYW1lT3ZlciA9IGZhbHNlO1xyXG5cclxuICBjb25zdCBib2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvYXJkc1wiKTtcclxuICBib2FyZHMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICBjb25zdCBjb21wdXRlckJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb21wdXRlci1ib2FyZFwiKTtcclxuICAgIGlmIChcclxuICAgICAgIWdhbWVPdmVyICYmXHJcbiAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdFsxXSA9PT0gXCJ3YXRlclwiICYmXHJcbiAgICAgIGNvbXB1dGVyQm9hcmQuY29udGFpbnMoZS50YXJnZXQpXHJcbiAgICApIHtcclxuICAgICAgaGFuZGxlQ2xpY2soZSwgUnlhbiwgQXN1cyk7XHJcbiAgICAgIHJlbmRlckJvYXJkcyhSeWFuLCBBc3VzKTtcclxuICAgICAgaWYgKFJ5YW4uZ2FtZUJvYXJkLmFsbFN1bmsoKSB8fCBBc3VzLmNvbXB1dGVyQm9hcmQuYWxsU3VuaygpKSB7XHJcbiAgICAgICAgZ2FtZU92ZXIgPSB0cnVlO1xyXG4gICAgICAgIHJlbmRlcldpblNjcmVlbihSeWFuLCBBc3VzKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnYW1lO1xyXG4iLCJpbXBvcnQgU2hpcCBmcm9tIFwiLi9zaGlwXCI7XHJcblxyXG5mdW5jdGlvbiBHYW1lYm9hcmQoKSB7XHJcbiAgY29uc3QgYm9hcmQgPSBbXTtcclxuICBjb25zdCBzaG90c0hpdCA9IFtdO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xyXG4gICAgYm9hcmQucHVzaChBcnJheSgxMCkuZmlsbChcIi5cIikpO1xyXG4gIH1cclxuXHJcbiAgLy8gcGxhY2Ugc2hpcCBob3Jpem9udGFsbHlcclxuICBmdW5jdGlvbiBwbGFjZVNoaXAoc2hpcExlbmd0aCwgeCwgeSkge1xyXG4gICAgLy8gY2hlY2sgaWYgdGhlIGJvYXQgY29vcmRpbmF0ZXMgYXJlIGluIHJhbmdlXHJcbiAgICBpZiAoc2hpcExlbmd0aCArIHggPCAxMCAmJiB4ID49IDAgJiYgeSA+PSAwICYmIHkgPCAxMCkge1xyXG4gICAgICAvLyBjaGVjayBpZiB0aGVyZSBpcyBzcGFjZSBmb3IgdGhlIG5ldyBib2F0IChpdCB3b24ndCBvdmVybGFwIGFub3RoZXIgb25lKVxyXG4gICAgICBmb3IgKGxldCBpID0geDsgaSA8IHggKyBzaGlwTGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAodHlwZW9mIHRoaXMuYm9hcmRbeV1baV0gPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IG5ld1NoaXAgPSBTaGlwKHNoaXBMZW5ndGgpO1xyXG4gICAgICBmb3IgKGxldCBpID0geDsgaSA8IHggKyBzaGlwTGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB0aGlzLmJvYXJkW3ldW2ldID0gbmV3U2hpcDtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlY2VpdmVBdHRhY2soeCwgeSkge1xyXG4gICAgaWYgKHR5cGVvZiB0aGlzLmJvYXJkW3ldW3hdID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgIHRoaXMuYm9hcmRbeV1beF0uaGl0KCk7XHJcbiAgICAgIHRoaXMuc2hvdHNIaXQucHVzaChbeCwgeV0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5ib2FyZFt5XVt4XSA9IFwieFwiO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gYWxsU3VuaygpIHtcclxuICAgIGxldCBhbGxTdW5rID0gdHJ1ZTtcclxuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgMTA7IHkrKykge1xyXG4gICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IDEwOyB4KyspIHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICBib2FyZFt5XVt4XSAhPT0gXCIuXCIgJiZcclxuICAgICAgICAgIGJvYXJkW3ldW3hdICE9PSBcInhcIiAmJlxyXG4gICAgICAgICAgIWJvYXJkW3ldW3hdLmlzU3VuaygpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBhbGxTdW5rID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYWxsU3VuaztcclxuICB9XHJcblxyXG4gIHJldHVybiB7IGJvYXJkLCBzaG90c0hpdCwgcGxhY2VTaGlwLCByZWNlaXZlQXR0YWNrLCBhbGxTdW5rIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbWVib2FyZDtcclxuIiwiaW1wb3J0IEdhbWVib2FyZCBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcclxuXHJcbmZ1bmN0aW9uIFBsYXllcigpIHtcclxuICBjb25zdCBnYW1lQm9hcmQgPSBHYW1lYm9hcmQoKTtcclxuXHJcbiAgZnVuY3Rpb24gcGxheWVyQXR0YWNrKGVuZW15LCB4LCB5KSB7XHJcbiAgICBlbmVteS5jb21wdXRlckJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4geyBnYW1lQm9hcmQsIHBsYXllckF0dGFjayB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBDb21wdXRlcigpIHtcclxuICBjb25zdCBjb21wdXRlckJvYXJkID0gR2FtZWJvYXJkKCk7XHJcblxyXG4gIGZ1bmN0aW9uIGNvbXB1dGVyQXR0YWNrKGVuZW15KSB7XHJcbiAgICBsZXQgeDtcclxuICAgIGxldCB5O1xyXG4gICAgbGV0IHZhbGlkID0gZmFsc2U7XHJcbiAgICBkbyB7XHJcbiAgICAgIHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XHJcbiAgICAgIHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XHJcbiAgICAgIC8vIGlmIHRoZSB0YXJnZXQgaXMgd2F0ZXJcclxuICAgICAgaWYgKGVuZW15LmdhbWVCb2FyZC5ib2FyZFt5XVt4XSA9PT0gXCIuXCIpIHtcclxuICAgICAgICB2YWxpZCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgLy8gaWYgdGFyZ2V0IGlzIGEgYm9hdFxyXG4gICAgICBpZiAodHlwZW9mIGVuZW15LmdhbWVCb2FyZC5ib2FyZFt5XVt4XSA9PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgLy8gbW9yZSBwcmVjaXNlbHkgaWYgaXQncyBhIHNxdWFyZSBub3QgaGl0IG9mIGEgYm9hdFxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIGVuZW15LmdhbWVCb2FyZC5zaG90c0hpdC5maWx0ZXIoKGUpID0+IGVbMF0gPT09IHggJiYgZVsxXSA9PT0geSlcclxuICAgICAgICAgICAgLmxlbmd0aCA9PT0gMFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgdmFsaWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSB3aGlsZSAoIXZhbGlkKTtcclxuICAgIGVuZW15LmdhbWVCb2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHsgY29tcHV0ZXJCb2FyZCwgY29tcHV0ZXJBdHRhY2sgfTtcclxufVxyXG5cclxuZXhwb3J0IHsgUGxheWVyLCBDb21wdXRlciB9O1xyXG4iLCJmdW5jdGlvbiBTaGlwKGxlbmd0aCkge1xyXG4gIGxldCBoaXRzID0gMDtcclxuXHJcbiAgZnVuY3Rpb24gaGl0KCkge1xyXG4gICAgdGhpcy5oaXRzKys7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBpc1N1bmsoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5oaXRzID09IHRoaXMubGVuZ3RoID8gdHJ1ZSA6IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHsgbGVuZ3RoLCBoaXRzLCBoaXQsIGlzU3VuayB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaGlwO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBoaWRlQm9hcmRzLCByZW1vdmVXaW5TY3JlZW4sIHJlbmRlclN0YXJ0aW5nU2NyZWVuIH0gZnJvbSBcIi4vZG9tXCI7XHJcbmltcG9ydCBnYW1lIGZyb20gXCIuL2dhbWVcIjtcclxuaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XHJcblxyXG5nYW1lKCk7XHJcblxyXG5jb25zdCByZXN0YXJ0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXN0YXJ0LWJ0blwiKTtcclxucmVzdGFydEJ0bi5vbmNsaWNrID0gKCkgPT4ge1xyXG4gIHJlbW92ZVdpblNjcmVlbigpO1xyXG4gIHJlbmRlclN0YXJ0aW5nU2NyZWVuKCk7XHJcbiAgaGlkZUJvYXJkcygpO1xyXG4gIGdhbWUoKTtcclxufTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9