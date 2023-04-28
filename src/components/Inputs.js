import React, { useState } from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";

function Inputs({ setUnits, setCity }) {
  const [citySearch, setCitySearch] = useState("");

  const setMetric = () => setUnits("metric");
  const setImperial = () => setUnits("imperial");
  const handleSearch = () => setCity({ q: citySearch });

  const handleKeyDown = (event) => {
    if (event.key === "Enter") setCity({ q: citySearch });
  };
  const handleLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setCity({ lat, lon });
      });
    }
  };

  return (
    <div className="flex flex-row justify-center my-6 ">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4 ">
        <input
          onKeyDown={handleKeyDown}
          onChange={(e) => setCitySearch(e.target.value)}
          value={citySearch}
          type="text"
          placeholder="search for city..."
          className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase"
        />
        <UilSearch
          onClick={handleSearch}
          size={25}
          className="text-white cursor-pointer trasition ease-out hover:scale-125"
        />
        <UilLocationPoint
          onClick={handleLocation}
          size={25}
          className="text-white cursor-pointer trasition ease-out hover:scale-125"
        />
      </div>

      <div className="flex flex-row w-1/4 items-center justify-center">
        <button
          onClick={setMetric}
          name="metric"
          className="text-xl text-white font-light"
        >
          °C
        </button>
        <p className="text-xl text-white mx-1">|</p>
        <button
          onClick={setImperial}
          name="imperial"
          className="text-xl text-white font-light"
        >
          °F
        </button>
      </div>
    </div>
  );
}

export default Inputs;
