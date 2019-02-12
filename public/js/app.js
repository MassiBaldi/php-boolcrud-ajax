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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  if ($('.container.index').length > 0) {
    $.ajax({
      url: 'http://localhost/php-boolcrud-ajax/database/all.php',
      method: 'GET',
      success: function success(data) {
        var results = JSON.parse(data);
        printGuests(results);
      },
      error: function error() {
        alert('Si è verificato un errore');
      }
    });
  }

  if ($('.container.show').length > 0) {
    var dataId = $('.container.show').data('id');
    $.ajax({
      url: 'http://localhost/php-boolcrud-ajax/database/show.php',
      method: 'GET',
      data: {
        id: dataId
      },
      success: function success(data) {
        var result = JSON.parse(data);
        printCard(result);
      },
      error: function error() {
        alert('Si è verificato un errore');
      }
    });
  }

  $(document).on('click', '.delete-button', function () {
    var dataId = $(this).data('id');
    console.log(dataId);
    var myThis = $(this);
    $.ajax({
      url: 'http://localhost/php-boolcrud-ajax/database/delete.php',
      method: 'POST',
      data: {
        id: dataId
      },
      success: function success(data) {
        if (data == 'success') {
          myThis.parent().parent().addClass('d-none');
        }
      },
      error: function error() {
        alert('Si è verificato un errore');
      }
    });
  });
});

function printGuests(results) {
  for (var i = 0; i < results.length; i++) {
    var ospite = results[i];
    var source = $('#row-ospite').html();
    var template = Handlebars.compile(source);
    var context = {
      id: ospite.id,
      name: ospite.name,
      lastname: ospite.lastname
    };
    var html = template(context);
    $('tbody').append(html);
  }
}

function printCard(ospite) {
  var source = $('#show-ospite').html();
  var template = Handlebars.compile(source);
  var context = {
    id: ospite.id,
    name: ospite.name,
    lastname: ospite.lastname,
    date_of_birth: ospite.date_of_birth,
    document_type: ospite.document_type,
    document_number: ospite.document_number,
    created_at: ospite.created_at,
    updated_at: ospite.updated_at
  };
  var html = template(context);
  $('.content').append(html);
}

/***/ }),

/***/ "./src/sass/app.scss":
/*!***************************!*\
  !*** ./src/sass/app.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************!*\
  !*** multi ./src/js/app.js ./src/sass/app.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/massi/Sites/php-boolcrud-ajax/src/js/app.js */"./src/js/app.js");
module.exports = __webpack_require__(/*! /home/massi/Sites/php-boolcrud-ajax/src/sass/app.scss */"./src/sass/app.scss");


/***/ })

/******/ });