import { useState, useEffect } from "react";
import Map from "./components/Map";
import Loader from "./components/Loader";
// import Header from './components/Header'

function App() {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);
  // make the fetch call inside useEffect
  useEffect(() => {
    const fetchEvents = async () => {
      // this is true when fetching data
      setLoading(true);
      // get events from nasa
      const res = await fetch(
        // "https://eonet.sci.gsfc.nasa.gov/api/v2.1/events"
        // new end point
        "https://eonet.gsfc.nasa.gov/api/v3/events"
      );
      //destructure just the evets
      const { events } = await res.json();
      // console.log(events[0]);
      // console.log(events[0].categories[0].id); //=wildfires
      // set the event data to events, this is putting it into state eventData
      setEventData(events);

      // we have the data so this is now false
      setLoading(false);
    };
    // call the fetcheEvents function
    fetchEvents();
    // i am getting nothing here even pointing to new site
    // https://www.youtube.com/watch?v=ontX4zfVqK8
    // console.log(eventData);
    // console.log(eventData[0].categories[0].id);
  }, []);

  return (
    <div>
      <Map></Map>
      {/* <Header /> */}
      {!loading ? <Map eventData={eventData} /> : <Loader />}
    </div>
  );
}

export default App;
