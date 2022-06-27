import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";
// import LocationInfoBox from "./LocationInfoBox";

// define constants
// const NATURAL_EVENT_WILDFIRE = 8;

const Map = ({ eventData, center, zoom }) => {
  // comes back undefined at first, then data loads
  console.log(eventData);
  //
  //   const [locationInfo, setLocationInfo] = useState(null);
  //   // map through the event data that is comming in - ev is event

  //   const markers = eventData.map((ev, index) => {
  //     // for each event check to see if it is a wild fire, if so return..
  //     // if (ev.categories[0].id === NATURAL_EVENT_WILDFIRE) {
  //     // if (ev.categories[0].id === 8) {
  //     // the cat is now wildfires
  //     if (ev.categories[0].id === "wildfires") {
  //       return (
  //         <LocationMarker
  //           key={index}
  //           //   lat={ev.geometries[0].coordinates[1]}
  //           //   lng={ev.geometries[0].coordinates[0]}
  //           lat={ev.geometry[0].coordinates[1]}
  //           lng={ev.geometry[0].coordinates[0]}
  //           onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}
  //         />
  //       );
  //     }
  //     return null;
  //   });

  return (
    <div className="map">
      <GoogleMapReact
        //   this should not be put out onweb
        bootstrapURLKeys={{ key: "AIzaSyC6WKbJkJmbGIVQPLStfz6yOwPUz3wEIjc" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <LocationMarker lat={center.lat} lng={center.lng}></LocationMarker>
        {/* {markers} */}
      </GoogleMapReact>
      {/* {locationInfo && <LocationInfoBox info={locationInfo} />} */}
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 42.3265,
    lng: -122.8756,
  },
  zoom: 6,
};

export default Map;
