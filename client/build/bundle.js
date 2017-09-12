/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var AjaxRequest = __webpack_require__( 1 );
var AnimalsView = __webpack_require__( 2 );

function app() {

  var animalsData = new AjaxRequest( 'http://localhost:3000/api/animals' );
  var animalsView = new AnimalsView( animalsData );
  animalsData.get( animalsView.render );

  var animalForm = document.querySelector( '#animal-form' );
  animalForm.addEventListener( 'submit', function(event){
    event.preventDefault();
    var animal = {
      name: this.name.value,
      type: this.type.value,
      feedingTimes: this.feedingtimes.value
    }
    createAnimal( animal ); 
  });

}

function createAnimal( animal ){
  var animalPost = new AjaxRequest( 'http://localhost:3000/api/animals', animal );
  animalPost.post();
}

window.addEventListener( 'load', app );

/***/ }),
/* 1 */
/***/ (function(module, exports) {

var AjaxRequest = function( url, data ){
  this.url = url;
  this.data = data || [];
}

AjaxRequest.prototype.get = function( callback ){
  var request = new XMLHttpRequest();
  request.open("GET", this.url);
  request.onload = function(){
    if ( request.status === 200 ){
      var jsonString = request.responseText;
      this.data = JSON.parse(jsonString);
      callback(this.data);
    }
  }.bind(this);
  request.send();
}

AjaxRequest.prototype.post = function(){
  var request = new XMLHttpRequest();
  request.open("POST", this.url );
  request.setRequestHeader( "Content-Type", "application/json")
  request.send( JSON.stringify( this.data ) );
}

module.exports = AjaxRequest;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var AnimalsView = function(){

}

AnimalsView.prototype.render = function( data ){
  // console.log( data );
}

module.exports = AnimalsView;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map