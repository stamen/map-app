import { fetchRawGeoJSON } from './fetchRawGeoJSON';

// Geographic bounding box for which to scrape data.
// To discover this, use OpenStreetMap to navigate to the area,
// then click "export" to get to a page with export links. e.g.
// https://www.openstreetmap.org/export#map=16/42.3599/-71.0954
// Then right click "Overpass API" and copy the URL.
// This bounding box will appear at the end of that URL.
const geoBoundingBox = '-71.1123,42.3526,-71.0786,42.3672';

fetchRawGeoJSON({
  geoBoundingBox,
  outputFilePath: __dirname + '/../public/rawGeo.json',
});
