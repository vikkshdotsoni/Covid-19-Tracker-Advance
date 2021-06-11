import React, { useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "./Map.css";
import { showDataOnMap } from "./util";

function Map({ countries, casesType, center, zoom }) {
  // function ChangeView({ center, zoom }) {
  //   const map = useMap();
  //   map.setView(center, zoom);
  //   return null;
  // }
  const [map, setmap] = useState(null);
  if (map) {
    map.flyTo(center);
  }

  return (
    <MapContainer
      casesType={casesType}
      whenCreated={setmap}
      className="map"
      center={center}
      zoom={zoom}
      scrollWheelZoom={false}
    >
      {/* <ChangeView center={center} zoom={zoom} /> */}
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {showDataOnMap(countries, casesType)}
    </MapContainer>
  );
}

export default Map;
