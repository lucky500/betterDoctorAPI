$(document).ready(init);

//var betterDoctorApi = require('./betterdoctorapi.js');
let doctorName;


function init(){
  $('#doctor-by-name').on('click', doctorByName);
}

//   $(".test").click(function(){
//     let doctorNameTest = $('.doctor-name').val();
//   console.log(doctorNameTest);
//   console.log('hi');
//   });
// };

function doctorByName(){
  doctorName = $('.doctor-name').val();
  $('.doctor-name').val('');
  console.log(doctorName);
}



