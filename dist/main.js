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
  const Ryan = (0,_players__WEBPACK_IMPORTED_MODULE_1__.Player)();
  const Asus = (0,_players__WEBPACK_IMPORTED_MODULE_1__.Computer)();

  const setupForm = document.querySelector("#setup-form");
  setupForm.onsubmit = (e) => {
    e.preventDefault();
    Ryan.initializeBoard();
    Asus.initializeBoard();
    (0,_dom__WEBPACK_IMPORTED_MODULE_0__.closeStartingScreen)();
    (0,_dom__WEBPACK_IMPORTED_MODULE_0__.renderBoards)(Ryan, Asus);
    setupForm.reset();
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

  function initializeBoard(e) {
    const carrierXInput = document.querySelector("#carrier-x");
    const carrierYInput = document.querySelector("#carrier-y");

    const battleshipXInput = document.querySelector("#battleship-x");
    const battleshipYInput = document.querySelector("#battleship-y");

    const destroyerXInput = document.querySelector("#destroyer-x");
    const destroyerYInput = document.querySelector("#destroyer-y");

    const submarineXInput = document.querySelector("#submarine-x");
    const submarineYInput = document.querySelector("#submarine-y");

    const patrolXInput = document.querySelector("#patrol-x");
    const patrolYInput = document.querySelector("#patrol-y");

    const carrierX = parseInt(carrierXInput.value);
    const carrierY = parseInt(carrierYInput.value);

    const battleshipX = parseInt(battleshipXInput.value);
    const battleshipY = parseInt(battleshipYInput.value);

    const destroyerX = parseInt(destroyerXInput.value);
    const destroyerY = parseInt(destroyerYInput.value);

    const submarineX = parseInt(submarineXInput.value);
    const submarineY = parseInt(submarineYInput.value);

    const patrolX = parseInt(patrolXInput.value);
    const patrolY = parseInt(patrolYInput.value);

    this.gameBoard.placeShip(5, carrierX, carrierY);
    this.gameBoard.placeShip(4, battleshipX, battleshipY);
    this.gameBoard.placeShip(3, destroyerX, destroyerY);
    this.gameBoard.placeShip(3, submarineX, submarineY);
    this.gameBoard.placeShip(2, patrolX, patrolY);
  }

  return { gameBoard, playerAttack, initializeBoard };
}

function Computer() {
  const computerBoard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__["default"])();
  let prevHit = false;
  let gottaCheckOtherSide = false;
  let prevX;
  let prevY;

  function computerAttack(enemy) {
    let x;
    let y;
    let valid = false;

    breakme: if (prevHit) {
      if (
        enemy.gameBoard.board[prevY][prevX - 1] === "." ||
        typeof enemy.gameBoard.board[prevY][prevX - 1] == "object"
      ) {
        x = prevX - 1;
        y = prevY;
        valid = true;
        console.log(x, y);
      } else if (
        enemy.gameBoard.board[prevY][prevX + 1] === "." ||
        typeof enemy.gameBoard.board[prevY][prevX + 1] == "object"
      ) {
        x = prevX + 1;
        y = prevY;
        valid = true;
      }
      if (typeof enemy.gameBoard.board[y][x] == "object") {
        if (
          enemy.gameBoard.shotsHit.filter((e) => e[0] === x && e[1] === y)
            .length !== 0
        ) {
          valid = false;
          break breakme;
        }
        prevHit = true;
        prevX = x;
        prevY = y;
      } else {
        prevHit = false;
        gottaCheckOtherSide = true;
      }
    }

    while (!valid) {
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
          prevHit = true;
          prevX = x;
          prevY = y;
        }
      }
    }
    enemy.gameBoard.receiveAttack(x, y);
  }

  function initializeBoard() {
    let carrierPlaced = false;
    do {
      carrierPlaced = this.computerBoard.placeShip(
        5,
        Math.floor(Math.random() * 5),
        Math.floor(Math.random() * 10)
      );
    } while (!carrierPlaced);

    let battleshipPlaced = false;
    do {
      battleshipPlaced = this.computerBoard.placeShip(
        4,
        Math.floor(Math.random() * 6),
        Math.floor(Math.random() * 10)
      );
    } while (!battleshipPlaced);

    let destroyerPlaced = false;
    do {
      destroyerPlaced = this.computerBoard.placeShip(
        3,
        Math.floor(Math.random() * 7),
        Math.floor(Math.random() * 10)
      );
    } while (!destroyerPlaced);

    let submarinePlaced = false;
    do {
      submarinePlaced = this.computerBoard.placeShip(
        3,
        Math.floor(Math.random() * 7),
        Math.floor(Math.random() * 10)
      );
    } while (!submarinePlaced);

    let patrolPlaced = false;
    do {
      patrolPlaced = this.computerBoard.placeShip(
        2,
        Math.floor(Math.random() * 8),
        Math.floor(Math.random() * 10)
      );
    } while (!patrolPlaced);
  }

  return { computerBoard, computerAttack, initializeBoard };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLG1JQUFtSSxJQUFJLGtCQUFrQjtBQUN6SjtBQUNBLGlEQUFpRCxvQ0FBb0MsaUNBQWlDLDZCQUE2QiwwQkFBMEIsS0FBSyxjQUFjLDhCQUE4QixnQkFBZ0Isb0JBQW9CLGdDQUFnQyxvQkFBb0IsNkJBQTZCLDBCQUEwQixLQUFLLHFCQUFxQixrREFBa0Qsc0JBQXNCLHVCQUF1Qix1QkFBdUIsS0FBSyxpQkFBaUIsb0JBQW9CLGdCQUFnQixLQUFLLGdCQUFnQixvQkFBb0IsNkNBQTZDLDBDQUEwQyxtQkFBbUIsb0JBQW9CLDhCQUE4QixLQUFLLHNCQUFzQiw4QkFBOEIsS0FBSyxzQ0FBc0Msd0NBQXdDLHNCQUFzQixLQUFLLGVBQWUsMkNBQTJDLEtBQUssaUJBQWlCLGtEQUFrRCxLQUFLLGNBQWMsK0NBQStDLEtBQUssd0JBQXdCLHlCQUF5QixpQkFBaUIsaUNBQWlDLG1CQUFtQixvQkFBb0Isd0NBQXdDLHlCQUF5Qix1REFBdUQsb0JBQW9CLDZCQUE2QiwwQkFBMEIsb0NBQW9DLEtBQUsscUJBQXFCLHNCQUFzQiw4QkFBOEIsS0FBSyxzQkFBc0IsOEJBQThCLDZCQUE2QixtQkFBbUIsNkJBQTZCLHNCQUFzQiw2QkFBNkIsbUJBQW1CLHNCQUFzQixLQUFLLDBCQUEwQix5QkFBeUIsaUJBQWlCLGdDQUFnQyxtQkFBbUIsbUJBQW1CLHdDQUF3Qyx5QkFBeUIsdURBQXVELG9CQUFvQiw2QkFBNkIsMEJBQTBCLG9CQUFvQiw2QkFBNkIsS0FBSyxzQkFBc0Isd0JBQXdCLDBCQUEwQixLQUFLLG9CQUFvQix3QkFBd0IsMEJBQTBCLEtBQUsscUJBQXFCLG9CQUFvQiw2QkFBNkIsdUJBQXVCLGtCQUFrQix3QkFBd0IsZUFBZSxLQUFLLDJCQUEyQixvQkFBb0IscUNBQXFDLEtBQUssZ0NBQWdDLHlCQUF5Qix5QkFBeUIsa0JBQWtCLDhCQUE4Qiw2QkFBNkIsaUJBQWlCLHdCQUF3Qix5QkFBeUIsc0JBQXNCLEtBQUssV0FBVyxpRkFBaUYsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxxSEFBcUgsSUFBSSxvQkFBb0IsZUFBZSxvQ0FBb0MsaUNBQWlDLDZCQUE2QiwwQkFBMEIsS0FBSyxjQUFjLDhCQUE4QixnQkFBZ0Isb0JBQW9CLGdDQUFnQyxvQkFBb0IsNkJBQTZCLDBCQUEwQixLQUFLLHFCQUFxQixrREFBa0Qsc0JBQXNCLHVCQUF1Qix1QkFBdUIsS0FBSyxpQkFBaUIsb0JBQW9CLGdCQUFnQixLQUFLLGdCQUFnQixvQkFBb0IsNkNBQTZDLDBDQUEwQyxtQkFBbUIsb0JBQW9CLDhCQUE4QixLQUFLLHNCQUFzQiw4QkFBOEIsS0FBSyxzQ0FBc0Msd0NBQXdDLHNCQUFzQixLQUFLLGVBQWUsMkNBQTJDLEtBQUssaUJBQWlCLGtEQUFrRCxLQUFLLGNBQWMsK0NBQStDLEtBQUssd0JBQXdCLHlCQUF5QixpQkFBaUIsaUNBQWlDLG1CQUFtQixvQkFBb0Isd0NBQXdDLHlCQUF5Qix1REFBdUQsb0JBQW9CLDZCQUE2QiwwQkFBMEIsb0NBQW9DLEtBQUsscUJBQXFCLHNCQUFzQiw4QkFBOEIsS0FBSyxzQkFBc0IsOEJBQThCLDZCQUE2QixtQkFBbUIsNkJBQTZCLHNCQUFzQiw2QkFBNkIsbUJBQW1CLHNCQUFzQixLQUFLLDBCQUEwQix5QkFBeUIsaUJBQWlCLGdDQUFnQyxtQkFBbUIsbUJBQW1CLHdDQUF3Qyx5QkFBeUIsdURBQXVELG9CQUFvQiw2QkFBNkIsMEJBQTBCLG9CQUFvQiw2QkFBNkIsS0FBSyxzQkFBc0Isd0JBQXdCLDBCQUEwQixLQUFLLG9CQUFvQix3QkFBd0IsMEJBQTBCLEtBQUsscUJBQXFCLG9CQUFvQiw2QkFBNkIsdUJBQXVCLGtCQUFrQix3QkFBd0IsZUFBZSxLQUFLLDJCQUEyQixvQkFBb0IscUNBQXFDLEtBQUssZ0NBQWdDLHlCQUF5Qix5QkFBeUIsa0JBQWtCLDhCQUE4Qiw2QkFBNkIsaUJBQWlCLHdCQUF3Qix5QkFBeUIsc0JBQXNCLEtBQUssdUJBQXVCO0FBQ3A5TjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1IxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBb0c7QUFDcEc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyx1RkFBTzs7OztBQUk4QztBQUN0RSxPQUFPLGlFQUFlLHVGQUFPLElBQUksOEZBQWMsR0FBRyw4RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixRQUFRO0FBQzFCLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQSxrQ0FBa0MsRUFBRSxHQUFHLEVBQUU7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixRQUFRO0FBQzFCLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0Esb0NBQW9DLEVBQUUsR0FBRyxFQUFFO0FBQzNDO0FBQ0Esa0NBQWtDLEVBQUUsR0FBRyxFQUFFO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVNFOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3RHYTtBQUM4QjtBQUM3QztBQUNBO0FBQ0EsZUFBZSxnREFBTTtBQUNyQixlQUFlLGtEQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUkseURBQW1CO0FBQ3ZCLElBQUksa0RBQVk7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLGlEQUFXO0FBQ2pCLE1BQU0sa0RBQVk7QUFDbEI7QUFDQTtBQUNBLFFBQVEscURBQWU7QUFDdkI7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsaUVBQWUsSUFBSSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDMUNNO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLFFBQVE7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixvQkFBb0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpREFBSTtBQUMxQixzQkFBc0Isb0JBQW9CO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCLHNCQUFzQixRQUFRO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsaUVBQWUsU0FBUyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQzFEVztBQUNwQztBQUNBO0FBQ0Esb0JBQW9CLHNEQUFTO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixzREFBUztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDNEI7Ozs7Ozs7Ozs7Ozs7OztBQzFLNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsaUVBQWUsSUFBSSxFQUFDOzs7Ozs7O1VDZHBCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7OztBQ0EwRTtBQUNoRDtBQUNKO0FBQ3RCO0FBQ0EsaURBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxFQUFFLHFEQUFlO0FBQ2pCLEVBQUUsMERBQW9CO0FBQ3RCLEVBQUUsZ0RBQVU7QUFDWixFQUFFLGlEQUFJO0FBQ04iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3BsYXllcnMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QmlnK1Nob3VsZGVycytTdGVuY2lsK1RleHQ6d2dodEA3MDA7ODAwOzkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxyXFxuICAtLW1pc3NlZC1zaG90cy1jb2xvcjogIzg1ZmZiMztcXHJcXG4gIC0taGl0LXNob3RzLWNvbG9yOiAjZmY4NTg1O1xcclxcbiAgLS1ib2F0cy1jb2xvcjogIzQ0NDQ0NDtcXHJcXG4gIC0tYmctY29sb3I6ICNkZGRkZGQ7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWUtdGl0bGUge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJCaWcgU2hvdWxkZXJzIFN0ZW5jaWwgVGV4dFxcXCI7XFxyXFxuICBmb250LXNpemU6IDZyZW07XFxyXFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmJvYXJkcyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiA4MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYm9hcmQge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxyXFxuICB3aWR0aDogNDAwcHg7XFxyXFxuICBoZWlnaHQ6IDQwMHB4O1xcclxcbiAgYm9yZGVyOiBibGFjayAxcHggc29saWQ7XFxyXFxufVxcclxcblxcclxcbi5ib2FyZCA+IGRpdiB7XFxyXFxuICBib3JkZXI6IGJsYWNrIDFweCBzb2xpZDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbXB1dGVyLWJvYXJkIC53YXRlcjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5ib2F0IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvYXRzLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1pc3NlZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1taXNzZWQtc2hvdHMtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uaGl0IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhpdC1zaG90cy1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi53aW5uZXItc2NyZWVuIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxuICB0b3A6IGNhbGMoNTAlIC0gMjUwcHggLyAyKTtcXHJcXG4gIHdpZHRoOiA1MDBweDtcXHJcXG4gIGhlaWdodDogMjUwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAxMDB2aCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG59XFxyXFxuXFxyXFxuLndpbm5lci1tc2cge1xcclxcbiAgZm9udC1zaXplOiAzcmVtO1xcclxcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi5yZXN0YXJ0LWJ0biB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gIGNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxyXFxuICB3aWR0aDogMjUwcHg7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgZm9udC1zaXplOiAzcmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXJ0aW5nLXNjcmVlbiB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbiAgdG9wOiBjYWxjKDUwJSAtIDkwdmggLyAyKTtcXHJcXG4gIHdpZHRoOiA0NTBweDtcXHJcXG4gIGhlaWdodDogOTB2aDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDEwMHZoIHJnYmEoMCwgMCwgMCwgMC41KTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDMycHg7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG4ud2VsY29tZS1tc2cge1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2V0dXAtbXNnIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcXHJcXG59XFxyXFxuXFxyXFxuI3NldHVwLWZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG4gIGdhcDogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jc2V0dXAtZm9ybSA+IGRpdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBib3R0b206IDEwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXHJcXG4gIHdpZHRoOiA3MCU7XFxyXFxuICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSw2QkFBNkI7RUFDN0IsMEJBQTBCO0VBQzFCLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsU0FBUztFQUNULGFBQWE7RUFDYix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5Q0FBeUM7RUFDekMsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxtQ0FBbUM7RUFDbkMsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsMEJBQTBCO0VBQzFCLFlBQVk7RUFDWixhQUFhO0VBQ2IsaUNBQWlDO0VBQ2pDLGtCQUFrQjtFQUNsQixnREFBZ0Q7RUFDaEQsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsZUFBZTtFQUNmLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFlBQVk7RUFDWixpQ0FBaUM7RUFDakMsa0JBQWtCO0VBQ2xCLGdEQUFnRDtFQUNoRCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QmlnK1Nob3VsZGVycytTdGVuY2lsK1RleHQ6d2dodEA3MDA7ODAwOzkwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXHJcXG5cXHJcXG46cm9vdCB7XFxyXFxuICAtLW1pc3NlZC1zaG90cy1jb2xvcjogIzg1ZmZiMztcXHJcXG4gIC0taGl0LXNob3RzLWNvbG9yOiAjZmY4NTg1O1xcclxcbiAgLS1ib2F0cy1jb2xvcjogIzQ0NDQ0NDtcXHJcXG4gIC0tYmctY29sb3I6ICNkZGRkZGQ7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWUtdGl0bGUge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJCaWcgU2hvdWxkZXJzIFN0ZW5jaWwgVGV4dFxcXCI7XFxyXFxuICBmb250LXNpemU6IDZyZW07XFxyXFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmJvYXJkcyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiA4MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYm9hcmQge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxyXFxuICB3aWR0aDogNDAwcHg7XFxyXFxuICBoZWlnaHQ6IDQwMHB4O1xcclxcbiAgYm9yZGVyOiBibGFjayAxcHggc29saWQ7XFxyXFxufVxcclxcblxcclxcbi5ib2FyZCA+IGRpdiB7XFxyXFxuICBib3JkZXI6IGJsYWNrIDFweCBzb2xpZDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbXB1dGVyLWJvYXJkIC53YXRlcjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5ib2F0IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvYXRzLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1pc3NlZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1taXNzZWQtc2hvdHMtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uaGl0IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhpdC1zaG90cy1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi53aW5uZXItc2NyZWVuIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxuICB0b3A6IGNhbGMoNTAlIC0gMjUwcHggLyAyKTtcXHJcXG4gIHdpZHRoOiA1MDBweDtcXHJcXG4gIGhlaWdodDogMjUwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAxMDB2aCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG59XFxyXFxuXFxyXFxuLndpbm5lci1tc2cge1xcclxcbiAgZm9udC1zaXplOiAzcmVtO1xcclxcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi5yZXN0YXJ0LWJ0biB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gIGNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxyXFxuICB3aWR0aDogMjUwcHg7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgZm9udC1zaXplOiAzcmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXJ0aW5nLXNjcmVlbiB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbiAgdG9wOiBjYWxjKDUwJSAtIDkwdmggLyAyKTtcXHJcXG4gIHdpZHRoOiA0NTBweDtcXHJcXG4gIGhlaWdodDogOTB2aDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDEwMHZoIHJnYmEoMCwgMCwgMCwgMC41KTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDMycHg7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG4ud2VsY29tZS1tc2cge1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2V0dXAtbXNnIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcXHJcXG59XFxyXFxuXFxyXFxuI3NldHVwLWZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG4gIGdhcDogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jc2V0dXAtZm9ybSA+IGRpdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBib3R0b206IDEwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXHJcXG4gIHdpZHRoOiA3MCU7XFxyXFxuICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZnVuY3Rpb24gcmVuZGVyQm9hcmRzKHBsYXllciwgY29tcHV0ZXIpIHtcclxuICBjb25zdCBib2FyZHNEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvYXJkc1wiKTtcclxuICBib2FyZHNEaXYuaW5uZXJIVE1MID0gXCJcIjtcclxuICBjb25zdCBwbGF5ZXJCb2FyZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgY29tcHV0ZXJCb2FyZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgcGxheWVyQm9hcmREaXYuY2xhc3NMaXN0LmFkZChcInBsYXllci1ib2FyZFwiLCBcImJvYXJkXCIpO1xyXG4gIGNvbXB1dGVyQm9hcmREaXYuY2xhc3NMaXN0LmFkZChcImNvbXB1dGVyLWJvYXJkXCIsIFwiYm9hcmRcIik7XHJcblxyXG4gIGZvciAobGV0IHkgPSAwOyB5IDwgMTA7IHkrKykge1xyXG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCAxMDsgeCsrKSB7XHJcbiAgICAgIGNvbnN0IGN1cnJTcXVhcmUgPSBwbGF5ZXIuZ2FtZUJvYXJkLmJvYXJkW3ldW3hdO1xyXG4gICAgICBjb25zdCBzcXVhcmVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBzcXVhcmVEaXYuY2xhc3NMaXN0LmFkZChgKCR7eH0sJHt5fSlgKTtcclxuICAgICAgLy8gaWYgc2hvdCBoaXRcclxuICAgICAgaWYgKFxyXG4gICAgICAgIHBsYXllci5nYW1lQm9hcmQuc2hvdHNIaXQuZmlsdGVyKChlKSA9PiBlWzBdID09PSB4ICYmIGVbMV0gPT09IHkpXHJcbiAgICAgICAgICAubGVuZ3RoICE9PSAwXHJcbiAgICAgICkge1xyXG4gICAgICAgIHNxdWFyZURpdi5jbGFzc0xpc3QuYWRkKFwiaGl0XCIpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIGlmIGEgYm9hdFxyXG4gICAgICBlbHNlIGlmIChjdXJyU3F1YXJlICE9PSBcIi5cIiAmJiBjdXJyU3F1YXJlICE9PSBcInhcIiAmJiBjdXJyU3F1YXJlICE9PSBcIm9cIikge1xyXG4gICAgICAgIHNxdWFyZURpdi5jbGFzc0xpc3QuYWRkKFwiYm9hdFwiKTtcclxuICAgICAgfVxyXG4gICAgICAvLyBpZiBzaG90IG1pc3NlZFxyXG4gICAgICBlbHNlIGlmIChjdXJyU3F1YXJlID09PSBcInhcIikge1xyXG4gICAgICAgIHNxdWFyZURpdi5jbGFzc0xpc3QuYWRkKFwibWlzc2VkXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIG5vdGhpbmcganVzdCB3YXRlclxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICBzcXVhcmVEaXYuY2xhc3NMaXN0LmFkZChcIndhdGVyXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIHBsYXllckJvYXJkRGl2LmFwcGVuZENoaWxkKHNxdWFyZURpdik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmb3IgKGxldCB5ID0gMDsgeSA8IDEwOyB5KyspIHtcclxuICAgIGZvciAobGV0IHggPSAwOyB4IDwgMTA7IHgrKykge1xyXG4gICAgICBjb25zdCBjdXJyU3F1YXJlID0gY29tcHV0ZXIuY29tcHV0ZXJCb2FyZC5ib2FyZFt5XVt4XTtcclxuICAgICAgLy9jb25zb2xlLmxvZyhjdXJyU3F1YXJlLCBgKCR7eH0sJHt5fSlgKTtcclxuICAgICAgY29uc3Qgc3F1YXJlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgc3F1YXJlRGl2LmNsYXNzTGlzdC5hZGQoYCgke3h9LCR7eX0pYCk7XHJcblxyXG4gICAgICBpZiAoY3VyclNxdWFyZSA9PT0gXCJ4XCIpIHtcclxuICAgICAgICBzcXVhcmVEaXYuY2xhc3NMaXN0LmFkZChcIm1pc3NlZFwiKTtcclxuICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICBjb21wdXRlci5jb21wdXRlckJvYXJkLnNob3RzSGl0LmZpbHRlcigoZSkgPT4gZVswXSA9PT0geCAmJiBlWzFdID09PSB5KVxyXG4gICAgICAgICAgLmxlbmd0aCAhPT0gMFxyXG4gICAgICApIHtcclxuICAgICAgICBzcXVhcmVEaXYuY2xhc3NMaXN0LmFkZChcImhpdFwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzcXVhcmVEaXYuY2xhc3NMaXN0LmFkZChcIndhdGVyXCIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb21wdXRlckJvYXJkRGl2LmFwcGVuZENoaWxkKHNxdWFyZURpdik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBib2FyZHNEaXYuYXBwZW5kKHBsYXllckJvYXJkRGl2LCBjb21wdXRlckJvYXJkRGl2KTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlQ2xpY2soZSwgcGxheWVyLCBlbmVteSkge1xyXG4gIGNvbnN0IHggPSBwYXJzZUludChlLnRhcmdldC5jbGFzc0xpc3RbMF0uY2hhckF0KDEpKTtcclxuICBjb25zdCB5ID0gcGFyc2VJbnQoZS50YXJnZXQuY2xhc3NMaXN0WzBdLmNoYXJBdCgzKSk7XHJcbiAgcGxheWVyLnBsYXllckF0dGFjayhlbmVteSwgeCwgeSk7XHJcbiAgZW5lbXkuY29tcHV0ZXJBdHRhY2socGxheWVyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyV2luU2NyZWVuKHBsYXllciwgZW5lbXkpIHtcclxuICBjb25zdCB3aW5uZXJTY3JlZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndpbm5lci1zY3JlZW5cIik7XHJcbiAgY29uc3Qgd2lubmVyTXNnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53aW5uZXItbXNnXCIpO1xyXG4gIGlmIChwbGF5ZXIuZ2FtZUJvYXJkLmFsbFN1bmsoKSkge1xyXG4gICAgd2lubmVyTXNnLmlubmVySFRNTCA9IFwiQ29tcHV0ZXIgV29uICFcIjtcclxuICB9IGVsc2Uge1xyXG4gICAgd2lubmVyTXNnLmlubmVySFRNTCA9IFwiWW91IFdvbiAhXCI7XHJcbiAgfVxyXG4gIHdpbm5lclNjcmVlbi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVdpblNjcmVlbigpIHtcclxuICBjb25zdCB3aW5uZXJTY3JlZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndpbm5lci1zY3JlZW5cIik7XHJcbiAgd2lubmVyU2NyZWVuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxufVxyXG5cclxuZnVuY3Rpb24gY2xvc2VTdGFydGluZ1NjcmVlbigpIHtcclxuICBjb25zdCBzdGFydGluZ1NjcmVlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3RhcnRpbmctc2NyZWVuXCIpO1xyXG4gIHN0YXJ0aW5nU2NyZWVuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyU3RhcnRpbmdTY3JlZW4oKSB7XHJcbiAgY29uc3Qgc3RhcnRpbmdTY3JlZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN0YXJ0aW5nLXNjcmVlblwiKTtcclxuICBzdGFydGluZ1NjcmVlbi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhpZGVCb2FyZHMoKSB7XHJcbiAgY29uc3QgYm9hcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib2FyZHNcIik7XHJcbiAgYm9hcmRzLmlubmVySFRNTCA9IFwiXCI7XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgcmVuZGVyQm9hcmRzLFxyXG4gIGhhbmRsZUNsaWNrLFxyXG4gIHJlbmRlcldpblNjcmVlbixcclxuICByZW1vdmVXaW5TY3JlZW4sXHJcbiAgcmVuZGVyU3RhcnRpbmdTY3JlZW4sXHJcbiAgY2xvc2VTdGFydGluZ1NjcmVlbixcclxuICBoaWRlQm9hcmRzLFxyXG59O1xyXG4iLCJpbXBvcnQge1xyXG4gIGNsb3NlU3RhcnRpbmdTY3JlZW4sXHJcbiAgaGFuZGxlQ2xpY2ssXHJcbiAgcmVuZGVyQm9hcmRzLFxyXG4gIHJlbmRlcldpblNjcmVlbixcclxufSBmcm9tIFwiLi9kb21cIjtcclxuaW1wb3J0IHsgQ29tcHV0ZXIsIFBsYXllciB9IGZyb20gXCIuL3BsYXllcnNcIjtcclxuXHJcbmZ1bmN0aW9uIGdhbWUoKSB7XHJcbiAgY29uc3QgUnlhbiA9IFBsYXllcigpO1xyXG4gIGNvbnN0IEFzdXMgPSBDb21wdXRlcigpO1xyXG5cclxuICBjb25zdCBzZXR1cEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NldHVwLWZvcm1cIik7XHJcbiAgc2V0dXBGb3JtLm9uc3VibWl0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIFJ5YW4uaW5pdGlhbGl6ZUJvYXJkKCk7XHJcbiAgICBBc3VzLmluaXRpYWxpemVCb2FyZCgpO1xyXG4gICAgY2xvc2VTdGFydGluZ1NjcmVlbigpO1xyXG4gICAgcmVuZGVyQm9hcmRzKFJ5YW4sIEFzdXMpO1xyXG4gICAgc2V0dXBGb3JtLnJlc2V0KCk7XHJcbiAgfTtcclxuXHJcbiAgbGV0IGdhbWVPdmVyID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0IGJvYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9hcmRzXCIpO1xyXG4gIGJvYXJkcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgIGNvbnN0IGNvbXB1dGVyQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbXB1dGVyLWJvYXJkXCIpO1xyXG4gICAgaWYgKFxyXG4gICAgICAhZ2FtZU92ZXIgJiZcclxuICAgICAgZS50YXJnZXQuY2xhc3NMaXN0WzFdID09PSBcIndhdGVyXCIgJiZcclxuICAgICAgY29tcHV0ZXJCb2FyZC5jb250YWlucyhlLnRhcmdldClcclxuICAgICkge1xyXG4gICAgICBoYW5kbGVDbGljayhlLCBSeWFuLCBBc3VzKTtcclxuICAgICAgcmVuZGVyQm9hcmRzKFJ5YW4sIEFzdXMpO1xyXG4gICAgICBpZiAoUnlhbi5nYW1lQm9hcmQuYWxsU3VuaygpIHx8IEFzdXMuY29tcHV0ZXJCb2FyZC5hbGxTdW5rKCkpIHtcclxuICAgICAgICBnYW1lT3ZlciA9IHRydWU7XHJcbiAgICAgICAgcmVuZGVyV2luU2NyZWVuKFJ5YW4sIEFzdXMpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdhbWU7XHJcbiIsImltcG9ydCBTaGlwIGZyb20gXCIuL3NoaXBcIjtcclxuXHJcbmZ1bmN0aW9uIEdhbWVib2FyZCgpIHtcclxuICBjb25zdCBib2FyZCA9IFtdO1xyXG4gIGNvbnN0IHNob3RzSGl0ID0gW107XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICBib2FyZC5wdXNoKEFycmF5KDEwKS5maWxsKFwiLlwiKSk7XHJcbiAgfVxyXG5cclxuICAvLyBwbGFjZSBzaGlwIGhvcml6b250YWxseVxyXG4gIGZ1bmN0aW9uIHBsYWNlU2hpcChzaGlwTGVuZ3RoLCB4LCB5KSB7XHJcbiAgICAvLyBjaGVjayBpZiB0aGUgYm9hdCBjb29yZGluYXRlcyBhcmUgaW4gcmFuZ2VcclxuICAgIGlmIChzaGlwTGVuZ3RoICsgeCA8IDEwICYmIHggPj0gMCAmJiB5ID49IDAgJiYgeSA8IDEwKSB7XHJcbiAgICAgIC8vIGNoZWNrIGlmIHRoZXJlIGlzIHNwYWNlIGZvciB0aGUgbmV3IGJvYXQgKGl0IHdvbid0IG92ZXJsYXAgYW5vdGhlciBvbmUpXHJcbiAgICAgIGZvciAobGV0IGkgPSB4OyBpIDwgeCArIHNoaXBMZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5ib2FyZFt5XVtpXSA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgbmV3U2hpcCA9IFNoaXAoc2hpcExlbmd0aCk7XHJcbiAgICAgIGZvciAobGV0IGkgPSB4OyBpIDwgeCArIHNoaXBMZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHRoaXMuYm9hcmRbeV1baV0gPSBuZXdTaGlwO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmVjZWl2ZUF0dGFjayh4LCB5KSB7XHJcbiAgICBpZiAodHlwZW9mIHRoaXMuYm9hcmRbeV1beF0gPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgdGhpcy5ib2FyZFt5XVt4XS5oaXQoKTtcclxuICAgICAgdGhpcy5zaG90c0hpdC5wdXNoKFt4LCB5XSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmJvYXJkW3ldW3hdID0gXCJ4XCI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBhbGxTdW5rKCkge1xyXG4gICAgbGV0IGFsbFN1bmsgPSB0cnVlO1xyXG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCAxMDsgeSsrKSB7XHJcbiAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgMTA7IHgrKykge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIGJvYXJkW3ldW3hdICE9PSBcIi5cIiAmJlxyXG4gICAgICAgICAgYm9hcmRbeV1beF0gIT09IFwieFwiICYmXHJcbiAgICAgICAgICAhYm9hcmRbeV1beF0uaXNTdW5rKClcclxuICAgICAgICApIHtcclxuICAgICAgICAgIGFsbFN1bmsgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBhbGxTdW5rO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHsgYm9hcmQsIHNob3RzSGl0LCBwbGFjZVNoaXAsIHJlY2VpdmVBdHRhY2ssIGFsbFN1bmsgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2FtZWJvYXJkO1xyXG4iLCJpbXBvcnQgR2FtZWJvYXJkIGZyb20gXCIuL2dhbWVib2FyZFwiO1xyXG5cclxuZnVuY3Rpb24gUGxheWVyKCkge1xyXG4gIGNvbnN0IGdhbWVCb2FyZCA9IEdhbWVib2FyZCgpO1xyXG5cclxuICBmdW5jdGlvbiBwbGF5ZXJBdHRhY2soZW5lbXksIHgsIHkpIHtcclxuICAgIGVuZW15LmNvbXB1dGVyQm9hcmQucmVjZWl2ZUF0dGFjayh4LCB5KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGluaXRpYWxpemVCb2FyZChlKSB7XHJcbiAgICBjb25zdCBjYXJyaWVyWElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjYXJyaWVyLXhcIik7XHJcbiAgICBjb25zdCBjYXJyaWVyWUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjYXJyaWVyLXlcIik7XHJcblxyXG4gICAgY29uc3QgYmF0dGxlc2hpcFhJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmF0dGxlc2hpcC14XCIpO1xyXG4gICAgY29uc3QgYmF0dGxlc2hpcFlJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmF0dGxlc2hpcC15XCIpO1xyXG5cclxuICAgIGNvbnN0IGRlc3Ryb3llclhJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGVzdHJveWVyLXhcIik7XHJcbiAgICBjb25zdCBkZXN0cm95ZXJZSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Rlc3Ryb3llci15XCIpO1xyXG5cclxuICAgIGNvbnN0IHN1Ym1hcmluZVhJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3VibWFyaW5lLXhcIik7XHJcbiAgICBjb25zdCBzdWJtYXJpbmVZSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N1Ym1hcmluZS15XCIpO1xyXG5cclxuICAgIGNvbnN0IHBhdHJvbFhJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGF0cm9sLXhcIik7XHJcbiAgICBjb25zdCBwYXRyb2xZSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BhdHJvbC15XCIpO1xyXG5cclxuICAgIGNvbnN0IGNhcnJpZXJYID0gcGFyc2VJbnQoY2FycmllclhJbnB1dC52YWx1ZSk7XHJcbiAgICBjb25zdCBjYXJyaWVyWSA9IHBhcnNlSW50KGNhcnJpZXJZSW5wdXQudmFsdWUpO1xyXG5cclxuICAgIGNvbnN0IGJhdHRsZXNoaXBYID0gcGFyc2VJbnQoYmF0dGxlc2hpcFhJbnB1dC52YWx1ZSk7XHJcbiAgICBjb25zdCBiYXR0bGVzaGlwWSA9IHBhcnNlSW50KGJhdHRsZXNoaXBZSW5wdXQudmFsdWUpO1xyXG5cclxuICAgIGNvbnN0IGRlc3Ryb3llclggPSBwYXJzZUludChkZXN0cm95ZXJYSW5wdXQudmFsdWUpO1xyXG4gICAgY29uc3QgZGVzdHJveWVyWSA9IHBhcnNlSW50KGRlc3Ryb3llcllJbnB1dC52YWx1ZSk7XHJcblxyXG4gICAgY29uc3Qgc3VibWFyaW5lWCA9IHBhcnNlSW50KHN1Ym1hcmluZVhJbnB1dC52YWx1ZSk7XHJcbiAgICBjb25zdCBzdWJtYXJpbmVZID0gcGFyc2VJbnQoc3VibWFyaW5lWUlucHV0LnZhbHVlKTtcclxuXHJcbiAgICBjb25zdCBwYXRyb2xYID0gcGFyc2VJbnQocGF0cm9sWElucHV0LnZhbHVlKTtcclxuICAgIGNvbnN0IHBhdHJvbFkgPSBwYXJzZUludChwYXRyb2xZSW5wdXQudmFsdWUpO1xyXG5cclxuICAgIHRoaXMuZ2FtZUJvYXJkLnBsYWNlU2hpcCg1LCBjYXJyaWVyWCwgY2FycmllclkpO1xyXG4gICAgdGhpcy5nYW1lQm9hcmQucGxhY2VTaGlwKDQsIGJhdHRsZXNoaXBYLCBiYXR0bGVzaGlwWSk7XHJcbiAgICB0aGlzLmdhbWVCb2FyZC5wbGFjZVNoaXAoMywgZGVzdHJveWVyWCwgZGVzdHJveWVyWSk7XHJcbiAgICB0aGlzLmdhbWVCb2FyZC5wbGFjZVNoaXAoMywgc3VibWFyaW5lWCwgc3VibWFyaW5lWSk7XHJcbiAgICB0aGlzLmdhbWVCb2FyZC5wbGFjZVNoaXAoMiwgcGF0cm9sWCwgcGF0cm9sWSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4geyBnYW1lQm9hcmQsIHBsYXllckF0dGFjaywgaW5pdGlhbGl6ZUJvYXJkIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIENvbXB1dGVyKCkge1xyXG4gIGNvbnN0IGNvbXB1dGVyQm9hcmQgPSBHYW1lYm9hcmQoKTtcclxuICBsZXQgcHJldkhpdCA9IGZhbHNlO1xyXG4gIGxldCBnb3R0YUNoZWNrT3RoZXJTaWRlID0gZmFsc2U7XHJcbiAgbGV0IHByZXZYO1xyXG4gIGxldCBwcmV2WTtcclxuXHJcbiAgZnVuY3Rpb24gY29tcHV0ZXJBdHRhY2soZW5lbXkpIHtcclxuICAgIGxldCB4O1xyXG4gICAgbGV0IHk7XHJcbiAgICBsZXQgdmFsaWQgPSBmYWxzZTtcclxuXHJcbiAgICBicmVha21lOiBpZiAocHJldkhpdCkge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgZW5lbXkuZ2FtZUJvYXJkLmJvYXJkW3ByZXZZXVtwcmV2WCAtIDFdID09PSBcIi5cIiB8fFxyXG4gICAgICAgIHR5cGVvZiBlbmVteS5nYW1lQm9hcmQuYm9hcmRbcHJldlldW3ByZXZYIC0gMV0gPT0gXCJvYmplY3RcIlxyXG4gICAgICApIHtcclxuICAgICAgICB4ID0gcHJldlggLSAxO1xyXG4gICAgICAgIHkgPSBwcmV2WTtcclxuICAgICAgICB2YWxpZCA9IHRydWU7XHJcbiAgICAgICAgY29uc29sZS5sb2coeCwgeSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgZW5lbXkuZ2FtZUJvYXJkLmJvYXJkW3ByZXZZXVtwcmV2WCArIDFdID09PSBcIi5cIiB8fFxyXG4gICAgICAgIHR5cGVvZiBlbmVteS5nYW1lQm9hcmQuYm9hcmRbcHJldlldW3ByZXZYICsgMV0gPT0gXCJvYmplY3RcIlxyXG4gICAgICApIHtcclxuICAgICAgICB4ID0gcHJldlggKyAxO1xyXG4gICAgICAgIHkgPSBwcmV2WTtcclxuICAgICAgICB2YWxpZCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHR5cGVvZiBlbmVteS5nYW1lQm9hcmQuYm9hcmRbeV1beF0gPT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIGVuZW15LmdhbWVCb2FyZC5zaG90c0hpdC5maWx0ZXIoKGUpID0+IGVbMF0gPT09IHggJiYgZVsxXSA9PT0geSlcclxuICAgICAgICAgICAgLmxlbmd0aCAhPT0gMFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgdmFsaWQgPSBmYWxzZTtcclxuICAgICAgICAgIGJyZWFrIGJyZWFrbWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByZXZIaXQgPSB0cnVlO1xyXG4gICAgICAgIHByZXZYID0geDtcclxuICAgICAgICBwcmV2WSA9IHk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcHJldkhpdCA9IGZhbHNlO1xyXG4gICAgICAgIGdvdHRhQ2hlY2tPdGhlclNpZGUgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgd2hpbGUgKCF2YWxpZCkge1xyXG4gICAgICB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xyXG4gICAgICB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xyXG4gICAgICAvLyBpZiB0aGUgdGFyZ2V0IGlzIHdhdGVyXHJcbiAgICAgIGlmIChlbmVteS5nYW1lQm9hcmQuYm9hcmRbeV1beF0gPT09IFwiLlwiKSB7XHJcbiAgICAgICAgdmFsaWQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIGlmIHRhcmdldCBpcyBhIGJvYXRcclxuICAgICAgaWYgKHR5cGVvZiBlbmVteS5nYW1lQm9hcmQuYm9hcmRbeV1beF0gPT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgIC8vIG1vcmUgcHJlY2lzZWx5IGlmIGl0J3MgYSBzcXVhcmUgbm90IGhpdCBvZiBhIGJvYXRcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICBlbmVteS5nYW1lQm9hcmQuc2hvdHNIaXQuZmlsdGVyKChlKSA9PiBlWzBdID09PSB4ICYmIGVbMV0gPT09IHkpXHJcbiAgICAgICAgICAgIC5sZW5ndGggPT09IDBcclxuICAgICAgICApIHtcclxuICAgICAgICAgIHZhbGlkID0gdHJ1ZTtcclxuICAgICAgICAgIHByZXZIaXQgPSB0cnVlO1xyXG4gICAgICAgICAgcHJldlggPSB4O1xyXG4gICAgICAgICAgcHJldlkgPSB5O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZW5lbXkuZ2FtZUJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBpbml0aWFsaXplQm9hcmQoKSB7XHJcbiAgICBsZXQgY2FycmllclBsYWNlZCA9IGZhbHNlO1xyXG4gICAgZG8ge1xyXG4gICAgICBjYXJyaWVyUGxhY2VkID0gdGhpcy5jb21wdXRlckJvYXJkLnBsYWNlU2hpcChcclxuICAgICAgICA1LFxyXG4gICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDUpLFxyXG4gICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKVxyXG4gICAgICApO1xyXG4gICAgfSB3aGlsZSAoIWNhcnJpZXJQbGFjZWQpO1xyXG5cclxuICAgIGxldCBiYXR0bGVzaGlwUGxhY2VkID0gZmFsc2U7XHJcbiAgICBkbyB7XHJcbiAgICAgIGJhdHRsZXNoaXBQbGFjZWQgPSB0aGlzLmNvbXB1dGVyQm9hcmQucGxhY2VTaGlwKFxyXG4gICAgICAgIDQsXHJcbiAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNiksXHJcbiAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXHJcbiAgICAgICk7XHJcbiAgICB9IHdoaWxlICghYmF0dGxlc2hpcFBsYWNlZCk7XHJcblxyXG4gICAgbGV0IGRlc3Ryb3llclBsYWNlZCA9IGZhbHNlO1xyXG4gICAgZG8ge1xyXG4gICAgICBkZXN0cm95ZXJQbGFjZWQgPSB0aGlzLmNvbXB1dGVyQm9hcmQucGxhY2VTaGlwKFxyXG4gICAgICAgIDMsXHJcbiAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNyksXHJcbiAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXHJcbiAgICAgICk7XHJcbiAgICB9IHdoaWxlICghZGVzdHJveWVyUGxhY2VkKTtcclxuXHJcbiAgICBsZXQgc3VibWFyaW5lUGxhY2VkID0gZmFsc2U7XHJcbiAgICBkbyB7XHJcbiAgICAgIHN1Ym1hcmluZVBsYWNlZCA9IHRoaXMuY29tcHV0ZXJCb2FyZC5wbGFjZVNoaXAoXHJcbiAgICAgICAgMyxcclxuICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA3KSxcclxuICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMClcclxuICAgICAgKTtcclxuICAgIH0gd2hpbGUgKCFzdWJtYXJpbmVQbGFjZWQpO1xyXG5cclxuICAgIGxldCBwYXRyb2xQbGFjZWQgPSBmYWxzZTtcclxuICAgIGRvIHtcclxuICAgICAgcGF0cm9sUGxhY2VkID0gdGhpcy5jb21wdXRlckJvYXJkLnBsYWNlU2hpcChcclxuICAgICAgICAyLFxyXG4gICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDgpLFxyXG4gICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKVxyXG4gICAgICApO1xyXG4gICAgfSB3aGlsZSAoIXBhdHJvbFBsYWNlZCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4geyBjb21wdXRlckJvYXJkLCBjb21wdXRlckF0dGFjaywgaW5pdGlhbGl6ZUJvYXJkIH07XHJcbn1cclxuXHJcbmV4cG9ydCB7IFBsYXllciwgQ29tcHV0ZXIgfTtcclxuIiwiZnVuY3Rpb24gU2hpcChsZW5ndGgpIHtcclxuICBsZXQgaGl0cyA9IDA7XHJcblxyXG4gIGZ1bmN0aW9uIGhpdCgpIHtcclxuICAgIHRoaXMuaGl0cysrO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaXNTdW5rKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaGl0cyA9PSB0aGlzLmxlbmd0aCA/IHRydWUgOiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7IGxlbmd0aCwgaGl0cywgaGl0LCBpc1N1bmsgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hpcDtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgaGlkZUJvYXJkcywgcmVtb3ZlV2luU2NyZWVuLCByZW5kZXJTdGFydGluZ1NjcmVlbiB9IGZyb20gXCIuL2RvbVwiO1xyXG5pbXBvcnQgZ2FtZSBmcm9tIFwiLi9nYW1lXCI7XHJcbmltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xyXG5cclxuZ2FtZSgpO1xyXG5cclxuY29uc3QgcmVzdGFydEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzdGFydC1idG5cIik7XHJcbnJlc3RhcnRCdG4ub25jbGljayA9ICgpID0+IHtcclxuICByZW1vdmVXaW5TY3JlZW4oKTtcclxuICByZW5kZXJTdGFydGluZ1NjcmVlbigpO1xyXG4gIGhpZGVCb2FyZHMoKTtcclxuICBnYW1lKCk7XHJcbn07XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==