export const mapboxStyle = {
  version: 8,
  sources: {
    campus: {
      data: "campus.json",
      type: "geojson"
    }
  },
  layers: [
    {
      id: "background",
      type: "background",
      paint: {
        "background-color": "white"
      }
    },
    {
      id: "highway",
      type: "line",
      source: "campus",
      filter: [
        "all",
        [ "==", "$type", "LineString" ],
      ],
      layout: {
        "line-join": "round"
      },
      paint: {
        "line-color": 'red'
      }
    }
  ]
};
