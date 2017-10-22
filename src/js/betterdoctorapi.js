//const apiKey = require('./../../.env').apiKey;
//const betterDoctorInterface = require('./app.js');

$(document).ready(function(){



$('#update').click(function(e) {
  e.preventDefault();
  getDoctorName();
  //console.log(doctorName);
});

var doctorName;
function getDoctorName(){ 
  let doctorName = $('.doctor-name').val();
  let specialty = $('.doctor-specialty').val();
  let apiKey = "49679b92dbd683b4bc7a6aca2740d4ad";
  const query = "https://api.betterdoctor.com/2016-03-01/";
  const test1 = 'https://api.betterdoctor.com/2016-03-01/doctors?location=37.773,-122.413,100&skip=2&limit=150&user_key=' + apiKey;

  $.ajax({
    url: test1,
    type: 'GET',

      success: function(response) {
        console.log(response.data);
        for(var i = 0; i < response.data.length; i++){
          console.log(`name ${response.data[i].profile.first_name} ${response.data[i].profile.last_name} ${response.data[i].practices[0].phones[0].number} ${response.data[i].practices[0].visit_address.city}`);
        }
        createHTML(response.data);

      }
    });
  }

  function createHTML(doctorData){
    console.log('inside createHTML:', doctorData);
  }
});
