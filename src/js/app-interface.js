const apiKey = require('./../../.env').apiKey;
import { ApiCall } from './../js/app';

$(document).ready(function(){
  
  let promise;

  $('#update-symptoms').click(function() {
    promise = new ApiCall();
    let specialty = document.querySelector('.symptoms').value;
    promise.get(`https://api.betterdoctor.com/2016-03-01/doctors?query=${specialty}&location=ma-boston&skip=0&limit=10&user_key=${apiKey}`)
    .then(function(queryData){
      console.log(queryData);
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
    console.log(htmlContainer);
  }


  $('#update-doctor').on('click', function() {
    promise = new ApiCall();
    let doctorName = document.querySelector('.doctor-name').value;
    promise.get(`https://api.betterdoctor.com/2016-03-01/doctors?name=${doctorName}&skip=0&limit=10&user_key=${apiKey}`)
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

});
