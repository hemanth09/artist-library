const Artist = require('../models/artist');

/**
 * Finds the lowest and highest yearsActive of artists in the Artist collection
 * @return {promise} A promise that resolves with an object
 * containing the min and max yearsActive, like { min: 0, max: 14 }.
 */
module.exports = () => {
  const sortAsc = Artist.find({}).sort({ yearsActive: 1 }).limit(1);
  const sortDesc = Artist.find({}).sort({ yearsActive: -1 }).limit(1);

  return Promise.all([sortAsc, sortDesc]).then(([ascList, descList]) => {
      console.log(ascList);
      console.log(descList);
    return {
      min: ascList[0].yearsActive,
      max: descList[0].yearsActive
    };
  });
};
