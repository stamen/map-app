const layers = [];

const add = layer => {
  layer.source = 'campus';
  layers.push(layer);
};

// Colors loosely based on https://whereis.mit.edu/
add({
  id: 'background',
  type: 'background',
  paint: {
    'background-color': '#fcf9f0'
  }
});

add({
  id: 'grass',
  type: 'fill',
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
});

add({
  id: 'sports',
  type: 'fill',
  filter: [
    'any',
    [ '==', 'leisure', 'pitch' ],
    [ '==', 'leisure', 'track' ],
  ],
  paint: {
    'fill-color': '#cbddab'
  }
});

add({
  id: 'buildings',
  type: 'fill',
  filter: [ 'has', 'building' ],
  paint: {
    'fill-color': '#fcecae',
    'fill-outline-color': '#c2b37b'
  }
});

add({
  id: 'roads',
  type: 'line',
  filter: [
    'all',
    [ '==', '$type', 'LineString' ],
  ],
  paint: {
    'line-color': '#dfb5b7'
  }
});

export const mapboxStyle = {
  version: 8,
  sources: {
    campus: {
      data: 'rawGeo.json',
      type: 'geojson'
    }
  },
  layers
};
