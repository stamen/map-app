// This script scrapes data from OpenStreetMap.
// To run this, execute 'npm run scrapeOSMData'.
// ESM is used so that we can use ES6 modules here.
import request from 'request';
import fs from 'fs';
import { DOMParser } from 'xmldom';
import osmtogeojson from 'osmtogeojson';

export const fetchRawGeoJSON = options => 
  new Promise((resolve, reject) => {
    const {
      geoBoundingBox,
      outputFilePath
    } = options;

    const apiBase = 'https://overpass-api.de/api/map';
    const url = `${apiBase}?bbox=${geoBoundingBox}`;

    request(url, (error, response, xml) => {
      if (error) {
        return reject(error);
      }
      const parser = new DOMParser();
      const dom = parser.parseFromString(xml, 'text/xml');
      const geo = osmtogeojson(dom);
      const json = JSON.stringify(geo);

      fs.writeFile(outputFilePath, json, err => err ? reject(err) : resolve());

      resolve();
    });
  });
