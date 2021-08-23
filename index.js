const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv.slice(2)[0];

fetchBreedDescription(breedName, (error, desc) => { 
  // callback it sends is error/desc. must take a truthy/falsy, or null value for each
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});