# _Doctor Lookup_

![image]()

## Description

#### _An application using [BetterDoctor API](https://developer.betterdoctor.com/), to search up doctors by name in a geographical area, and also to search doctors by specialty or keywords like(asthma, or Dermatologyst)_

#### By _**Luciano Oliveira**_


## Specifications
* A user should be able to enter a medical issue to receive a list of doctors in the Seattle area that fit the search query.
* A user should be able to to enter a name to receive a list of doctors in the Portland area that fit the search query.
* If the query response includes any doctors, the following information should be included about each doctor: first name, last name, address, phone number, website and whether or not the doctor is accepting new patients (the API provides this data).
* If the API call results in an error (any message not a 200 OK), the application should return a notification that states what the error is.
* If the query response doesn't include any doctors (for instance, if no doctors meet the search criteria), the application should return a notification that states that no doctors meet the criteria. (This is not an error so it should be handled separately from any errors.)


## Setup/Installation Requirements

* _Clone directory from github using git_

* __NOTE: These instructions assume you already have Node installed.__

### Installing the necessary database:

* _clone this repo_

* _In terminal, navigate into where you would like this project to live._

* _In your terminal enter:_ ``` $ git clone https://github.com/lucky500/galactic-age-calculator.git ```

* _In your terminal enter:_ ``` $ npm install ```

* _In your terminal enter:_ ``` $ bower install ```

* _In your terminal enter:_ ``` $ gulp build ```

* _In your terminal enter:_ ``` $ gulp serve ```


* _Gulp will serve the file to either port 3000 or next available port_


## 🐛Known Bugs🐛

_There are no known bugs at this time._

## Support and contact details

_Feel free to contact me at luciano101@msn.com_

## Technologies Used

_HTML, CSS, Materialize, JavaScript, jQuery, BetterDoctorAPI_

### License

*This software is licensed under the MIT license.*

Copyright (c) 2017 **_Luciano Oliveira_**
