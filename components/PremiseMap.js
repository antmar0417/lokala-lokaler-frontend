import Image from "next/image";
import { useState, useEffect } from "react";
import ReactMapGl, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

export default function PremiseMap({ lkl }) {
  const { attributes } = lkl;
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [loading, setLoading] = useState(true);
  const [viewport, setViewport] = useState({
    latitude: 57.7072,
    longitude: 11.9668,
    width: "60vw",
    height: "60vh",
    zoom: 14,
  });

  useEffect(() => {
    fetch(
      `https://api.geoapify.com/v1/geocode/search?text=${attributes.address}&apiKey=${process.env.NEXT_PUBLIC_GEOAPIFY_API_KEY}`
    )
      .then((response) => response.json())
      .then((result) => {
        const { lat, lon } = result.features[0].properties;
        setLat(lat);
        setLng(lon);
        setViewport({ ...viewport, latitude: lat, longitude: lon });
        setLoading(false);
      })
      .catch((error) => console.log("error", error));
  }, []);

  if (loading) return false;

  return (
    <ReactMapGl
      {...viewport}
      style={{
        width: "60vw",
        height: "60vh",
        borderRadius: 10,
      }}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN}
      onMove={(lkl) => setViewport(lkl.viewport)}
    >
      <Marker key={attributes.id} latitude={lat} longitude={lng}>
        <Image src="/images/pin.svg" width={30} height={30} />
      </Marker>
    </ReactMapGl>
  );
}
