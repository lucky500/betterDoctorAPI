const apiKey = require('./../../.env').apiKey;
const betterDoctorInterface = require('./app.js');

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
