import React, { Component } from 'react';
import ReactMapboxGl from 'react-mapbox-gl';

const Mapbox = ReactMapboxGl({
});

class App extends Component {
  render() {
    return (
      <Mapbox />
    );
  }
}

export default App;
