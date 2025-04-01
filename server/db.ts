import DataStore from 'nedb';

 export const countriesDB = new DataStore({ 
    filename: 'data/countries.db', 
    autoload: true,
});
 export const citiesDB = new DataStore({ 
    filename: 'data/cities.db', 
    autoload: true,
});

export const placesDB = new DataStore({
    filename: 'data/places.db',
    autoload: true,
});
 
placesDB.ensureIndex({ fieldName: 'city' });
