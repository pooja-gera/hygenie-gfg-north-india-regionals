import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { env } from "@/env.mjs";
import Link from "next/link";

type MapProps = {
  lat: number;
  lng: number;
};

const Map: React.FC<MapProps> = ({ lat, lng }) => {
  return (
    <MapContainer
      //@ts-expect-error - Leaflet typings are not up to date
      center={[lat, lng]}
      zoom={14}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }}
    >
      <Link
        href={`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${env.NEXT_PUBLIC_MAP}`}
        />
        <Marker position={[lat, lng]}>
          <Popup>Hey ! I live here</Popup>
        </Marker>
      </Link>
    </MapContainer>
  );
};

export default Map;
