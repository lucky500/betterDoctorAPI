const apiKey = require('./../../.env').apiKey;
import { ApiCall } from './../js/app';

$(document).ready(function(){
  
  let promise;
  function loopState(){
    const statesAbbreviation = [ "AK","AL","AR","AS","AZ","CA","CO","CT","DC","DE","FL","GA","GU","HI","IA","ID","IL","IN","KS","KY","LA","MA","MD","ME","MI","MN","MO","MS","MT","NC","ND","NE","NH","NJ","NM","NV","NY","OH","OK","OR","PA","PR","RI","SC","SD","TN","TX","UT","VA","VI","VT","WA","WI","WV","WY" ];
      let states = $('#states');
    $.each(statesAbbreviation, function(index, value){
      states.append($(`<option value="${value}">${value}</option>`));
    });
  }
  loopState();

  $('#update-symptoms').click(function() {
    promise = new ApiCall();
    let specialty = document.querySelector('.symptoms').value;
    promise.get(`https://api.betterdoctor.com/2016-03-01/doctors?query=${specialty}&location=ma-boston&skip=0&limit=10&user_key=${apiKey}`)
    .then(function(queryData){
      console.log('queryData:', queryData);
      createSymptomHTML(queryData);
    }).catch(function(error){
      console.log(error);
    });
  });

  function createSymptomHTML(symptomsData){
    let rawTemplate = document.getElementById("raw-query-template").innerHTML;
    let compiledTemplate = Handlebars.compile(rawTemplate);
    let generatedHTML = compiledTemplate(symptomsData);
    let htmlContainer = document.getElementById('query-container');
    htmlContainer.innerHTML = generatedHTML;
    console.log(htmlContainer);
  }


  $('#update-doctor').on('click', function() {
    promise = new ApiCall();
    let doctorName = document.querySelector('.doctor-name').value;
    let city = $('#city').val();
    let selectedState = $( "#states option:selected" ).text().toLowerCase();
    console.log(selectedState);
    promise.get(`https://api.betterdoctor.com/2016-03-01/doctors?name=${doctorName}&location=${selectedState}-${city}&skip=0&limit=10&user_key=${apiKey}`)
    .then(function(nameData){
      console.log(nameData);
        createNameHTML(nameData);
      }).catch(function(error){
        console.log(error);
      });
  });
 
  function createNameHTML(doctorData){
    let rawTemplate = document.getElementById("raw-doctor-template").innerHTML;
    let compiledTemplate = Handlebars.compile(rawTemplate);
    let ourGeneratedHTML = compiledTemplate(doctorData);
    let htmlContainer = document.getElementById('doctor-container');
    htmlContainer.innerHTML = ourGeneratedHTML;
  }

  //Materialize drop down
  $('select').material_select();

});
