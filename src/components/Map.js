import { useContext } from "react";
import { MapContext } from "../contexts/Map";
import GoogleMapReact from "google-map-react";
import styled from 'styled-components'
import Marker from "./Marker";

const MapContainer = styled.div`
  height: 100vh;
  width: 100%;
`

const Map = () => {
  const { location, bars } = useContext(MapContext);
  // const location = useContext(MapContext);

  if (!location) {
    return <p>Chargement...</p>;
  }

  console.log(location)
  console.log(bars)

  return (
    <MapContainer>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={location}
        defaultZoom={14}
      >

        <Marker 
          lat={location.lat}
          lng={location.lng}
          marker='my-position'
        />

        {bars.map((bar, index) => (
          <Marker 
          key={index}
          lat={bar.latitude}
          lng={bar.longitude}
          marker='local-position'
          address={bar.address}
          name={bar.name}
          price={bar.price}
        />
        ))}
      </GoogleMapReact>
    </MapContainer>
  );
};

export default Map;
