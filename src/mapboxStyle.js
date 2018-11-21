// Colors loosely based on https://whereis.mit.edu/
const background = {
  id: 'background',
  type: 'background',
  paint: {
    'background-color': '#fcf9f0'
  }
};

const roads = {
  id: 'roads',
  type: 'line',
  source: 'campus',
  filter: [
    'all',
    [ '==', '$type', 'LineString' ],
  ],
  paint: {
    'line-color': '#dfb5b7'
  }
};

const buildings = {
  id: 'buildings',
  type: 'fill',
  source: 'campus',
  filter: [ 'has', 'building' ],
  paint: {
    'fill-color': '#fcecae',
    'fill-outline-color': '#c2b37b'
  }
};

const grass = {
  id: 'grass',
  type: 'fill',
  source: 'campus',
  filter: [
    'any',
    [ '==', 'landuse', 'grass' ],
    [ '==', 'surface', 'grass' ],
    [ '==', 'landcover', 'grass' ],
    [ '==', 'landuse', 'forest' ],
    [ '==', 'landuse', 'recreation_ground' ],
    [ '==', 'leisure', 'park' ],
    [ '==', 'leisure', 'common' ],
    [ '==', 'leisure', 'recreation_ground' ],
  ],
  paint: {
    'fill-color': '#d0e9bd',
  }
};

const sports = {
  id: 'sports',
  type: 'fill',
  source: 'campus',
  filter: [
    'any',
    [ '==', 'leisure', 'pitch' ],
    [ '==', 'leisure', 'track' ],
  ],
  paint: {
    'fill-color': '#cbddab'
  }
};

export const mapboxStyle = {
  version: 8,
  sources: {
    campus: {
      data: 'rawGeo.json',
      type: 'geojson'
    }
  },
  layers: [
    background,
    grass,
    sports,
    buildings,
    roads,
  ]
};
