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

body {
  display: flex;
  flex-direction: column;
  gap: 30px;
  background-color: #e0f2fe;
}

header {
  display: flex;
  justify-content: center;
}

h1 {
  font-size: 1.5rem;
  color: #0c4a6e;
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
  padding: 10%;
  border: 5px solid #1e3a8a;
  background-color: #dbeafe;
  color: #1e3a8a;
  font-size: 1.2rem;
}

button[type="submit"] {
  font-size: 1.2rem;
}

button[type="submit"]:hover {
  border: 2px solid #dbeafe;
  background-color: #1e3a8a;
  color: #dbeafe;
  transition-duration: 0.4s;
}

input,
button[type="submit"] {
  border: 2px solid #1e3a8a;
  background-color: #dbeafe;
  color: #1e3a8a;
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
  grid-template-rows: repeat(11, minmax(10px, 43px));
  grid-template-columns: repeat(11, minmax(10px, 43px));
}

.cell-container {
  border: 1px solid #000000;
  background-color: #f0f9ff;
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
  color: #1e3a8a;
}

.grid-legend {
  align-self: center;
  font-size: 1.1rem;
  color: #1e3a8a;
}

.ship {
  border: 2px solid #0000ff;
  background-color: #0ea5e9;
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

p {
  font-size: 4rem;
  color: #1e3a8a;
}

footer {
  margin-top: auto;
  align-self: center;
  color: #1e3a8a;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAiFE,SAAS;EACT,UAAU;EACV,SAAS;EACT,eAAe;EACf,aAAa;EACb,wBAAwB;AAC1B;AACA,gDAAgD;AAChD;;;;;;;;;;;EAWE,cAAc;AAChB;AACA;EACE,cAAc;AAChB;AACA;;EAEE,gBAAgB;AAClB;AACA;;EAEE,YAAY;AACd;AACA;;;;EAIE,WAAW;EACX,aAAa;AACf;AACA;EACE,yBAAyB;EACzB,iBAAiB;AACnB;;AAEA,qBAAqB;;AAErB;;EAEE,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,iBAAiB;EACjB,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;EACT,YAAY;EACZ,yBAAyB;EACzB,yBAAyB;EACzB,cAAc;EACd,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,yBAAyB;EACzB,yBAAyB;EACzB,cAAc;EACd,yBAAyB;AAC3B;;AAEA;;EAEE,yBAAyB;EACzB,yBAAyB;EACzB,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,kDAAkD;EAClD,qDAAqD;AACvD;;AAEA;EACE,yBAAyB;EACzB,yBAAyB;AAC3B;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,yBAAyB;EACzB,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;EACzB,yBAAyB;AAC3B;;AAEA;;EAEE,kBAAkB;EAClB,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,cAAc;AAChB;;AAEA;EACE,yBAAyB;EACzB,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;EACzB,yBAAyB;EACzB,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;EACzB,yBAAyB;AAC3B;;AAEA;;EAEE,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,cAAc;AAChB","sourcesContent":["html,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n/* End reset styles */\n\nhtml,\nbody {\n  height: 100%;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n  background-color: #e0f2fe;\n}\n\nheader {\n  display: flex;\n  justify-content: center;\n}\n\nh1 {\n  font-size: 1.5rem;\n  color: #0c4a6e;\n}\n\nmain {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 30px;\n}\n\nform {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n  padding: 10%;\n  border: 5px solid #1e3a8a;\n  background-color: #dbeafe;\n  color: #1e3a8a;\n  font-size: 1.2rem;\n}\n\nbutton[type=\"submit\"] {\n  font-size: 1.2rem;\n}\n\nbutton[type=\"submit\"]:hover {\n  border: 2px solid #dbeafe;\n  background-color: #1e3a8a;\n  color: #dbeafe;\n  transition-duration: 0.4s;\n}\n\ninput,\nbutton[type=\"submit\"] {\n  border: 2px solid #1e3a8a;\n  background-color: #dbeafe;\n  color: #1e3a8a;\n}\n\n.error-message {\n  color: #b91c1c;\n}\n\n.gameboards {\n  display: flex;\n  justify-content: space-evenly;\n  gap: 100px;\n}\n\n.gameboard-container {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.gameboard {\n  display: grid;\n  grid-template-rows: repeat(11, minmax(10px, 43px));\n  grid-template-columns: repeat(11, minmax(10px, 43px));\n}\n\n.cell-container {\n  border: 1px solid #000000;\n  background-color: #f0f9ff;\n}\n\n.cell {\n  justify-self: stretch;\n}\n\n.enemy-cell {\n  display: grid;\n}\n\n.enemy-cell:hover {\n  border: 3px solid #b45309;\n  transition-duration: 0.3s;\n}\n\n.enemy-cell:hover > button {\n  background-color: #f59e0b;\n  transition-duration: 0.3s;\n}\n\n.number,\n.letter {\n  place-self: center;\n  color: #1e3a8a;\n}\n\n.grid-legend {\n  align-self: center;\n  font-size: 1.1rem;\n  color: #1e3a8a;\n}\n\n.ship {\n  border: 2px solid #0000ff;\n  background-color: #0ea5e9;\n}\n\n.ship-attacked {\n  border: 2px solid #b91c1c;\n  background-color: #fca5a5;\n  transition-duration: 0.4s;\n}\n\n.missed-attack {\n  background-color: #a3a3a3;\n  transition-duration: 0.4s;\n}\n\n.ship-attacked,\n.missed-attack {\n  cursor: not-allowed;\n}\n\np {\n  font-size: 4rem;\n  color: #1e3a8a;\n}\n\nfooter {\n  margin-top: auto;\n  align-self: center;\n  color: #1e3a8a;\n}\n"],"sourceRoot":""}]);
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
    footer.textContent =
      "© 2023 Copyright: Generic Battleship app name is not an actual brand.";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnS0FBZ0ssV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksTUFBTSxZQUFZLGdCQUFnQixVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxVQUFVLEtBQUssUUFBUSxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxPQUFPLGFBQWEsT0FBTyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QixNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRLHdDQUF3QztBQUNoRCxRQUFRLHdDQUF3QztBQUNoRCxRQUFRLHdDQUF3QztBQUNoRCxRQUFRLHdDQUF3QztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7Ozs7Ozs7Ozs7O0FDdkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBOzs7Ozs7O1VDVkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDVztBQUNFOztBQUVsQyxjQUFjLHdEQUFHO0FBQ2pCLGVBQWUsb0RBQUk7QUFDbkI7QUFDQSw0Q0FBNEMsK0JBQStCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvZG9tLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBodG1sLFxuYm9keSxcbmRpdixcbnNwYW4sXG5hcHBsZXQsXG5vYmplY3QsXG5pZnJhbWUsXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYsXG5wLFxuYmxvY2txdW90ZSxcbnByZSxcbmEsXG5hYmJyLFxuYWNyb255bSxcbmFkZHJlc3MsXG5iaWcsXG5jaXRlLFxuY29kZSxcbmRlbCxcbmRmbixcbmVtLFxuaW1nLFxuaW5zLFxua2JkLFxucSxcbnMsXG5zYW1wLFxuc21hbGwsXG5zdHJpa2UsXG5zdHJvbmcsXG5zdWIsXG5zdXAsXG50dCxcbnZhcixcbmIsXG51LFxuaSxcbmNlbnRlcixcbmRsLFxuZHQsXG5kZCxcbm9sLFxudWwsXG5saSxcbmZpZWxkc2V0LFxuZm9ybSxcbmxhYmVsLFxubGVnZW5kLFxudGFibGUsXG5jYXB0aW9uLFxudGJvZHksXG50Zm9vdCxcbnRoZWFkLFxudHIsXG50aCxcbnRkLFxuYXJ0aWNsZSxcbmFzaWRlLFxuY2FudmFzLFxuZGV0YWlscyxcbmVtYmVkLFxuZmlndXJlLFxuZmlnY2FwdGlvbixcbmZvb3RlcixcbmhlYWRlcixcbmhncm91cCxcbm1lbnUsXG5uYXYsXG5vdXRwdXQsXG5ydWJ5LFxuc2VjdGlvbixcbnN1bW1hcnksXG50aW1lLFxubWFyayxcbmF1ZGlvLFxudmlkZW8ge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMDtcbiAgZm9udC1zaXplOiAxMDAlO1xuICBmb250OiBpbmhlcml0O1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXG5hcnRpY2xlLFxuYXNpZGUsXG5kZXRhaWxzLFxuZmlnY2FwdGlvbixcbmZpZ3VyZSxcbmZvb3RlcixcbmhlYWRlcixcbmhncm91cCxcbm1lbnUsXG5uYXYsXG5zZWN0aW9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5ib2R5IHtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG5vbCxcbnVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbmJsb2NrcXVvdGUsXG5xIHtcbiAgcXVvdGVzOiBub25lO1xufVxuYmxvY2txdW90ZTpiZWZvcmUsXG5ibG9ja3F1b3RlOmFmdGVyLFxucTpiZWZvcmUsXG5xOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgY29udGVudDogbm9uZTtcbn1cbnRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG59XG5cbi8qIEVuZCByZXNldCBzdHlsZXMgKi9cblxuaHRtbCxcbmJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGYyZmU7XG59XG5cbmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5oMSB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBjb2xvcjogIzBjNGE2ZTtcbn1cblxubWFpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMzBweDtcbn1cblxuZm9ybSB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDIwcHg7XG4gIHBhZGRpbmc6IDEwJTtcbiAgYm9yZGVyOiA1cHggc29saWQgIzFlM2E4YTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RiZWFmZTtcbiAgY29sb3I6ICMxZTNhOGE7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG5idXR0b25bdHlwZT1cInN1Ym1pdFwiXSB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG5idXR0b25bdHlwZT1cInN1Ym1pdFwiXTpob3ZlciB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNkYmVhZmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxZTNhOGE7XG4gIGNvbG9yOiAjZGJlYWZlO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzO1xufVxuXG5pbnB1dCxcbmJ1dHRvblt0eXBlPVwic3VibWl0XCJdIHtcbiAgYm9yZGVyOiAycHggc29saWQgIzFlM2E4YTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RiZWFmZTtcbiAgY29sb3I6ICMxZTNhOGE7XG59XG5cbi5lcnJvci1tZXNzYWdlIHtcbiAgY29sb3I6ICNiOTFjMWM7XG59XG5cbi5nYW1lYm9hcmRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGdhcDogMTAwcHg7XG59XG5cbi5nYW1lYm9hcmQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAyMHB4O1xufVxuXG4uZ2FtZWJvYXJkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTEsIG1pbm1heCgxMHB4LCA0M3B4KSk7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDExLCBtaW5tYXgoMTBweCwgNDNweCkpO1xufVxuXG4uY2VsbC1jb250YWluZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmOWZmO1xufVxuXG4uY2VsbCB7XG4gIGp1c3RpZnktc2VsZjogc3RyZXRjaDtcbn1cblxuLmVuZW15LWNlbGwge1xuICBkaXNwbGF5OiBncmlkO1xufVxuXG4uZW5lbXktY2VsbDpob3ZlciB7XG4gIGJvcmRlcjogM3B4IHNvbGlkICNiNDUzMDk7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG59XG5cbi5lbmVteS1jZWxsOmhvdmVyID4gYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1OWUwYjtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcbn1cblxuLm51bWJlcixcbi5sZXR0ZXIge1xuICBwbGFjZS1zZWxmOiBjZW50ZXI7XG4gIGNvbG9yOiAjMWUzYThhO1xufVxuXG4uZ3JpZC1sZWdlbmQge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBjb2xvcjogIzFlM2E4YTtcbn1cblxuLnNoaXAge1xuICBib3JkZXI6IDJweCBzb2xpZCAjMDAwMGZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGVhNWU5O1xufVxuXG4uc2hpcC1hdHRhY2tlZCB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNiOTFjMWM7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2E1YTU7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XG59XG5cbi5taXNzZWQtYXR0YWNrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2EzYTNhMztcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcbn1cblxuLnNoaXAtYXR0YWNrZWQsXG4ubWlzc2VkLWF0dGFjayB7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbnAge1xuICBmb250LXNpemU6IDRyZW07XG4gIGNvbG9yOiAjMWUzYThhO1xufVxuXG5mb290ZXIge1xuICBtYXJnaW4tdG9wOiBhdXRvO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGNvbG9yOiAjMWUzYThhO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFpRkUsU0FBUztFQUNULFVBQVU7RUFDVixTQUFTO0VBQ1QsZUFBZTtFQUNmLGFBQWE7RUFDYix3QkFBd0I7QUFDMUI7QUFDQSxnREFBZ0Q7QUFDaEQ7Ozs7Ozs7Ozs7O0VBV0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBOztFQUVFLGdCQUFnQjtBQUNsQjtBQUNBOztFQUVFLFlBQVk7QUFDZDtBQUNBOzs7O0VBSUUsV0FBVztFQUNYLGFBQWE7QUFDZjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGlCQUFpQjtBQUNuQjs7QUFFQSxxQkFBcUI7O0FBRXJCOztFQUVFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztFQUNULHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsWUFBWTtFQUNaLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsY0FBYztFQUNkLHlCQUF5QjtBQUMzQjs7QUFFQTs7RUFFRSx5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixrREFBa0Q7RUFDbEQscURBQXFEO0FBQ3ZEOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIseUJBQXlCO0FBQzNCOztBQUVBOztFQUVFLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHlCQUF5QjtBQUMzQjs7QUFFQTs7RUFFRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsY0FBYztBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sLFxcbmJvZHksXFxuZGl2LFxcbnNwYW4sXFxuYXBwbGV0LFxcbm9iamVjdCxcXG5pZnJhbWUsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxucCxcXG5ibG9ja3F1b3RlLFxcbnByZSxcXG5hLFxcbmFiYnIsXFxuYWNyb255bSxcXG5hZGRyZXNzLFxcbmJpZyxcXG5jaXRlLFxcbmNvZGUsXFxuZGVsLFxcbmRmbixcXG5lbSxcXG5pbWcsXFxuaW5zLFxcbmtiZCxcXG5xLFxcbnMsXFxuc2FtcCxcXG5zbWFsbCxcXG5zdHJpa2UsXFxuc3Ryb25nLFxcbnN1YixcXG5zdXAsXFxudHQsXFxudmFyLFxcbmIsXFxudSxcXG5pLFxcbmNlbnRlcixcXG5kbCxcXG5kdCxcXG5kZCxcXG5vbCxcXG51bCxcXG5saSxcXG5maWVsZHNldCxcXG5mb3JtLFxcbmxhYmVsLFxcbmxlZ2VuZCxcXG50YWJsZSxcXG5jYXB0aW9uLFxcbnRib2R5LFxcbnRmb290LFxcbnRoZWFkLFxcbnRyLFxcbnRoLFxcbnRkLFxcbmFydGljbGUsXFxuYXNpZGUsXFxuY2FudmFzLFxcbmRldGFpbHMsXFxuZW1iZWQsXFxuZmlndXJlLFxcbmZpZ2NhcHRpb24sXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxub3V0cHV0LFxcbnJ1YnksXFxuc2VjdGlvbixcXG5zdW1tYXJ5LFxcbnRpbWUsXFxubWFyayxcXG5hdWRpbyxcXG52aWRlbyB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsXFxuYXNpZGUsXFxuZGV0YWlscyxcXG5maWdjYXB0aW9uLFxcbmZpZ3VyZSxcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCxcXG51bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLFxcbnEge1xcbiAgcXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSxcXG5ibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLFxcbnE6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbi8qIEVuZCByZXNldCBzdHlsZXMgKi9cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAzMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZjJmZTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBjb2xvcjogIzBjNGE2ZTtcXG59XFxuXFxubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDMwcHg7XFxufVxcblxcbmZvcm0ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxuICBwYWRkaW5nOiAxMCU7XFxuICBib3JkZXI6IDVweCBzb2xpZCAjMWUzYThhO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RiZWFmZTtcXG4gIGNvbG9yOiAjMWUzYThhO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbmJ1dHRvblt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuYnV0dG9uW3R5cGU9XFxcInN1Ym1pdFxcXCJdOmhvdmVyIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNkYmVhZmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWUzYThhO1xcbiAgY29sb3I6ICNkYmVhZmU7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzO1xcbn1cXG5cXG5pbnB1dCxcXG5idXR0b25bdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgYm9yZGVyOiAycHggc29saWQgIzFlM2E4YTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkYmVhZmU7XFxuICBjb2xvcjogIzFlM2E4YTtcXG59XFxuXFxuLmVycm9yLW1lc3NhZ2Uge1xcbiAgY29sb3I6ICNiOTFjMWM7XFxufVxcblxcbi5nYW1lYm9hcmRzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGdhcDogMTAwcHg7XFxufVxcblxcbi5nYW1lYm9hcmQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uZ2FtZWJvYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMSwgbWlubWF4KDEwcHgsIDQzcHgpKTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDExLCBtaW5tYXgoMTBweCwgNDNweCkpO1xcbn1cXG5cXG4uY2VsbC1jb250YWluZXIge1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGY5ZmY7XFxufVxcblxcbi5jZWxsIHtcXG4gIGp1c3RpZnktc2VsZjogc3RyZXRjaDtcXG59XFxuXFxuLmVuZW15LWNlbGwge1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLmVuZW15LWNlbGw6aG92ZXIge1xcbiAgYm9yZGVyOiAzcHggc29saWQgI2I0NTMwOTtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XFxufVxcblxcbi5lbmVteS1jZWxsOmhvdmVyID4gYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNTllMGI7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xcbn1cXG5cXG4ubnVtYmVyLFxcbi5sZXR0ZXIge1xcbiAgcGxhY2Utc2VsZjogY2VudGVyO1xcbiAgY29sb3I6ICMxZTNhOGE7XFxufVxcblxcbi5ncmlkLWxlZ2VuZCB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG4gIGNvbG9yOiAjMWUzYThhO1xcbn1cXG5cXG4uc2hpcCB7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjMDAwMGZmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBlYTVlOTtcXG59XFxuXFxuLnNoaXAtYXR0YWNrZWQge1xcbiAgYm9yZGVyOiAycHggc29saWQgI2I5MWMxYztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2E1YTU7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzO1xcbn1cXG5cXG4ubWlzc2VkLWF0dGFjayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTNhM2EzO1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcXG59XFxuXFxuLnNoaXAtYXR0YWNrZWQsXFxuLm1pc3NlZC1hdHRhY2sge1xcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuXFxucCB7XFxuICBmb250LXNpemU6IDRyZW07XFxuICBjb2xvcjogIzFlM2E4YTtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBjb2xvcjogIzFlM2E4YTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERPTSgpIHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic2NyaXB0XCIpO1xuICBjb25zdCBjcmVhdGVIMSA9ICgpID0+IHtcbiAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBoMS50ZXh0Q29udGVudCA9IFwiR2VuZXJpYyBCYXR0bGVzaGlwIGFwcCBuYW1lXCI7XG4gICAgcmV0dXJuIGgxO1xuICB9O1xuXG4gIGNvbnN0IGxvYWRIZWFkZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgICBjb25zdCBoMSA9IGNyZWF0ZUgxKCk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGgxKTtcbiAgICBib2R5Lmluc2VydEJlZm9yZShoZWFkZXIsIHNjcmlwdCk7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlRGl2ID0gKGFyZ3MgPSB7fSkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaWYgKGFyZ3MuY2xhc3NOYW1lKSB7XG4gICAgICBkaXYuY2xhc3NOYW1lID0gYXJncy5jbGFzc05hbWU7XG4gICAgfVxuICAgIGlmIChhcmdzLnRleHRDb250ZW50KSB7XG4gICAgICBkaXYudGV4dENvbnRlbnQgPSBhcmdzLnRleHRDb250ZW50O1xuICAgIH1cbiAgICByZXR1cm4gZGl2O1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZUJ1dHRvbiA9IChjbGFzc05hbWUpID0+IHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QgPSBjbGFzc05hbWU7XG4gICAgcmV0dXJuIGJ1dHRvbjtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVJbnB1dCA9IChhcmdzKSA9PiB7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgT2JqZWN0LmFzc2lnbihpbnB1dCwgYXJncyk7XG4gICAgcmV0dXJuIGlucHV0O1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZUxhYmVsID0gKHRleHQpID0+IHtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgcmV0dXJuIGxhYmVsO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZVN1Ym1pdEJ1dHRvbiA9ICgpID0+IHtcbiAgICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHN1Ym1pdC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuICAgIHN1Ym1pdC50ZXh0Q29udGVudCA9IFwiUGxhY2Ugc2hpcFwiO1xuICAgIHJldHVybiBzdWJtaXQ7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlU2hpcEZvcm1FbGVtZW50ID0gKHRleHRMYWJlbCwgYXJncykgPT4ge1xuICAgIGNvbnN0IGxhYmVsID0gY3JlYXRlTGFiZWwodGV4dExhYmVsKTtcbiAgICBjb25zdCBpbnB1dCA9IGNyZWF0ZUlucHV0KGFyZ3MpO1xuICAgIGxhYmVsLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICByZXR1cm4gbGFiZWw7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlU2hpcEZvcm0gPSAoKSA9PiB7XG4gICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGNyZWF0ZURpdih7IGNsYXNzTmFtZTogXCJmb3JtLWNvbnRhaW5lclwiIH0pO1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICBjb25zdCB4Q29vcmRpbmF0ZSA9IGNyZWF0ZVNoaXBGb3JtRWxlbWVudChcIiogeCBjb29yZGluYXRlOiBcIiwge1xuICAgICAgdHlwZTogXCJudW1iZXJcIixcbiAgICAgIG1pbjogXCIwXCIsXG4gICAgICBtYXg6IFwiOVwiLFxuICAgICAgcGxhY2Vob2xkZXI6IFwiMFwiLFxuICAgICAgbmFtZTogXCJ4LWNvb3JkaW5hdGVcIixcbiAgICB9KTtcbiAgICBjb25zdCB5Q29vcmRpbmF0ZSA9IGNyZWF0ZVNoaXBGb3JtRWxlbWVudChcIiogeSBjb29yZGluYXRlOiBcIiwge1xuICAgICAgdHlwZTogXCJudW1iZXJcIixcbiAgICAgIG1pbjogXCIwXCIsXG4gICAgICBtYXg6IFwiOVwiLFxuICAgICAgcGxhY2Vob2xkZXI6IFwiMFwiLFxuICAgICAgbmFtZTogXCJ5LWNvb3JkaW5hdGVcIixcbiAgICB9KTtcbiAgICBjb25zdCBsZW5ndGhMYWJlbCA9IGNyZWF0ZVNoaXBGb3JtRWxlbWVudChcIiogU2hpcCBsZW5ndGg6IFwiLCB7XG4gICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgICAgbWluOiBcIjJcIixcbiAgICAgIG1heDogXCI1XCIsXG4gICAgICBwbGFjZWhvbGRlcjogXCIyXCIsXG4gICAgICBuYW1lOiBcInNoaXAtbGVuZ3RoXCIsXG4gICAgfSk7XG4gICAgY29uc3QgcmFkaW9CdXR0b25zQ29udGFpbmVyID0gY3JlYXRlRGl2KHtcbiAgICAgIGNsYXNzTmFtZTogXCJyYWRpby1idXR0b25zLWNvbnRhaW5lclwiLFxuICAgICAgdGV4dENvbnRlbnQ6IFwiKiBEaXJlY3Rpb246IFwiLFxuICAgIH0pO1xuICAgIGNvbnN0IGhvcml6b250YWwgPSBjcmVhdGVTaGlwRm9ybUVsZW1lbnQoXCJob3Jpem9udGFsXCIsIHtcbiAgICAgIHR5cGU6IFwicmFkaW9cIixcbiAgICAgIG5hbWU6IFwiZGlyZWN0aW9uXCIsXG4gICAgICB2YWx1ZTogXCJob3Jpem9udGFsXCIsXG4gICAgICBjaGVja2VkOiB0cnVlLFxuICAgIH0pO1xuICAgIGNvbnN0IHZlcnRpY2FsID0gY3JlYXRlU2hpcEZvcm1FbGVtZW50KFwidmVydGljYWxcIiwge1xuICAgICAgdHlwZTogXCJyYWRpb1wiLFxuICAgICAgbmFtZTogXCJkaXJlY3Rpb25cIixcbiAgICAgIHZhbHVlOiBcInZlcnRpY2FsXCIsXG4gICAgfSk7XG5cbiAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBjcmVhdGVEaXYoeyBjbGFzc05hbWU6IFwiZXJyb3ItbWVzc2FnZVwiIH0pO1xuICAgIHJhZGlvQnV0dG9uc0NvbnRhaW5lci5hcHBlbmQoaG9yaXpvbnRhbCwgdmVydGljYWwpO1xuICAgIGZvcm0uYXBwZW5kKFxuICAgICAgeENvb3JkaW5hdGUsXG4gICAgICB5Q29vcmRpbmF0ZSxcbiAgICAgIGxlbmd0aExhYmVsLFxuICAgICAgcmFkaW9CdXR0b25zQ29udGFpbmVyLFxuICAgICAgZXJyb3JNZXNzYWdlLFxuICAgICAgY3JlYXRlU3VibWl0QnV0dG9uKCksXG4gICAgKTtcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm0pO1xuICAgIHJldHVybiBmb3JtQ29udGFpbmVyO1xuICB9O1xuXG4gIGNvbnN0IGdldExldHRlciA9IChjb2x1bW4pID0+IHtcbiAgICBzd2l0Y2ggKGNvbHVtbikge1xuICAgICAgY2FzZSAyOlxuICAgICAgICByZXR1cm4gXCJBXCI7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIHJldHVybiBcIkJcIjtcbiAgICAgIGNhc2UgNDpcbiAgICAgICAgcmV0dXJuIFwiQ1wiO1xuICAgICAgY2FzZSA1OlxuICAgICAgICByZXR1cm4gXCJEXCI7XG4gICAgICBjYXNlIDY6XG4gICAgICAgIHJldHVybiBcIkVcIjtcbiAgICAgIGNhc2UgNzpcbiAgICAgICAgcmV0dXJuIFwiRlwiO1xuICAgICAgY2FzZSA4OlxuICAgICAgICByZXR1cm4gXCJHXCI7XG4gICAgICBjYXNlIDk6XG4gICAgICAgIHJldHVybiBcIkhcIjtcbiAgICAgIGNhc2UgMTA6XG4gICAgICAgIHJldHVybiBcIklcIjtcbiAgICAgIGNhc2UgMTE6XG4gICAgICAgIHJldHVybiBcIkpcIjtcbiAgICAgIC8vIG5vIGRlZmF1bHRcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZUNlbGwgPSAoYXJncykgPT4ge1xuICAgIGNvbnN0IGNlbGwgPSBjcmVhdGVEaXYoKTtcbiAgICBjb25zdCB7IHJvdyB9ID0gYXJncztcbiAgICBjb25zdCB7IGNvbHVtbiB9ID0gYXJncztcblxuICAgIGlmIChyb3cgPj0gMiAmJiBjb2x1bW4gPj0gMikge1xuICAgICAgY2VsbC5jbGFzc0xpc3QgPSBcImNlbGwtY29udGFpbmVyXCI7XG4gICAgICBjZWxsLnNldEF0dHJpYnV0ZShcImRhdGEteC1jb29yZGluYXRlXCIsIHJvdyAtIDIpO1xuICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXktY29vcmRpbmF0ZVwiLCBjb2x1bW4gLSAyKTtcbiAgICB9IGVsc2UgaWYgKHJvdyA+PSAyICYmIGNvbHVtbiA9PT0gMSkge1xuICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwibnVtYmVyXCIpO1xuICAgICAgY2VsbC50ZXh0Q29udGVudCA9IGAke3JvdyAtIDF9YDtcbiAgICB9IGVsc2UgaWYgKHJvdyA9PT0gMSAmJiBjb2x1bW4gPj0gMikge1xuICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwibGV0dGVyXCIpO1xuICAgICAgY2VsbC50ZXh0Q29udGVudCA9IGdldExldHRlcihjb2x1bW4pO1xuICAgIH1cbiAgICByZXR1cm4gY2VsbDtcbiAgfTtcblxuICBjb25zdCBsb2FkQ2VsbHMgPSAoYXJncykgPT4ge1xuICAgIGNvbnN0IGdhbWVib2FyZCA9IGNyZWF0ZURpdih7IGNsYXNzTmFtZTogXCJnYW1lYm9hcmRcIiB9KTtcbiAgICBjb25zdCBodW1hbkdhbWVib2FyZEdyaWQgPSBhcmdzLmh1bWFuR2FtZWJvYXJkLmdldEdyaWQoKTtcbiAgICBjb25zdCBsaW5lTGVuZ3RoID0gMTE7XG4gICAgZm9yIChsZXQgcm93ID0gMTsgcm93IDw9IGxpbmVMZW5ndGg7IHJvdyArPSAxKSB7XG4gICAgICBmb3IgKGxldCBjb2x1bW4gPSAxOyBjb2x1bW4gPD0gbGluZUxlbmd0aDsgY29sdW1uICs9IDEpIHtcbiAgICAgICAgY29uc3QgY2VsbCA9IGNyZWF0ZUNlbGwoeyAuLi5hcmdzLCByb3csIGNvbHVtbiwgaHVtYW5HYW1lYm9hcmRHcmlkIH0pO1xuICAgICAgICBnYW1lYm9hcmQuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBnYW1lYm9hcmQ7XG4gIH07XG5cbiAgY29uc3QgbG9hZEdhbWVib2FyZCA9IChhcmdzKSA9PiB7XG4gICAgY29uc3QgZ2FtZWJvYXJkQ29udGFpbmVyID0gY3JlYXRlRGl2KHsgY2xhc3NOYW1lOiBcImdhbWVib2FyZC1jb250YWluZXJcIiB9KTtcbiAgICBjb25zdCBncmlkTGVnZW5kID0gY3JlYXRlRGl2KHtcbiAgICAgIGNsYXNzTmFtZTogXCJncmlkLWxlZ2VuZFwiLFxuICAgICAgdGV4dENvbnRlbnQ6IGFyZ3MudGV4dCxcbiAgICB9KTtcbiAgICBjb25zdCBnYW1lYm9hcmQgPSBsb2FkQ2VsbHMoYXJncyk7XG4gICAgZ2FtZWJvYXJkQ29udGFpbmVyLmFwcGVuZChnYW1lYm9hcmQsIGdyaWRMZWdlbmQpO1xuICAgIHJldHVybiBnYW1lYm9hcmRDb250YWluZXI7XG4gIH07XG5cbiAgY29uc3QgbG9hZE1haW4gPSAoYXJncykgPT4ge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcbiAgICBjb25zdCBnYW1lYm9hcmRzID0gY3JlYXRlRGl2KHsgY2xhc3NOYW1lOiBcImdhbWVib2FyZHNcIiB9KTtcbiAgICBjb25zdCBtYWluUGxheWVyR2FtZWJvYXJkID0gbG9hZEdhbWVib2FyZCh7XG4gICAgICAuLi5hcmdzLFxuICAgICAgdGV4dDogXCJZb3VyIGdyaWRcIixcbiAgICB9KTtcbiAgICBjb25zdCB0cmFja2luZ1BsYXllckdhbWVib2FyZCA9IGxvYWRHYW1lYm9hcmQoe1xuICAgICAgLi4uYXJncyxcbiAgICAgIHRleHQ6IFwiWW91ciBlbmVteSBncmlkXCIsXG4gICAgfSk7XG4gICAgZ2FtZWJvYXJkcy5hcHBlbmQobWFpblBsYXllckdhbWVib2FyZCwgdHJhY2tpbmdQbGF5ZXJHYW1lYm9hcmQpO1xuICAgIG1haW4uYXBwZW5kKGNyZWF0ZVNoaXBGb3JtKCksIGdhbWVib2FyZHMpO1xuICAgIGJvZHkuaW5zZXJ0QmVmb3JlKG1haW4sIHNjcmlwdCk7XG4gIH07XG5cbiAgY29uc3QgbG9hZEZvb3RlciA9ICgpID0+IHtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xuICAgIGZvb3Rlci50ZXh0Q29udGVudCA9XG4gICAgICBcIsKpIDIwMjMgQ29weXJpZ2h0OiBHZW5lcmljIEJhdHRsZXNoaXAgYXBwIG5hbWUgaXMgbm90IGFuIGFjdHVhbCBicmFuZC5cIjtcbiAgICBib2R5Lmluc2VydEJlZm9yZShmb290ZXIsIHNjcmlwdCk7XG4gIH07XG5cbiAgY29uc3QgZ2V0Q29vcmRpbmF0ZXMgPSAoZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHggPSBOdW1iZXIoZWxlbWVudC5kYXRhc2V0LnhDb29yZGluYXRlKTtcbiAgICBjb25zdCB5ID0gTnVtYmVyKGVsZW1lbnQuZGF0YXNldC55Q29vcmRpbmF0ZSk7XG4gICAgcmV0dXJuIHsgeCwgeSB9O1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZUdhbWVib2FyZCA9IChhdHRhY2tSZXN1bHQsIGNlbGxEaXYpID0+IHtcbiAgICBpZiAoYXR0YWNrUmVzdWx0KSB7XG4gICAgICBjZWxsRGl2LmNsYXNzTGlzdC5hZGQoXCJzaGlwLWF0dGFja2VkXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjZWxsRGl2LmNsYXNzTGlzdC5hZGQoXCJtaXNzZWQtYXR0YWNrXCIpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBodW1hblR1cm4gPSAoYXJncykgPT4ge1xuICAgIGNvbnN0IHsgYnV0dG9uIH0gPSBhcmdzO1xuICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gZ2V0Q29vcmRpbmF0ZXMoYnV0dG9uLnBhcmVudE5vZGUpO1xuICAgIGNvbnN0IGh1bWFuUmVzdWx0ID0gYXJncy5odW1hblBsYXllci5zZW5kQXR0YWNrKFxuICAgICAgY29vcmRpbmF0ZXMsXG4gICAgICBhcmdzLmNvbXB1dGVyR2FtZWJvYXJkLFxuICAgICk7XG4gICAgdXBkYXRlR2FtZWJvYXJkKGh1bWFuUmVzdWx0LCBidXR0b24ucGFyZW50Tm9kZSk7XG4gICAgYnV0dG9uLnJlbW92ZSgpO1xuICB9O1xuXG4gIGNvbnN0IGNvbXB1dGVyVHVybiA9IChhcmdzKSA9PiB7XG4gICAgY29uc3QgeyBodW1hbkdhbWVib2FyZCB9ID0gYXJncztcbiAgICBjb25zdCB7IGNvbXB1dGVyUGxheWVyIH0gPSBhcmdzO1xuICAgIGNvbnN0IGNvbXB1dGVyQ29vcmRpbmF0ZXMgPSBjb21wdXRlclBsYXllci5jYWxjdWxhdGVBdHRhY2soaHVtYW5HYW1lYm9hcmQpO1xuICAgIGNvbnN0IGNvbXB1dGVyUmVzdWx0ID0gY29tcHV0ZXJQbGF5ZXIuc2VuZEF0dGFjayhcbiAgICAgIGNvbXB1dGVyQ29vcmRpbmF0ZXMsXG4gICAgICBodW1hbkdhbWVib2FyZCxcbiAgICApO1xuICAgIGNvbXB1dGVyUGxheWVyLnJlZ2lzdGVyQXR0YWNrKHtcbiAgICAgIGNvb3JkaW5hdGVzOiBjb21wdXRlckNvb3JkaW5hdGVzLFxuICAgICAgcmVzdWx0OiBjb21wdXRlclJlc3VsdCxcbiAgICB9KTtcbiAgICBjb25zdCBjZWxsID0gYXJncy5teUdhbWVib2FyZC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYGRpdltkYXRhLXgtY29vcmRpbmF0ZT1cIiR7Y29tcHV0ZXJDb29yZGluYXRlcy54fVwiXVtkYXRhLXktY29vcmRpbmF0ZT1cIiR7Y29tcHV0ZXJDb29yZGluYXRlcy55fVwiXWAsXG4gICAgKTtcbiAgICB1cGRhdGVHYW1lYm9hcmQoY29tcHV0ZXJSZXN1bHQsIGNlbGwpO1xuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZUJ1dHRvbnMgPSAoZW5lbXlHYW1lYm9hcmQpID0+IHtcbiAgICBjb25zdCBidXR0b25zID0gZW5lbXlHYW1lYm9hcmQucXVlcnlTZWxlY3RvckFsbChcImRpdiA+IGJ1dHRvblwiKTtcbiAgICBjb25zdCBidXR0b25zQXJyYXkgPSBBcnJheS5mcm9tKGJ1dHRvbnMpO1xuICAgIGJ1dHRvbnNBcnJheS5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgIGlmICghYnV0dG9uLnBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2hpcC1hdHRhY2tlZFwiKSkge1xuICAgICAgICBidXR0b24ucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKFwibWlzc2VkLWF0dGFja1wiKTtcbiAgICAgIH1cbiAgICAgIGJ1dHRvbi5yZW1vdmUoKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBnZXRWaWN0b3J5TWVzc2FnZSA9IChnYW1lQm9hcmQpID0+IHtcbiAgICBpZiAoZ2FtZUJvYXJkLmFyZUFsbFNoaXBzU3VuaygpKSB7XG4gICAgICByZXR1cm4gXCJZb3Ugd2luXCI7XG4gICAgfVxuICAgIHJldHVybiBcIkNvbXB1dGVyIFdpbnNcIjtcbiAgfTtcblxuICBjb25zdCBsb2FkVmljdG9yeU1lc3NhZ2UgPSAobWVzc2FnZSkgPT4ge1xuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG4gICAgcC50ZXh0Q29udGVudCA9IG1lc3NhZ2U7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChwKTtcbiAgfTtcblxuICBjb25zdCBhZGRFbmVteUdhbWVib2FyZExpc3RlbmVyID0gKGFyZ3MpID0+IHtcbiAgICBjb25zdCBlbmVteUdhbWVib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBcIi5nYW1lYm9hcmRzID4gZGl2Om50aC1jaGlsZCgyKSA+IGRpdjpmaXJzdC1jaGlsZFwiLFxuICAgICk7XG4gICAgY29uc3QgbXlHYW1lYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgXCIuZ2FtZWJvYXJkcyA+IGRpdjpmaXJzdC1jaGlsZCA+IGRpdjpmaXJzdC1jaGlsZFwiLFxuICAgICk7XG4gICAgZW5lbXlHYW1lYm9hcmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldC5tYXRjaGVzKFwiYnV0dG9uXCIpKSB7XG4gICAgICAgIGh1bWFuVHVybih7IC4uLmFyZ3MsIGJ1dHRvbjogZXZlbnQudGFyZ2V0IH0pO1xuICAgICAgICBjb21wdXRlclR1cm4oeyAuLi5hcmdzLCBteUdhbWVib2FyZCB9KTtcbiAgICAgICAgaWYgKGFyZ3MuaXNHYW1lT3ZlcihhcmdzLmh1bWFuR2FtZWJvYXJkLCBhcmdzLmNvbXB1dGVyR2FtZWJvYXJkKSkge1xuICAgICAgICAgIGRlbGV0ZUJ1dHRvbnMoZW5lbXlHYW1lYm9hcmQpO1xuICAgICAgICAgIGNvbnN0IHZpY3RvcnlNZXNzYWdlID0gZ2V0VmljdG9yeU1lc3NhZ2UoYXJncy5jb21wdXRlckdhbWVib2FyZCk7XG4gICAgICAgICAgbG9hZFZpY3RvcnlNZXNzYWdlKHZpY3RvcnlNZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGdldFNoaXBDZWxsID0gKHgsIHkpID0+XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGBkaXZbZGF0YS14LWNvb3JkaW5hdGU9XCIke3h9XCJdW2RhdGEteS1jb29yZGluYXRlPVwiJHt5fVwiXWAsXG4gICAgKTtcblxuICBjb25zdCBnZXRTaGlwQ2VsbHMgPSAoYXJncykgPT4ge1xuICAgIGNvbnN0IHJhbmdlID0gWy4uLkFycmF5KE51bWJlcihhcmdzLnNoaXBMZW5ndGgpKS5rZXlzKCldO1xuICAgIGNvbnN0IHNoaXBDZWxscyA9IFtdO1xuICAgIGxldCBpbmRleCA9IGFyZ3MubmV3SW5kZXg7XG4gICAgbGV0IGNlbGw7XG4gICAgcmFuZ2UuZm9yRWFjaCgoKSA9PiB7XG4gICAgICBpZiAoYXJncy5kaXJlY3Rpb24gPT09IFwidmVydGljYWxcIikge1xuICAgICAgICBjZWxsID0gZ2V0U2hpcENlbGwoaW5kZXgsIGFyZ3MuY29vcmRpbmF0ZXMueSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjZWxsID0gZ2V0U2hpcENlbGwoYXJncy5jb29yZGluYXRlcy54LCBpbmRleCk7XG4gICAgICB9XG4gICAgICBzaGlwQ2VsbHMucHVzaChjZWxsKTtcbiAgICAgIGluZGV4ICs9IDE7XG4gICAgfSk7XG4gICAgcmV0dXJuIHNoaXBDZWxscztcbiAgfTtcblxuICBjb25zdCByZW5kZXJTaGlwID0gKHNoaXBDZWxscykgPT4ge1xuICAgIHNoaXBDZWxscy5mb3JFYWNoKChzaGlwQ2VsbCkgPT4ge1xuICAgICAgc2hpcENlbGwuY2xhc3NMaXN0LmFkZChcInNoaXBcIik7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgYWRkRm9ybUxpc3RlbmVyID0gKGFyZ3MpID0+IHtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm1cIik7XG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChldmVudCkgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IHhDb29yZGluYXRlID0gZm9ybS5lbGVtZW50c1tcIngtY29vcmRpbmF0ZVwiXS52YWx1ZTtcbiAgICAgIGNvbnN0IHlDb29yZGluYXRlID0gZm9ybS5lbGVtZW50c1tcInktY29vcmRpbmF0ZVwiXS52YWx1ZTtcbiAgICAgIGNvbnN0IHNoaXBMZW5ndGggPSBmb3JtLmVsZW1lbnRzW1wic2hpcC1sZW5ndGhcIl0udmFsdWU7XG4gICAgICBjb25zdCBkaXJlY3Rpb24gPSBmb3JtLmVsZW1lbnRzLmRpcmVjdGlvbi52YWx1ZTtcbiAgICAgIGNvbnN0IGZvcm1EYXRhID0gW3hDb29yZGluYXRlLCB5Q29vcmRpbmF0ZSwgc2hpcExlbmd0aCwgZGlyZWN0aW9uXTtcbiAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZXJyb3ItbWVzc2FnZVwiKTtcbiAgICAgIGlmIChmb3JtRGF0YS5zb21lKChlbGVtZW50KSA9PiBlbGVtZW50ID09PSBcIlwiKSkge1xuICAgICAgICBlcnJvck1lc3NhZ2UudGV4dENvbnRlbnQgPSBcIk1pc3NpbmcgYXQgbGVhc3QgYSB2YWx1ZVwiO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAoYXJncy5odW1hbkdhbWVib2FyZC5pc01heFNoaXBDb3VudFJlYWNoZWQoKSkge1xuICAgICAgICBmb3JtLnJlbW92ZSgpO1xuICAgICAgICBjb25zdCBlbmVteUdhbWVib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAgICAgXCIuZ2FtZWJvYXJkcyA+IGRpdjpudGgtY2hpbGQoMikgPiBkaXYgPiAuY2VsbC1jb250YWluZXJcIixcbiAgICAgICAgKTtcbiAgICAgICAgZW5lbXlHYW1lYm9hcmQuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICAgIGNlbGwuYXBwZW5kQ2hpbGQoY3JlYXRlQnV0dG9uKFwiYnV0dG9uXCIpKTtcbiAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJlbmVteS1jZWxsXCIpO1xuICAgICAgICB9KTtcbiAgICAgICAgYWRkRW5lbXlHYW1lYm9hcmRMaXN0ZW5lcih7XG4gICAgICAgICAgaHVtYW5QbGF5ZXI6IGFyZ3MuaHVtYW5QbGF5ZXIsXG4gICAgICAgICAgaHVtYW5HYW1lYm9hcmQ6IGFyZ3MuaHVtYW5HYW1lYm9hcmQsXG4gICAgICAgICAgY29tcHV0ZXJQbGF5ZXI6IGFyZ3MuY29tcHV0ZXJQbGF5ZXIsXG4gICAgICAgICAgY29tcHV0ZXJHYW1lYm9hcmQ6IGFyZ3MuY29tcHV0ZXJHYW1lYm9hcmQsXG4gICAgICAgICAgaXNHYW1lT3ZlcjogYXJncy5pc0dhbWVPdmVyLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICBjb25zdCBjb29yZGluYXRlcyA9IHsgeDogTnVtYmVyKHhDb29yZGluYXRlKSwgeTogTnVtYmVyKHlDb29yZGluYXRlKSB9O1xuICAgICAgY29uc3QgbmV3SW5kZXggPSBkaXJlY3Rpb24gPT09IFwidmVydGljYWxcIiA/IGNvb3JkaW5hdGVzLnggOiBjb29yZGluYXRlcy55O1xuICAgICAgaWYgKG5ld0luZGV4ICsgTnVtYmVyKHNoaXBMZW5ndGgpID4gMTApIHtcbiAgICAgICAgZXJyb3JNZXNzYWdlLnRleHRDb250ZW50ID1cbiAgICAgICAgICBcIlNoaXAgY2FuJ3QgYmUgcGxhY2VkIHRoZXJlLiBUcnkgdG8gbG93ZXIgYXQgbGVhc3Qgb25lIGNvb3JkaW5hdGUgb3Igc2hpcCBsZW5ndGguXCI7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGNhblNoaXBCZVBsYWNlZCA9IGFyZ3MuaHVtYW5HYW1lYm9hcmQuY2FuU2hpcEJlUGxhY2VkKFxuICAgICAgICBjb29yZGluYXRlcyxcbiAgICAgICAgTnVtYmVyKHNoaXBMZW5ndGgpLFxuICAgICAgICBkaXJlY3Rpb24sXG4gICAgICApO1xuICAgICAgaWYgKCFjYW5TaGlwQmVQbGFjZWQpIHtcbiAgICAgICAgZXJyb3JNZXNzYWdlLnRleHRDb250ZW50ID1cbiAgICAgICAgICBcIlNoaXAgY2FuJ3QgYmUgcGxhY2VkIHRoZXJlLiBFbnN1cmUgdGhhdCBhbGwgc2hpcHMgaGF2ZSBvbmUgZW1wdHkgc3BhY2UgYmV0d2VlbiBlYWNoIG90aGVyLlwiO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBhcmdzLmh1bWFuR2FtZWJvYXJkLnBsYWNlU2hpcChjb29yZGluYXRlcywgTnVtYmVyKHNoaXBMZW5ndGgpLCBkaXJlY3Rpb24pO1xuICAgICAgY29uc3Qgc2hpcENlbGxzID0gZ2V0U2hpcENlbGxzKHtcbiAgICAgICAgc2hpcExlbmd0aDogTnVtYmVyKHNoaXBMZW5ndGgpLFxuICAgICAgICBkaXJlY3Rpb24sXG4gICAgICAgIG5ld0luZGV4LFxuICAgICAgICBjb29yZGluYXRlcyxcbiAgICAgIH0pO1xuICAgICAgcmVuZGVyU2hpcChzaGlwQ2VsbHMpO1xuICAgICAgZXJyb3JNZXNzYWdlLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGxvYWRQYWdlID0gKGFyZ3MpID0+IHtcbiAgICBsb2FkSGVhZGVyKCk7XG4gICAgbG9hZE1haW4oYXJncyk7XG4gICAgbG9hZEZvb3RlcigpO1xuICAgIGFkZEZvcm1MaXN0ZW5lcihhcmdzKTtcbiAgfTtcblxuICByZXR1cm4geyBsb2FkUGFnZSB9O1xufVxuIiwiY29uc3QgR2FtZWJvYXJkID0gcmVxdWlyZShcIi4vZ2FtZWJvYXJkXCIpO1xuY29uc3QgUGxheWVyID0gcmVxdWlyZShcIi4vcGxheWVyXCIpO1xuXG5jb25zdCBHYW1lID0gKCkgPT4ge1xuICBjb25zdCBnZXRSYW5kb21JbmRleCA9IChhcnJheUxlbmd0aCkgPT5cbiAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhcnJheUxlbmd0aCk7XG5cbiAgY29uc3QgcG9wdWxhdGVHYW1lYm9hcmQgPSAoY29tcHV0ZXJHYW1lYm9hcmQpID0+IHtcbiAgICBjb25zdCBzaGlwTGVuZ3RocyA9IFsyLCAzLCA0LCA1XTtcbiAgICBjb25zdCB2YWxpZENvb3JkaW5hdGVzID0gWzAsIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDldO1xuICAgIGNvbnN0IGRpcmVjdGlvbnMgPSBbXCJob3Jpem9udGFsXCIsIFwidmVydGljYWxcIl07XG4gICAgd2hpbGUgKCFjb21wdXRlckdhbWVib2FyZC5pc01heFNoaXBDb3VudFJlYWNoZWQoKSkge1xuICAgICAgY29uc3QgcmFuZG9tQ29vcmRpbmF0ZXMgPSB7XG4gICAgICAgIHg6IHZhbGlkQ29vcmRpbmF0ZXNbZ2V0UmFuZG9tSW5kZXgoMTApXSxcbiAgICAgICAgeTogdmFsaWRDb29yZGluYXRlc1tnZXRSYW5kb21JbmRleCgxMCldLFxuICAgICAgfTtcbiAgICAgIGNvbnN0IHJhbmRvbVNoaXBMZW5ndGggPSBzaGlwTGVuZ3Roc1tnZXRSYW5kb21JbmRleCg0KV07XG4gICAgICBjb25zdCByYW5kb21EaXJlY3Rpb24gPSBkaXJlY3Rpb25zW2dldFJhbmRvbUluZGV4KDIpXTtcbiAgICAgIGlmIChcbiAgICAgICAgY29tcHV0ZXJHYW1lYm9hcmQuY2FuU2hpcEJlUGxhY2VkKFxuICAgICAgICAgIHJhbmRvbUNvb3JkaW5hdGVzLFxuICAgICAgICAgIHJhbmRvbVNoaXBMZW5ndGgsXG4gICAgICAgICAgcmFuZG9tRGlyZWN0aW9uLFxuICAgICAgICApXG4gICAgICApIHtcbiAgICAgICAgY29tcHV0ZXJHYW1lYm9hcmQucGxhY2VTaGlwKFxuICAgICAgICAgIHJhbmRvbUNvb3JkaW5hdGVzLFxuICAgICAgICAgIHJhbmRvbVNoaXBMZW5ndGgsXG4gICAgICAgICAgcmFuZG9tRGlyZWN0aW9uLFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBjcmVhdGVPYmplY3RzID0gKCkgPT4ge1xuICAgIGNvbnN0IGh1bWFuUGxheWVyID0gUGxheWVyKCk7XG4gICAgY29uc3QgY29tcHV0ZXJQbGF5ZXIgPSBQbGF5ZXIoXCJjb21wdXRlclwiKTtcbiAgICBjb25zdCBodW1hbkdhbWVib2FyZCA9IEdhbWVib2FyZCgpO1xuICAgIGNvbnN0IGh1bWFuVHJhY2tpbmdHYW1lYm9hcmQgPSBHYW1lYm9hcmQoKTtcbiAgICBjb25zdCBjb21wdXRlckdhbWVib2FyZCA9IEdhbWVib2FyZCgpO1xuICAgIHBvcHVsYXRlR2FtZWJvYXJkKGNvbXB1dGVyR2FtZWJvYXJkKTtcbiAgICBjb25zdCBjb21wdXRlclRyYWNraW5nR2FtZWJvYXJkID0gR2FtZWJvYXJkKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGh1bWFuUGxheWVyLFxuICAgICAgY29tcHV0ZXJQbGF5ZXIsXG4gICAgICBodW1hbkdhbWVib2FyZCxcbiAgICAgIGh1bWFuVHJhY2tpbmdHYW1lYm9hcmQsXG4gICAgICBjb21wdXRlckdhbWVib2FyZCxcbiAgICAgIGNvbXB1dGVyVHJhY2tpbmdHYW1lYm9hcmQsXG4gICAgfTtcbiAgfTtcblxuICBjb25zdCBpc0dhbWVPdmVyID0gKGh1bWFuR2FtZWJvYXJkLCBjb21wdXRlckdhbWVib2FyZCkgPT5cbiAgICBodW1hbkdhbWVib2FyZC5hcmVBbGxTaGlwc1N1bmsoKSB8fCBjb21wdXRlckdhbWVib2FyZC5hcmVBbGxTaGlwc1N1bmsoKTtcblxuICByZXR1cm4geyBjcmVhdGVPYmplY3RzLCBpc0dhbWVPdmVyIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWU7XG4iLCJjb25zdCBTaGlwID0gcmVxdWlyZShcIi4vc2hpcFwiKTtcblxuY29uc3QgR2FtZWJvYXJkID0gKCkgPT4ge1xuICBjb25zdCBncmlkID0gW107XG4gIGNvbnN0IG1pc3NlZEF0dGFja3MgPSBbXTtcbiAgY29uc3QgbWF4U2hpcENvdW50ID0gNTtcbiAgbGV0IHNoaXBDb3VudCA9IDA7XG5cbiAgY29uc3QgZ2V0U2hpcENvdW50ID0gKCkgPT4gc2hpcENvdW50O1xuICBjb25zdCByYW5nZSA9IChudW0pID0+IFsuLi5BcnJheShudW0pLmtleXMoKV07XG5cbiAgY29uc3QgaXNNYXhTaGlwQ291bnRSZWFjaGVkID0gKCkgPT4gZ2V0U2hpcENvdW50KCkgPj0gbWF4U2hpcENvdW50O1xuXG4gIGNvbnN0IGlzQ2VsbEVtcHR5ID0gKGNlbGxWYWx1ZSkgPT5cbiAgICBKU09OLnN0cmluZ2lmeShjZWxsVmFsdWUpID09PSBKU09OLnN0cmluZ2lmeSh7fSk7XG5cbiAgY29uc3QgaXNDb29yZGluYXRldmFsaWQgPSAoY29vcmRpbmF0ZSkgPT4gY29vcmRpbmF0ZSA+PSAwICYmIGNvb3JkaW5hdGUgPD0gOTtcblxuICBjb25zdCBhcmVDb29yZGluYXRlc1ZhbGlkID0gKGNvb3JkaW5hdGVzKSA9PlxuICAgIGlzQ29vcmRpbmF0ZXZhbGlkKGNvb3JkaW5hdGVzLngpICYmIGlzQ29vcmRpbmF0ZXZhbGlkKGNvb3JkaW5hdGVzLnkpO1xuXG4gIGNvbnN0IGdldFN1cnJvdW5kQ29vcmRpbmF0ZXMgPSAoY29vcmRpbmF0ZXMpID0+IHtcbiAgICBjb25zdCB7IHggfSA9IGNvb3JkaW5hdGVzO1xuICAgIGNvbnN0IHsgeSB9ID0gY29vcmRpbmF0ZXM7XG4gICAgY29uc3Qgc3Vycm91bmRDb29yZGluYXRlcyA9IFtcbiAgICAgIHsgeDogeCAtIDEsIHk6IHkgLSAxIH0sXG4gICAgICB7IHg6IHggLSAxLCB5IH0sXG4gICAgICB7IHg6IHggLSAxLCB5OiB5ICsgMSB9LFxuICAgICAgeyB4LCB5OiB5IC0gMSB9LFxuICAgICAgeyB4LCB5IH0sXG4gICAgICB7IHgsIHk6IHkgKyAxIH0sXG4gICAgICB7IHg6IHggKyAxLCB5OiB5IC0gMSB9LFxuICAgICAgeyB4OiB4ICsgMSwgeSB9LFxuICAgICAgeyB4OiB4ICsgMSwgeTogeSArIDEgfSxcbiAgICBdO1xuICAgIHJldHVybiBzdXJyb3VuZENvb3JkaW5hdGVzLmZpbHRlcigoc0Nvb3JkaW5hdGVzKSA9PlxuICAgICAgYXJlQ29vcmRpbmF0ZXNWYWxpZChzQ29vcmRpbmF0ZXMpLFxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgZ2V0U3Vycm91bmRDZWxscyA9IChjb29yZGluYXRlcykgPT4ge1xuICAgIGNvbnN0IHN1cnJvdW5kQ29vcmRpbmF0ZXMgPSBnZXRTdXJyb3VuZENvb3JkaW5hdGVzKGNvb3JkaW5hdGVzKTtcbiAgICBjb25zdCBzdXJyb3VuZENlbGxzID0gW107XG4gICAgc3Vycm91bmRDb29yZGluYXRlcy5mb3JFYWNoKChzQ29vcmRpbmF0ZXMpID0+XG4gICAgICBzdXJyb3VuZENlbGxzLnB1c2goZ3JpZFtzQ29vcmRpbmF0ZXMueF1bc0Nvb3JkaW5hdGVzLnldKSxcbiAgICApO1xuICAgIHJldHVybiBzdXJyb3VuZENlbGxzO1xuICB9O1xuXG4gIGNvbnN0IGdldFNoaXBDb29yZGluYXRlcyA9IChjb29yZGluYXRlcywgc2hpcExlbmd0aCwgZGlyZWN0aW9uKSA9PiB7XG4gICAgY29uc3Qgc2hpcFJhbmdlID0gcmFuZ2Uoc2hpcExlbmd0aCk7XG4gICAgbGV0IGluZGV4ID0gZGlyZWN0aW9uID09PSBcInZlcnRpY2FsXCIgPyBjb29yZGluYXRlcy54IDogY29vcmRpbmF0ZXMueTtcbiAgICBjb25zdCBzaGlwQ29vcmRpbmF0ZXMgPSBbXTtcbiAgICBsZXQgY2VsbENvb3JkaW5hdGU7XG4gICAgc2hpcFJhbmdlLmZvckVhY2goKCkgPT4ge1xuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICAgIGNlbGxDb29yZGluYXRlID0geyB4OiBpbmRleCwgeTogY29vcmRpbmF0ZXMueSB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2VsbENvb3JkaW5hdGUgPSB7IHg6IGNvb3JkaW5hdGVzLngsIHk6IGluZGV4IH07XG4gICAgICB9XG4gICAgICBzaGlwQ29vcmRpbmF0ZXMucHVzaChjZWxsQ29vcmRpbmF0ZSk7XG4gICAgICBpbmRleCArPSAxO1xuICAgIH0pO1xuICAgIHJldHVybiBzaGlwQ29vcmRpbmF0ZXM7XG4gIH07XG5cbiAgY29uc3QgY2FsY3VsYXRlRW5kSW5kZXggPSAoY29vcmRpbmF0ZXMsIHNoaXBMZW5ndGgsIGRpcmVjdGlvbikgPT4ge1xuICAgIGlmIChkaXJlY3Rpb24gPT09IFwidmVydGljYWxcIikge1xuICAgICAgcmV0dXJuIGNvb3JkaW5hdGVzLnggKyBzaGlwTGVuZ3RoO1xuICAgIH1cbiAgICByZXR1cm4gY29vcmRpbmF0ZXMueSArIHNoaXBMZW5ndGg7XG4gIH07XG5cbiAgY29uc3QgaXNOdW1iZXJJblJhbmdlID0gKG51bSkgPT4gbnVtIDw9IDk7XG5cbiAgY29uc3QgY2FuU2hpcEJlUGxhY2VkID0gKGNvb3JkaW5hdGVzLCBzaGlwTGVuZ3RoLCBkaXJlY3Rpb24pID0+IHtcbiAgICBjb25zdCBlbmRJbmRleCA9IGNhbGN1bGF0ZUVuZEluZGV4KGNvb3JkaW5hdGVzLCBzaGlwTGVuZ3RoLCBkaXJlY3Rpb24pO1xuICAgIGlmICghaXNOdW1iZXJJblJhbmdlKGVuZEluZGV4KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGxldCBzdXJyb3VuZENlbGxzID0gZ2V0U3Vycm91bmRDZWxscyhjb29yZGluYXRlcyk7XG4gICAgY29uc3Qgc2hpcENvb3JkaW5hdGVzID0gZ2V0U2hpcENvb3JkaW5hdGVzKFxuICAgICAgY29vcmRpbmF0ZXMsXG4gICAgICBzaGlwTGVuZ3RoLFxuICAgICAgZGlyZWN0aW9uLFxuICAgICk7XG4gICAgcmV0dXJuIHNoaXBDb29yZGluYXRlcy5ldmVyeSgoc2hpcENvb3JkaW5hdGUpID0+IHtcbiAgICAgIHN1cnJvdW5kQ2VsbHMgPSBnZXRTdXJyb3VuZENlbGxzKHNoaXBDb29yZGluYXRlKTtcbiAgICAgIHJldHVybiBzdXJyb3VuZENlbGxzLmV2ZXJ5KChjZWxsKSA9PiBpc0NlbGxFbXB0eShjZWxsKSk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgcGxhY2VTaGlwID0gKGNvb3JkaW5hdGVzLCBzaGlwTGVuZ3RoLCBkaXJlY3Rpb24pID0+IHtcbiAgICBjb25zdCBuZXdTaGlwID0gU2hpcChzaGlwTGVuZ3RoKTtcbiAgICBjb25zdCBzaGlwUmFuZ2UgPSByYW5nZShzaGlwTGVuZ3RoKTtcbiAgICBzaGlwUmFuZ2UuZm9yRWFjaCgoaSkgPT4ge1xuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICAgIGdyaWRbY29vcmRpbmF0ZXMueCArIGldW2Nvb3JkaW5hdGVzLnldID0gbmV3U2hpcDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGdyaWRbY29vcmRpbmF0ZXMueF1bY29vcmRpbmF0ZXMueSArIGldID0gbmV3U2hpcDtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBzaGlwQ291bnQgPSBnZXRTaGlwQ291bnQoKSArIDE7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlR3JpZCA9ICgpID0+IHtcbiAgICBjb25zdCBjb2x1bW5zID0gcmFuZ2UoMTApO1xuICAgIGNvbHVtbnMuZm9yRWFjaCgoYykgPT4ge1xuICAgICAgY29uc3Qgcm93ID0gcmFuZ2UoMTApO1xuICAgICAgZ3JpZFtjXSA9IFtdO1xuICAgICAgcm93LmZvckVhY2goKHIpID0+IHtcbiAgICAgICAgZ3JpZFtjXVtyXSA9IHt9O1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHJlY29yZENvb3JkaW5hdGVzID0gKGNvb3JkaW5hdGVzKSA9PiB7XG4gICAgbWlzc2VkQXR0YWNrcy5wdXNoKGNvb3JkaW5hdGVzKTtcbiAgfTtcblxuICBjb25zdCBpc1NoaXAgPSAoY2VsbCwgcHJvcGVydHkgPSBcImhpdFwiKSA9PiBPYmplY3QuaGFzT3duKGNlbGwsIHByb3BlcnR5KTtcblxuICBjb25zdCByZWNlaXZlQXR0YWNrID0gKGNvb3JkaW5hdGVzLCBjYiA9IHJlY29yZENvb3JkaW5hdGVzKSA9PiB7XG4gICAgY29uc3QgY2VsbENvbnRlbnQgPSBncmlkW2Nvb3JkaW5hdGVzLnhdW2Nvb3JkaW5hdGVzLnldO1xuICAgIGNvbnN0IHNoaXBGb3VuZCA9IGlzU2hpcChjZWxsQ29udGVudCk7XG4gICAgaWYgKHNoaXBGb3VuZCkge1xuICAgICAgY2VsbENvbnRlbnQuaGl0KCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgY2IoY29vcmRpbmF0ZXMpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCBnZXRBbGxTaGlwcyA9ICgpID0+IHtcbiAgICBjb25zdCBncmlkQ29weSA9IGdyaWQuZmxhdCgpO1xuICAgIHJldHVybiBncmlkQ29weS5maWx0ZXIoKGNlbGwpID0+IGlzU2hpcChjZWxsLCBcImlzU3Vua1wiKSk7XG4gIH07XG5cbiAgY29uc3QgYXJlQWxsU2hpcHNTdW5rID0gKCkgPT4ge1xuICAgIGNvbnN0IHNoaXBzID0gZ2V0QWxsU2hpcHMoKTtcbiAgICByZXR1cm4gc2hpcHMuZXZlcnkoKHNoaXApID0+IHNoaXAuaXNTdW5rKCkpO1xuICB9O1xuXG4gIGNvbnN0IGdldEdyaWQgPSAoKSA9PiBncmlkO1xuICBjcmVhdGVHcmlkKCk7XG4gIHJldHVybiB7XG4gICAgbWlzc2VkQXR0YWNrcyxcbiAgICBjYW5TaGlwQmVQbGFjZWQsXG4gICAgZ2V0R3JpZCxcbiAgICBpc01heFNoaXBDb3VudFJlYWNoZWQsXG4gICAgcGxhY2VTaGlwLFxuICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgYXJlQWxsU2hpcHNTdW5rLFxuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBHYW1lYm9hcmQ7XG4iLCJjb25zdCBQbGF5ZXIgPSAodHlwZSA9IFwiaHVtYW5cIikgPT4ge1xuICBjb25zdCBwbGF5ZXJUeXBlID0gdHlwZTtcbiAgY29uc3QgYXR0YWNrc01hZGUgPSBbXTtcbiAgY29uc3QgcmVnaXN0ZXJBdHRhY2sgPSAoYXR0YWNrKSA9PiB7XG4gICAgYXR0YWNrc01hZGUucHVzaChhdHRhY2spO1xuICB9O1xuICBjb25zdCBzZW5kQXR0YWNrID0gKGNvb3JkaW5hdGVzLCBlbmVteUdhbWVCb2FyZCkgPT5cbiAgICBlbmVteUdhbWVCb2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGVzKTtcblxuICBjb25zdCBnZXRSYW5kb21JbmNsdXNpdmUgPSAobWluLCBtYXgpID0+XG4gICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpICsgbWluKTtcblxuICBjb25zdCBpc0F0dGFja01hZGUgPSAoY29vcmRpbmF0ZXMpID0+XG4gICAgYXR0YWNrc01hZGUuZmluZChcbiAgICAgIChhdHRhY2spID0+XG4gICAgICAgIGF0dGFjay5jb29yZGluYXRlcy54ID09PSBjb29yZGluYXRlcy54ICYmXG4gICAgICAgIGF0dGFjay5jb29yZGluYXRlcy55ID09PSBjb29yZGluYXRlcy55LFxuICAgICk7XG5cbiAgY29uc3QgZ2V0UmFuZG9tQ29vcmRpbmF0ZXMgPSAoKSA9PiB7XG4gICAgbGV0IGNvb3JkaW5hdGVzO1xuICAgIGRvIHtcbiAgICAgIGNvbnN0IHggPSBnZXRSYW5kb21JbmNsdXNpdmUoMCwgOSk7XG4gICAgICBjb25zdCB5ID0gZ2V0UmFuZG9tSW5jbHVzaXZlKDAsIDkpO1xuICAgICAgY29vcmRpbmF0ZXMgPSB7IHgsIHkgfTtcbiAgICB9IHdoaWxlIChpc0F0dGFja01hZGUoY29vcmRpbmF0ZXMpKTtcbiAgICByZXR1cm4gY29vcmRpbmF0ZXM7XG4gIH07XG5cbiAgY29uc3QgaXNDb29yZGluYXRlVmFsaWQgPSAoY29vcmRpbmF0ZSkgPT5cbiAgICBjb29yZGluYXRlLnggPj0gMCAmJlxuICAgIGNvb3JkaW5hdGUueCA8PSA5ICYmXG4gICAgY29vcmRpbmF0ZS55ID49IDAgJiZcbiAgICBjb29yZGluYXRlLnkgPD0gOTtcblxuICBjb25zdCBnZXRBZGphY2VudENlbGxzID0gKGNvb3JkaW5hdGVzKSA9PiB7XG4gICAgY29uc3QgYWRqYWNlbnRDZWxscyA9IFtcbiAgICAgIHsgeDogY29vcmRpbmF0ZXMueCAtIDEsIHk6IGNvb3JkaW5hdGVzLnkgfSxcbiAgICAgIHsgeDogY29vcmRpbmF0ZXMueCwgeTogY29vcmRpbmF0ZXMueSArIDEgfSxcbiAgICAgIHsgeDogY29vcmRpbmF0ZXMueCAtIDEsIHk6IGNvb3JkaW5hdGVzLnkgfSxcbiAgICAgIHsgeDogY29vcmRpbmF0ZXMueCwgeTogY29vcmRpbmF0ZXMueSAtIDEgfSxcbiAgICBdO1xuICAgIGNvbnN0IHZhbGlkQ2VsbHMgPSBhZGphY2VudENlbGxzLmZpbHRlcigoY29vcmRpbmF0ZSkgPT5cbiAgICAgIGlzQ29vcmRpbmF0ZVZhbGlkKGNvb3JkaW5hdGUpLFxuICAgICk7XG4gICAgcmV0dXJuIHZhbGlkQ2VsbHMuZmlsdGVyKChjZWxsKSA9PiAhaXNBdHRhY2tNYWRlKGNlbGwpKTtcbiAgfTtcblxuICBjb25zdCBjYWxjdWxhdGVBdHRhY2sgPSAoKSA9PiB7XG4gICAgaWYgKHBsYXllclR5cGUgIT09IFwiY29tcHV0ZXJcIikge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgICBjb25zdCBsYXN0QXR0YWNrID0gYXR0YWNrc01hZGVbYXR0YWNrc01hZGUubGVuZ3RoIC0gMV07XG4gICAgbGV0IGFkamFjZW50Q2VsbHM7XG4gICAgbGV0IGNvb3JkaW5hdGVzO1xuICAgIGlmIChsYXN0QXR0YWNrICYmIGxhc3RBdHRhY2sucmVzdWx0KSB7XG4gICAgICBhZGphY2VudENlbGxzID0gZ2V0QWRqYWNlbnRDZWxscyhsYXN0QXR0YWNrLmNvb3JkaW5hdGVzKTtcbiAgICAgIGlmIChhZGphY2VudENlbGxzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICBjb25zdCByYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhZGphY2VudENlbGxzLmxlbmd0aCk7XG4gICAgICAgIGNvb3JkaW5hdGVzID0gYWRqYWNlbnRDZWxsc1tyYW5kb21dO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29vcmRpbmF0ZXMgPSBnZXRSYW5kb21Db29yZGluYXRlcygpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb29yZGluYXRlcyA9IGdldFJhbmRvbUNvb3JkaW5hdGVzKCk7XG4gICAgfVxuICAgIHJldHVybiBjb29yZGluYXRlcztcbiAgfTtcbiAgcmV0dXJuIHsgc2VuZEF0dGFjaywgY2FsY3VsYXRlQXR0YWNrLCByZWdpc3RlckF0dGFjayB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBQbGF5ZXI7XG4iLCJjb25zdCBTaGlwID0gKGxlbmd0aCkgPT4ge1xuICBsZXQgaGl0cyA9IDA7XG4gIGNvbnN0IGdldEhpdHMgPSAoKSA9PiBoaXRzO1xuICBjb25zdCBoaXQgPSAoKSA9PiB7XG4gICAgaGl0cyArPSAxO1xuICB9O1xuICBjb25zdCBpc1N1bmsgPSAoKSA9PiBsZW5ndGggPT09IGdldEhpdHMoKTtcbiAgcmV0dXJuIHsgbGVuZ3RoLCBnZXRIaXRzLCBoaXQsIGlzU3VuayB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBTaGlwO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBET00gZnJvbSBcIi4vc2NyaXB0cy9kb21cIjtcbmltcG9ydCBHYW1lIGZyb20gXCIuL3NjcmlwdHMvZ2FtZVwiO1xuXG5jb25zdCBteURPTSA9IERPTSgpO1xuY29uc3QgbXlHYW1lID0gR2FtZSgpO1xuY29uc3QgZ2FtZU9iamVjdHMgPSBteUdhbWUuY3JlYXRlT2JqZWN0cygpO1xubXlET00ubG9hZFBhZ2UoT2JqZWN0LmFzc2lnbihnYW1lT2JqZWN0cywgeyBpc0dhbWVPdmVyOiBteUdhbWUuaXNHYW1lT3ZlciB9KSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=