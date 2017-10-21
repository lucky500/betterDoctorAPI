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

const apiKey = __webpack_require__(1).apiKey;
const betterDoctorInterface = __webpack_require__(2);

$(document).ready(function(){



$('#update').click(function(e) {
  e.preventDefault();
  getDoctorName();
  console.log(doctorName)
});

var doctorName;
function getDoctorName(){ 
  doctorName = $('.doctor-name').val();
  specialty = $('.doctor-specialty').val();

  $.ajax({
    url: `https://api.betterdoctor.com/2016-03-01/doctors?name=${doctorName}&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=${apiKey}`,
    type: 'GET',

      success: function(response) {
        console.log(response.data);
        for(var i = 0; i < response.data.length; i++){
          console.log(`name ${response.data[i].profile.first_name} ${response.data[i].profile.last_name} ${response.data[i].practices[0].phones[0].number} ${response.data[i].practices[0].visit_address.city}`);
        }

      }
    });
  }
});


/***/ }),
/* 1 */
/***/ (function(module, exports) {

exports.apiKey = "49679b92dbd683b4bc7a6aca2740d4ad";

/***/ }),
/* 2 */
/***/ (function(module, exports) {

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





/***/ })
/******/ ]);