import { fetchRawGeoJSON } from './fetchRawGeoJSON';
import { optimizeGeoJSON } from './optimizeGeoJSON';

// Geographic bounding box for which to scrape data.
// To discover this, use OpenStreetMap to navigate to the area,
// then click "export" to get to a page with export links. e.g.
// https://www.openstreetmap.org/export#map=16/42.3599/-71.0954
// Then right click "Overpass API" and copy the URL.
// This bounding box will appear at the end of that URL.
const geoBoundingBox = '-71.1123,42.3526,-71.0786,42.3672';

const publicDir = __dirname + '/../public';
const rawGeoFilePath = publicDir + '/rawGeo.json';
const optimizedGeoFilePath = publicDir + '/geo.json';

async function main() {
  console.log('Fetching data from OSM...');

  await fetchRawGeoJSON({
    geoBoundingBox,
    outputFilePath: rawGeoFilePath
  });

  console.log('Optimizing raw OSM data...');

  await optimizeGeoJSON({
    inputFilePath: rawGeoFilePath,
    outputFilePath: optimizedGeoFilePath
  });

  console.log('Done!');
}

main();
