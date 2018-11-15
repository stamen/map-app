import React, { Component } from 'react';
import ReactMapboxGl from 'react-mapbox-gl';
import { mapboxStyle } from './mapboxStyle';

const Mapbox = ReactMapboxGl({
});

class App extends Component {
  render() {
    return (
      <Mapbox
        style={ mapboxStyle }
        maxBounds={[
          [-71.1123,42.3526],
          [-71.0786,42.3672]
        ]}
      />
    );
  }
}

export default App;
