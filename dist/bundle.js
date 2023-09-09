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
  const sendAttack = (coordinates, enemyGameBoard) =>
    enemyGameBoard.receiveAttack(coordinates);

  const getRandomInclusive = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);

  const isAttackMade = (coordinates) =>
    attacksMade.find(
      (coordinate) =>
        coordinate.x === coordinates.x && coordinate.y === coordinates.y,
    );

  const calculateAttack = () => {
    if (playerType !== "computer") {
      return {};
    }
    let coordinates;
    do {
      const x = getRandomInclusive(0, 9);
      const y = getRandomInclusive(0, 9);
      coordinates = { x, y };
    } while (isAttackMade(coordinates));
    attacksMade.push(coordinates);
    return coordinates;
  };
  return { sendAttack, calculateAttack };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdLQUFnSyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxNQUFNLFlBQVksZ0JBQWdCLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFVBQVUsS0FBSyxRQUFRLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLE9BQU8sYUFBYSxPQUFPLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLHNsQkFBc2xCLGNBQWMsZUFBZSxjQUFjLG9CQUFvQixrQkFBa0IsNkJBQTZCLEdBQUcsd0pBQXdKLG1CQUFtQixHQUFHLFFBQVEsbUJBQW1CLEdBQUcsV0FBVyxxQkFBcUIsR0FBRyxrQkFBa0IsaUJBQWlCLEdBQUcsNkRBQTZELGtCQUFrQixrQkFBa0IsR0FBRyxTQUFTLDhCQUE4QixzQkFBc0IsR0FBRywyQ0FBMkMsaUJBQWlCLEdBQUcsVUFBVSxrQkFBa0Isa0NBQWtDLEdBQUcsMEJBQTBCLGtCQUFrQiwyQkFBMkIsY0FBYyxHQUFHLGdCQUFnQixrQkFBa0IsdURBQXVELDBEQUEwRCxHQUFHLHFCQUFxQiw4QkFBOEIsR0FBRyxXQUFXLDBCQUEwQixHQUFHLGlCQUFpQixrQkFBa0IsR0FBRyx1QkFBdUIsOEJBQThCLDhCQUE4QixHQUFHLGdDQUFnQyw4QkFBOEIsOEJBQThCLEdBQUcsdUJBQXVCLHVCQUF1QixHQUFHLGtCQUFrQix1QkFBdUIsR0FBRyxXQUFXLDhCQUE4Qiw4QkFBOEIsR0FBRyxvQkFBb0IsOEJBQThCLDhCQUE4Qiw4QkFBOEIsR0FBRyxvQkFBb0IsOEJBQThCLDhCQUE4QixHQUFHLHFDQUFxQyx3QkFBd0IsR0FBRyxxQkFBcUI7QUFDdG5HO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7OztBQy9NMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksc0ZBQU8sVUFBVSxzRkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDYmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFZLE1BQU07QUFDbEIsWUFBWSxTQUFTO0FBQ3JCLFlBQVkscUJBQXFCOztBQUVqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QiwyQkFBMkI7QUFDbEQsT0FBTztBQUNQLE1BQU07QUFDTjtBQUNBLDRCQUE0QixRQUFRO0FBQ3BDLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0NBQWtDLHdCQUF3QjtBQUMxRDtBQUNBO0FBQ0Esc0JBQXNCLG1CQUFtQjtBQUN6QywyQkFBMkIsc0JBQXNCO0FBQ2pELGtDQUFrQywwQ0FBMEM7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJDQUEyQyxrQ0FBa0M7QUFDN0U7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZLFNBQVM7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVksaUJBQWlCO0FBQzdCLFlBQVksaUJBQWlCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxzQkFBc0Isd0JBQXdCLHNCQUFzQjtBQUNwRztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiwrQkFBK0I7QUFDbkQsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUEsV0FBVztBQUNYOzs7Ozs7Ozs7OztBQ3JQQSxrQkFBa0IsbUJBQU8sQ0FBQywrQ0FBYTtBQUN2QyxlQUFlLG1CQUFPLENBQUMseUNBQVU7O0FBRWpDO0FBQ0E7QUFDQSwwQkFBMEIsWUFBWTtBQUN0QywwQkFBMEIsWUFBWTtBQUN0QywwQkFBMEIsWUFBWTtBQUN0QywwQkFBMEIsWUFBWTtBQUN0QywwQkFBMEIsWUFBWTtBQUN0Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7O0FBRUE7Ozs7Ozs7Ozs7O0FDckNBLGFBQWEsbUJBQU8sQ0FBQyxxQ0FBUTs7QUFFN0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDdEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEIsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTs7Ozs7Ozs7Ozs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7Ozs7Ozs7VUNWQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNXO0FBQ0U7O0FBRWxDLGNBQWMsd0RBQUc7QUFDakIsZUFBZSxvREFBSTtBQUNuQjtBQUNBLDRDQUE0QywrQkFBK0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9kb20uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGh0bWwsXG5ib2R5LFxuZGl2LFxuc3BhbixcbmFwcGxldCxcbm9iamVjdCxcbmlmcmFtZSxcbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNixcbnAsXG5ibG9ja3F1b3RlLFxucHJlLFxuYSxcbmFiYnIsXG5hY3JvbnltLFxuYWRkcmVzcyxcbmJpZyxcbmNpdGUsXG5jb2RlLFxuZGVsLFxuZGZuLFxuZW0sXG5pbWcsXG5pbnMsXG5rYmQsXG5xLFxucyxcbnNhbXAsXG5zbWFsbCxcbnN0cmlrZSxcbnN0cm9uZyxcbnN1YixcbnN1cCxcbnR0LFxudmFyLFxuYixcbnUsXG5pLFxuY2VudGVyLFxuZGwsXG5kdCxcbmRkLFxub2wsXG51bCxcbmxpLFxuZmllbGRzZXQsXG5mb3JtLFxubGFiZWwsXG5sZWdlbmQsXG50YWJsZSxcbmNhcHRpb24sXG50Ym9keSxcbnRmb290LFxudGhlYWQsXG50cixcbnRoLFxudGQsXG5hcnRpY2xlLFxuYXNpZGUsXG5jYW52YXMsXG5kZXRhaWxzLFxuZW1iZWQsXG5maWd1cmUsXG5maWdjYXB0aW9uLFxuZm9vdGVyLFxuaGVhZGVyLFxuaGdyb3VwLFxubWVudSxcbm5hdixcbm91dHB1dCxcbnJ1YnksXG5zZWN0aW9uLFxuc3VtbWFyeSxcbnRpbWUsXG5tYXJrLFxuYXVkaW8sXG52aWRlbyB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAwO1xuICBmb250LXNpemU6IDEwMCU7XG4gIGZvbnQ6IGluaGVyaXQ7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cbmFydGljbGUsXG5hc2lkZSxcbmRldGFpbHMsXG5maWdjYXB0aW9uLFxuZmlndXJlLFxuZm9vdGVyLFxuaGVhZGVyLFxuaGdyb3VwLFxubWVudSxcbm5hdixcbnNlY3Rpb24ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbmJvZHkge1xuICBsaW5lLWhlaWdodDogMTtcbn1cbm9sLFxudWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuYmxvY2txdW90ZSxcbnEge1xuICBxdW90ZXM6IG5vbmU7XG59XG5ibG9ja3F1b3RlOmJlZm9yZSxcbmJsb2NrcXVvdGU6YWZ0ZXIsXG5xOmJlZm9yZSxcbnE6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBjb250ZW50OiBub25lO1xufVxudGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItc3BhY2luZzogMDtcbn1cblxuLyogRW5kIHJlc2V0IHN0eWxlcyAqL1xuXG5odG1sLFxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxubWFpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuXG4uZ2FtZWJvYXJkLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMjBweDtcbn1cblxuLmdhbWVib2FyZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDExLCBtaW5tYXgoMTBweCwgNTBweCkpO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMSwgbWlubWF4KDEwcHgsIDUwcHgpKTtcbn1cblxuLmNlbGwtY29udGFpbmVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcbn1cblxuLmNlbGwge1xuICBqdXN0aWZ5LXNlbGY6IHN0cmV0Y2g7XG59XG5cbi5lbmVteS1jZWxsIHtcbiAgZGlzcGxheTogZ3JpZDtcbn1cblxuLmVuZW15LWNlbGw6aG92ZXIge1xuICBib3JkZXI6IDNweCBzb2xpZCAjYjQ1MzA5O1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xufVxuXG4uZW5lbXktY2VsbDpob3ZlciA+IGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNTllMGI7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG59XG5cbi5udW1iZXIsXG4ubGV0dGVyIHtcbiAgcGxhY2Utc2VsZjogY2VudGVyO1xufVxuXG4uZ3JpZC1sZWdlbmQge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi5zaGlwIHtcbiAgYm9yZGVyOiAycHggc29saWQgIzAwMDBmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FkZDhlNjtcbn1cblxuLnNoaXAtYXR0YWNrZWQge1xuICBib3JkZXI6IDJweCBzb2xpZCAjYjkxYzFjO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNhNWE1O1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzO1xufVxuXG4ubWlzc2VkLWF0dGFjayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhM2EzYTM7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XG59XG5cbi5zaGlwLWF0dGFja2VkLFxuLm1pc3NlZC1hdHRhY2sge1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFpRkUsU0FBUztFQUNULFVBQVU7RUFDVixTQUFTO0VBQ1QsZUFBZTtFQUNmLGFBQWE7RUFDYix3QkFBd0I7QUFDMUI7QUFDQSxnREFBZ0Q7QUFDaEQ7Ozs7Ozs7Ozs7O0VBV0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBOztFQUVFLGdCQUFnQjtBQUNsQjtBQUNBOztFQUVFLFlBQVk7QUFDZDtBQUNBOzs7O0VBSUUsV0FBVztFQUNYLGFBQWE7QUFDZjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGlCQUFpQjtBQUNuQjs7QUFFQSxxQkFBcUI7O0FBRXJCOztFQUVFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixrREFBa0Q7RUFDbEQscURBQXFEO0FBQ3ZEOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qix5QkFBeUI7QUFDM0I7O0FBRUE7O0VBRUUsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHlCQUF5QjtBQUMzQjs7QUFFQTs7RUFFRSxtQkFBbUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCxcXG5ib2R5LFxcbmRpdixcXG5zcGFuLFxcbmFwcGxldCxcXG5vYmplY3QsXFxuaWZyYW1lLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbnAsXFxuYmxvY2txdW90ZSxcXG5wcmUsXFxuYSxcXG5hYmJyLFxcbmFjcm9ueW0sXFxuYWRkcmVzcyxcXG5iaWcsXFxuY2l0ZSxcXG5jb2RlLFxcbmRlbCxcXG5kZm4sXFxuZW0sXFxuaW1nLFxcbmlucyxcXG5rYmQsXFxucSxcXG5zLFxcbnNhbXAsXFxuc21hbGwsXFxuc3RyaWtlLFxcbnN0cm9uZyxcXG5zdWIsXFxuc3VwLFxcbnR0LFxcbnZhcixcXG5iLFxcbnUsXFxuaSxcXG5jZW50ZXIsXFxuZGwsXFxuZHQsXFxuZGQsXFxub2wsXFxudWwsXFxubGksXFxuZmllbGRzZXQsXFxuZm9ybSxcXG5sYWJlbCxcXG5sZWdlbmQsXFxudGFibGUsXFxuY2FwdGlvbixcXG50Ym9keSxcXG50Zm9vdCxcXG50aGVhZCxcXG50cixcXG50aCxcXG50ZCxcXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmNhbnZhcyxcXG5kZXRhaWxzLFxcbmVtYmVkLFxcbmZpZ3VyZSxcXG5maWdjYXB0aW9uLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbm91dHB1dCxcXG5ydWJ5LFxcbnNlY3Rpb24sXFxuc3VtbWFyeSxcXG50aW1lLFxcbm1hcmssXFxuYXVkaW8sXFxudmlkZW8ge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmRldGFpbHMsXFxuZmlnY2FwdGlvbixcXG5maWd1cmUsXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxuc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxub2wsXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSxcXG5xIHtcXG4gIHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsXFxuYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSxcXG5xOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgY29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG4vKiBFbmQgcmVzZXQgc3R5bGVzICovXFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcblxcbi5nYW1lYm9hcmQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uZ2FtZWJvYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMSwgbWlubWF4KDEwcHgsIDUwcHgpKTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDExLCBtaW5tYXgoMTBweCwgNTBweCkpO1xcbn1cXG5cXG4uY2VsbC1jb250YWluZXIge1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcXG59XFxuXFxuLmNlbGwge1xcbiAganVzdGlmeS1zZWxmOiBzdHJldGNoO1xcbn1cXG5cXG4uZW5lbXktY2VsbCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4uZW5lbXktY2VsbDpob3ZlciB7XFxuICBib3JkZXI6IDNweCBzb2xpZCAjYjQ1MzA5O1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcXG59XFxuXFxuLmVuZW15LWNlbGw6aG92ZXIgPiBidXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1OWUwYjtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XFxufVxcblxcbi5udW1iZXIsXFxuLmxldHRlciB7XFxuICBwbGFjZS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5ncmlkLWxlZ2VuZCB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5zaGlwIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMDAwZmY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWRkOGU2O1xcbn1cXG5cXG4uc2hpcC1hdHRhY2tlZCB7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjYjkxYzFjO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZjYTVhNTtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XFxufVxcblxcbi5taXNzZWQtYXR0YWNrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhM2EzYTM7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzO1xcbn1cXG5cXG4uc2hpcC1hdHRhY2tlZCxcXG4ubWlzc2VkLWF0dGFjayB7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRE9NKCkge1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzY3JpcHRcIik7XG4gIGNvbnN0IGNyZWF0ZUgxID0gKCkgPT4ge1xuICAgIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGgxLnRleHRDb250ZW50ID0gXCJHZW5lcmljIEJhdHRsZXNoaXAgYXBwIG5hbWVcIjtcbiAgICByZXR1cm4gaDE7XG4gIH07XG5cbiAgY29uc3QgbG9hZEhlYWRlciA9ICgpID0+IHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuICAgIGNvbnN0IGgxID0gY3JlYXRlSDEoKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaDEpO1xuICAgIGJvZHkuaW5zZXJ0QmVmb3JlKGhlYWRlciwgc2NyaXB0KTtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVEaXYgPSAoYXJncyA9IHt9KSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpZiAoYXJncy5jbGFzc05hbWUpIHtcbiAgICAgIGRpdi5jbGFzc05hbWUgPSBhcmdzLmNsYXNzTmFtZTtcbiAgICB9XG4gICAgaWYgKGFyZ3MudGV4dENvbnRlbnQpIHtcbiAgICAgIGRpdi50ZXh0Q29udGVudCA9IGFyZ3MudGV4dENvbnRlbnQ7XG4gICAgfVxuICAgIHJldHVybiBkaXY7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlQnV0dG9uID0gKGNsYXNzTmFtZSkgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnV0dG9uLmNsYXNzTGlzdCA9IGNsYXNzTmFtZTtcbiAgICByZXR1cm4gYnV0dG9uO1xuICB9O1xuXG4gIGNvbnN0IGdldExldHRlciA9IChjb2x1bW4pID0+IHtcbiAgICBzd2l0Y2ggKGNvbHVtbikge1xuICAgICAgY2FzZSAyOlxuICAgICAgICByZXR1cm4gXCJBXCI7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIHJldHVybiBcIkJcIjtcbiAgICAgIGNhc2UgNDpcbiAgICAgICAgcmV0dXJuIFwiQ1wiO1xuICAgICAgY2FzZSA1OlxuICAgICAgICByZXR1cm4gXCJEXCI7XG4gICAgICBjYXNlIDY6XG4gICAgICAgIHJldHVybiBcIkVcIjtcbiAgICAgIGNhc2UgNzpcbiAgICAgICAgcmV0dXJuIFwiRlwiO1xuICAgICAgY2FzZSA4OlxuICAgICAgICByZXR1cm4gXCJHXCI7XG4gICAgICBjYXNlIDk6XG4gICAgICAgIHJldHVybiBcIkhcIjtcbiAgICAgIGNhc2UgMTA6XG4gICAgICAgIHJldHVybiBcIklcIjtcbiAgICAgIGNhc2UgMTE6XG4gICAgICAgIHJldHVybiBcIkpcIjtcbiAgICAgIC8vIG5vIGRlZmF1bHRcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgYWRkQnV0dG9uID0gKGFyZ3MpID0+IHtcbiAgICBjb25zdCBlbGVtZW50Q29weSA9IGFyZ3MuZWxlbWVudC5jbG9uZU5vZGUoKTtcbiAgICBjb25zdCBidXR0b24gPSBjcmVhdGVCdXR0b24oXCJjZWxsXCIpO1xuICAgIGVsZW1lbnRDb3B5LmNsYXNzTGlzdC5hZGQoXCJlbmVteS1jZWxsXCIpO1xuICAgIGVsZW1lbnRDb3B5LmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgcmV0dXJuIGVsZW1lbnRDb3B5O1xuICB9O1xuXG4gIGNvbnN0IGxvYWRTaGlwID0gKGFyZ3MpID0+IHtcbiAgICBjb25zdCBjZWxsQ29weSA9IGFyZ3MuZWxlbWVudC5jbG9uZU5vZGUoKTtcbiAgICBjb25zdCBjZWxsVmFsdWUgPVxuICAgICAgYXJncy5nYW1lYm9hcmRHcmlkT2JqZWN0W2FyZ3MuY29vcmRpbmF0ZXMueF1bYXJncy5jb29yZGluYXRlcy55XTtcbiAgICBpZiAoSlNPTi5zdHJpbmdpZnkoY2VsbFZhbHVlKSAhPT0gSlNPTi5zdHJpbmdpZnkoe30pKSB7XG4gICAgICBjZWxsQ29weS5jbGFzc0xpc3QuYWRkKFwic2hpcFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIGNlbGxDb3B5O1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZUNlbGwgPSAoYXJncykgPT4ge1xuICAgIGxldCBjZWxsID0gY3JlYXRlRGl2KCk7XG4gICAgY29uc3QgeyByb3cgfSA9IGFyZ3M7XG4gICAgY29uc3QgeyBjb2x1bW4gfSA9IGFyZ3M7XG4gICAgY29uc3QgeyBodW1hbkdhbWVib2FyZEdyaWQgfSA9IGFyZ3M7XG5cbiAgICBpZiAocm93ID49IDIgJiYgY29sdW1uID49IDIpIHtcbiAgICAgIGNlbGwuY2xhc3NMaXN0ID0gXCJjZWxsLWNvbnRhaW5lclwiO1xuICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXgtY29vcmRpbmF0ZVwiLCByb3cgLSAyKTtcbiAgICAgIGNlbGwuc2V0QXR0cmlidXRlKFwiZGF0YS15LWNvb3JkaW5hdGVcIiwgY29sdW1uIC0gMik7XG4gICAgICBjZWxsID0gYXJncy5jYih7XG4gICAgICAgIGVsZW1lbnQ6IGNlbGwsXG4gICAgICAgIGdhbWVib2FyZEdyaWRPYmplY3Q6IGh1bWFuR2FtZWJvYXJkR3JpZCxcbiAgICAgICAgY29vcmRpbmF0ZXM6IHsgeDogcm93IC0gMiwgeTogY29sdW1uIC0gMiB9LFxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChyb3cgPj0gMiAmJiBjb2x1bW4gPT09IDEpIHtcbiAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcIm51bWJlclwiKTtcbiAgICAgIGNlbGwudGV4dENvbnRlbnQgPSBgJHtyb3cgLSAxfWA7XG4gICAgfSBlbHNlIGlmIChyb3cgPT09IDEgJiYgY29sdW1uID49IDIpIHtcbiAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcImxldHRlclwiKTtcbiAgICAgIGNlbGwudGV4dENvbnRlbnQgPSBnZXRMZXR0ZXIoY29sdW1uKTtcbiAgICB9XG4gICAgcmV0dXJuIGNlbGw7XG4gIH07XG5cbiAgY29uc3QgbG9hZENlbGxzID0gKGFyZ3MpID0+IHtcbiAgICBjb25zdCBnYW1lYm9hcmQgPSBjcmVhdGVEaXYoeyBjbGFzc05hbWU6IFwiZ2FtZWJvYXJkXCIgfSk7XG4gICAgY29uc3QgaHVtYW5HYW1lYm9hcmRHcmlkID0gYXJncy5odW1hbkdhbWVib2FyZC5nZXRHcmlkKCk7XG4gICAgY29uc3QgbGluZUxlbmd0aCA9IDExO1xuICAgIGZvciAobGV0IHJvdyA9IDE7IHJvdyA8PSBsaW5lTGVuZ3RoOyByb3cgKz0gMSkge1xuICAgICAgZm9yIChsZXQgY29sdW1uID0gMTsgY29sdW1uIDw9IGxpbmVMZW5ndGg7IGNvbHVtbiArPSAxKSB7XG4gICAgICAgIGNvbnN0IGNlbGwgPSBjcmVhdGVDZWxsKHsgLi4uYXJncywgcm93LCBjb2x1bW4sIGh1bWFuR2FtZWJvYXJkR3JpZCB9KTtcbiAgICAgICAgZ2FtZWJvYXJkLmFwcGVuZENoaWxkKGNlbGwpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZ2FtZWJvYXJkO1xuICB9O1xuXG4gIGNvbnN0IGxvYWRHYW1lYm9hcmQgPSAoYXJncykgPT4ge1xuICAgIGNvbnN0IGdhbWVib2FyZENvbnRhaW5lciA9IGNyZWF0ZURpdih7IGNsYXNzTmFtZTogXCJnYW1lYm9hcmQtY29udGFpbmVyXCIgfSk7XG4gICAgY29uc3QgZ3JpZExlZ2VuZCA9IGNyZWF0ZURpdih7XG4gICAgICBjbGFzc05hbWU6IFwiZ3JpZC1sZWdlbmRcIixcbiAgICAgIHRleHRDb250ZW50OiBhcmdzLnRleHQsXG4gICAgfSk7XG4gICAgY29uc3QgZ2FtZWJvYXJkID0gbG9hZENlbGxzKGFyZ3MpO1xuICAgIGdhbWVib2FyZENvbnRhaW5lci5hcHBlbmQoZ2FtZWJvYXJkLCBncmlkTGVnZW5kKTtcbiAgICByZXR1cm4gZ2FtZWJvYXJkQ29udGFpbmVyO1xuICB9O1xuXG4gIGNvbnN0IGxvYWRNYWluID0gKGFyZ3MpID0+IHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XG4gICAgY29uc3QgbWFpblBsYXllckdhbWVib2FyZCA9IGxvYWRHYW1lYm9hcmQoe1xuICAgICAgLi4uYXJncyxcbiAgICAgIHRleHQ6IFwiWW91ciBncmlkXCIsXG4gICAgICBjYjogbG9hZFNoaXAsXG4gICAgfSk7XG4gICAgY29uc3QgdHJhY2tpbmdQbGF5ZXJHYW1lYm9hcmQgPSBsb2FkR2FtZWJvYXJkKHtcbiAgICAgIC4uLmFyZ3MsXG4gICAgICB0ZXh0OiBcIllvdXIgZW5lbXkgZ3JpZFwiLFxuICAgICAgY2I6IGFkZEJ1dHRvbixcbiAgICB9KTtcbiAgICBtYWluLmFwcGVuZChtYWluUGxheWVyR2FtZWJvYXJkLCB0cmFja2luZ1BsYXllckdhbWVib2FyZCk7XG4gICAgYm9keS5pbnNlcnRCZWZvcmUobWFpbiwgc2NyaXB0KTtcbiAgfTtcblxuICBjb25zdCBsb2FkRm9vdGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XG4gICAgYm9keS5pbnNlcnRCZWZvcmUoZm9vdGVyLCBzY3JpcHQpO1xuICB9O1xuXG4gIGNvbnN0IGdldENvb3JkaW5hdGVzID0gKGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCB4ID0gTnVtYmVyKGVsZW1lbnQuZGF0YXNldC54Q29vcmRpbmF0ZSk7XG4gICAgY29uc3QgeSA9IE51bWJlcihlbGVtZW50LmRhdGFzZXQueUNvb3JkaW5hdGUpO1xuICAgIHJldHVybiB7IHgsIHkgfTtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVHYW1lYm9hcmQgPSAoYXR0YWNrUmVzdWx0LCBjZWxsRGl2KSA9PiB7XG4gICAgaWYgKGF0dGFja1Jlc3VsdCkge1xuICAgICAgY2VsbERpdi5jbGFzc0xpc3QuYWRkKFwic2hpcC1hdHRhY2tlZFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2VsbERpdi5jbGFzc0xpc3QuYWRkKFwibWlzc2VkLWF0dGFja1wiKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaHVtYW5UdXJuID0gKGFyZ3MpID0+IHtcbiAgICBjb25zdCB7IGJ1dHRvbiB9ID0gYXJncztcbiAgICBjb25zdCBjb29yZGluYXRlcyA9IGdldENvb3JkaW5hdGVzKGJ1dHRvbi5wYXJlbnROb2RlKTtcbiAgICBjb25zdCBodW1hblJlc3VsdCA9IGFyZ3MuaHVtYW5QbGF5ZXIuc2VuZEF0dGFjayhcbiAgICAgIGNvb3JkaW5hdGVzLFxuICAgICAgYXJncy5jb21wdXRlckdhbWVib2FyZCxcbiAgICApO1xuICAgIHVwZGF0ZUdhbWVib2FyZChodW1hblJlc3VsdCwgYnV0dG9uLnBhcmVudE5vZGUpO1xuICAgIGJ1dHRvbi5yZW1vdmUoKTtcbiAgfTtcblxuICBjb25zdCBjb21wdXRlclR1cm4gPSAoYXJncykgPT4ge1xuICAgIGNvbnN0IHsgaHVtYW5HYW1lYm9hcmQgfSA9IGFyZ3M7XG4gICAgY29uc3QgeyBjb21wdXRlclBsYXllciB9ID0gYXJncztcbiAgICBjb25zdCBjb21wdXRlckNvb3JkaW5hdGVzID0gY29tcHV0ZXJQbGF5ZXIuY2FsY3VsYXRlQXR0YWNrKGh1bWFuR2FtZWJvYXJkKTtcbiAgICBjb25zdCBjb21wdXRlclJlc3VsdCA9IGNvbXB1dGVyUGxheWVyLnNlbmRBdHRhY2soXG4gICAgICBjb21wdXRlckNvb3JkaW5hdGVzLFxuICAgICAgaHVtYW5HYW1lYm9hcmQsXG4gICAgKTtcbiAgICBjb25zdCBjZWxsID0gYXJncy5teUdhbWVib2FyZC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYGRpdltkYXRhLXgtY29vcmRpbmF0ZT1cIiR7Y29tcHV0ZXJDb29yZGluYXRlcy54fVwiXVtkYXRhLXktY29vcmRpbmF0ZT1cIiR7Y29tcHV0ZXJDb29yZGluYXRlcy55fVwiXWAsXG4gICAgKTtcbiAgICB1cGRhdGVHYW1lYm9hcmQoY29tcHV0ZXJSZXN1bHQsIGNlbGwpO1xuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZUJ1dHRvbnMgPSAoZW5lbXlHYW1lYm9hcmQpID0+IHtcbiAgICBjb25zdCBidXR0b25zID0gZW5lbXlHYW1lYm9hcmQucXVlcnlTZWxlY3RvckFsbChcImRpdiA+IGJ1dHRvblwiKTtcbiAgICBjb25zdCBidXR0b25zQXJyYXkgPSBBcnJheS5mcm9tKGJ1dHRvbnMpO1xuICAgIGJ1dHRvbnNBcnJheS5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgIGlmICghYnV0dG9uLnBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2hpcC1hdHRhY2tlZFwiKSkge1xuICAgICAgICBidXR0b24ucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKFwibWlzc2VkLWF0dGFja1wiKTtcbiAgICAgIH1cbiAgICAgIGJ1dHRvbi5yZW1vdmUoKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBnZXRWaWN0b3J5TWVzc2FnZSA9IChnYW1lQm9hcmQpID0+IHtcbiAgICBpZiAoZ2FtZUJvYXJkLmFyZUFsbFNoaXBzU3VuaygpKSB7XG4gICAgICByZXR1cm4gXCJZb3Ugd2luXCI7XG4gICAgfVxuICAgIHJldHVybiBcIkNvbXB1dGVyIFdpbnNcIjtcbiAgfTtcblxuICBjb25zdCBsb2FkVmljdG9yeU1lc3NhZ2UgPSAobWVzc2FnZSkgPT4ge1xuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG4gICAgcC50ZXh0Q29udGVudCA9IG1lc3NhZ2U7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChwKTtcbiAgfTtcblxuICBjb25zdCBhZGRFbmVtZXlHYW1lYm9hcmRMaXN0ZW5lciA9IChhcmdzKSA9PiB7XG4gICAgY29uc3QgZW5lbXlHYW1lYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgXCJtYWluID4gZGl2Om50aC1jaGlsZCgyKSA+IGRpdjpmaXJzdC1jaGlsZFwiLFxuICAgICk7XG4gICAgY29uc3QgbXlHYW1lYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgXCJtYWluID4gZGl2OmZpcnN0LWNoaWxkID4gZGl2OmZpcnN0LWNoaWxkXCIsXG4gICAgKTtcbiAgICBlbmVteUdhbWVib2FyZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0Lm1hdGNoZXMoXCJidXR0b25cIikpIHtcbiAgICAgICAgaHVtYW5UdXJuKHsgLi4uYXJncywgYnV0dG9uOiBldmVudC50YXJnZXQgfSk7XG4gICAgICAgIGNvbXB1dGVyVHVybih7IC4uLmFyZ3MsIG15R2FtZWJvYXJkIH0pO1xuICAgICAgICBpZiAoYXJncy5pc0dhbWVPdmVyKGFyZ3MuaHVtYW5HYW1lYm9hcmQsIGFyZ3MuY29tcHV0ZXJHYW1lYm9hcmQpKSB7XG4gICAgICAgICAgZGVsZXRlQnV0dG9ucyhlbmVteUdhbWVib2FyZCk7XG4gICAgICAgICAgY29uc3QgdmljdG9yeU1lc3NhZ2UgPSBnZXRWaWN0b3J5TWVzc2FnZShhcmdzLmNvbXB1dGVyR2FtZWJvYXJkKTtcbiAgICAgICAgICBsb2FkVmljdG9yeU1lc3NhZ2UodmljdG9yeU1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgbG9hZFBhZ2UgPSAoYXJncykgPT4ge1xuICAgIGxvYWRIZWFkZXIoKTtcbiAgICBsb2FkTWFpbihhcmdzKTtcbiAgICBsb2FkRm9vdGVyKCk7XG4gICAgYWRkRW5lbWV5R2FtZWJvYXJkTGlzdGVuZXIoe1xuICAgICAgaHVtYW5QbGF5ZXI6IGFyZ3MuaHVtYW5QbGF5ZXIsXG4gICAgICBodW1hbkdhbWVib2FyZDogYXJncy5odW1hbkdhbWVib2FyZCxcbiAgICAgIGNvbXB1dGVyUGxheWVyOiBhcmdzLmNvbXB1dGVyUGxheWVyLFxuICAgICAgY29tcHV0ZXJHYW1lYm9hcmQ6IGFyZ3MuY29tcHV0ZXJHYW1lYm9hcmQsXG4gICAgICBpc0dhbWVPdmVyOiBhcmdzLmlzR2FtZU92ZXIsXG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIHsgbG9hZFBhZ2UgfTtcbn1cbiIsImNvbnN0IEdhbWVib2FyZCA9IHJlcXVpcmUoXCIuL2dhbWVib2FyZFwiKTtcbmNvbnN0IFBsYXllciA9IHJlcXVpcmUoXCIuL3BsYXllclwiKTtcblxuY29uc3QgR2FtZSA9ICgpID0+IHtcbiAgY29uc3QgcG9wdWxhdGVHYW1lYm9hcmQgPSAoZ2FtZWJvYXJkKSA9PiB7XG4gICAgZ2FtZWJvYXJkLnBsYWNlU2hpcCh7IHg6IDEsIHk6IDMgfSwgMSwgXCJob3Jpem9udGFsXCIpO1xuICAgIGdhbWVib2FyZC5wbGFjZVNoaXAoeyB4OiA3LCB5OiA3IH0sIDIsIFwidmVydGljYWxcIik7XG4gICAgZ2FtZWJvYXJkLnBsYWNlU2hpcCh7IHg6IDQsIHk6IDMgfSwgMywgXCJob3Jpem9udGFsXCIpO1xuICAgIGdhbWVib2FyZC5wbGFjZVNoaXAoeyB4OiAwLCB5OiA4IH0sIDQsIFwidmVydGljYWxcIik7XG4gICAgZ2FtZWJvYXJkLnBsYWNlU2hpcCh7IHg6IDcsIHk6IDAgfSwgNSwgXCJob3Jpem9udGFsXCIpO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZU9iamVjdHMgPSAoKSA9PiB7XG4gICAgY29uc3QgaHVtYW5QbGF5ZXIgPSBQbGF5ZXIoKTtcbiAgICBjb25zdCBjb21wdXRlclBsYXllciA9IFBsYXllcihcImNvbXB1dGVyXCIpO1xuICAgIGNvbnN0IGh1bWFuR2FtZWJvYXJkID0gR2FtZWJvYXJkKCk7XG4gICAgcG9wdWxhdGVHYW1lYm9hcmQoaHVtYW5HYW1lYm9hcmQpO1xuICAgIGNvbnN0IGh1bWFuVHJhY2tpbmdHYW1lYm9hcmQgPSBHYW1lYm9hcmQoKTtcbiAgICBjb25zdCBjb21wdXRlckdhbWVib2FyZCA9IEdhbWVib2FyZCgpO1xuICAgIHBvcHVsYXRlR2FtZWJvYXJkKGNvbXB1dGVyR2FtZWJvYXJkKTtcbiAgICBjb25zdCBjb21wdXRlclRyYWNraW5nR2FtZWJvYXJkID0gR2FtZWJvYXJkKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGh1bWFuUGxheWVyLFxuICAgICAgY29tcHV0ZXJQbGF5ZXIsXG4gICAgICBodW1hbkdhbWVib2FyZCxcbiAgICAgIGh1bWFuVHJhY2tpbmdHYW1lYm9hcmQsXG4gICAgICBjb21wdXRlckdhbWVib2FyZCxcbiAgICAgIGNvbXB1dGVyVHJhY2tpbmdHYW1lYm9hcmQsXG4gICAgfTtcbiAgfTtcblxuICBjb25zdCBpc0dhbWVPdmVyID0gKGh1bWFuR2FtZWJvYXJkLCBjb21wdXRlckdhbWVib2FyZCkgPT5cbiAgICBodW1hbkdhbWVib2FyZC5hcmVBbGxTaGlwc1N1bmsoKSB8fCBjb21wdXRlckdhbWVib2FyZC5hcmVBbGxTaGlwc1N1bmsoKTtcblxuICByZXR1cm4geyBjcmVhdGVPYmplY3RzLCBpc0dhbWVPdmVyIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWU7XG4iLCJjb25zdCBTaGlwID0gcmVxdWlyZShcIi4vc2hpcFwiKTtcblxuY29uc3QgR2FtZWJvYXJkID0gKCkgPT4ge1xuICBjb25zdCBncmlkID0gW107XG4gIGNvbnN0IG1pc3NlZEF0dGFja3MgPSBbXTtcbiAgY29uc3QgcmFuZ2UgPSAobnVtKSA9PiBbLi4uQXJyYXkobnVtKS5rZXlzKCldO1xuXG4gIGNvbnN0IHBsYWNlU2hpcCA9IChjb29yZGluYXRlcywgc2hpcExlbmd0aCwgZGlyZWN0aW9uKSA9PiB7XG4gICAgY29uc3QgbmV3U2hpcCA9IFNoaXAoc2hpcExlbmd0aCk7XG4gICAgY29uc3Qgc2hpcFJhbmdlID0gcmFuZ2Uoc2hpcExlbmd0aCk7XG4gICAgc2hpcFJhbmdlLmZvckVhY2goKGkpID0+IHtcbiAgICAgIGlmIChkaXJlY3Rpb24gPT09IFwidmVydGljYWxcIikge1xuICAgICAgICBncmlkW2Nvb3JkaW5hdGVzLnggKyBpXVtjb29yZGluYXRlcy55XSA9IG5ld1NoaXA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBncmlkW2Nvb3JkaW5hdGVzLnhdW2Nvb3JkaW5hdGVzLnkgKyBpXSA9IG5ld1NoaXA7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlR3JpZCA9ICgpID0+IHtcbiAgICBjb25zdCBjb2x1bW5zID0gcmFuZ2UoMTApO1xuICAgIGNvbHVtbnMuZm9yRWFjaCgoYykgPT4ge1xuICAgICAgY29uc3Qgcm93ID0gcmFuZ2UoMTApO1xuICAgICAgZ3JpZFtjXSA9IFtdO1xuICAgICAgcm93LmZvckVhY2goKHIpID0+IHtcbiAgICAgICAgZ3JpZFtjXVtyXSA9IHt9O1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHJlY29yZENvb3JkaW5hdGVzID0gKGNvb3JkaW5hdGVzKSA9PiB7XG4gICAgbWlzc2VkQXR0YWNrcy5wdXNoKGNvb3JkaW5hdGVzKTtcbiAgfTtcblxuICBjb25zdCBpc1NoaXAgPSAoY2VsbCwgcHJvcGVydHkgPSBcImhpdFwiKSA9PiBPYmplY3QuaGFzT3duKGNlbGwsIHByb3BlcnR5KTtcblxuICBjb25zdCByZWNlaXZlQXR0YWNrID0gKGNvb3JkaW5hdGVzLCBjYiA9IHJlY29yZENvb3JkaW5hdGVzKSA9PiB7XG4gICAgY29uc3QgY2VsbENvbnRlbnQgPSBncmlkW2Nvb3JkaW5hdGVzLnhdW2Nvb3JkaW5hdGVzLnldO1xuICAgIGNvbnN0IHNoaXBGb3VuZCA9IGlzU2hpcChjZWxsQ29udGVudCk7XG4gICAgaWYgKHNoaXBGb3VuZCkge1xuICAgICAgY2VsbENvbnRlbnQuaGl0KCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgY2IoY29vcmRpbmF0ZXMpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCBnZXRBbGxTaGlwcyA9ICgpID0+IHtcbiAgICBjb25zdCBncmlkQ29weSA9IGdyaWQuZmxhdCgpO1xuICAgIHJldHVybiBncmlkQ29weS5maWx0ZXIoKGNlbGwpID0+IGlzU2hpcChjZWxsLCBcImlzU3Vua1wiKSk7XG4gIH07XG5cbiAgY29uc3QgYXJlQWxsU2hpcHNTdW5rID0gKCkgPT4ge1xuICAgIGNvbnN0IHNoaXBzID0gZ2V0QWxsU2hpcHMoKTtcbiAgICByZXR1cm4gc2hpcHMuZXZlcnkoKHNoaXApID0+IHNoaXAuaXNTdW5rKCkpO1xuICB9O1xuXG4gIGNvbnN0IGdldEdyaWQgPSAoKSA9PiBncmlkO1xuICBjcmVhdGVHcmlkKCk7XG4gIHJldHVybiB7XG4gICAgbWlzc2VkQXR0YWNrcyxcbiAgICBnZXRHcmlkLFxuICAgIHBsYWNlU2hpcCxcbiAgICByZWNlaXZlQXR0YWNrLFxuICAgIGFyZUFsbFNoaXBzU3VuayxcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gR2FtZWJvYXJkO1xuIiwiY29uc3QgUGxheWVyID0gKHR5cGUgPSBcImh1bWFuXCIpID0+IHtcbiAgY29uc3QgcGxheWVyVHlwZSA9IHR5cGU7XG4gIGNvbnN0IGF0dGFja3NNYWRlID0gW107XG4gIGNvbnN0IHNlbmRBdHRhY2sgPSAoY29vcmRpbmF0ZXMsIGVuZW15R2FtZUJvYXJkKSA9PlxuICAgIGVuZW15R2FtZUJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZXMpO1xuXG4gIGNvbnN0IGdldFJhbmRvbUluY2x1c2l2ZSA9IChtaW4sIG1heCkgPT5cbiAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pO1xuXG4gIGNvbnN0IGlzQXR0YWNrTWFkZSA9IChjb29yZGluYXRlcykgPT5cbiAgICBhdHRhY2tzTWFkZS5maW5kKFxuICAgICAgKGNvb3JkaW5hdGUpID0+XG4gICAgICAgIGNvb3JkaW5hdGUueCA9PT0gY29vcmRpbmF0ZXMueCAmJiBjb29yZGluYXRlLnkgPT09IGNvb3JkaW5hdGVzLnksXG4gICAgKTtcblxuICBjb25zdCBjYWxjdWxhdGVBdHRhY2sgPSAoKSA9PiB7XG4gICAgaWYgKHBsYXllclR5cGUgIT09IFwiY29tcHV0ZXJcIikge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgICBsZXQgY29vcmRpbmF0ZXM7XG4gICAgZG8ge1xuICAgICAgY29uc3QgeCA9IGdldFJhbmRvbUluY2x1c2l2ZSgwLCA5KTtcbiAgICAgIGNvbnN0IHkgPSBnZXRSYW5kb21JbmNsdXNpdmUoMCwgOSk7XG4gICAgICBjb29yZGluYXRlcyA9IHsgeCwgeSB9O1xuICAgIH0gd2hpbGUgKGlzQXR0YWNrTWFkZShjb29yZGluYXRlcykpO1xuICAgIGF0dGFja3NNYWRlLnB1c2goY29vcmRpbmF0ZXMpO1xuICAgIHJldHVybiBjb29yZGluYXRlcztcbiAgfTtcbiAgcmV0dXJuIHsgc2VuZEF0dGFjaywgY2FsY3VsYXRlQXR0YWNrIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBsYXllcjtcbiIsImNvbnN0IFNoaXAgPSAobGVuZ3RoKSA9PiB7XG4gIGxldCBoaXRzID0gMDtcbiAgY29uc3QgZ2V0SGl0cyA9ICgpID0+IGhpdHM7XG4gIGNvbnN0IGhpdCA9ICgpID0+IHtcbiAgICBoaXRzICs9IDE7XG4gIH07XG4gIGNvbnN0IGlzU3VuayA9ICgpID0+IGxlbmd0aCA9PT0gZ2V0SGl0cygpO1xuICByZXR1cm4geyBsZW5ndGgsIGdldEhpdHMsIGhpdCwgaXNTdW5rIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNoaXA7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IERPTSBmcm9tIFwiLi9zY3JpcHRzL2RvbVwiO1xuaW1wb3J0IEdhbWUgZnJvbSBcIi4vc2NyaXB0cy9nYW1lXCI7XG5cbmNvbnN0IG15RE9NID0gRE9NKCk7XG5jb25zdCBteUdhbWUgPSBHYW1lKCk7XG5jb25zdCBnYW1lT2JqZWN0cyA9IG15R2FtZS5jcmVhdGVPYmplY3RzKCk7XG5teURPTS5sb2FkUGFnZShPYmplY3QuYXNzaWduKGdhbWVPYmplY3RzLCB7IGlzR2FtZU92ZXI6IG15R2FtZS5pc0dhbWVPdmVyIH0pKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==