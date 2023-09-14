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
  flex-direction: column;
  align-items: center;
  gap: 30px;
}

form {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  border: 5px solid #000000;
  padding: 10%;
}

.error-message {
  color: #b91c1c;
}

.gameboards {
  display: flex;
  justify-content: space-evenly;
  gap: 100px;
}

.gameboard-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.gameboard {
  display: grid;
  grid-template-rows: repeat(11, minmax(10px, 40px));
  grid-template-columns: repeat(11, minmax(10px, 40px));
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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAiFE,SAAS;EACT,UAAU;EACV,SAAS;EACT,eAAe;EACf,aAAa;EACb,wBAAwB;AAC1B;AACA,gDAAgD;AAChD;;;;;;;;;;;EAWE,cAAc;AAChB;AACA;EACE,cAAc;AAChB;AACA;;EAEE,gBAAgB;AAClB;AACA;;EAEE,YAAY;AACd;AACA;;;;EAIE,WAAW;EACX,aAAa;AACf;AACA;EACE,yBAAyB;EACzB,iBAAiB;AACnB;;AAEA,qBAAqB;;AAErB;;EAEE,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;EACT,yBAAyB;EACzB,YAAY;AACd;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,kDAAkD;EAClD,qDAAqD;AACvD;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,yBAAyB;EACzB,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;EACzB,yBAAyB;AAC3B;;AAEA;;EAEE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,yBAAyB;EACzB,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;EACzB,yBAAyB;EACzB,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;EACzB,yBAAyB;AAC3B;;AAEA;;EAEE,mBAAmB;AACrB","sourcesContent":["html,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n/* End reset styles */\n\nhtml,\nbody {\n  height: 100%;\n}\n\nmain {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 30px;\n}\n\nform {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n  border: 5px solid #000000;\n  padding: 10%;\n}\n\n.error-message {\n  color: #b91c1c;\n}\n\n.gameboards {\n  display: flex;\n  justify-content: space-evenly;\n  gap: 100px;\n}\n\n.gameboard-container {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.gameboard {\n  display: grid;\n  grid-template-rows: repeat(11, minmax(10px, 40px));\n  grid-template-columns: repeat(11, minmax(10px, 40px));\n}\n\n.cell-container {\n  border: 1px solid #000000;\n}\n\n.cell {\n  justify-self: stretch;\n}\n\n.enemy-cell {\n  display: grid;\n}\n\n.enemy-cell:hover {\n  border: 3px solid #b45309;\n  transition-duration: 0.3s;\n}\n\n.enemy-cell:hover > button {\n  background-color: #f59e0b;\n  transition-duration: 0.3s;\n}\n\n.number,\n.letter {\n  place-self: center;\n}\n\n.grid-legend {\n  align-self: center;\n}\n\n.ship {\n  border: 2px solid #0000ff;\n  background-color: #add8e6;\n}\n\n.ship-attacked {\n  border: 2px solid #b91c1c;\n  background-color: #fca5a5;\n  transition-duration: 0.4s;\n}\n\n.missed-attack {\n  background-color: #a3a3a3;\n  transition-duration: 0.4s;\n}\n\n.ship-attacked,\n.missed-attack {\n  cursor: not-allowed;\n}\n"],"sourceRoot":""}]);
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

  const createInput = (args) => {
    const input = document.createElement("input");
    Object.assign(input, args);
    return input;
  };

  const createLabel = (text) => {
    const label = document.createElement("label");
    label.textContent = text;
    return label;
  };

  const createSubmitButton = () => {
    const submit = document.createElement("button");
    submit.setAttribute("type", "submit");
    submit.textContent = "Place ship";
    return submit;
  };

  const createShipFormElement = (textLabel, args) => {
    const label = createLabel(textLabel);
    const input = createInput(args);
    label.appendChild(input);
    return label;
  };

  const createShipForm = () => {
    const formContainer = createDiv({ className: "form-container" });
    const form = document.createElement("form");
    const xCoordinate = createShipFormElement("* x coordinate: ", {
      type: "number",
      min: "0",
      max: "9",
      placeholder: "0",
      name: "x-coordinate",
    });
    const yCoordinate = createShipFormElement("* y coordinate: ", {
      type: "number",
      min: "0",
      max: "9",
      placeholder: "0",
      name: "y-coordinate",
    });
    const lengthLabel = createShipFormElement("* Ship length: ", {
      type: "number",
      min: "2",
      max: "5",
      placeholder: "2",
      name: "ship-length",
    });
    const radioButtonsContainer = createDiv({
      className: "radio-buttons-container",
      textContent: "* Direction: ",
    });
    const horizontal = createShipFormElement("horizontal", {
      type: "radio",
      name: "direction",
      value: "horizontal",
      checked: true,
    });
    const vertical = createShipFormElement("vertical", {
      type: "radio",
      name: "direction",
      value: "vertical",
    });

    const errorMessage = createDiv({ className: "error-message" });
    radioButtonsContainer.append(horizontal, vertical);
    form.append(
      xCoordinate,
      yCoordinate,
      lengthLabel,
      radioButtonsContainer,
      errorMessage,
      createSubmitButton(),
    );
    formContainer.appendChild(form);
    return formContainer;
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

    return undefined;
  };

  const createCell = (args) => {
    const cell = createDiv();
    const { row } = args;
    const { column } = args;

    if (row >= 2 && column >= 2) {
      cell.classList = "cell-container";
      cell.setAttribute("data-x-coordinate", row - 2);
      cell.setAttribute("data-y-coordinate", column - 2);
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
    const gameboards = createDiv({ className: "gameboards" });
    const mainPlayerGameboard = loadGameboard({
      ...args,
      text: "Your grid",
    });
    const trackingPlayerGameboard = loadGameboard({
      ...args,
      text: "Your enemy grid",
    });
    gameboards.append(mainPlayerGameboard, trackingPlayerGameboard);
    main.append(createShipForm(), gameboards);
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

  const addEnemyGameboardListener = (args) => {
    const enemyGameboard = document.querySelector(
      ".gameboards > div:nth-child(2) > div:first-child",
    );
    const myGameboard = document.querySelector(
      ".gameboards > div:first-child > div:first-child",
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

  const getShipCell = (x, y) =>
    document.querySelector(
      `div[data-x-coordinate="${x}"][data-y-coordinate="${y}"]`,
    );

  const getShipCells = (args) => {
    const range = [...Array(Number(args.shipLength)).keys()];
    const shipCells = [];
    let index = args.newIndex;
    let cell;
    range.forEach(() => {
      if (args.direction === "vertical") {
        cell = getShipCell(index, args.coordinates.y);
      } else {
        cell = getShipCell(args.coordinates.x, index);
      }
      shipCells.push(cell);
      index += 1;
    });
    return shipCells;
  };

  const renderShip = (shipCells) => {
    shipCells.forEach((shipCell) => {
      shipCell.classList.add("ship");
    });
  };

  const addFormListener = (args) => {
    const form = document.querySelector("form");
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const xCoordinate = form.elements["x-coordinate"].value;
      const yCoordinate = form.elements["y-coordinate"].value;
      const shipLength = form.elements["ship-length"].value;
      const direction = form.elements.direction.value;
      const formData = [xCoordinate, yCoordinate, shipLength, direction];
      const errorMessage = document.querySelector(".error-message");
      if (formData.some((element) => element === "")) {
        errorMessage.textContent = "Missing at least a value";
        return false;
      }
      if (args.humanGameboard.isMaxShipCountReached()) {
        form.remove();
        const enemyGameboard = document.querySelectorAll(
          ".gameboards > div:nth-child(2) > div > .cell-container",
        );
        enemyGameboard.forEach((cell) => {
          cell.appendChild(createButton("button"));
          cell.classList.add("enemy-cell");
        });
        addEnemyGameboardListener({
          humanPlayer: args.humanPlayer,
          humanGameboard: args.humanGameboard,
          computerPlayer: args.computerPlayer,
          computerGameboard: args.computerGameboard,
          isGameOver: args.isGameOver,
        });
        return true;
      }
      const coordinates = { x: Number(xCoordinate), y: Number(yCoordinate) };
      const newIndex = direction === "vertical" ? coordinates.x : coordinates.y;
      if (newIndex + Number(shipLength) > 10) {
        errorMessage.textContent =
          "Ship can't be placed there. Try to lower at least one coordinate or ship length.";
        return false;
      }
      const canShipBePlaced = args.humanGameboard.canShipBePlaced(
        coordinates,
        Number(shipLength),
        direction,
      );
      if (!canShipBePlaced) {
        errorMessage.textContent =
          "Ship can't be placed there. Ensure that all ships have one empty space between each other.";
        return false;
      }
      args.humanGameboard.placeShip(coordinates, Number(shipLength), direction);
      const shipCells = getShipCells({
        shipLength: Number(shipLength),
        direction,
        newIndex,
        coordinates,
      });
      renderShip(shipCells);
      errorMessage.textContent = "";
      return true;
    });
  };

  const loadPage = (args) => {
    loadHeader();
    loadMain(args);
    loadFooter();
    addFormListener(args);
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
  const getRandomIndex = (arrayLength) =>
    Math.floor(Math.random() * arrayLength);

  const populateGameboard = (computerGameboard) => {
    const shipLengths = [2, 3, 4, 5];
    const validCoordinates = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const directions = ["horizontal", "vertical"];
    while (!computerGameboard.isMaxShipCountReached()) {
      const randomCoordinates = {
        x: validCoordinates[getRandomIndex(10)],
        y: validCoordinates[getRandomIndex(10)],
      };
      const randomShipLength = shipLengths[getRandomIndex(4)];
      const randomDirection = directions[getRandomIndex(2)];
      if (
        computerGameboard.canShipBePlaced(
          randomCoordinates,
          randomShipLength,
          randomDirection,
        )
      ) {
        computerGameboard.placeShip(
          randomCoordinates,
          randomShipLength,
          randomDirection,
        );
      }
    }
  };

  const createObjects = () => {
    const humanPlayer = Player();
    const computerPlayer = Player("computer");
    const humanGameboard = Gameboard();
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
  const maxShipCount = 5;
  let shipCount = 0;

  const getShipCount = () => shipCount;
  const range = (num) => [...Array(num).keys()];

  const isMaxShipCountReached = () => getShipCount() >= maxShipCount;

  const isCellEmpty = (cellValue) =>
    JSON.stringify(cellValue) === JSON.stringify({});

  const isCoordinatevalid = (coordinate) => coordinate >= 0 && coordinate <= 9;

  const areCoordinatesValid = (coordinates) =>
    isCoordinatevalid(coordinates.x) && isCoordinatevalid(coordinates.y);

  const getSurroundCoordinates = (coordinates) => {
    const { x } = coordinates;
    const { y } = coordinates;
    const surroundCoordinates = [
      { x: x - 1, y: y - 1 },
      { x: x - 1, y },
      { x: x - 1, y: y + 1 },
      { x, y: y - 1 },
      { x, y },
      { x, y: y + 1 },
      { x: x + 1, y: y - 1 },
      { x: x + 1, y },
      { x: x + 1, y: y + 1 },
    ];
    return surroundCoordinates.filter((sCoordinates) =>
      areCoordinatesValid(sCoordinates),
    );
  };

  const getSurroundCells = (coordinates) => {
    const surroundCoordinates = getSurroundCoordinates(coordinates);
    const surroundCells = [];
    surroundCoordinates.forEach((sCoordinates) =>
      surroundCells.push(grid[sCoordinates.x][sCoordinates.y]),
    );
    return surroundCells;
  };

  const getShipCoordinates = (coordinates, shipLength, direction) => {
    const shipRange = range(shipLength);
    let index = direction === "vertical" ? coordinates.x : coordinates.y;
    const shipCoordinates = [];
    let cellCoordinate;
    shipRange.forEach(() => {
      if (direction === "vertical") {
        cellCoordinate = { x: index, y: coordinates.y };
      } else {
        cellCoordinate = { x: coordinates.x, y: index };
      }
      shipCoordinates.push(cellCoordinate);
      index += 1;
    });
    return shipCoordinates;
  };

  const calculateEndIndex = (coordinates, shipLength, direction) => {
    if (direction === "vertical") {
      return coordinates.x + shipLength;
    }
    return coordinates.y + shipLength;
  };

  const isNumberInRange = (num) => num <= 9;

  const canShipBePlaced = (coordinates, shipLength, direction) => {
    const endIndex = calculateEndIndex(coordinates, shipLength, direction);
    if (!isNumberInRange(endIndex)) {
      return false;
    }

    let surroundCells = getSurroundCells(coordinates);
    const shipCoordinates = getShipCoordinates(
      coordinates,
      shipLength,
      direction,
    );
    return shipCoordinates.every((shipCoordinate) => {
      surroundCells = getSurroundCells(shipCoordinate);
      return surroundCells.every((cell) => isCellEmpty(cell));
    });
  };

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
    shipCount = getShipCount() + 1;
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
    canShipBePlaced,
    getGrid,
    isMaxShipCountReached,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDYmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0NBQXNDLDZCQUE2QjtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTCxxQ0FBcUMsNEJBQTRCO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWSxNQUFNO0FBQ2xCLFlB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Yyx3REFBRztBQUNqQixlQUFlLG9EQUFJO0FBQ25CO0FBQ0EsNENBQTRDLCtCQUErQiIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL2RvbS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgaHRtbCxcbmJvZHksXG5kaXYsXG5zcGFuLFxuYXBwbGV0LFxub2JqZWN0LFxuaWZyYW1lLFxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2LFxucCxcbmJsb2NrcXVvdGUsXG5wcmUsXG5hLFxuYWJicixcbmFjcm9ueW0sXG5hZGRyZXNzLFxuYmlnLFxuY2l0ZSxcbmNvZGUsXG5kZWwsXG5kZm4sXG5lbSxcbmltZyxcbmlucyxcbmtiZCxcbnEsXG5zLFxuc2FtcCxcbnNtYWxsLFxuc3RyaWtlLFxuc3Ryb25nLFxuc3ViLFxuc3VwLFxudHQsXG52YXIsXG5iLFxudSxcbmksXG5jZW50ZXIsXG5kbCxcbmR0LFxuZGQsXG5vbCxcbnVsLFxubGksXG5maWVsZHNldCxcbmZvcm0sXG5sYWJlbCxcbmxlZ2VuZCxcbnRhYmxlLFxuY2FwdGlvbixcbnRib2R5LFxudGZvb3QsXG50aGVhZCxcbnRyLFxudGgsXG50ZCxcbmFydGljbGUsXG5hc2lkZSxcbmNhbnZhcyxcbmRldGFpbHMsXG5lbWJlZCxcbmZpZ3VyZSxcbmZpZ2NhcHRpb24sXG5mb290ZXIsXG5oZWFkZXIsXG5oZ3JvdXAsXG5tZW51LFxubmF2LFxub3V0cHV0LFxucnVieSxcbnNlY3Rpb24sXG5zdW1tYXJ5LFxudGltZSxcbm1hcmssXG5hdWRpbyxcbnZpZGVvIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IDA7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbiAgZm9udDogaW5oZXJpdDtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xuYXJ0aWNsZSxcbmFzaWRlLFxuZGV0YWlscyxcbmZpZ2NhcHRpb24sXG5maWd1cmUsXG5mb290ZXIsXG5oZWFkZXIsXG5oZ3JvdXAsXG5tZW51LFxubmF2LFxuc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuYm9keSB7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxub2wsXG51bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5ibG9ja3F1b3RlLFxucSB7XG4gIHF1b3Rlczogbm9uZTtcbn1cbmJsb2NrcXVvdGU6YmVmb3JlLFxuYmxvY2txdW90ZTphZnRlcixcbnE6YmVmb3JlLFxucTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGNvbnRlbnQ6IG5vbmU7XG59XG50YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xufVxuXG4vKiBFbmQgcmVzZXQgc3R5bGVzICovXG5cbmh0bWwsXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5tYWluIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAzMHB4O1xufVxuXG5mb3JtIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMjBweDtcbiAgYm9yZGVyOiA1cHggc29saWQgIzAwMDAwMDtcbiAgcGFkZGluZzogMTAlO1xufVxuXG4uZXJyb3ItbWVzc2FnZSB7XG4gIGNvbG9yOiAjYjkxYzFjO1xufVxuXG4uZ2FtZWJvYXJkcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBnYXA6IDEwMHB4O1xufVxuXG4uZ2FtZWJvYXJkLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMjBweDtcbn1cblxuLmdhbWVib2FyZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDExLCBtaW5tYXgoMTBweCwgNDBweCkpO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMSwgbWlubWF4KDEwcHgsIDQwcHgpKTtcbn1cblxuLmNlbGwtY29udGFpbmVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcbn1cblxuLmNlbGwge1xuICBqdXN0aWZ5LXNlbGY6IHN0cmV0Y2g7XG59XG5cbi5lbmVteS1jZWxsIHtcbiAgZGlzcGxheTogZ3JpZDtcbn1cblxuLmVuZW15LWNlbGw6aG92ZXIge1xuICBib3JkZXI6IDNweCBzb2xpZCAjYjQ1MzA5O1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xufVxuXG4uZW5lbXktY2VsbDpob3ZlciA+IGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNTllMGI7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG59XG5cbi5udW1iZXIsXG4ubGV0dGVyIHtcbiAgcGxhY2Utc2VsZjogY2VudGVyO1xufVxuXG4uZ3JpZC1sZWdlbmQge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi5zaGlwIHtcbiAgYm9yZGVyOiAycHggc29saWQgIzAwMDBmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FkZDhlNjtcbn1cblxuLnNoaXAtYXR0YWNrZWQge1xuICBib3JkZXI6IDJweCBzb2xpZCAjYjkxYzFjO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNhNWE1O1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzO1xufVxuXG4ubWlzc2VkLWF0dGFjayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhM2EzYTM7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XG59XG5cbi5zaGlwLWF0dGFja2VkLFxuLm1pc3NlZC1hdHRhY2sge1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFpRkUsU0FBUztFQUNULFVBQVU7RUFDVixTQUFTO0VBQ1QsZUFBZTtFQUNmLGFBQWE7RUFDYix3QkFBd0I7QUFDMUI7QUFDQSxnREFBZ0Q7QUFDaEQ7Ozs7Ozs7Ozs7O0VBV0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBOztFQUVFLGdCQUFnQjtBQUNsQjtBQUNBOztFQUVFLFlBQVk7QUFDZDtBQUNBOzs7O0VBSUUsV0FBVztFQUNYLGFBQWE7QUFDZjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGlCQUFpQjtBQUNuQjs7QUFFQSxxQkFBcUI7O0FBRXJCOztFQUVFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtEQUFrRDtFQUNsRCxxREFBcUQ7QUFDdkQ7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHlCQUF5QjtBQUMzQjs7QUFFQTs7RUFFRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6Qix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIseUJBQXlCO0FBQzNCOztBQUVBOztFQUVFLG1CQUFtQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sLFxcbmJvZHksXFxuZGl2LFxcbnNwYW4sXFxuYXBwbGV0LFxcbm9iamVjdCxcXG5pZnJhbWUsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxucCxcXG5ibG9ja3F1b3RlLFxcbnByZSxcXG5hLFxcbmFiYnIsXFxuYWNyb255bSxcXG5hZGRyZXNzLFxcbmJpZyxcXG5jaXRlLFxcbmNvZGUsXFxuZGVsLFxcbmRmbixcXG5lbSxcXG5pbWcsXFxuaW5zLFxcbmtiZCxcXG5xLFxcbnMsXFxuc2FtcCxcXG5zbWFsbCxcXG5zdHJpa2UsXFxuc3Ryb25nLFxcbnN1YixcXG5zdXAsXFxudHQsXFxudmFyLFxcbmIsXFxudSxcXG5pLFxcbmNlbnRlcixcXG5kbCxcXG5kdCxcXG5kZCxcXG5vbCxcXG51bCxcXG5saSxcXG5maWVsZHNldCxcXG5mb3JtLFxcbmxhYmVsLFxcbmxlZ2VuZCxcXG50YWJsZSxcXG5jYXB0aW9uLFxcbnRib2R5LFxcbnRmb290LFxcbnRoZWFkLFxcbnRyLFxcbnRoLFxcbnRkLFxcbmFydGljbGUsXFxuYXNpZGUsXFxuY2FudmFzLFxcbmRldGFpbHMsXFxuZW1iZWQsXFxuZmlndXJlLFxcbmZpZ2NhcHRpb24sXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxub3V0cHV0LFxcbnJ1YnksXFxuc2VjdGlvbixcXG5zdW1tYXJ5LFxcbnRpbWUsXFxubWFyayxcXG5hdWRpbyxcXG52aWRlbyB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsXFxuYXNpZGUsXFxuZGV0YWlscyxcXG5maWdjYXB0aW9uLFxcbmZpZ3VyZSxcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCxcXG51bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLFxcbnEge1xcbiAgcXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSxcXG5ibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLFxcbnE6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbi8qIEVuZCByZXNldCBzdHlsZXMgKi9cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMzBweDtcXG59XFxuXFxuZm9ybSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG4gIGJvcmRlcjogNXB4IHNvbGlkICMwMDAwMDA7XFxuICBwYWRkaW5nOiAxMCU7XFxufVxcblxcbi5lcnJvci1tZXNzYWdlIHtcXG4gIGNvbG9yOiAjYjkxYzFjO1xcbn1cXG5cXG4uZ2FtZWJvYXJkcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBnYXA6IDEwMHB4O1xcbn1cXG5cXG4uZ2FtZWJvYXJkLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuLmdhbWVib2FyZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTEsIG1pbm1heCgxMHB4LCA0MHB4KSk7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMSwgbWlubWF4KDEwcHgsIDQwcHgpKTtcXG59XFxuXFxuLmNlbGwtY29udGFpbmVyIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA7XFxufVxcblxcbi5jZWxsIHtcXG4gIGp1c3RpZnktc2VsZjogc3RyZXRjaDtcXG59XFxuXFxuLmVuZW15LWNlbGwge1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLmVuZW15LWNlbGw6aG92ZXIge1xcbiAgYm9yZGVyOiAzcHggc29saWQgI2I0NTMwOTtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XFxufVxcblxcbi5lbmVteS1jZWxsOmhvdmVyID4gYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNTllMGI7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xcbn1cXG5cXG4ubnVtYmVyLFxcbi5sZXR0ZXIge1xcbiAgcGxhY2Utc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uZ3JpZC1sZWdlbmQge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uc2hpcCB7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjMDAwMGZmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FkZDhlNjtcXG59XFxuXFxuLnNoaXAtYXR0YWNrZWQge1xcbiAgYm9yZGVyOiAycHggc29saWQgI2I5MWMxYztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2E1YTU7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzO1xcbn1cXG5cXG4ubWlzc2VkLWF0dGFjayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTNhM2EzO1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcXG59XFxuXFxuLnNoaXAtYXR0YWNrZWQsXFxuLm1pc3NlZC1hdHRhY2sge1xcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERPTSgpIHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic2NyaXB0XCIpO1xuICBjb25zdCBjcmVhdGVIMSA9ICgpID0+IHtcbiAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBoMS50ZXh0Q29udGVudCA9IFwiR2VuZXJpYyBCYXR0bGVzaGlwIGFwcCBuYW1lXCI7XG4gICAgcmV0dXJuIGgxO1xuICB9O1xuXG4gIGNvbnN0IGxvYWRIZWFkZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgICBjb25zdCBoMSA9IGNyZWF0ZUgxKCk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGgxKTtcbiAgICBib2R5Lmluc2VydEJlZm9yZShoZWFkZXIsIHNjcmlwdCk7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlRGl2ID0gKGFyZ3MgPSB7fSkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaWYgKGFyZ3MuY2xhc3NOYW1lKSB7XG4gICAgICBkaXYuY2xhc3NOYW1lID0gYXJncy5jbGFzc05hbWU7XG4gICAgfVxuICAgIGlmIChhcmdzLnRleHRDb250ZW50KSB7XG4gICAgICBkaXYudGV4dENvbnRlbnQgPSBhcmdzLnRleHRDb250ZW50O1xuICAgIH1cbiAgICByZXR1cm4gZGl2O1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZUJ1dHRvbiA9IChjbGFzc05hbWUpID0+IHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QgPSBjbGFzc05hbWU7XG4gICAgcmV0dXJuIGJ1dHRvbjtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVJbnB1dCA9IChhcmdzKSA9PiB7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgT2JqZWN0LmFzc2lnbihpbnB1dCwgYXJncyk7XG4gICAgcmV0dXJuIGlucHV0O1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZUxhYmVsID0gKHRleHQpID0+IHtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgcmV0dXJuIGxhYmVsO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZVN1Ym1pdEJ1dHRvbiA9ICgpID0+IHtcbiAgICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHN1Ym1pdC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuICAgIHN1Ym1pdC50ZXh0Q29udGVudCA9IFwiUGxhY2Ugc2hpcFwiO1xuICAgIHJldHVybiBzdWJtaXQ7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlU2hpcEZvcm1FbGVtZW50ID0gKHRleHRMYWJlbCwgYXJncykgPT4ge1xuICAgIGNvbnN0IGxhYmVsID0gY3JlYXRlTGFiZWwodGV4dExhYmVsKTtcbiAgICBjb25zdCBpbnB1dCA9IGNyZWF0ZUlucHV0KGFyZ3MpO1xuICAgIGxhYmVsLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICByZXR1cm4gbGFiZWw7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlU2hpcEZvcm0gPSAoKSA9PiB7XG4gICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGNyZWF0ZURpdih7IGNsYXNzTmFtZTogXCJmb3JtLWNvbnRhaW5lclwiIH0pO1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICBjb25zdCB4Q29vcmRpbmF0ZSA9IGNyZWF0ZVNoaXBGb3JtRWxlbWVudChcIiogeCBjb29yZGluYXRlOiBcIiwge1xuICAgICAgdHlwZTogXCJudW1iZXJcIixcbiAgICAgIG1pbjogXCIwXCIsXG4gICAgICBtYXg6IFwiOVwiLFxuICAgICAgcGxhY2Vob2xkZXI6IFwiMFwiLFxuICAgICAgbmFtZTogXCJ4LWNvb3JkaW5hdGVcIixcbiAgICB9KTtcbiAgICBjb25zdCB5Q29vcmRpbmF0ZSA9IGNyZWF0ZVNoaXBGb3JtRWxlbWVudChcIiogeSBjb29yZGluYXRlOiBcIiwge1xuICAgICAgdHlwZTogXCJudW1iZXJcIixcbiAgICAgIG1pbjogXCIwXCIsXG4gICAgICBtYXg6IFwiOVwiLFxuICAgICAgcGxhY2Vob2xkZXI6IFwiMFwiLFxuICAgICAgbmFtZTogXCJ5LWNvb3JkaW5hdGVcIixcbiAgICB9KTtcbiAgICBjb25zdCBsZW5ndGhMYWJlbCA9IGNyZWF0ZVNoaXBGb3JtRWxlbWVudChcIiogU2hpcCBsZW5ndGg6IFwiLCB7XG4gICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgICAgbWluOiBcIjJcIixcbiAgICAgIG1heDogXCI1XCIsXG4gICAgICBwbGFjZWhvbGRlcjogXCIyXCIsXG4gICAgICBuYW1lOiBcInNoaXAtbGVuZ3RoXCIsXG4gICAgfSk7XG4gICAgY29uc3QgcmFkaW9CdXR0b25zQ29udGFpbmVyID0gY3JlYXRlRGl2KHtcbiAgICAgIGNsYXNzTmFtZTogXCJyYWRpby1idXR0b25zLWNvbnRhaW5lclwiLFxuICAgICAgdGV4dENvbnRlbnQ6IFwiKiBEaXJlY3Rpb246IFwiLFxuICAgIH0pO1xuICAgIGNvbnN0IGhvcml6b250YWwgPSBjcmVhdGVTaGlwRm9ybUVsZW1lbnQoXCJob3Jpem9udGFsXCIsIHtcbiAgICAgIHR5cGU6IFwicmFkaW9cIixcbiAgICAgIG5hbWU6IFwiZGlyZWN0aW9uXCIsXG4gICAgICB2YWx1ZTogXCJob3Jpem9udGFsXCIsXG4gICAgICBjaGVja2VkOiB0cnVlLFxuICAgIH0pO1xuICAgIGNvbnN0IHZlcnRpY2FsID0gY3JlYXRlU2hpcEZvcm1FbGVtZW50KFwidmVydGljYWxcIiwge1xuICAgICAgdHlwZTogXCJyYWRpb1wiLFxuICAgICAgbmFtZTogXCJkaXJlY3Rpb25cIixcbiAgICAgIHZhbHVlOiBcInZlcnRpY2FsXCIsXG4gICAgfSk7XG5cbiAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBjcmVhdGVEaXYoeyBjbGFzc05hbWU6IFwiZXJyb3ItbWVzc2FnZVwiIH0pO1xuICAgIHJhZGlvQnV0dG9uc0NvbnRhaW5lci5hcHBlbmQoaG9yaXpvbnRhbCwgdmVydGljYWwpO1xuICAgIGZvcm0uYXBwZW5kKFxuICAgICAgeENvb3JkaW5hdGUsXG4gICAgICB5Q29vcmRpbmF0ZSxcbiAgICAgIGxlbmd0aExhYmVsLFxuICAgICAgcmFkaW9CdXR0b25zQ29udGFpbmVyLFxuICAgICAgZXJyb3JNZXNzYWdlLFxuICAgICAgY3JlYXRlU3VibWl0QnV0dG9uKCksXG4gICAgKTtcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm0pO1xuICAgIHJldHVybiBmb3JtQ29udGFpbmVyO1xuICB9O1xuXG4gIGNvbnN0IGdldExldHRlciA9IChjb2x1bW4pID0+IHtcbiAgICBzd2l0Y2ggKGNvbHVtbikge1xuICAgICAgY2FzZSAyOlxuICAgICAgICByZXR1cm4gXCJBXCI7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIHJldHVybiBcIkJcIjtcbiAgICAgIGNhc2UgNDpcbiAgICAgICAgcmV0dXJuIFwiQ1wiO1xuICAgICAgY2FzZSA1OlxuICAgICAgICByZXR1cm4gXCJEXCI7XG4gICAgICBjYXNlIDY6XG4gICAgICAgIHJldHVybiBcIkVcIjtcbiAgICAgIGNhc2UgNzpcbiAgICAgICAgcmV0dXJuIFwiRlwiO1xuICAgICAgY2FzZSA4OlxuICAgICAgICByZXR1cm4gXCJHXCI7XG4gICAgICBjYXNlIDk6XG4gICAgICAgIHJldHVybiBcIkhcIjtcbiAgICAgIGNhc2UgMTA6XG4gICAgICAgIHJldHVybiBcIklcIjtcbiAgICAgIGNhc2UgMTE6XG4gICAgICAgIHJldHVybiBcIkpcIjtcbiAgICAgIC8vIG5vIGRlZmF1bHRcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZUNlbGwgPSAoYXJncykgPT4ge1xuICAgIGNvbnN0IGNlbGwgPSBjcmVhdGVEaXYoKTtcbiAgICBjb25zdCB7IHJvdyB9ID0gYXJncztcbiAgICBjb25zdCB7IGNvbHVtbiB9ID0gYXJncztcblxuICAgIGlmIChyb3cgPj0gMiAmJiBjb2x1bW4gPj0gMikge1xuICAgICAgY2VsbC5jbGFzc0xpc3QgPSBcImNlbGwtY29udGFpbmVyXCI7XG4gICAgICBjZWxsLnNldEF0dHJpYnV0ZShcImRhdGEteC1jb29yZGluYXRlXCIsIHJvdyAtIDIpO1xuICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXktY29vcmRpbmF0ZVwiLCBjb2x1bW4gLSAyKTtcbiAgICB9IGVsc2UgaWYgKHJvdyA+PSAyICYmIGNvbHVtbiA9PT0gMSkge1xuICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwibnVtYmVyXCIpO1xuICAgICAgY2VsbC50ZXh0Q29udGVudCA9IGAke3JvdyAtIDF9YDtcbiAgICB9IGVsc2UgaWYgKHJvdyA9PT0gMSAmJiBjb2x1bW4gPj0gMikge1xuICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwibGV0dGVyXCIpO1xuICAgICAgY2VsbC50ZXh0Q29udGVudCA9IGdldExldHRlcihjb2x1bW4pO1xuICAgIH1cbiAgICByZXR1cm4gY2VsbDtcbiAgfTtcblxuICBjb25zdCBsb2FkQ2VsbHMgPSAoYXJncykgPT4ge1xuICAgIGNvbnN0IGdhbWVib2FyZCA9IGNyZWF0ZURpdih7IGNsYXNzTmFtZTogXCJnYW1lYm9hcmRcIiB9KTtcbiAgICBjb25zdCBodW1hbkdhbWVib2FyZEdyaWQgPSBhcmdzLmh1bWFuR2FtZWJvYXJkLmdldEdyaWQoKTtcbiAgICBjb25zdCBsaW5lTGVuZ3RoID0gMTE7XG4gICAgZm9yIChsZXQgcm93ID0gMTsgcm93IDw9IGxpbmVMZW5ndGg7IHJvdyArPSAxKSB7XG4gICAgICBmb3IgKGxldCBjb2x1bW4gPSAxOyBjb2x1bW4gPD0gbGluZUxlbmd0aDsgY29sdW1uICs9IDEpIHtcbiAgICAgICAgY29uc3QgY2VsbCA9IGNyZWF0ZUNlbGwoeyAuLi5hcmdzLCByb3csIGNvbHVtbiwgaHVtYW5HYW1lYm9hcmRHcmlkIH0pO1xuICAgICAgICBnYW1lYm9hcmQuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBnYW1lYm9hcmQ7XG4gIH07XG5cbiAgY29uc3QgbG9hZEdhbWVib2FyZCA9IChhcmdzKSA9PiB7XG4gICAgY29uc3QgZ2FtZWJvYXJkQ29udGFpbmVyID0gY3JlYXRlRGl2KHsgY2xhc3NOYW1lOiBcImdhbWVib2FyZC1jb250YWluZXJcIiB9KTtcbiAgICBjb25zdCBncmlkTGVnZW5kID0gY3JlYXRlRGl2KHtcbiAgICAgIGNsYXNzTmFtZTogXCJncmlkLWxlZ2VuZFwiLFxuICAgICAgdGV4dENvbnRlbnQ6IGFyZ3MudGV4dCxcbiAgICB9KTtcbiAgICBjb25zdCBnYW1lYm9hcmQgPSBsb2FkQ2VsbHMoYXJncyk7XG4gICAgZ2FtZWJvYXJkQ29udGFpbmVyLmFwcGVuZChnYW1lYm9hcmQsIGdyaWRMZWdlbmQpO1xuICAgIHJldHVybiBnYW1lYm9hcmRDb250YWluZXI7XG4gIH07XG5cbiAgY29uc3QgbG9hZE1haW4gPSAoYXJncykgPT4ge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcbiAgICBjb25zdCBnYW1lYm9hcmRzID0gY3JlYXRlRGl2KHsgY2xhc3NOYW1lOiBcImdhbWVib2FyZHNcIiB9KTtcbiAgICBjb25zdCBtYWluUGxheWVyR2FtZWJvYXJkID0gbG9hZEdhbWVib2FyZCh7XG4gICAgICAuLi5hcmdzLFxuICAgICAgdGV4dDogXCJZb3VyIGdyaWRcIixcbiAgICB9KTtcbiAgICBjb25zdCB0cmFja2luZ1BsYXllckdhbWVib2FyZCA9IGxvYWRHYW1lYm9hcmQoe1xuICAgICAgLi4uYXJncyxcbiAgICAgIHRleHQ6IFwiWW91ciBlbmVteSBncmlkXCIsXG4gICAgfSk7XG4gICAgZ2FtZWJvYXJkcy5hcHBlbmQobWFpblBsYXllckdhbWVib2FyZCwgdHJhY2tpbmdQbGF5ZXJHYW1lYm9hcmQpO1xuICAgIG1haW4uYXBwZW5kKGNyZWF0ZVNoaXBGb3JtKCksIGdhbWVib2FyZHMpO1xuICAgIGJvZHkuaW5zZXJ0QmVmb3JlKG1haW4sIHNjcmlwdCk7XG4gIH07XG5cbiAgY29uc3QgbG9hZEZvb3RlciA9ICgpID0+IHtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xuICAgIGJvZHkuaW5zZXJ0QmVmb3JlKGZvb3Rlciwgc2NyaXB0KTtcbiAgfTtcblxuICBjb25zdCBnZXRDb29yZGluYXRlcyA9IChlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgeCA9IE51bWJlcihlbGVtZW50LmRhdGFzZXQueENvb3JkaW5hdGUpO1xuICAgIGNvbnN0IHkgPSBOdW1iZXIoZWxlbWVudC5kYXRhc2V0LnlDb29yZGluYXRlKTtcbiAgICByZXR1cm4geyB4LCB5IH07XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlR2FtZWJvYXJkID0gKGF0dGFja1Jlc3VsdCwgY2VsbERpdikgPT4ge1xuICAgIGlmIChhdHRhY2tSZXN1bHQpIHtcbiAgICAgIGNlbGxEaXYuY2xhc3NMaXN0LmFkZChcInNoaXAtYXR0YWNrZWRcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNlbGxEaXYuY2xhc3NMaXN0LmFkZChcIm1pc3NlZC1hdHRhY2tcIik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGh1bWFuVHVybiA9IChhcmdzKSA9PiB7XG4gICAgY29uc3QgeyBidXR0b24gfSA9IGFyZ3M7XG4gICAgY29uc3QgY29vcmRpbmF0ZXMgPSBnZXRDb29yZGluYXRlcyhidXR0b24ucGFyZW50Tm9kZSk7XG4gICAgY29uc3QgaHVtYW5SZXN1bHQgPSBhcmdzLmh1bWFuUGxheWVyLnNlbmRBdHRhY2soXG4gICAgICBjb29yZGluYXRlcyxcbiAgICAgIGFyZ3MuY29tcHV0ZXJHYW1lYm9hcmQsXG4gICAgKTtcbiAgICB1cGRhdGVHYW1lYm9hcmQoaHVtYW5SZXN1bHQsIGJ1dHRvbi5wYXJlbnROb2RlKTtcbiAgICBidXR0b24ucmVtb3ZlKCk7XG4gIH07XG5cbiAgY29uc3QgY29tcHV0ZXJUdXJuID0gKGFyZ3MpID0+IHtcbiAgICBjb25zdCB7IGh1bWFuR2FtZWJvYXJkIH0gPSBhcmdzO1xuICAgIGNvbnN0IHsgY29tcHV0ZXJQbGF5ZXIgfSA9IGFyZ3M7XG4gICAgY29uc3QgY29tcHV0ZXJDb29yZGluYXRlcyA9IGNvbXB1dGVyUGxheWVyLmNhbGN1bGF0ZUF0dGFjayhodW1hbkdhbWVib2FyZCk7XG4gICAgY29uc3QgY29tcHV0ZXJSZXN1bHQgPSBjb21wdXRlclBsYXllci5zZW5kQXR0YWNrKFxuICAgICAgY29tcHV0ZXJDb29yZGluYXRlcyxcbiAgICAgIGh1bWFuR2FtZWJvYXJkLFxuICAgICk7XG4gICAgY29tcHV0ZXJQbGF5ZXIucmVnaXN0ZXJBdHRhY2soe1xuICAgICAgY29vcmRpbmF0ZXM6IGNvbXB1dGVyQ29vcmRpbmF0ZXMsXG4gICAgICByZXN1bHQ6IGNvbXB1dGVyUmVzdWx0LFxuICAgIH0pO1xuICAgIGNvbnN0IGNlbGwgPSBhcmdzLm15R2FtZWJvYXJkLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgZGl2W2RhdGEteC1jb29yZGluYXRlPVwiJHtjb21wdXRlckNvb3JkaW5hdGVzLnh9XCJdW2RhdGEteS1jb29yZGluYXRlPVwiJHtjb21wdXRlckNvb3JkaW5hdGVzLnl9XCJdYCxcbiAgICApO1xuICAgIHVwZGF0ZUdhbWVib2FyZChjb21wdXRlclJlc3VsdCwgY2VsbCk7XG4gIH07XG5cbiAgY29uc3QgZGVsZXRlQnV0dG9ucyA9IChlbmVteUdhbWVib2FyZCkgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbnMgPSBlbmVteUdhbWVib2FyZC5xdWVyeVNlbGVjdG9yQWxsKFwiZGl2ID4gYnV0dG9uXCIpO1xuICAgIGNvbnN0IGJ1dHRvbnNBcnJheSA9IEFycmF5LmZyb20oYnV0dG9ucyk7XG4gICAgYnV0dG9uc0FycmF5LmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgaWYgKCFidXR0b24ucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoXCJzaGlwLWF0dGFja2VkXCIpKSB7XG4gICAgICAgIGJ1dHRvbi5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoXCJtaXNzZWQtYXR0YWNrXCIpO1xuICAgICAgfVxuICAgICAgYnV0dG9uLnJlbW92ZSgpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGdldFZpY3RvcnlNZXNzYWdlID0gKGdhbWVCb2FyZCkgPT4ge1xuICAgIGlmIChnYW1lQm9hcmQuYXJlQWxsU2hpcHNTdW5rKCkpIHtcbiAgICAgIHJldHVybiBcIllvdSB3aW5cIjtcbiAgICB9XG4gICAgcmV0dXJuIFwiQ29tcHV0ZXIgV2luc1wiO1xuICB9O1xuXG4gIGNvbnN0IGxvYWRWaWN0b3J5TWVzc2FnZSA9IChtZXNzYWdlKSA9PiB7XG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcbiAgICBwLnRleHRDb250ZW50ID0gbWVzc2FnZTtcbiAgICBtYWluLmFwcGVuZENoaWxkKHApO1xuICB9O1xuXG4gIGNvbnN0IGFkZEVuZW15R2FtZWJvYXJkTGlzdGVuZXIgPSAoYXJncykgPT4ge1xuICAgIGNvbnN0IGVuZW15R2FtZWJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIFwiLmdhbWVib2FyZHMgPiBkaXY6bnRoLWNoaWxkKDIpID4gZGl2OmZpcnN0LWNoaWxkXCIsXG4gICAgKTtcbiAgICBjb25zdCBteUdhbWVib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBcIi5nYW1lYm9hcmRzID4gZGl2OmZpcnN0LWNoaWxkID4gZGl2OmZpcnN0LWNoaWxkXCIsXG4gICAgKTtcbiAgICBlbmVteUdhbWVib2FyZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0Lm1hdGNoZXMoXCJidXR0b25cIikpIHtcbiAgICAgICAgaHVtYW5UdXJuKHsgLi4uYXJncywgYnV0dG9uOiBldmVudC50YXJnZXQgfSk7XG4gICAgICAgIGNvbXB1dGVyVHVybih7IC4uLmFyZ3MsIG15R2FtZWJvYXJkIH0pO1xuICAgICAgICBpZiAoYXJncy5pc0dhbWVPdmVyKGFyZ3MuaHVtYW5HYW1lYm9hcmQsIGFyZ3MuY29tcHV0ZXJHYW1lYm9hcmQpKSB7XG4gICAgICAgICAgZGVsZXRlQnV0dG9ucyhlbmVteUdhbWVib2FyZCk7XG4gICAgICAgICAgY29uc3QgdmljdG9yeU1lc3NhZ2UgPSBnZXRWaWN0b3J5TWVzc2FnZShhcmdzLmNvbXB1dGVyR2FtZWJvYXJkKTtcbiAgICAgICAgICBsb2FkVmljdG9yeU1lc3NhZ2UodmljdG9yeU1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgZ2V0U2hpcENlbGwgPSAoeCwgeSkgPT5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYGRpdltkYXRhLXgtY29vcmRpbmF0ZT1cIiR7eH1cIl1bZGF0YS15LWNvb3JkaW5hdGU9XCIke3l9XCJdYCxcbiAgICApO1xuXG4gIGNvbnN0IGdldFNoaXBDZWxscyA9IChhcmdzKSA9PiB7XG4gICAgY29uc3QgcmFuZ2UgPSBbLi4uQXJyYXkoTnVtYmVyKGFyZ3Muc2hpcExlbmd0aCkpLmtleXMoKV07XG4gICAgY29uc3Qgc2hpcENlbGxzID0gW107XG4gICAgbGV0IGluZGV4ID0gYXJncy5uZXdJbmRleDtcbiAgICBsZXQgY2VsbDtcbiAgICByYW5nZS5mb3JFYWNoKCgpID0+IHtcbiAgICAgIGlmIChhcmdzLmRpcmVjdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICAgIGNlbGwgPSBnZXRTaGlwQ2VsbChpbmRleCwgYXJncy5jb29yZGluYXRlcy55KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNlbGwgPSBnZXRTaGlwQ2VsbChhcmdzLmNvb3JkaW5hdGVzLngsIGluZGV4KTtcbiAgICAgIH1cbiAgICAgIHNoaXBDZWxscy5wdXNoKGNlbGwpO1xuICAgICAgaW5kZXggKz0gMTtcbiAgICB9KTtcbiAgICByZXR1cm4gc2hpcENlbGxzO1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlclNoaXAgPSAoc2hpcENlbGxzKSA9PiB7XG4gICAgc2hpcENlbGxzLmZvckVhY2goKHNoaXBDZWxsKSA9PiB7XG4gICAgICBzaGlwQ2VsbC5jbGFzc0xpc3QuYWRkKFwic2hpcFwiKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBhZGRGb3JtTGlzdGVuZXIgPSAoYXJncykgPT4ge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKTtcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgeENvb3JkaW5hdGUgPSBmb3JtLmVsZW1lbnRzW1wieC1jb29yZGluYXRlXCJdLnZhbHVlO1xuICAgICAgY29uc3QgeUNvb3JkaW5hdGUgPSBmb3JtLmVsZW1lbnRzW1wieS1jb29yZGluYXRlXCJdLnZhbHVlO1xuICAgICAgY29uc3Qgc2hpcExlbmd0aCA9IGZvcm0uZWxlbWVudHNbXCJzaGlwLWxlbmd0aFwiXS52YWx1ZTtcbiAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IGZvcm0uZWxlbWVudHMuZGlyZWN0aW9uLnZhbHVlO1xuICAgICAgY29uc3QgZm9ybURhdGEgPSBbeENvb3JkaW5hdGUsIHlDb29yZGluYXRlLCBzaGlwTGVuZ3RoLCBkaXJlY3Rpb25dO1xuICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lcnJvci1tZXNzYWdlXCIpO1xuICAgICAgaWYgKGZvcm1EYXRhLnNvbWUoKGVsZW1lbnQpID0+IGVsZW1lbnQgPT09IFwiXCIpKSB7XG4gICAgICAgIGVycm9yTWVzc2FnZS50ZXh0Q29udGVudCA9IFwiTWlzc2luZyBhdCBsZWFzdCBhIHZhbHVlXCI7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChhcmdzLmh1bWFuR2FtZWJvYXJkLmlzTWF4U2hpcENvdW50UmVhY2hlZCgpKSB7XG4gICAgICAgIGZvcm0ucmVtb3ZlKCk7XG4gICAgICAgIGNvbnN0IGVuZW15R2FtZWJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICAgICBcIi5nYW1lYm9hcmRzID4gZGl2Om50aC1jaGlsZCgyKSA+IGRpdiA+IC5jZWxsLWNvbnRhaW5lclwiLFxuICAgICAgICApO1xuICAgICAgICBlbmVteUdhbWVib2FyZC5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICAgICAgY2VsbC5hcHBlbmRDaGlsZChjcmVhdGVCdXR0b24oXCJidXR0b25cIikpO1xuICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcImVuZW15LWNlbGxcIik7XG4gICAgICAgIH0pO1xuICAgICAgICBhZGRFbmVteUdhbWVib2FyZExpc3RlbmVyKHtcbiAgICAgICAgICBodW1hblBsYXllcjogYXJncy5odW1hblBsYXllcixcbiAgICAgICAgICBodW1hbkdhbWVib2FyZDogYXJncy5odW1hbkdhbWVib2FyZCxcbiAgICAgICAgICBjb21wdXRlclBsYXllcjogYXJncy5jb21wdXRlclBsYXllcixcbiAgICAgICAgICBjb21wdXRlckdhbWVib2FyZDogYXJncy5jb21wdXRlckdhbWVib2FyZCxcbiAgICAgICAgICBpc0dhbWVPdmVyOiBhcmdzLmlzR2FtZU92ZXIsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGNvb3JkaW5hdGVzID0geyB4OiBOdW1iZXIoeENvb3JkaW5hdGUpLCB5OiBOdW1iZXIoeUNvb3JkaW5hdGUpIH07XG4gICAgICBjb25zdCBuZXdJbmRleCA9IGRpcmVjdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiID8gY29vcmRpbmF0ZXMueCA6IGNvb3JkaW5hdGVzLnk7XG4gICAgICBpZiAobmV3SW5kZXggKyBOdW1iZXIoc2hpcExlbmd0aCkgPiAxMCkge1xuICAgICAgICBlcnJvck1lc3NhZ2UudGV4dENvbnRlbnQgPVxuICAgICAgICAgIFwiU2hpcCBjYW4ndCBiZSBwbGFjZWQgdGhlcmUuIFRyeSB0byBsb3dlciBhdCBsZWFzdCBvbmUgY29vcmRpbmF0ZSBvciBzaGlwIGxlbmd0aC5cIjtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgY29uc3QgY2FuU2hpcEJlUGxhY2VkID0gYXJncy5odW1hbkdhbWVib2FyZC5jYW5TaGlwQmVQbGFjZWQoXG4gICAgICAgIGNvb3JkaW5hdGVzLFxuICAgICAgICBOdW1iZXIoc2hpcExlbmd0aCksXG4gICAgICAgIGRpcmVjdGlvbixcbiAgICAgICk7XG4gICAgICBpZiAoIWNhblNoaXBCZVBsYWNlZCkge1xuICAgICAgICBlcnJvck1lc3NhZ2UudGV4dENvbnRlbnQgPVxuICAgICAgICAgIFwiU2hpcCBjYW4ndCBiZSBwbGFjZWQgdGhlcmUuIEVuc3VyZSB0aGF0IGFsbCBzaGlwcyBoYXZlIG9uZSBlbXB0eSBzcGFjZSBiZXR3ZWVuIGVhY2ggb3RoZXIuXCI7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGFyZ3MuaHVtYW5HYW1lYm9hcmQucGxhY2VTaGlwKGNvb3JkaW5hdGVzLCBOdW1iZXIoc2hpcExlbmd0aCksIGRpcmVjdGlvbik7XG4gICAgICBjb25zdCBzaGlwQ2VsbHMgPSBnZXRTaGlwQ2VsbHMoe1xuICAgICAgICBzaGlwTGVuZ3RoOiBOdW1iZXIoc2hpcExlbmd0aCksXG4gICAgICAgIGRpcmVjdGlvbixcbiAgICAgICAgbmV3SW5kZXgsXG4gICAgICAgIGNvb3JkaW5hdGVzLFxuICAgICAgfSk7XG4gICAgICByZW5kZXJTaGlwKHNoaXBDZWxscyk7XG4gICAgICBlcnJvck1lc3NhZ2UudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgbG9hZFBhZ2UgPSAoYXJncykgPT4ge1xuICAgIGxvYWRIZWFkZXIoKTtcbiAgICBsb2FkTWFpbihhcmdzKTtcbiAgICBsb2FkRm9vdGVyKCk7XG4gICAgYWRkRm9ybUxpc3RlbmVyKGFyZ3MpO1xuICB9O1xuXG4gIHJldHVybiB7IGxvYWRQYWdlIH07XG59XG4iLCJjb25zdCBHYW1lYm9hcmQgPSByZXF1aXJlKFwiLi9nYW1lYm9hcmRcIik7XG5jb25zdCBQbGF5ZXIgPSByZXF1aXJlKFwiLi9wbGF5ZXJcIik7XG5cbmNvbnN0IEdhbWUgPSAoKSA9PiB7XG4gIGNvbnN0IGdldFJhbmRvbUluZGV4ID0gKGFycmF5TGVuZ3RoKSA9PlxuICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGFycmF5TGVuZ3RoKTtcblxuICBjb25zdCBwb3B1bGF0ZUdhbWVib2FyZCA9IChjb21wdXRlckdhbWVib2FyZCkgPT4ge1xuICAgIGNvbnN0IHNoaXBMZW5ndGhzID0gWzIsIDMsIDQsIDVdO1xuICAgIGNvbnN0IHZhbGlkQ29vcmRpbmF0ZXMgPSBbMCwgMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOV07XG4gICAgY29uc3QgZGlyZWN0aW9ucyA9IFtcImhvcml6b250YWxcIiwgXCJ2ZXJ0aWNhbFwiXTtcbiAgICB3aGlsZSAoIWNvbXB1dGVyR2FtZWJvYXJkLmlzTWF4U2hpcENvdW50UmVhY2hlZCgpKSB7XG4gICAgICBjb25zdCByYW5kb21Db29yZGluYXRlcyA9IHtcbiAgICAgICAgeDogdmFsaWRDb29yZGluYXRlc1tnZXRSYW5kb21JbmRleCgxMCldLFxuICAgICAgICB5OiB2YWxpZENvb3JkaW5hdGVzW2dldFJhbmRvbUluZGV4KDEwKV0sXG4gICAgICB9O1xuICAgICAgY29uc3QgcmFuZG9tU2hpcExlbmd0aCA9IHNoaXBMZW5ndGhzW2dldFJhbmRvbUluZGV4KDQpXTtcbiAgICAgIGNvbnN0IHJhbmRvbURpcmVjdGlvbiA9IGRpcmVjdGlvbnNbZ2V0UmFuZG9tSW5kZXgoMildO1xuICAgICAgaWYgKFxuICAgICAgICBjb21wdXRlckdhbWVib2FyZC5jYW5TaGlwQmVQbGFjZWQoXG4gICAgICAgICAgcmFuZG9tQ29vcmRpbmF0ZXMsXG4gICAgICAgICAgcmFuZG9tU2hpcExlbmd0aCxcbiAgICAgICAgICByYW5kb21EaXJlY3Rpb24sXG4gICAgICAgIClcbiAgICAgICkge1xuICAgICAgICBjb21wdXRlckdhbWVib2FyZC5wbGFjZVNoaXAoXG4gICAgICAgICAgcmFuZG9tQ29vcmRpbmF0ZXMsXG4gICAgICAgICAgcmFuZG9tU2hpcExlbmd0aCxcbiAgICAgICAgICByYW5kb21EaXJlY3Rpb24sXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZU9iamVjdHMgPSAoKSA9PiB7XG4gICAgY29uc3QgaHVtYW5QbGF5ZXIgPSBQbGF5ZXIoKTtcbiAgICBjb25zdCBjb21wdXRlclBsYXllciA9IFBsYXllcihcImNvbXB1dGVyXCIpO1xuICAgIGNvbnN0IGh1bWFuR2FtZWJvYXJkID0gR2FtZWJvYXJkKCk7XG4gICAgY29uc3QgaHVtYW5UcmFja2luZ0dhbWVib2FyZCA9IEdhbWVib2FyZCgpO1xuICAgIGNvbnN0IGNvbXB1dGVyR2FtZWJvYXJkID0gR2FtZWJvYXJkKCk7XG4gICAgcG9wdWxhdGVHYW1lYm9hcmQoY29tcHV0ZXJHYW1lYm9hcmQpO1xuICAgIGNvbnN0IGNvbXB1dGVyVHJhY2tpbmdHYW1lYm9hcmQgPSBHYW1lYm9hcmQoKTtcbiAgICByZXR1cm4ge1xuICAgICAgaHVtYW5QbGF5ZXIsXG4gICAgICBjb21wdXRlclBsYXllcixcbiAgICAgIGh1bWFuR2FtZWJvYXJkLFxuICAgICAgaHVtYW5UcmFja2luZ0dhbWVib2FyZCxcbiAgICAgIGNvbXB1dGVyR2FtZWJvYXJkLFxuICAgICAgY29tcHV0ZXJUcmFja2luZ0dhbWVib2FyZCxcbiAgICB9O1xuICB9O1xuXG4gIGNvbnN0IGlzR2FtZU92ZXIgPSAoaHVtYW5HYW1lYm9hcmQsIGNvbXB1dGVyR2FtZWJvYXJkKSA9PlxuICAgIGh1bWFuR2FtZWJvYXJkLmFyZUFsbFNoaXBzU3VuaygpIHx8IGNvbXB1dGVyR2FtZWJvYXJkLmFyZUFsbFNoaXBzU3VuaygpO1xuXG4gIHJldHVybiB7IGNyZWF0ZU9iamVjdHMsIGlzR2FtZU92ZXIgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gR2FtZTtcbiIsImNvbnN0IFNoaXAgPSByZXF1aXJlKFwiLi9zaGlwXCIpO1xuXG5jb25zdCBHYW1lYm9hcmQgPSAoKSA9PiB7XG4gIGNvbnN0IGdyaWQgPSBbXTtcbiAgY29uc3QgbWlzc2VkQXR0YWNrcyA9IFtdO1xuICBjb25zdCBtYXhTaGlwQ291bnQgPSA1O1xuICBsZXQgc2hpcENvdW50ID0gMDtcblxuICBjb25zdCBnZXRTaGlwQ291bnQgPSAoKSA9PiBzaGlwQ291bnQ7XG4gIGNvbnN0IHJhbmdlID0gKG51bSkgPT4gWy4uLkFycmF5KG51bSkua2V5cygpXTtcblxuICBjb25zdCBpc01heFNoaXBDb3VudFJlYWNoZWQgPSAoKSA9PiBnZXRTaGlwQ291bnQoKSA+PSBtYXhTaGlwQ291bnQ7XG5cbiAgY29uc3QgaXNDZWxsRW1wdHkgPSAoY2VsbFZhbHVlKSA9PlxuICAgIEpTT04uc3RyaW5naWZ5KGNlbGxWYWx1ZSkgPT09IEpTT04uc3RyaW5naWZ5KHt9KTtcblxuICBjb25zdCBpc0Nvb3JkaW5hdGV2YWxpZCA9IChjb29yZGluYXRlKSA9PiBjb29yZGluYXRlID49IDAgJiYgY29vcmRpbmF0ZSA8PSA5O1xuXG4gIGNvbnN0IGFyZUNvb3JkaW5hdGVzVmFsaWQgPSAoY29vcmRpbmF0ZXMpID0+XG4gICAgaXNDb29yZGluYXRldmFsaWQoY29vcmRpbmF0ZXMueCkgJiYgaXNDb29yZGluYXRldmFsaWQoY29vcmRpbmF0ZXMueSk7XG5cbiAgY29uc3QgZ2V0U3Vycm91bmRDb29yZGluYXRlcyA9IChjb29yZGluYXRlcykgPT4ge1xuICAgIGNvbnN0IHsgeCB9ID0gY29vcmRpbmF0ZXM7XG4gICAgY29uc3QgeyB5IH0gPSBjb29yZGluYXRlcztcbiAgICBjb25zdCBzdXJyb3VuZENvb3JkaW5hdGVzID0gW1xuICAgICAgeyB4OiB4IC0gMSwgeTogeSAtIDEgfSxcbiAgICAgIHsgeDogeCAtIDEsIHkgfSxcbiAgICAgIHsgeDogeCAtIDEsIHk6IHkgKyAxIH0sXG4gICAgICB7IHgsIHk6IHkgLSAxIH0sXG4gICAgICB7IHgsIHkgfSxcbiAgICAgIHsgeCwgeTogeSArIDEgfSxcbiAgICAgIHsgeDogeCArIDEsIHk6IHkgLSAxIH0sXG4gICAgICB7IHg6IHggKyAxLCB5IH0sXG4gICAgICB7IHg6IHggKyAxLCB5OiB5ICsgMSB9LFxuICAgIF07XG4gICAgcmV0dXJuIHN1cnJvdW5kQ29vcmRpbmF0ZXMuZmlsdGVyKChzQ29vcmRpbmF0ZXMpID0+XG4gICAgICBhcmVDb29yZGluYXRlc1ZhbGlkKHNDb29yZGluYXRlcyksXG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBnZXRTdXJyb3VuZENlbGxzID0gKGNvb3JkaW5hdGVzKSA9PiB7XG4gICAgY29uc3Qgc3Vycm91bmRDb29yZGluYXRlcyA9IGdldFN1cnJvdW5kQ29vcmRpbmF0ZXMoY29vcmRpbmF0ZXMpO1xuICAgIGNvbnN0IHN1cnJvdW5kQ2VsbHMgPSBbXTtcbiAgICBzdXJyb3VuZENvb3JkaW5hdGVzLmZvckVhY2goKHNDb29yZGluYXRlcykgPT5cbiAgICAgIHN1cnJvdW5kQ2VsbHMucHVzaChncmlkW3NDb29yZGluYXRlcy54XVtzQ29vcmRpbmF0ZXMueV0pLFxuICAgICk7XG4gICAgcmV0dXJuIHN1cnJvdW5kQ2VsbHM7XG4gIH07XG5cbiAgY29uc3QgZ2V0U2hpcENvb3JkaW5hdGVzID0gKGNvb3JkaW5hdGVzLCBzaGlwTGVuZ3RoLCBkaXJlY3Rpb24pID0+IHtcbiAgICBjb25zdCBzaGlwUmFuZ2UgPSByYW5nZShzaGlwTGVuZ3RoKTtcbiAgICBsZXQgaW5kZXggPSBkaXJlY3Rpb24gPT09IFwidmVydGljYWxcIiA/IGNvb3JkaW5hdGVzLnggOiBjb29yZGluYXRlcy55O1xuICAgIGNvbnN0IHNoaXBDb29yZGluYXRlcyA9IFtdO1xuICAgIGxldCBjZWxsQ29vcmRpbmF0ZTtcbiAgICBzaGlwUmFuZ2UuZm9yRWFjaCgoKSA9PiB7XG4gICAgICBpZiAoZGlyZWN0aW9uID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgICAgY2VsbENvb3JkaW5hdGUgPSB7IHg6IGluZGV4LCB5OiBjb29yZGluYXRlcy55IH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjZWxsQ29vcmRpbmF0ZSA9IHsgeDogY29vcmRpbmF0ZXMueCwgeTogaW5kZXggfTtcbiAgICAgIH1cbiAgICAgIHNoaXBDb29yZGluYXRlcy5wdXNoKGNlbGxDb29yZGluYXRlKTtcbiAgICAgIGluZGV4ICs9IDE7XG4gICAgfSk7XG4gICAgcmV0dXJuIHNoaXBDb29yZGluYXRlcztcbiAgfTtcblxuICBjb25zdCBjYWxjdWxhdGVFbmRJbmRleCA9IChjb29yZGluYXRlcywgc2hpcExlbmd0aCwgZGlyZWN0aW9uKSA9PiB7XG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICByZXR1cm4gY29vcmRpbmF0ZXMueCArIHNoaXBMZW5ndGg7XG4gICAgfVxuICAgIHJldHVybiBjb29yZGluYXRlcy55ICsgc2hpcExlbmd0aDtcbiAgfTtcblxuICBjb25zdCBpc051bWJlckluUmFuZ2UgPSAobnVtKSA9PiBudW0gPD0gOTtcblxuICBjb25zdCBjYW5TaGlwQmVQbGFjZWQgPSAoY29vcmRpbmF0ZXMsIHNoaXBMZW5ndGgsIGRpcmVjdGlvbikgPT4ge1xuICAgIGNvbnN0IGVuZEluZGV4ID0gY2FsY3VsYXRlRW5kSW5kZXgoY29vcmRpbmF0ZXMsIHNoaXBMZW5ndGgsIGRpcmVjdGlvbik7XG4gICAgaWYgKCFpc051bWJlckluUmFuZ2UoZW5kSW5kZXgpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgbGV0IHN1cnJvdW5kQ2VsbHMgPSBnZXRTdXJyb3VuZENlbGxzKGNvb3JkaW5hdGVzKTtcbiAgICBjb25zdCBzaGlwQ29vcmRpbmF0ZXMgPSBnZXRTaGlwQ29vcmRpbmF0ZXMoXG4gICAgICBjb29yZGluYXRlcyxcbiAgICAgIHNoaXBMZW5ndGgsXG4gICAgICBkaXJlY3Rpb24sXG4gICAgKTtcbiAgICByZXR1cm4gc2hpcENvb3JkaW5hdGVzLmV2ZXJ5KChzaGlwQ29vcmRpbmF0ZSkgPT4ge1xuICAgICAgc3Vycm91bmRDZWxscyA9IGdldFN1cnJvdW5kQ2VsbHMoc2hpcENvb3JkaW5hdGUpO1xuICAgICAgcmV0dXJuIHN1cnJvdW5kQ2VsbHMuZXZlcnkoKGNlbGwpID0+IGlzQ2VsbEVtcHR5KGNlbGwpKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBwbGFjZVNoaXAgPSAoY29vcmRpbmF0ZXMsIHNoaXBMZW5ndGgsIGRpcmVjdGlvbikgPT4ge1xuICAgIGNvbnN0IG5ld1NoaXAgPSBTaGlwKHNoaXBMZW5ndGgpO1xuICAgIGNvbnN0IHNoaXBSYW5nZSA9IHJhbmdlKHNoaXBMZW5ndGgpO1xuICAgIHNoaXBSYW5nZS5mb3JFYWNoKChpKSA9PiB7XG4gICAgICBpZiAoZGlyZWN0aW9uID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgICAgZ3JpZFtjb29yZGluYXRlcy54ICsgaV1bY29vcmRpbmF0ZXMueV0gPSBuZXdTaGlwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZ3JpZFtjb29yZGluYXRlcy54XVtjb29yZGluYXRlcy55ICsgaV0gPSBuZXdTaGlwO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHNoaXBDb3VudCA9IGdldFNoaXBDb3VudCgpICsgMTtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVHcmlkID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbHVtbnMgPSByYW5nZSgxMCk7XG4gICAgY29sdW1ucy5mb3JFYWNoKChjKSA9PiB7XG4gICAgICBjb25zdCByb3cgPSByYW5nZSgxMCk7XG4gICAgICBncmlkW2NdID0gW107XG4gICAgICByb3cuZm9yRWFjaCgocikgPT4ge1xuICAgICAgICBncmlkW2NdW3JdID0ge307XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgcmVjb3JkQ29vcmRpbmF0ZXMgPSAoY29vcmRpbmF0ZXMpID0+IHtcbiAgICBtaXNzZWRBdHRhY2tzLnB1c2goY29vcmRpbmF0ZXMpO1xuICB9O1xuXG4gIGNvbnN0IGlzU2hpcCA9IChjZWxsLCBwcm9wZXJ0eSA9IFwiaGl0XCIpID0+IE9iamVjdC5oYXNPd24oY2VsbCwgcHJvcGVydHkpO1xuXG4gIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoY29vcmRpbmF0ZXMsIGNiID0gcmVjb3JkQ29vcmRpbmF0ZXMpID0+IHtcbiAgICBjb25zdCBjZWxsQ29udGVudCA9IGdyaWRbY29vcmRpbmF0ZXMueF1bY29vcmRpbmF0ZXMueV07XG4gICAgY29uc3Qgc2hpcEZvdW5kID0gaXNTaGlwKGNlbGxDb250ZW50KTtcbiAgICBpZiAoc2hpcEZvdW5kKSB7XG4gICAgICBjZWxsQ29udGVudC5oaXQoKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBjYihjb29yZGluYXRlcyk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IGdldEFsbFNoaXBzID0gKCkgPT4ge1xuICAgIGNvbnN0IGdyaWRDb3B5ID0gZ3JpZC5mbGF0KCk7XG4gICAgcmV0dXJuIGdyaWRDb3B5LmZpbHRlcigoY2VsbCkgPT4gaXNTaGlwKGNlbGwsIFwiaXNTdW5rXCIpKTtcbiAgfTtcblxuICBjb25zdCBhcmVBbGxTaGlwc1N1bmsgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2hpcHMgPSBnZXRBbGxTaGlwcygpO1xuICAgIHJldHVybiBzaGlwcy5ldmVyeSgoc2hpcCkgPT4gc2hpcC5pc1N1bmsoKSk7XG4gIH07XG5cbiAgY29uc3QgZ2V0R3JpZCA9ICgpID0+IGdyaWQ7XG4gIGNyZWF0ZUdyaWQoKTtcbiAgcmV0dXJuIHtcbiAgICBtaXNzZWRBdHRhY2tzLFxuICAgIGNhblNoaXBCZVBsYWNlZCxcbiAgICBnZXRHcmlkLFxuICAgIGlzTWF4U2hpcENvdW50UmVhY2hlZCxcbiAgICBwbGFjZVNoaXAsXG4gICAgcmVjZWl2ZUF0dGFjayxcbiAgICBhcmVBbGxTaGlwc1N1bmssXG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWVib2FyZDtcbiIsImNvbnN0IFBsYXllciA9ICh0eXBlID0gXCJodW1hblwiKSA9PiB7XG4gIGNvbnN0IHBsYXllclR5cGUgPSB0eXBlO1xuICBjb25zdCBhdHRhY2tzTWFkZSA9IFtdO1xuICBjb25zdCByZWdpc3RlckF0dGFjayA9IChhdHRhY2spID0+IHtcbiAgICBhdHRhY2tzTWFkZS5wdXNoKGF0dGFjayk7XG4gIH07XG4gIGNvbnN0IHNlbmRBdHRhY2sgPSAoY29vcmRpbmF0ZXMsIGVuZW15R2FtZUJvYXJkKSA9PlxuICAgIGVuZW15R2FtZUJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZXMpO1xuXG4gIGNvbnN0IGdldFJhbmRvbUluY2x1c2l2ZSA9IChtaW4sIG1heCkgPT5cbiAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pO1xuXG4gIGNvbnN0IGlzQXR0YWNrTWFkZSA9IChjb29yZGluYXRlcykgPT5cbiAgICBhdHRhY2tzTWFkZS5maW5kKFxuICAgICAgKGF0dGFjaykgPT5cbiAgICAgICAgYXR0YWNrLmNvb3JkaW5hdGVzLnggPT09IGNvb3JkaW5hdGVzLnggJiZcbiAgICAgICAgYXR0YWNrLmNvb3JkaW5hdGVzLnkgPT09IGNvb3JkaW5hdGVzLnksXG4gICAgKTtcblxuICBjb25zdCBnZXRSYW5kb21Db29yZGluYXRlcyA9ICgpID0+IHtcbiAgICBsZXQgY29vcmRpbmF0ZXM7XG4gICAgZG8ge1xuICAgICAgY29uc3QgeCA9IGdldFJhbmRvbUluY2x1c2l2ZSgwLCA5KTtcbiAgICAgIGNvbnN0IHkgPSBnZXRSYW5kb21JbmNsdXNpdmUoMCwgOSk7XG4gICAgICBjb29yZGluYXRlcyA9IHsgeCwgeSB9O1xuICAgIH0gd2hpbGUgKGlzQXR0YWNrTWFkZShjb29yZGluYXRlcykpO1xuICAgIHJldHVybiBjb29yZGluYXRlcztcbiAgfTtcblxuICBjb25zdCBpc0Nvb3JkaW5hdGVWYWxpZCA9IChjb29yZGluYXRlKSA9PlxuICAgIGNvb3JkaW5hdGUueCA+PSAwICYmXG4gICAgY29vcmRpbmF0ZS54IDw9IDkgJiZcbiAgICBjb29yZGluYXRlLnkgPj0gMCAmJlxuICAgIGNvb3JkaW5hdGUueSA8PSA5O1xuXG4gIGNvbnN0IGdldEFkamFjZW50Q2VsbHMgPSAoY29vcmRpbmF0ZXMpID0+IHtcbiAgICBjb25zdCBhZGphY2VudENlbGxzID0gW1xuICAgICAgeyB4OiBjb29yZGluYXRlcy54IC0gMSwgeTogY29vcmRpbmF0ZXMueSB9LFxuICAgICAgeyB4OiBjb29yZGluYXRlcy54LCB5OiBjb29yZGluYXRlcy55ICsgMSB9LFxuICAgICAgeyB4OiBjb29yZGluYXRlcy54IC0gMSwgeTogY29vcmRpbmF0ZXMueSB9LFxuICAgICAgeyB4OiBjb29yZGluYXRlcy54LCB5OiBjb29yZGluYXRlcy55IC0gMSB9LFxuICAgIF07XG4gICAgY29uc3QgdmFsaWRDZWxscyA9IGFkamFjZW50Q2VsbHMuZmlsdGVyKChjb29yZGluYXRlKSA9PlxuICAgICAgaXNDb29yZGluYXRlVmFsaWQoY29vcmRpbmF0ZSksXG4gICAgKTtcbiAgICByZXR1cm4gdmFsaWRDZWxscy5maWx0ZXIoKGNlbGwpID0+ICFpc0F0dGFja01hZGUoY2VsbCkpO1xuICB9O1xuXG4gIGNvbnN0IGNhbGN1bGF0ZUF0dGFjayA9ICgpID0+IHtcbiAgICBpZiAocGxheWVyVHlwZSAhPT0gXCJjb21wdXRlclwiKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuICAgIGNvbnN0IGxhc3RBdHRhY2sgPSBhdHRhY2tzTWFkZVthdHRhY2tzTWFkZS5sZW5ndGggLSAxXTtcbiAgICBsZXQgYWRqYWNlbnRDZWxscztcbiAgICBsZXQgY29vcmRpbmF0ZXM7XG4gICAgaWYgKGxhc3RBdHRhY2sgJiYgbGFzdEF0dGFjay5yZXN1bHQpIHtcbiAgICAgIGFkamFjZW50Q2VsbHMgPSBnZXRBZGphY2VudENlbGxzKGxhc3RBdHRhY2suY29vcmRpbmF0ZXMpO1xuICAgICAgaWYgKGFkamFjZW50Q2VsbHMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIGNvbnN0IHJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGFkamFjZW50Q2VsbHMubGVuZ3RoKTtcbiAgICAgICAgY29vcmRpbmF0ZXMgPSBhZGphY2VudENlbGxzW3JhbmRvbV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb29yZGluYXRlcyA9IGdldFJhbmRvbUNvb3JkaW5hdGVzKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvb3JkaW5hdGVzID0gZ2V0UmFuZG9tQ29vcmRpbmF0ZXMoKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvb3JkaW5hdGVzO1xuICB9O1xuICByZXR1cm4geyBzZW5kQXR0YWNrLCBjYWxjdWxhdGVBdHRhY2ssIHJlZ2lzdGVyQXR0YWNrIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBsYXllcjtcbiIsImNvbnN0IFNoaXAgPSAobGVuZ3RoKSA9PiB7XG4gIGxldCBoaXRzID0gMDtcbiAgY29uc3QgZ2V0SGl0cyA9ICgpID0+IGhpdHM7XG4gIGNvbnN0IGhpdCA9ICgpID0+IHtcbiAgICBoaXRzICs9IDE7XG4gIH07XG4gIGNvbnN0IGlzU3VuayA9ICgpID0+IGxlbmd0aCA9PT0gZ2V0SGl0cygpO1xuICByZXR1cm4geyBsZW5ndGgsIGdldEhpdHMsIGhpdCwgaXNTdW5rIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNoaXA7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IERPTSBmcm9tIFwiLi9zY3JpcHRzL2RvbVwiO1xuaW1wb3J0IEdhbWUgZnJvbSBcIi4vc2NyaXB0cy9nYW1lXCI7XG5cbmNvbnN0IG15RE9NID0gRE9NKCk7XG5jb25zdCBteUdhbWUgPSBHYW1lKCk7XG5jb25zdCBnYW1lT2JqZWN0cyA9IG15R2FtZS5jcmVhdGVPYmplY3RzKCk7XG5teURPTS5sb2FkUGFnZShPYmplY3QuYXNzaWduKGdhbWVPYmplY3RzLCB7IGlzR2FtZU92ZXI6IG15R2FtZS5pc0dhbWVPdmVyIH0pKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==