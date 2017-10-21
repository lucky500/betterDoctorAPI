const apiKey = require('./../../.env').apiKey;
const betterDoctorInterface = require('./app.js');

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
