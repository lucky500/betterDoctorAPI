var ourRequest  = new XMLHttpRequest();

ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/pets-data.json');
ourRequest.onload = function(){
  if(ourRequest.status >= 200 && ourRequest.status < 400){
    var data = JSON.parse(ourRequest.responseText);
    createHTML(data);
  } else {
    console.log("We connected to the server, but it returned an error.")
  }
};

ourRequest.onerror = function(){
  console.log("Connection error");
};

ourRequest.send();

Handlebars.registerHelper('calculateAge', function(birthYear){
  var today = new Date;
  var currentYear = today.getFullYear();
  var currentAge = currentYear - birthYear;
  if (currentAge > 1 ){
    return `${currentAge} years old`;
  } else {
    return 'Less than one year old'
  }
});

function createHTML(petsData){
  //grab our template from the html - this is generally inside our
  //modifed script tags of type x-handlebars-template.
  //make sure to grab the innerHTML
  let rawTemplate = document.getElementById("raw-template").innerHTML;
  console.log(rawTemplate);
  //pass that template through Handlebars.compile
  let compiledTemplate = Handlebars.compile(rawTemplate);
   console.log(compiledTemplate);
  //Now connect to our data, in this case we we are passing our
  //petsData json, this still a function.
  let ourGeneratedHTML = compiledTemplate(petsData);
   console.log(ourGeneratedHTML);

  //then we need to grab the html tag that we want to output the 
  // compiled template
  let htmlContainer = document.getElementById('doctor-container');
  console.log(htmlContainer);
  //and pass that compiled template to our html.
  htmlContainer.innerHTML = ourGeneratedHTML;
}



