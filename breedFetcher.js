const request = require('request');

const fetchBreedDescription = function(breedName, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    const data = JSON.parse(body);
  
    if (error !== null) { // print error if not null
      callback(`error: ${error}`, null); // error/null for desc
      return;
    }
    // console.log(response);

    if (response.statusCode !== 200) { // print status code if not successful
      callback(`statusCode: ${response}, ${response.statusCode}`, null);
      return;
    }

    if (!data[0]) { // cannot locate breed
      callback(`Finder cannot locate '${breedName}' in our database`, null);
      return;
    }

    callback(null, data[0].description); 
    // if error is null, log object.description
  });
};

// console.log(fetchBreedDescription(breed));

module.exports = { fetchBreedDescription };