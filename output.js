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

"use strict";


// $(document).ready(init);

// //var betterDoctorApi = require('./betterdoctorapi.js');
// //import { GetDoctorsName } from './../src/js/betterdoctorapi.js';


// function init(){
//   $('#doctor-by-name').on('click', doctorByName);
// }

// //   $(".test").click(function(){
// //     let doctorNameTest = $('.doctor-name').val();
// //   console.log(doctorNameTest);
// //   console.log('hi');
// //   });
// // };

// function doctorByName(){
//   doctorName = $('.doctor-name').val();
//   $('.doctor-name').val('');
//   console.log(doctorName);
//   getDoctorName(doctorName);
// }


//test
// var a1 = $.ajax({
//     url: `${query}doctors?name=${doctorName}&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=${apiKey}`,
//   }),
//     a2 = $.ajax({...});

// $.when(a1, a2).done(function(r1, r2) {
//     // Each returned resolve has the following structure:
//     // [data, textStatus, jqXHR]
//     // e.g. To access returned data, access the array at index 0
//     console.log(r1[0]);
//     console.log(r2[0]);
// });

//test3
window.onload = function () {

  var apiKey = "49679b92dbd683b4bc7a6aca2740d4ad";
  var doctorName = $('.doctor-name').val();
  function get(url) {
    return new Promise(function (resolve, reject) {
      var xhttp = new XMLHttpRequest();
      xhttp.open('GET', url, true);
      xhttp.onload = function () {
        if (xhttp.status === 200) {
          resolve(JSON.parse(xhttp.response));
        } else {
          reject(xhttp.statusText);
        }
      };
      xhttp.onerror = function () {
        reject(xhttp.statusText);
      };
      xhttp.send();
    });
  }

  $('#update-doctor').click(function (e) {
    e.preventDefault();
    console.log('clicked');
    var doctorName = $('.doctor-name').val();
    var promise = get('https://api.betterdoctor.com/2016-03-01/doctors?first_name=' + doctorName + '&skip=0&limit=10&user_key=' + apiKey);
    promise.then(function (nameData) {
      console.log('this is my data1:', nameData);
      console.log('dataTotal: ', nameData.data[1]);
    }).catch(function (error) {
      console.log(error);
    });
  });

  $('#update-symptoms').click(function (e) {
    var specialty = $('.symptoms').val();
    console.log('clicked inside second promise');
    promise = get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + specialty + '&location=ma-boston&skip=0&limit=10&user_key=' + apiKey);
    promise.then(function (queryData) {
      console.log('this is query data:', queryData);
    }).catch(function (error) {
      console.log(error);
    });
  });
}; //window.onload

/***/ })
/******/ ]);