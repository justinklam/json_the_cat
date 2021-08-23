const request = require('request');

const breed = process.argv.slice(2)[0];

const catDescriptionFinder = function(breedName) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    const data = JSON.parse(body);
  
    if (error !== null) { // print error if not null
      console.log(`error: ${error}`);
      return;
    }

    if (response.statuscode !== 200) { // print status code if not successful
      console.log(`statusCode: ${response}, ${response.statusCode}`);
    }

    if (data[0] === undefined) { // cannot locate breed
      console.log(`Finder cannot locate '${breedName}' in our database`);
      return;
    }

    console.log(data[0].description); // log object.description
  });
};

console.log(catDescriptionFinder(breed));

module.exports = { catDescriptionFinder };