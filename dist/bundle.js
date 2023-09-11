/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
// Module
___CSS_LOADER_EXPORT___.push([module.id, `html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

/* End reset styles */

html,
body {
  height: 100%;
}

main {
  display: flex;
  justify-content: space-evenly;
}

.gameboard-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.gameboard {
  display: grid;
  grid-template-rows: repeat(11, minmax(10px, 50px));
  grid-template-columns: repeat(11, minmax(10px, 50px));
}

.cell-container {
  border: 1px solid #000000;
}

.cell {
  justify-self: stretch;
}

.enemy-cell {
  display: grid;
}

.enemy-cell:hover {
  border: 3px solid #b45309;
  transition-duration: 0.3s;
}

.enemy-cell:hover > button {
  background-color: #f59e0b;
  transition-duration: 0.3s;
}

.number,
.letter {
  place-self: center;
}

.grid-legend {
  align-self: center;
}

.ship {
  border: 2px solid #0000ff;
  background-color: #add8e6;
}

.ship-attacked {
  border: 2px solid #b91c1c;
  background-color: #fca5a5;
  transition-duration: 0.4s;
}

.missed-attack {
  background-color: #a3a3a3;
  transition-duration: 0.4s;
}

.ship-attacked,
.missed-attack {
  cursor: not-allowed;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAiFE,SAAS;EACT,UAAU;EACV,SAAS;EACT,eAAe;EACf,aAAa;EACb,wBAAwB;AAC1B;AACA,gDAAgD;AAChD;;;;;;;;;;;EAWE,cAAc;AAChB;AACA;EACE,cAAc;AAChB;AACA;;EAEE,gBAAgB;AAClB;AACA;;EAEE,YAAY;AACd;AACA;;;;EAIE,WAAW;EACX,aAAa;AACf;AACA;EACE,yBAAyB;EACzB,iBAAiB;AACnB;;AAEA,qBAAqB;;AAErB;;EAEE,YAAY;AACd;;AAEA;EACE,aAAa;EACb,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,kDAAkD;EAClD,qDAAqD;AACvD;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,yBAAyB;EACzB,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;EACzB,yBAAyB;AAC3B;;AAEA;;EAEE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,yBAAyB;EACzB,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;EACzB,yBAAyB;EACzB,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;EACzB,yBAAyB;AAC3B;;AAEA;;EAEE,mBAAmB;AACrB","sourcesContent":["html,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n/* End reset styles */\n\nhtml,\nbody {\n  height: 100%;\n}\n\nmain {\n  display: flex;\n  justify-content: space-evenly;\n}\n\n.gameboard-container {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.gameboard {\n  display: grid;\n  grid-template-rows: repeat(11, minmax(10px, 50px));\n  grid-template-columns: repeat(11, minmax(10px, 50px));\n}\n\n.cell-container {\n  border: 1px solid #000000;\n}\n\n.cell {\n  justify-self: stretch;\n}\n\n.enemy-cell {\n  display: grid;\n}\n\n.enemy-cell:hover {\n  border: 3px solid #b45309;\n  transition-duration: 0.3s;\n}\n\n.enemy-cell:hover > button {\n  background-color: #f59e0b;\n  transition-duration: 0.3s;\n}\n\n.number,\n.letter {\n  place-self: center;\n}\n\n.grid-legend {\n  align-self: center;\n}\n\n.ship {\n  border: 2px solid #0000ff;\n  background-color: #add8e6;\n}\n\n.ship-attacked {\n  border: 2px solid #b91c1c;\n  background-color: #fca5a5;\n  transition-duration: 0.4s;\n}\n\n.missed-attack {\n  background-color: #a3a3a3;\n  transition-duration: 0.4s;\n}\n\n.ship-attacked,\n.missed-attack {\n  cursor: not-allowed;\n}\n"],"sourceRoot":""}]);
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/scripts/dom.js":
/*!****************************!*\
  !*** ./src/scripts/dom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DOM)
/* harmony export */ });
function DOM() {
  const body = document.querySelector("body");
  const script = document.querySelector("script");
  const createH1 = () => {
    const h1 = document.createElement("h1");
    h1.textContent = "Generic Battleship app name";
    return h1;
  };

  const loadHeader = () => {
    const header = document.createElement("header");
    const h1 = createH1();
    header.appendChild(h1);
    body.insertBefore(header, script);
  };

  const createDiv = (args = {}) => {
    const div = document.createElement("div");
    if (args.className) {
      div.className = args.className;
    }
    if (args.textContent) {
      div.textContent = args.textContent;
    }
    return div;
  };

  const createButton = (className) => {
    const button = document.createElement("button");
    button.classList = className;
    return button;
  };

  const getLetter = (column) => {
    switch (column) {
      case 2:
        return "A";
      case 3:
        return "B";
      case 4:
        return "C";
      case 5:
        return "D";
      case 6:
        return "E";
      case 7:
        return "F";
      case 8:
        return "G";
      case 9:
        return "H";
      case 10:
        return "I";
      case 11:
        return "J";
      // no default
    }
  };

  const addButton = (args) => {
    const elementCopy = args.element.cloneNode();
    const button = createButton("cell");
    elementCopy.classList.add("enemy-cell");
    elementCopy.appendChild(button);
    return elementCopy;
  };

  const loadShip = (args) => {
    const cellCopy = args.element.cloneNode();
    const cellValue =
      args.gameboardGridObject[args.coordinates.x][args.coordinates.y];
    if (JSON.stringify(cellValue) !== JSON.stringify({})) {
      cellCopy.classList.add("ship");
    }
    return cellCopy;
  };

  const createCell = (args) => {
    let cell = createDiv();
    const { row } = args;
    const { column } = args;
    const { humanGameboardGrid } = args;

    if (row >= 2 && column >= 2) {
      cell.classList = "cell-container";
      cell.setAttribute("data-x-coordinate", row - 2);
      cell.setAttribute("data-y-coordinate", column - 2);
      cell = args.cb({
        element: cell,
        gameboardGridObject: humanGameboardGrid,
        coordinates: { x: row - 2, y: column - 2 },
      });
    } else if (row >= 2 && column === 1) {
      cell.classList.add("number");
      cell.textContent = `${row - 1}`;
    } else if (row === 1 && column >= 2) {
      cell.classList.add("letter");
      cell.textContent = getLetter(column);
    }
    return cell;
  };

  const loadCells = (args) => {
    const gameboard = createDiv({ className: "gameboard" });
    const humanGameboardGrid = args.humanGameboard.getGrid();
    const lineLength = 11;
    for (let row = 1; row <= lineLength; row += 1) {
      for (let column = 1; column <= lineLength; column += 1) {
        const cell = createCell({ ...args, row, column, humanGameboardGrid });
        gameboard.appendChild(cell);
      }
    }
    return gameboard;
  };

  const loadGameboard = (args) => {
    const gameboardContainer = createDiv({ className: "gameboard-container" });
    const gridLegend = createDiv({
      className: "grid-legend",
      textContent: args.text,
    });
    const gameboard = loadCells(args);
    gameboardContainer.append(gameboard, gridLegend);
    return gameboardContainer;
  };

  const loadMain = (args) => {
    const main = document.createElement("main");
    const mainPlayerGameboard = loadGameboard({
      ...args,
      text: "Your grid",
      cb: loadShip,
    });
    const trackingPlayerGameboard = loadGameboard({
      ...args,
      text: "Your enemy grid",
      cb: addButton,
    });
    main.append(mainPlayerGameboard, trackingPlayerGameboard);
    body.insertBefore(main, script);
  };

  const loadFooter = () => {
    const footer = document.createElement("footer");
    body.insertBefore(footer, script);
  };

  const getCoordinates = (element) => {
    const x = Number(element.dataset.xCoordinate);
    const y = Number(element.dataset.yCoordinate);
    return { x, y };
  };

  const updateGameboard = (attackResult, cellDiv) => {
    if (attackResult) {
      cellDiv.classList.add("ship-attacked");
    } else {
      cellDiv.classList.add("missed-attack");
    }
  };

  const humanTurn = (args) => {
    const { button } = args;
    const coordinates = getCoordinates(button.parentNode);
    const humanResult = args.humanPlayer.sendAttack(
      coordinates,
      args.computerGameboard,
    );
    updateGameboard(humanResult, button.parentNode);
    button.remove();
  };

  const computerTurn = (args) => {
    const { humanGameboard } = args;
    const { computerPlayer } = args;
    const computerCoordinates = computerPlayer.calculateAttack(humanGameboard);
    const computerResult = computerPlayer.sendAttack(
      computerCoordinates,
      humanGameboard,
    );
    computerPlayer.registerAttack({
      coordinates: computerCoordinates,
      result: computerResult,
    });
    const cell = args.myGameboard.querySelector(
      `div[data-x-coordinate="${computerCoordinates.x}"][data-y-coordinate="${computerCoordinates.y}"]`,
    );
    updateGameboard(computerResult, cell);
  };

  const deleteButtons = (enemyGameboard) => {
    const buttons = enemyGameboard.querySelectorAll("div > button");
    const buttonsArray = Array.from(buttons);
    buttonsArray.forEach((button) => {
      if (!button.parentNode.classList.contains("ship-attacked")) {
        button.parentNode.classList.add("missed-attack");
      }
      button.remove();
    });
  };

  const getVictoryMessage = (gameBoard) => {
    if (gameBoard.areAllShipsSunk()) {
      return "You win";
    }
    return "Computer Wins";
  };

  const loadVictoryMessage = (message) => {
    const p = document.createElement("p");
    const main = document.querySelector("main");
    p.textContent = message;
    main.appendChild(p);
  };

  const addEnemeyGameboardListener = (args) => {
    const enemyGameboard = document.querySelector(
      "main > div:nth-child(2) > div:first-child",
    );
    const myGameboard = document.querySelector(
      "main > div:first-child > div:first-child",
    );
    enemyGameboard.addEventListener("click", (event) => {
      if (event.target.matches("button")) {
        humanTurn({ ...args, button: event.target });
        computerTurn({ ...args, myGameboard });
        if (args.isGameOver(args.humanGameboard, args.computerGameboard)) {
          deleteButtons(enemyGameboard);
          const victoryMessage = getVictoryMessage(args.computerGameboard);
          loadVictoryMessage(victoryMessage);
        }
      }
    });
  };

  const loadPage = (args) => {
    loadHeader();
    loadMain(args);
    loadFooter();
    addEnemeyGameboardListener({
      humanPlayer: args.humanPlayer,
      humanGameboard: args.humanGameboard,
      computerPlayer: args.computerPlayer,
      computerGameboard: args.computerGameboard,
      isGameOver: args.isGameOver,
    });
  };

  return { loadPage };
}


/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Gameboard = __webpack_require__(/*! ./gameboard */ "./src/scripts/gameboard.js");
const Player = __webpack_require__(/*! ./player */ "./src/scripts/player.js");

const Game = () => {
  const populateGameboard = (gameboard) => {
    gameboard.placeShip({ x: 1, y: 3 }, 1, "horizontal");
    gameboard.placeShip({ x: 7, y: 7 }, 2, "vertical");
    gameboard.placeShip({ x: 4, y: 3 }, 3, "horizontal");
    gameboard.placeShip({ x: 0, y: 8 }, 4, "vertical");
    gameboard.placeShip({ x: 7, y: 0 }, 5, "horizontal");
  };

  const createObjects = () => {
    const humanPlayer = Player();
    const computerPlayer = Player("computer");
    const humanGameboard = Gameboard();
    populateGameboard(humanGameboard);
    const humanTrackingGameboard = Gameboard();
    const computerGameboard = Gameboard();
    populateGameboard(computerGameboard);
    const computerTrackingGameboard = Gameboard();
    return {
      humanPlayer,
      computerPlayer,
      humanGameboard,
      humanTrackingGameboard,
      computerGameboard,
      computerTrackingGameboard,
    };
  };

  const isGameOver = (humanGameboard, computerGameboard) =>
    humanGameboard.areAllShipsSunk() || computerGameboard.areAllShipsSunk();

  return { createObjects, isGameOver };
};

module.exports = Game;


/***/ }),

/***/ "./src/scripts/gameboard.js":
/*!**********************************!*\
  !*** ./src/scripts/gameboard.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Ship = __webpack_require__(/*! ./ship */ "./src/scripts/ship.js");

const Gameboard = () => {
  const grid = [];
  const missedAttacks = [];
  const range = (num) => [...Array(num).keys()];

  const placeShip = (coordinates, shipLength, direction) => {
    const newShip = Ship(shipLength);
    const shipRange = range(shipLength);
    shipRange.forEach((i) => {
      if (direction === "vertical") {
        grid[coordinates.x + i][coordinates.y] = newShip;
      } else {
        grid[coordinates.x][coordinates.y + i] = newShip;
      }
    });
  };

  const createGrid = () => {
    const columns = range(10);
    columns.forEach((c) => {
      const row = range(10);
      grid[c] = [];
      row.forEach((r) => {
        grid[c][r] = {};
        return undefined;
      });
      return undefined;
    });
  };

  const recordCoordinates = (coordinates) => {
    missedAttacks.push(coordinates);
  };

  const isShip = (cell, property = "hit") => Object.hasOwn(cell, property);

  const receiveAttack = (coordinates, cb = recordCoordinates) => {
    const cellContent = grid[coordinates.x][coordinates.y];
    const shipFound = isShip(cellContent);
    if (shipFound) {
      cellContent.hit();
      return true;
    }
    cb(coordinates);
    return false;
  };

  const getAllShips = () => {
    const gridCopy = grid.flat();
    return gridCopy.filter((cell) => isShip(cell, "isSunk"));
  };

  const areAllShipsSunk = () => {
    const ships = getAllShips();
    return ships.every((ship) => ship.isSunk());
  };

  const getGrid = () => grid;
  createGrid();
  return {
    missedAttacks,
    getGrid,
    placeShip,
    receiveAttack,
    areAllShipsSunk,
  };
};

module.exports = Gameboard;


/***/ }),

/***/ "./src/scripts/player.js":
/*!*******************************!*\
  !*** ./src/scripts/player.js ***!
  \*******************************/
/***/ ((module) => {

const Player = (type = "human") => {
  const playerType = type;
  const attacksMade = [];
  const registerAttack = (attack) => {
    attacksMade.push(attack);
  };
  const sendAttack = (coordinates, enemyGameBoard) =>
    enemyGameBoard.receiveAttack(coordinates);

  const getRandomInclusive = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);

  const isAttackMade = (coordinates) =>
    attacksMade.find(
      (attack) =>
        attack.coordinates.x === coordinates.x &&
        attack.coordinates.y === coordinates.y,
    );

  const getRandomCoordinates = () => {
    let coordinates;
    do {
      const x = getRandomInclusive(0, 9);
      const y = getRandomInclusive(0, 9);
      coordinates = { x, y };
    } while (isAttackMade(coordinates));
    return coordinates;
  };

  const isCoordinateValid = (coordinate) =>
    coordinate.x >= 0 &&
    coordinate.x <= 9 &&
    coordinate.y >= 0 &&
    coordinate.y <= 9;

  const getAdjacentCells = (coordinates) => {
    const adjacentCells = [
      { x: coordinates.x - 1, y: coordinates.y },
      { x: coordinates.x, y: coordinates.y + 1 },
      { x: coordinates.x - 1, y: coordinates.y },
      { x: coordinates.x, y: coordinates.y - 1 },
    ];
    const validCells = adjacentCells.filter((coordinate) =>
      isCoordinateValid(coordinate),
    );
    return validCells.filter((cell) => !isAttackMade(cell));
  };

  const calculateAttack = () => {
    if (playerType !== "computer") {
      return {};
    }
    const lastAttack = attacksMade[attacksMade.length - 1];
    let adjacentCells;
    let coordinates;
    if (lastAttack && lastAttack.result) {
      adjacentCells = getAdjacentCells(lastAttack.coordinates);
      if (adjacentCells.length !== 0) {
        const random = Math.floor(Math.random() * adjacentCells.length);
        coordinates = adjacentCells[random];
      } else {
        coordinates = getRandomCoordinates();
      }
    } else {
      coordinates = getRandomCoordinates();
    }
    return coordinates;
  };
  return { sendAttack, calculateAttack, registerAttack };
};

module.exports = Player;


/***/ }),

/***/ "./src/scripts/ship.js":
/*!*****************************!*\
  !*** ./src/scripts/ship.js ***!
  \*****************************/
/***/ ((module) => {

const Ship = (length) => {
  let hits = 0;
  const getHits = () => hits;
  const hit = () => {
    hits += 1;
  };
  const isSunk = () => length === getHits();
  return { length, getHits, hit, isSunk };
};

module.exports = Ship;


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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _scripts_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/dom */ "./src/scripts/dom.js");
/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/game */ "./src/scripts/game.js");
/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scripts_game__WEBPACK_IMPORTED_MODULE_2__);




const myDOM = (0,_scripts_dom__WEBPACK_IMPORTED_MODULE_1__["default"])();
const myGame = _scripts_game__WEBPACK_IMPORTED_MODULE_2___default()();
const gameObjects = myGame.createObjects();
myDOM.loadPage(Object.assign(gameObjects, { isGameOver: myGame.isGameOver }));

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ3RFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEIsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUSx3Q0FBd0M7QUFDaEQsUUFBUSx3Q0FBd0M7QUFDaEQsUUFBUSx3Q0FBd0M7QUFDaEQsUUFBUSx3Q0FBd0M7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBOzs7Ozs7Ozs7OztBQ3ZFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTs7Ozs7OztVQ1ZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ1c7QUFDRTs7QUFFbEMsY0FBYyx3REFBRztBQUNqQixlQUFlLG9EQUFJO0FBQ25CO0FBQ0EsNENBQTRDLCtCQUErQiIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL2RvbS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgaHRtbCxcbmJvZHksXG5kaXYsXG5zcGFuLFxuYXBwbGV0LFxub2JqZWN0LFxuaWZyYW1lLFxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2LFxucCxcbmJsb2NrcXVvdGUsXG5wcmUsXG5hLFxuYWJicixcbmFjcm9ueW0sXG5hZGRyZXNzLFxuYmlnLFxuY2l0ZSxcbmNvZGUsXG5kZWwsXG5kZm4sXG5lbSxcbmltZyxcbmlucyxcbmtiZCxcbnEsXG5zLFxuc2FtcCxcbnNtYWxsLFxuc3RyaWtlLFxuc3Ryb25nLFxuc3ViLFxuc3VwLFxudHQsXG52YXIsXG5iLFxudSxcbmksXG5jZW50ZXIsXG5kbCxcbmR0LFxuZGQsXG5vbCxcbnVsLFxubGksXG5maWVsZHNldCxcbmZvcm0sXG5sYWJlbCxcbmxlZ2VuZCxcbnRhYmxlLFxuY2FwdGlvbixcbnRib2R5LFxudGZvb3QsXG50aGVhZCxcbnRyLFxudGgsXG50ZCxcbmFydGljbGUsXG5hc2lkZSxcbmNhbnZhcyxcbmRldGFpbHMsXG5lbWJlZCxcbmZpZ3VyZSxcbmZpZ2NhcHRpb24sXG5mb290ZXIsXG5oZWFkZXIsXG5oZ3JvdXAsXG5tZW51LFxubmF2LFxub3V0cHV0LFxucnVieSxcbnNlY3Rpb24sXG5zdW1tYXJ5LFxudGltZSxcbm1hcmssXG5hdWRpbyxcbnZpZGVvIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IDA7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbiAgZm9udDogaW5oZXJpdDtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xuYXJ0aWNsZSxcbmFzaWRlLFxuZGV0YWlscyxcbmZpZ2NhcHRpb24sXG5maWd1cmUsXG5mb290ZXIsXG5oZWFkZXIsXG5oZ3JvdXAsXG5tZW51LFxubmF2LFxuc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuYm9keSB7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxub2wsXG51bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5ibG9ja3F1b3RlLFxucSB7XG4gIHF1b3Rlczogbm9uZTtcbn1cbmJsb2NrcXVvdGU6YmVmb3JlLFxuYmxvY2txdW90ZTphZnRlcixcbnE6YmVmb3JlLFxucTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGNvbnRlbnQ6IG5vbmU7XG59XG50YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xufVxuXG4vKiBFbmQgcmVzZXQgc3R5bGVzICovXG5cbmh0bWwsXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5tYWluIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59XG5cbi5nYW1lYm9hcmQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAyMHB4O1xufVxuXG4uZ2FtZWJvYXJkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTEsIG1pbm1heCgxMHB4LCA1MHB4KSk7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDExLCBtaW5tYXgoMTBweCwgNTBweCkpO1xufVxuXG4uY2VsbC1jb250YWluZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwO1xufVxuXG4uY2VsbCB7XG4gIGp1c3RpZnktc2VsZjogc3RyZXRjaDtcbn1cblxuLmVuZW15LWNlbGwge1xuICBkaXNwbGF5OiBncmlkO1xufVxuXG4uZW5lbXktY2VsbDpob3ZlciB7XG4gIGJvcmRlcjogM3B4IHNvbGlkICNiNDUzMDk7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG59XG5cbi5lbmVteS1jZWxsOmhvdmVyID4gYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1OWUwYjtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcbn1cblxuLm51bWJlcixcbi5sZXR0ZXIge1xuICBwbGFjZS1zZWxmOiBjZW50ZXI7XG59XG5cbi5ncmlkLWxlZ2VuZCB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLnNoaXAge1xuICBib3JkZXI6IDJweCBzb2xpZCAjMDAwMGZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWRkOGU2O1xufVxuXG4uc2hpcC1hdHRhY2tlZCB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNiOTFjMWM7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2E1YTU7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XG59XG5cbi5taXNzZWQtYXR0YWNrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2EzYTNhMztcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcbn1cblxuLnNoaXAtYXR0YWNrZWQsXG4ubWlzc2VkLWF0dGFjayB7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWlGRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLFNBQVM7RUFDVCxlQUFlO0VBQ2YsYUFBYTtFQUNiLHdCQUF3QjtBQUMxQjtBQUNBLGdEQUFnRDtBQUNoRDs7Ozs7Ozs7Ozs7RUFXRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7O0VBRUUsZ0JBQWdCO0FBQ2xCO0FBQ0E7O0VBRUUsWUFBWTtBQUNkO0FBQ0E7Ozs7RUFJRSxXQUFXO0VBQ1gsYUFBYTtBQUNmO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsaUJBQWlCO0FBQ25COztBQUVBLHFCQUFxQjs7QUFFckI7O0VBRUUsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtEQUFrRDtFQUNsRCxxREFBcUQ7QUFDdkQ7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHlCQUF5QjtBQUMzQjs7QUFFQTs7RUFFRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6Qix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIseUJBQXlCO0FBQzNCOztBQUVBOztFQUVFLG1CQUFtQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sLFxcbmJvZHksXFxuZGl2LFxcbnNwYW4sXFxuYXBwbGV0LFxcbm9iamVjdCxcXG5pZnJhbWUsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxucCxcXG5ibG9ja3F1b3RlLFxcbnByZSxcXG5hLFxcbmFiYnIsXFxuYWNyb255bSxcXG5hZGRyZXNzLFxcbmJpZyxcXG5jaXRlLFxcbmNvZGUsXFxuZGVsLFxcbmRmbixcXG5lbSxcXG5pbWcsXFxuaW5zLFxcbmtiZCxcXG5xLFxcbnMsXFxuc2FtcCxcXG5zbWFsbCxcXG5zdHJpa2UsXFxuc3Ryb25nLFxcbnN1YixcXG5zdXAsXFxudHQsXFxudmFyLFxcbmIsXFxudSxcXG5pLFxcbmNlbnRlcixcXG5kbCxcXG5kdCxcXG5kZCxcXG5vbCxcXG51bCxcXG5saSxcXG5maWVsZHNldCxcXG5mb3JtLFxcbmxhYmVsLFxcbmxlZ2VuZCxcXG50YWJsZSxcXG5jYXB0aW9uLFxcbnRib2R5LFxcbnRmb290LFxcbnRoZWFkLFxcbnRyLFxcbnRoLFxcbnRkLFxcbmFydGljbGUsXFxuYXNpZGUsXFxuY2FudmFzLFxcbmRldGFpbHMsXFxuZW1iZWQsXFxuZmlndXJlLFxcbmZpZ2NhcHRpb24sXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxub3V0cHV0LFxcbnJ1YnksXFxuc2VjdGlvbixcXG5zdW1tYXJ5LFxcbnRpbWUsXFxubWFyayxcXG5hdWRpbyxcXG52aWRlbyB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsXFxuYXNpZGUsXFxuZGV0YWlscyxcXG5maWdjYXB0aW9uLFxcbmZpZ3VyZSxcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCxcXG51bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLFxcbnEge1xcbiAgcXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSxcXG5ibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLFxcbnE6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbi8qIEVuZCByZXNldCBzdHlsZXMgKi9cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuXFxuLmdhbWVib2FyZC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbi5nYW1lYm9hcmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDExLCBtaW5tYXgoMTBweCwgNTBweCkpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTEsIG1pbm1heCgxMHB4LCA1MHB4KSk7XFxufVxcblxcbi5jZWxsLWNvbnRhaW5lciB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwO1xcbn1cXG5cXG4uY2VsbCB7XFxuICBqdXN0aWZ5LXNlbGY6IHN0cmV0Y2g7XFxufVxcblxcbi5lbmVteS1jZWxsIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi5lbmVteS1jZWxsOmhvdmVyIHtcXG4gIGJvcmRlcjogM3B4IHNvbGlkICNiNDUzMDk7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xcbn1cXG5cXG4uZW5lbXktY2VsbDpob3ZlciA+IGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjU5ZTBiO1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcXG59XFxuXFxuLm51bWJlcixcXG4ubGV0dGVyIHtcXG4gIHBsYWNlLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmdyaWQtbGVnZW5kIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLnNoaXAge1xcbiAgYm9yZGVyOiAycHggc29saWQgIzAwMDBmZjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhZGQ4ZTY7XFxufVxcblxcbi5zaGlwLWF0dGFja2VkIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNiOTFjMWM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNhNWE1O1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcXG59XFxuXFxuLm1pc3NlZC1hdHRhY2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2EzYTNhMztcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XFxufVxcblxcbi5zaGlwLWF0dGFja2VkLFxcbi5taXNzZWQtYXR0YWNrIHtcXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBET00oKSB7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNjcmlwdFwiKTtcbiAgY29uc3QgY3JlYXRlSDEgPSAoKSA9PiB7XG4gICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgaDEudGV4dENvbnRlbnQgPSBcIkdlbmVyaWMgQmF0dGxlc2hpcCBhcHAgbmFtZVwiO1xuICAgIHJldHVybiBoMTtcbiAgfTtcblxuICBjb25zdCBsb2FkSGVhZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG4gICAgY29uc3QgaDEgPSBjcmVhdGVIMSgpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChoMSk7XG4gICAgYm9keS5pbnNlcnRCZWZvcmUoaGVhZGVyLCBzY3JpcHQpO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZURpdiA9IChhcmdzID0ge30pID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGlmIChhcmdzLmNsYXNzTmFtZSkge1xuICAgICAgZGl2LmNsYXNzTmFtZSA9IGFyZ3MuY2xhc3NOYW1lO1xuICAgIH1cbiAgICBpZiAoYXJncy50ZXh0Q29udGVudCkge1xuICAgICAgZGl2LnRleHRDb250ZW50ID0gYXJncy50ZXh0Q29udGVudDtcbiAgICB9XG4gICAgcmV0dXJuIGRpdjtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVCdXR0b24gPSAoY2xhc3NOYW1lKSA9PiB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidXR0b24uY2xhc3NMaXN0ID0gY2xhc3NOYW1lO1xuICAgIHJldHVybiBidXR0b247XG4gIH07XG5cbiAgY29uc3QgZ2V0TGV0dGVyID0gKGNvbHVtbikgPT4ge1xuICAgIHN3aXRjaCAoY29sdW1uKSB7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIHJldHVybiBcIkFcIjtcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgcmV0dXJuIFwiQlwiO1xuICAgICAgY2FzZSA0OlxuICAgICAgICByZXR1cm4gXCJDXCI7XG4gICAgICBjYXNlIDU6XG4gICAgICAgIHJldHVybiBcIkRcIjtcbiAgICAgIGNhc2UgNjpcbiAgICAgICAgcmV0dXJuIFwiRVwiO1xuICAgICAgY2FzZSA3OlxuICAgICAgICByZXR1cm4gXCJGXCI7XG4gICAgICBjYXNlIDg6XG4gICAgICAgIHJldHVybiBcIkdcIjtcbiAgICAgIGNhc2UgOTpcbiAgICAgICAgcmV0dXJuIFwiSFwiO1xuICAgICAgY2FzZSAxMDpcbiAgICAgICAgcmV0dXJuIFwiSVwiO1xuICAgICAgY2FzZSAxMTpcbiAgICAgICAgcmV0dXJuIFwiSlwiO1xuICAgICAgLy8gbm8gZGVmYXVsdFxuICAgIH1cbiAgfTtcblxuICBjb25zdCBhZGRCdXR0b24gPSAoYXJncykgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnRDb3B5ID0gYXJncy5lbGVtZW50LmNsb25lTm9kZSgpO1xuICAgIGNvbnN0IGJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbihcImNlbGxcIik7XG4gICAgZWxlbWVudENvcHkuY2xhc3NMaXN0LmFkZChcImVuZW15LWNlbGxcIik7XG4gICAgZWxlbWVudENvcHkuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICByZXR1cm4gZWxlbWVudENvcHk7XG4gIH07XG5cbiAgY29uc3QgbG9hZFNoaXAgPSAoYXJncykgPT4ge1xuICAgIGNvbnN0IGNlbGxDb3B5ID0gYXJncy5lbGVtZW50LmNsb25lTm9kZSgpO1xuICAgIGNvbnN0IGNlbGxWYWx1ZSA9XG4gICAgICBhcmdzLmdhbWVib2FyZEdyaWRPYmplY3RbYXJncy5jb29yZGluYXRlcy54XVthcmdzLmNvb3JkaW5hdGVzLnldO1xuICAgIGlmIChKU09OLnN0cmluZ2lmeShjZWxsVmFsdWUpICE9PSBKU09OLnN0cmluZ2lmeSh7fSkpIHtcbiAgICAgIGNlbGxDb3B5LmNsYXNzTGlzdC5hZGQoXCJzaGlwXCIpO1xuICAgIH1cbiAgICByZXR1cm4gY2VsbENvcHk7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlQ2VsbCA9IChhcmdzKSA9PiB7XG4gICAgbGV0IGNlbGwgPSBjcmVhdGVEaXYoKTtcbiAgICBjb25zdCB7IHJvdyB9ID0gYXJncztcbiAgICBjb25zdCB7IGNvbHVtbiB9ID0gYXJncztcbiAgICBjb25zdCB7IGh1bWFuR2FtZWJvYXJkR3JpZCB9ID0gYXJncztcblxuICAgIGlmIChyb3cgPj0gMiAmJiBjb2x1bW4gPj0gMikge1xuICAgICAgY2VsbC5jbGFzc0xpc3QgPSBcImNlbGwtY29udGFpbmVyXCI7XG4gICAgICBjZWxsLnNldEF0dHJpYnV0ZShcImRhdGEteC1jb29yZGluYXRlXCIsIHJvdyAtIDIpO1xuICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXktY29vcmRpbmF0ZVwiLCBjb2x1bW4gLSAyKTtcbiAgICAgIGNlbGwgPSBhcmdzLmNiKHtcbiAgICAgICAgZWxlbWVudDogY2VsbCxcbiAgICAgICAgZ2FtZWJvYXJkR3JpZE9iamVjdDogaHVtYW5HYW1lYm9hcmRHcmlkLFxuICAgICAgICBjb29yZGluYXRlczogeyB4OiByb3cgLSAyLCB5OiBjb2x1bW4gLSAyIH0sXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHJvdyA+PSAyICYmIGNvbHVtbiA9PT0gMSkge1xuICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwibnVtYmVyXCIpO1xuICAgICAgY2VsbC50ZXh0Q29udGVudCA9IGAke3JvdyAtIDF9YDtcbiAgICB9IGVsc2UgaWYgKHJvdyA9PT0gMSAmJiBjb2x1bW4gPj0gMikge1xuICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwibGV0dGVyXCIpO1xuICAgICAgY2VsbC50ZXh0Q29udGVudCA9IGdldExldHRlcihjb2x1bW4pO1xuICAgIH1cbiAgICByZXR1cm4gY2VsbDtcbiAgfTtcblxuICBjb25zdCBsb2FkQ2VsbHMgPSAoYXJncykgPT4ge1xuICAgIGNvbnN0IGdhbWVib2FyZCA9IGNyZWF0ZURpdih7IGNsYXNzTmFtZTogXCJnYW1lYm9hcmRcIiB9KTtcbiAgICBjb25zdCBodW1hbkdhbWVib2FyZEdyaWQgPSBhcmdzLmh1bWFuR2FtZWJvYXJkLmdldEdyaWQoKTtcbiAgICBjb25zdCBsaW5lTGVuZ3RoID0gMTE7XG4gICAgZm9yIChsZXQgcm93ID0gMTsgcm93IDw9IGxpbmVMZW5ndGg7IHJvdyArPSAxKSB7XG4gICAgICBmb3IgKGxldCBjb2x1bW4gPSAxOyBjb2x1bW4gPD0gbGluZUxlbmd0aDsgY29sdW1uICs9IDEpIHtcbiAgICAgICAgY29uc3QgY2VsbCA9IGNyZWF0ZUNlbGwoeyAuLi5hcmdzLCByb3csIGNvbHVtbiwgaHVtYW5HYW1lYm9hcmRHcmlkIH0pO1xuICAgICAgICBnYW1lYm9hcmQuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBnYW1lYm9hcmQ7XG4gIH07XG5cbiAgY29uc3QgbG9hZEdhbWVib2FyZCA9IChhcmdzKSA9PiB7XG4gICAgY29uc3QgZ2FtZWJvYXJkQ29udGFpbmVyID0gY3JlYXRlRGl2KHsgY2xhc3NOYW1lOiBcImdhbWVib2FyZC1jb250YWluZXJcIiB9KTtcbiAgICBjb25zdCBncmlkTGVnZW5kID0gY3JlYXRlRGl2KHtcbiAgICAgIGNsYXNzTmFtZTogXCJncmlkLWxlZ2VuZFwiLFxuICAgICAgdGV4dENvbnRlbnQ6IGFyZ3MudGV4dCxcbiAgICB9KTtcbiAgICBjb25zdCBnYW1lYm9hcmQgPSBsb2FkQ2VsbHMoYXJncyk7XG4gICAgZ2FtZWJvYXJkQ29udGFpbmVyLmFwcGVuZChnYW1lYm9hcmQsIGdyaWRMZWdlbmQpO1xuICAgIHJldHVybiBnYW1lYm9hcmRDb250YWluZXI7XG4gIH07XG5cbiAgY29uc3QgbG9hZE1haW4gPSAoYXJncykgPT4ge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcbiAgICBjb25zdCBtYWluUGxheWVyR2FtZWJvYXJkID0gbG9hZEdhbWVib2FyZCh7XG4gICAgICAuLi5hcmdzLFxuICAgICAgdGV4dDogXCJZb3VyIGdyaWRcIixcbiAgICAgIGNiOiBsb2FkU2hpcCxcbiAgICB9KTtcbiAgICBjb25zdCB0cmFja2luZ1BsYXllckdhbWVib2FyZCA9IGxvYWRHYW1lYm9hcmQoe1xuICAgICAgLi4uYXJncyxcbiAgICAgIHRleHQ6IFwiWW91ciBlbmVteSBncmlkXCIsXG4gICAgICBjYjogYWRkQnV0dG9uLFxuICAgIH0pO1xuICAgIG1haW4uYXBwZW5kKG1haW5QbGF5ZXJHYW1lYm9hcmQsIHRyYWNraW5nUGxheWVyR2FtZWJvYXJkKTtcbiAgICBib2R5Lmluc2VydEJlZm9yZShtYWluLCBzY3JpcHQpO1xuICB9O1xuXG4gIGNvbnN0IGxvYWRGb290ZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcbiAgICBib2R5Lmluc2VydEJlZm9yZShmb290ZXIsIHNjcmlwdCk7XG4gIH07XG5cbiAgY29uc3QgZ2V0Q29vcmRpbmF0ZXMgPSAoZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHggPSBOdW1iZXIoZWxlbWVudC5kYXRhc2V0LnhDb29yZGluYXRlKTtcbiAgICBjb25zdCB5ID0gTnVtYmVyKGVsZW1lbnQuZGF0YXNldC55Q29vcmRpbmF0ZSk7XG4gICAgcmV0dXJuIHsgeCwgeSB9O1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZUdhbWVib2FyZCA9IChhdHRhY2tSZXN1bHQsIGNlbGxEaXYpID0+IHtcbiAgICBpZiAoYXR0YWNrUmVzdWx0KSB7XG4gICAgICBjZWxsRGl2LmNsYXNzTGlzdC5hZGQoXCJzaGlwLWF0dGFja2VkXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjZWxsRGl2LmNsYXNzTGlzdC5hZGQoXCJtaXNzZWQtYXR0YWNrXCIpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBodW1hblR1cm4gPSAoYXJncykgPT4ge1xuICAgIGNvbnN0IHsgYnV0dG9uIH0gPSBhcmdzO1xuICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gZ2V0Q29vcmRpbmF0ZXMoYnV0dG9uLnBhcmVudE5vZGUpO1xuICAgIGNvbnN0IGh1bWFuUmVzdWx0ID0gYXJncy5odW1hblBsYXllci5zZW5kQXR0YWNrKFxuICAgICAgY29vcmRpbmF0ZXMsXG4gICAgICBhcmdzLmNvbXB1dGVyR2FtZWJvYXJkLFxuICAgICk7XG4gICAgdXBkYXRlR2FtZWJvYXJkKGh1bWFuUmVzdWx0LCBidXR0b24ucGFyZW50Tm9kZSk7XG4gICAgYnV0dG9uLnJlbW92ZSgpO1xuICB9O1xuXG4gIGNvbnN0IGNvbXB1dGVyVHVybiA9IChhcmdzKSA9PiB7XG4gICAgY29uc3QgeyBodW1hbkdhbWVib2FyZCB9ID0gYXJncztcbiAgICBjb25zdCB7IGNvbXB1dGVyUGxheWVyIH0gPSBhcmdzO1xuICAgIGNvbnN0IGNvbXB1dGVyQ29vcmRpbmF0ZXMgPSBjb21wdXRlclBsYXllci5jYWxjdWxhdGVBdHRhY2soaHVtYW5HYW1lYm9hcmQpO1xuICAgIGNvbnN0IGNvbXB1dGVyUmVzdWx0ID0gY29tcHV0ZXJQbGF5ZXIuc2VuZEF0dGFjayhcbiAgICAgIGNvbXB1dGVyQ29vcmRpbmF0ZXMsXG4gICAgICBodW1hbkdhbWVib2FyZCxcbiAgICApO1xuICAgIGNvbXB1dGVyUGxheWVyLnJlZ2lzdGVyQXR0YWNrKHtcbiAgICAgIGNvb3JkaW5hdGVzOiBjb21wdXRlckNvb3JkaW5hdGVzLFxuICAgICAgcmVzdWx0OiBjb21wdXRlclJlc3VsdCxcbiAgICB9KTtcbiAgICBjb25zdCBjZWxsID0gYXJncy5teUdhbWVib2FyZC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYGRpdltkYXRhLXgtY29vcmRpbmF0ZT1cIiR7Y29tcHV0ZXJDb29yZGluYXRlcy54fVwiXVtkYXRhLXktY29vcmRpbmF0ZT1cIiR7Y29tcHV0ZXJDb29yZGluYXRlcy55fVwiXWAsXG4gICAgKTtcbiAgICB1cGRhdGVHYW1lYm9hcmQoY29tcHV0ZXJSZXN1bHQsIGNlbGwpO1xuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZUJ1dHRvbnMgPSAoZW5lbXlHYW1lYm9hcmQpID0+IHtcbiAgICBjb25zdCBidXR0b25zID0gZW5lbXlHYW1lYm9hcmQucXVlcnlTZWxlY3RvckFsbChcImRpdiA+IGJ1dHRvblwiKTtcbiAgICBjb25zdCBidXR0b25zQXJyYXkgPSBBcnJheS5mcm9tKGJ1dHRvbnMpO1xuICAgIGJ1dHRvbnNBcnJheS5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgIGlmICghYnV0dG9uLnBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2hpcC1hdHRhY2tlZFwiKSkge1xuICAgICAgICBidXR0b24ucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKFwibWlzc2VkLWF0dGFja1wiKTtcbiAgICAgIH1cbiAgICAgIGJ1dHRvbi5yZW1vdmUoKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBnZXRWaWN0b3J5TWVzc2FnZSA9IChnYW1lQm9hcmQpID0+IHtcbiAgICBpZiAoZ2FtZUJvYXJkLmFyZUFsbFNoaXBzU3VuaygpKSB7XG4gICAgICByZXR1cm4gXCJZb3Ugd2luXCI7XG4gICAgfVxuICAgIHJldHVybiBcIkNvbXB1dGVyIFdpbnNcIjtcbiAgfTtcblxuICBjb25zdCBsb2FkVmljdG9yeU1lc3NhZ2UgPSAobWVzc2FnZSkgPT4ge1xuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG4gICAgcC50ZXh0Q29udGVudCA9IG1lc3NhZ2U7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChwKTtcbiAgfTtcblxuICBjb25zdCBhZGRFbmVtZXlHYW1lYm9hcmRMaXN0ZW5lciA9IChhcmdzKSA9PiB7XG4gICAgY29uc3QgZW5lbXlHYW1lYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgXCJtYWluID4gZGl2Om50aC1jaGlsZCgyKSA+IGRpdjpmaXJzdC1jaGlsZFwiLFxuICAgICk7XG4gICAgY29uc3QgbXlHYW1lYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgXCJtYWluID4gZGl2OmZpcnN0LWNoaWxkID4gZGl2OmZpcnN0LWNoaWxkXCIsXG4gICAgKTtcbiAgICBlbmVteUdhbWVib2FyZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0Lm1hdGNoZXMoXCJidXR0b25cIikpIHtcbiAgICAgICAgaHVtYW5UdXJuKHsgLi4uYXJncywgYnV0dG9uOiBldmVudC50YXJnZXQgfSk7XG4gICAgICAgIGNvbXB1dGVyVHVybih7IC4uLmFyZ3MsIG15R2FtZWJvYXJkIH0pO1xuICAgICAgICBpZiAoYXJncy5pc0dhbWVPdmVyKGFyZ3MuaHVtYW5HYW1lYm9hcmQsIGFyZ3MuY29tcHV0ZXJHYW1lYm9hcmQpKSB7XG4gICAgICAgICAgZGVsZXRlQnV0dG9ucyhlbmVteUdhbWVib2FyZCk7XG4gICAgICAgICAgY29uc3QgdmljdG9yeU1lc3NhZ2UgPSBnZXRWaWN0b3J5TWVzc2FnZShhcmdzLmNvbXB1dGVyR2FtZWJvYXJkKTtcbiAgICAgICAgICBsb2FkVmljdG9yeU1lc3NhZ2UodmljdG9yeU1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgbG9hZFBhZ2UgPSAoYXJncykgPT4ge1xuICAgIGxvYWRIZWFkZXIoKTtcbiAgICBsb2FkTWFpbihhcmdzKTtcbiAgICBsb2FkRm9vdGVyKCk7XG4gICAgYWRkRW5lbWV5R2FtZWJvYXJkTGlzdGVuZXIoe1xuICAgICAgaHVtYW5QbGF5ZXI6IGFyZ3MuaHVtYW5QbGF5ZXIsXG4gICAgICBodW1hbkdhbWVib2FyZDogYXJncy5odW1hbkdhbWVib2FyZCxcbiAgICAgIGNvbXB1dGVyUGxheWVyOiBhcmdzLmNvbXB1dGVyUGxheWVyLFxuICAgICAgY29tcHV0ZXJHYW1lYm9hcmQ6IGFyZ3MuY29tcHV0ZXJHYW1lYm9hcmQsXG4gICAgICBpc0dhbWVPdmVyOiBhcmdzLmlzR2FtZU92ZXIsXG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIHsgbG9hZFBhZ2UgfTtcbn1cbiIsImNvbnN0IEdhbWVib2FyZCA9IHJlcXVpcmUoXCIuL2dhbWVib2FyZFwiKTtcbmNvbnN0IFBsYXllciA9IHJlcXVpcmUoXCIuL3BsYXllclwiKTtcblxuY29uc3QgR2FtZSA9ICgpID0+IHtcbiAgY29uc3QgcG9wdWxhdGVHYW1lYm9hcmQgPSAoZ2FtZWJvYXJkKSA9PiB7XG4gICAgZ2FtZWJvYXJkLnBsYWNlU2hpcCh7IHg6IDEsIHk6IDMgfSwgMSwgXCJob3Jpem9udGFsXCIpO1xuICAgIGdhbWVib2FyZC5wbGFjZVNoaXAoeyB4OiA3LCB5OiA3IH0sIDIsIFwidmVydGljYWxcIik7XG4gICAgZ2FtZWJvYXJkLnBsYWNlU2hpcCh7IHg6IDQsIHk6IDMgfSwgMywgXCJob3Jpem9udGFsXCIpO1xuICAgIGdhbWVib2FyZC5wbGFjZVNoaXAoeyB4OiAwLCB5OiA4IH0sIDQsIFwidmVydGljYWxcIik7XG4gICAgZ2FtZWJvYXJkLnBsYWNlU2hpcCh7IHg6IDcsIHk6IDAgfSwgNSwgXCJob3Jpem9udGFsXCIpO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZU9iamVjdHMgPSAoKSA9PiB7XG4gICAgY29uc3QgaHVtYW5QbGF5ZXIgPSBQbGF5ZXIoKTtcbiAgICBjb25zdCBjb21wdXRlclBsYXllciA9IFBsYXllcihcImNvbXB1dGVyXCIpO1xuICAgIGNvbnN0IGh1bWFuR2FtZWJvYXJkID0gR2FtZWJvYXJkKCk7XG4gICAgcG9wdWxhdGVHYW1lYm9hcmQoaHVtYW5HYW1lYm9hcmQpO1xuICAgIGNvbnN0IGh1bWFuVHJhY2tpbmdHYW1lYm9hcmQgPSBHYW1lYm9hcmQoKTtcbiAgICBjb25zdCBjb21wdXRlckdhbWVib2FyZCA9IEdhbWVib2FyZCgpO1xuICAgIHBvcHVsYXRlR2FtZWJvYXJkKGNvbXB1dGVyR2FtZWJvYXJkKTtcbiAgICBjb25zdCBjb21wdXRlclRyYWNraW5nR2FtZWJvYXJkID0gR2FtZWJvYXJkKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGh1bWFuUGxheWVyLFxuICAgICAgY29tcHV0ZXJQbGF5ZXIsXG4gICAgICBodW1hbkdhbWVib2FyZCxcbiAgICAgIGh1bWFuVHJhY2tpbmdHYW1lYm9hcmQsXG4gICAgICBjb21wdXRlckdhbWVib2FyZCxcbiAgICAgIGNvbXB1dGVyVHJhY2tpbmdHYW1lYm9hcmQsXG4gICAgfTtcbiAgfTtcblxuICBjb25zdCBpc0dhbWVPdmVyID0gKGh1bWFuR2FtZWJvYXJkLCBjb21wdXRlckdhbWVib2FyZCkgPT5cbiAgICBodW1hbkdhbWVib2FyZC5hcmVBbGxTaGlwc1N1bmsoKSB8fCBjb21wdXRlckdhbWVib2FyZC5hcmVBbGxTaGlwc1N1bmsoKTtcblxuICByZXR1cm4geyBjcmVhdGVPYmplY3RzLCBpc0dhbWVPdmVyIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWU7XG4iLCJjb25zdCBTaGlwID0gcmVxdWlyZShcIi4vc2hpcFwiKTtcblxuY29uc3QgR2FtZWJvYXJkID0gKCkgPT4ge1xuICBjb25zdCBncmlkID0gW107XG4gIGNvbnN0IG1pc3NlZEF0dGFja3MgPSBbXTtcbiAgY29uc3QgcmFuZ2UgPSAobnVtKSA9PiBbLi4uQXJyYXkobnVtKS5rZXlzKCldO1xuXG4gIGNvbnN0IHBsYWNlU2hpcCA9IChjb29yZGluYXRlcywgc2hpcExlbmd0aCwgZGlyZWN0aW9uKSA9PiB7XG4gICAgY29uc3QgbmV3U2hpcCA9IFNoaXAoc2hpcExlbmd0aCk7XG4gICAgY29uc3Qgc2hpcFJhbmdlID0gcmFuZ2Uoc2hpcExlbmd0aCk7XG4gICAgc2hpcFJhbmdlLmZvckVhY2goKGkpID0+IHtcbiAgICAgIGlmIChkaXJlY3Rpb24gPT09IFwidmVydGljYWxcIikge1xuICAgICAgICBncmlkW2Nvb3JkaW5hdGVzLnggKyBpXVtjb29yZGluYXRlcy55XSA9IG5ld1NoaXA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBncmlkW2Nvb3JkaW5hdGVzLnhdW2Nvb3JkaW5hdGVzLnkgKyBpXSA9IG5ld1NoaXA7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlR3JpZCA9ICgpID0+IHtcbiAgICBjb25zdCBjb2x1bW5zID0gcmFuZ2UoMTApO1xuICAgIGNvbHVtbnMuZm9yRWFjaCgoYykgPT4ge1xuICAgICAgY29uc3Qgcm93ID0gcmFuZ2UoMTApO1xuICAgICAgZ3JpZFtjXSA9IFtdO1xuICAgICAgcm93LmZvckVhY2goKHIpID0+IHtcbiAgICAgICAgZ3JpZFtjXVtyXSA9IHt9O1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHJlY29yZENvb3JkaW5hdGVzID0gKGNvb3JkaW5hdGVzKSA9PiB7XG4gICAgbWlzc2VkQXR0YWNrcy5wdXNoKGNvb3JkaW5hdGVzKTtcbiAgfTtcblxuICBjb25zdCBpc1NoaXAgPSAoY2VsbCwgcHJvcGVydHkgPSBcImhpdFwiKSA9PiBPYmplY3QuaGFzT3duKGNlbGwsIHByb3BlcnR5KTtcblxuICBjb25zdCByZWNlaXZlQXR0YWNrID0gKGNvb3JkaW5hdGVzLCBjYiA9IHJlY29yZENvb3JkaW5hdGVzKSA9PiB7XG4gICAgY29uc3QgY2VsbENvbnRlbnQgPSBncmlkW2Nvb3JkaW5hdGVzLnhdW2Nvb3JkaW5hdGVzLnldO1xuICAgIGNvbnN0IHNoaXBGb3VuZCA9IGlzU2hpcChjZWxsQ29udGVudCk7XG4gICAgaWYgKHNoaXBGb3VuZCkge1xuICAgICAgY2VsbENvbnRlbnQuaGl0KCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgY2IoY29vcmRpbmF0ZXMpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCBnZXRBbGxTaGlwcyA9ICgpID0+IHtcbiAgICBjb25zdCBncmlkQ29weSA9IGdyaWQuZmxhdCgpO1xuICAgIHJldHVybiBncmlkQ29weS5maWx0ZXIoKGNlbGwpID0+IGlzU2hpcChjZWxsLCBcImlzU3Vua1wiKSk7XG4gIH07XG5cbiAgY29uc3QgYXJlQWxsU2hpcHNTdW5rID0gKCkgPT4ge1xuICAgIGNvbnN0IHNoaXBzID0gZ2V0QWxsU2hpcHMoKTtcbiAgICByZXR1cm4gc2hpcHMuZXZlcnkoKHNoaXApID0+IHNoaXAuaXNTdW5rKCkpO1xuICB9O1xuXG4gIGNvbnN0IGdldEdyaWQgPSAoKSA9PiBncmlkO1xuICBjcmVhdGVHcmlkKCk7XG4gIHJldHVybiB7XG4gICAgbWlzc2VkQXR0YWNrcyxcbiAgICBnZXRHcmlkLFxuICAgIHBsYWNlU2hpcCxcbiAgICByZWNlaXZlQXR0YWNrLFxuICAgIGFyZUFsbFNoaXBzU3VuayxcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gR2FtZWJvYXJkO1xuIiwiY29uc3QgUGxheWVyID0gKHR5cGUgPSBcImh1bWFuXCIpID0+IHtcbiAgY29uc3QgcGxheWVyVHlwZSA9IHR5cGU7XG4gIGNvbnN0IGF0dGFja3NNYWRlID0gW107XG4gIGNvbnN0IHJlZ2lzdGVyQXR0YWNrID0gKGF0dGFjaykgPT4ge1xuICAgIGF0dGFja3NNYWRlLnB1c2goYXR0YWNrKTtcbiAgfTtcbiAgY29uc3Qgc2VuZEF0dGFjayA9IChjb29yZGluYXRlcywgZW5lbXlHYW1lQm9hcmQpID0+XG4gICAgZW5lbXlHYW1lQm9hcmQucmVjZWl2ZUF0dGFjayhjb29yZGluYXRlcyk7XG5cbiAgY29uc3QgZ2V0UmFuZG9tSW5jbHVzaXZlID0gKG1pbiwgbWF4KSA9PlxuICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSArIG1pbik7XG5cbiAgY29uc3QgaXNBdHRhY2tNYWRlID0gKGNvb3JkaW5hdGVzKSA9PlxuICAgIGF0dGFja3NNYWRlLmZpbmQoXG4gICAgICAoYXR0YWNrKSA9PlxuICAgICAgICBhdHRhY2suY29vcmRpbmF0ZXMueCA9PT0gY29vcmRpbmF0ZXMueCAmJlxuICAgICAgICBhdHRhY2suY29vcmRpbmF0ZXMueSA9PT0gY29vcmRpbmF0ZXMueSxcbiAgICApO1xuXG4gIGNvbnN0IGdldFJhbmRvbUNvb3JkaW5hdGVzID0gKCkgPT4ge1xuICAgIGxldCBjb29yZGluYXRlcztcbiAgICBkbyB7XG4gICAgICBjb25zdCB4ID0gZ2V0UmFuZG9tSW5jbHVzaXZlKDAsIDkpO1xuICAgICAgY29uc3QgeSA9IGdldFJhbmRvbUluY2x1c2l2ZSgwLCA5KTtcbiAgICAgIGNvb3JkaW5hdGVzID0geyB4LCB5IH07XG4gICAgfSB3aGlsZSAoaXNBdHRhY2tNYWRlKGNvb3JkaW5hdGVzKSk7XG4gICAgcmV0dXJuIGNvb3JkaW5hdGVzO1xuICB9O1xuXG4gIGNvbnN0IGlzQ29vcmRpbmF0ZVZhbGlkID0gKGNvb3JkaW5hdGUpID0+XG4gICAgY29vcmRpbmF0ZS54ID49IDAgJiZcbiAgICBjb29yZGluYXRlLnggPD0gOSAmJlxuICAgIGNvb3JkaW5hdGUueSA+PSAwICYmXG4gICAgY29vcmRpbmF0ZS55IDw9IDk7XG5cbiAgY29uc3QgZ2V0QWRqYWNlbnRDZWxscyA9IChjb29yZGluYXRlcykgPT4ge1xuICAgIGNvbnN0IGFkamFjZW50Q2VsbHMgPSBbXG4gICAgICB7IHg6IGNvb3JkaW5hdGVzLnggLSAxLCB5OiBjb29yZGluYXRlcy55IH0sXG4gICAgICB7IHg6IGNvb3JkaW5hdGVzLngsIHk6IGNvb3JkaW5hdGVzLnkgKyAxIH0sXG4gICAgICB7IHg6IGNvb3JkaW5hdGVzLnggLSAxLCB5OiBjb29yZGluYXRlcy55IH0sXG4gICAgICB7IHg6IGNvb3JkaW5hdGVzLngsIHk6IGNvb3JkaW5hdGVzLnkgLSAxIH0sXG4gICAgXTtcbiAgICBjb25zdCB2YWxpZENlbGxzID0gYWRqYWNlbnRDZWxscy5maWx0ZXIoKGNvb3JkaW5hdGUpID0+XG4gICAgICBpc0Nvb3JkaW5hdGVWYWxpZChjb29yZGluYXRlKSxcbiAgICApO1xuICAgIHJldHVybiB2YWxpZENlbGxzLmZpbHRlcigoY2VsbCkgPT4gIWlzQXR0YWNrTWFkZShjZWxsKSk7XG4gIH07XG5cbiAgY29uc3QgY2FsY3VsYXRlQXR0YWNrID0gKCkgPT4ge1xuICAgIGlmIChwbGF5ZXJUeXBlICE9PSBcImNvbXB1dGVyXCIpIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gICAgY29uc3QgbGFzdEF0dGFjayA9IGF0dGFja3NNYWRlW2F0dGFja3NNYWRlLmxlbmd0aCAtIDFdO1xuICAgIGxldCBhZGphY2VudENlbGxzO1xuICAgIGxldCBjb29yZGluYXRlcztcbiAgICBpZiAobGFzdEF0dGFjayAmJiBsYXN0QXR0YWNrLnJlc3VsdCkge1xuICAgICAgYWRqYWNlbnRDZWxscyA9IGdldEFkamFjZW50Q2VsbHMobGFzdEF0dGFjay5jb29yZGluYXRlcyk7XG4gICAgICBpZiAoYWRqYWNlbnRDZWxscy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgY29uc3QgcmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYWRqYWNlbnRDZWxscy5sZW5ndGgpO1xuICAgICAgICBjb29yZGluYXRlcyA9IGFkamFjZW50Q2VsbHNbcmFuZG9tXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvb3JkaW5hdGVzID0gZ2V0UmFuZG9tQ29vcmRpbmF0ZXMoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29vcmRpbmF0ZXMgPSBnZXRSYW5kb21Db29yZGluYXRlcygpO1xuICAgIH1cbiAgICByZXR1cm4gY29vcmRpbmF0ZXM7XG4gIH07XG4gIHJldHVybiB7IHNlbmRBdHRhY2ssIGNhbGN1bGF0ZUF0dGFjaywgcmVnaXN0ZXJBdHRhY2sgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUGxheWVyO1xuIiwiY29uc3QgU2hpcCA9IChsZW5ndGgpID0+IHtcbiAgbGV0IGhpdHMgPSAwO1xuICBjb25zdCBnZXRIaXRzID0gKCkgPT4gaGl0cztcbiAgY29uc3QgaGl0ID0gKCkgPT4ge1xuICAgIGhpdHMgKz0gMTtcbiAgfTtcbiAgY29uc3QgaXNTdW5rID0gKCkgPT4gbGVuZ3RoID09PSBnZXRIaXRzKCk7XG4gIHJldHVybiB7IGxlbmd0aCwgZ2V0SGl0cywgaGl0LCBpc1N1bmsgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gU2hpcDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgRE9NIGZyb20gXCIuL3NjcmlwdHMvZG9tXCI7XG5pbXBvcnQgR2FtZSBmcm9tIFwiLi9zY3JpcHRzL2dhbWVcIjtcblxuY29uc3QgbXlET00gPSBET00oKTtcbmNvbnN0IG15R2FtZSA9IEdhbWUoKTtcbmNvbnN0IGdhbWVPYmplY3RzID0gbXlHYW1lLmNyZWF0ZU9iamVjdHMoKTtcbm15RE9NLmxvYWRQYWdlKE9iamVjdC5hc3NpZ24oZ2FtZU9iamVjdHMsIHsgaXNHYW1lT3ZlcjogbXlHYW1lLmlzR2FtZU92ZXIgfSkpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9