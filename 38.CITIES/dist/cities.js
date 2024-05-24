"use strict";
function describe_city(city, country = "defult_country.") {
    console.log(`${city} is in ${country}`);
}
describe_city('karachi', 'pakistan');
describe_city('Tokyo', 'japan');
describe_city('paris');
