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



//var betterDoctorApi = require('./betterdoctorapi.js');
//import { GetDoctorsName } from './../src/js/betterdoctorapi.js';





//}

//   $(".test").click(function(){
//     let doctorNameTest = $('.doctor-name').val();
//   console.log(doctorNameTest);
//   console.log('hi');
//   });
// };

// function doctorByName(name){
//   doctorName = $('.doctor-name').val();
//   $('.doctor-name').val('');
//   console.log(doctorName);
//   getDoctorName(doctorName);
// }




$('#update').click(function(e) {
  e.preventDefault();
  getDoctorName();
  console.log(doctorName)
});

var doctorName;
function getDoctorName(){ 
doctorName = $('.doctor-name').val();
  // var query = "https://api.betterdoctor.com/2016-03-01/doctors?&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=" + apiKey;
  // $.getJSON(query, function(jd){
  //   console.log(jd);
  //   if(jd.cod == 200){
  //       var one = jd.profile.first_name;
  //       var temp_max = jd.profile.last_name;
  //       //var cityname = jd.name;
  //       //$("#city-name").html(cityname);
  //       //$("#temperature").html(temp +  " Degrees ");
  //       console.log(jd);
  //     }else{
  //       console.log("Invalid zip-code !");
  //     }
  //       $("#inputCity").val("");
  // });

  $.ajax({
    url: `https://api.betterdoctor.com/2016-03-01/doctors?name=${doctorName}&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=${apiKey}`,
    type: 'GET',
    // complete: function(xhr, statusText){
    //   console.log(xhr.status); 
    // },
    success: function(response) {
      //$('.output').text(`DoctorName ${response.profile}`);
      //console.log(response.data);
      for(var i = 0; i < response.data.length; i++){
        console.log('name ' + response.data[i].profile.bio);
      }
      //console.log('this is response', response.data[0].profile.first_name);
      // if(response.cod === 200){
      //   console.log('this is response', response); 
      // } else {
      //   console.log('invalid info')
      // }
    //},
    // error: function() {
    //   $('#errors').text("There was an error processing your request. Please try again.")
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