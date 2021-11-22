import { useContext } from "react";
import { MapContext } from "../contexts/Map";
import GoogleMapReact from "google-map-react";
import styled from 'styled-components'

const MapContainer = styled.div`
  height: 100vh;
  width: 100%;
`

const Map = () => {
  const { location } = useContext(MapContext);

  if (!location) {
    return <p>Chargement...</p>;
  }

  console.log(location)

  return (
    <MapContainer>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={location}
        defaultZoom={11}
      >

      </GoogleMapReact>
    </MapContainer>
  );
};

export default Map;
