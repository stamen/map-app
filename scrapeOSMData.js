// This script scrapes data from OpenStreetMap.
// To run this, execute 'npm run scrapeOSMData'.
// ESM is used so that we can use ES6 modules here.
import request from 'request';
import fs from 'fs';
import { DOMParser } from 'xmldom';
import osmtogeojson from 'osmtogeojson';

const output = './public/geo.json';

// Geographic bounding box for which to scrape data.
// To discover this, use OpenStreetMap to navigate to the area,
// then click "export" to get to a page with export links. e.g.
// https://www.openstreetmap.org/export#map=16/42.3599/-71.0954
// Then right click "Overpass API" and copy the URL.
// This bounding box will appear at the end of that URL.
const geoBoundingBox = '-71.1123,42.3526,-71.0786,42.3672';

const apiBase = 'https://overpass-api.de/api/map';
const url = `${apiBase}?bbox=${geoBoundingBox}`;

request(url, (error, response, xml) => {
  if (error) {
    console.log(error);
  }
  const parser = new DOMParser();
  const dom = parser.parseFromString(xml, 'text/xml');
  const geo = osmtogeojson(dom);
  const json = JSON.stringify(geo);

  fs.writeFileSync(output, json);
});
