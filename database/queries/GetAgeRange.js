const Artist = require('../models/artist');

/**
 * Finds the lowest and highest age of artists in the Artist collection
 * @return {promise} A promise that resolves with an object
 * containing the min and max ages, like { min: 16, max: 45 }.
 */
module.exports = () => {
    const sortAsc = Artist.find({}).sort({ age: 1 }).limit(1);
    const sortDesc = Artist.find({})
      .sort({ age: -1 })
      .limit(1);

    return Promise.all([sortAsc, sortDesc]).then(([ascList, descList]) => {
      return {
        min: ascList[0].age,
        max: descList[0].age
      };
    });
};
