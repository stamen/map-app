// This script reduces the size of the GEOJSON data
// scraped from OpenStreetMap by eliminating unused data.
import fs from 'fs';

// These are the properties used in the Mapbox style.
const usefulProperties = [
  'landuse',
  'surface',
  'landcover',
  'leisure',
  'building',
];

const whitelist = properties =>
  usefulProperties.reduce((accumulator, property) => {
    if (properties[property] !== undefined) {
      accumulator[property] = properties[property];
    }
    return accumulator;
  }, {});

export const optimizeGeoJSON = options => 
  new Promise((resolve, reject) => {
    const {
      inputFilePath,
      outputFilePath
    } = options;

    fs.readFile(inputFilePath, 'utf8', (err, data) => {
      if (err) {
        return reject(err);
      }
      const geo = JSON.parse(data.toString());

      // Remove unused properties from features.
      geo.features.forEach(feature => {
        if (feature.properties) {
          feature.properties = whitelist(feature.properties);
        }
      });

      const json = JSON.stringify(geo);

      fs.writeFile(outputFilePath, json, err => err ? reject(err) : resolve());
    });
  });
