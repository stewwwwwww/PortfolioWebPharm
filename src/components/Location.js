import React from "react";
import mapboxgl from "mapbox-gl/dist/mapbox-gl.js";
import "mapbox-gl/dist/mapbox-gl.css";
import { useRef, useEffect } from "react";
mapboxgl.accessToken =
  "pk.eyJ1IjoiZHVjMTQwMiIsImEiOiJjbHZicDFhazEwNTVnMmxvYXhxdG8zZzNyIn0.tC525Me3TDlgW0jRkmbP5A";

const Location = () => {
  const mapContainer = useRef(null);
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      //longitude, latitude
      center: [105.86517159259257, 20.960421567673446],
      zoom: 17.2,
      pitch: 70,
      bearing: 25,
      // style: "mapbox://styles/duc1402/clvbqngla018l01phhkr4bb8f",
      style: "mapbox://styles/duc1402/clvdgtg8a01j901qlcsk8eaoi",
      scrollZoom: false,
      antialias: true,
      attributionControl: false,
    }).addControl(
      new mapboxgl.NavigationControl({ visualizePitch: true }),
      "top-right",
    );

    new mapboxgl.Marker({
      scale: 2,
      color: "#98b5e3",
      anchor: "center",
    })
      .setLngLat([105.86510820954679, 20.9598238482609352])
      .addTo(map)
      .on("style.load", () => {
        // Insert the layer beneath any symbol layer.
        const layers = map.getStyle().layers;
        const labelLayerId = layers.find(
          (layer) => layer.type === "symbol" && layer.layout["text-field"],
        ).id;

        // The 'building' layer in the Mapbox Streets
        // vector tileset contains building height data
        // from OpenStreetMap.
        map.addLayer(
          {
            id: "add-3d-buildings",
            source: "composite",
            "source-layer": "building",
            filter: ["==", "extrude", "true"],
            type: "fill-extrusion",
            minzoom: 15,
            paint: {
              "fill-extrusion-color": "#aaa",

              // Use an 'interpolate' expression to
              // add a smooth transition effect to
              // the buildings as the user zooms in.
              "fill-extrusion-height": [
                "interpolate",
                ["linear"],
                ["zoom"],
                15,
                0,
                15.05,
                ["get", "height"],
              ],
              "fill-extrusion-base": [
                "interpolate",
                ["linear"],
                ["zoom"],
                15,
                0,
                15.05,
                ["get", "min_height"],
              ],
              "fill-extrusion-opacity": 0.6,
            },
          },
          labelLayerId,
        );
      });
  }, []);
  return (
    <div
      ref={mapContainer}
      className=" map-container bottom-0 left-0 right-0 top-0 mt-16 h-[52rem] md:mt-20 lg:mt-24 xl:mt-36"
    />
  );
};

export default Location;
