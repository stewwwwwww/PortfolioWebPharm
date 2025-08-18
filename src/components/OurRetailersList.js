import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useContext } from "react";
import { LanguageContext } from "../App.js";

const OurRetailersList = ({ data }) => {
  const { languageContext } = useContext(LanguageContext);
  const icon = L.icon({
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/phuongminhpharma1.appspot.com/o/marker.png?alt=media&token=9d93dc50-6aab-4287-9c00-70c6cc4b63b0", // Make sure the icon has a transparent background
    iconSize: [50, 50], // Size of the icon
    iconAnchor: [25, 25], // Point of the icon which will correspond to marker's location
  });
  return (
    <div className="px-4 pt-16 md:pt-20 lg:pt-24 xl:pt-36">
      <div className="mx-auto flex max-w-[75rem] flex-col gap-6">
        {data.map((item, i) => (
          <div className="shadowContainer flex flex-col gap-4 rounded-lg px-8 py-5">
            <div className="flex items-center justify-between">
              <h4 className="text-[#00378A]">
                {languageContext === "english"
                  ? item.name.english
                  : item.name.vietnamese}
              </h4>
              <h4 className="rounded-2xl bg-[#00378A] px-4 py-2 text-white">
                {languageContext === "english"
                  ? item.location.english
                  : item.location.vietnamese}
              </h4>
            </div>
            <p>
              {languageContext === "english"
                ? item.address.english
                : item.address.vietnamese}
            </p>

            <MapContainer
              className="h-[20rem]"
              center={[item.lat, item.lng]}
              maxZoom={17}
              minZoom={10}
              zoom={14}
              scrollWheelZoom={false}
              attributionControl={false}
            >
              <TileLayer url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png" />
              <Marker
                position={[item.lat, item.lng]}
                icon={icon}
              />
            </MapContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurRetailersList;
