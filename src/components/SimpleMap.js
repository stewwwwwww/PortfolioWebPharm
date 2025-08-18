import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const SimpleMap = () => {
  const icon = L.icon({
    iconUrl: "https://firebasestorage.googleapis.com/v0/b/phuongminhpharma1.appspot.com/o/marker.png?alt=media&token=9d93dc50-6aab-4287-9c00-70c6cc4b63b0", // Make sure the icon has a transparent background
    iconSize: [50, 50], // Size of the icon
    iconAnchor: [25, 25], // Point of the icon which will correspond to marker's location
  });
  return (
    <MapContainer
      className="mt-16 h-[38rem] w-full md:mt-20 lg:mt-24 xl:mt-36 z-1"
      center={[20.960421567673446, 105.86517159259257]}
      maxZoom={17}
      minZoom={10}
      zoom={15}
      scrollWheelZoom={false}
      attributionControl={false}
    >
      <TileLayer url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png" />
      <Marker position={[20.960421567673446, 105.86517159259257]} icon={icon} />
    </MapContainer>
  );
};

export default SimpleMap;
