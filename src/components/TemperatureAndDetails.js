import React from "react";
import {
  UilArrowUp,
  UilArrowDown,
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";

function TemperatureAndDetails() {
  return (
    <div>
      <div
        className="flex items-center justify-center py-6 textxl
       text-cyan-300"
      >
        <p>Cloudy</p>
      </div>
      <div
        className="flex flex-row items-center justify-between
       text-white py-3 "
      >
        <img src="" alt="" className="w-20" />
        <p className="text-5xl">20°</p>
        <div className="flex flex-col space-y-2">
          <div
            className="flex font-light text-sm items-center 
          justify-center"
          >
            <UilTemperature size={18} className="mr-1 " />
            Real fell:
            <span className="font-medium ml-1">20°</span>
          </div>
          <div
            className="flex font-light text-sm items-center 
          justify-center"
          >
            <UilTear size={18} className="mr-1 " />
            Humidity:
            <span className="font-medium ml-1">65%</span>
          </div>
          <div
            className="flex font-light text-sm items-center 
          justify-center"
          >
            <UilWind size={18} className="mr-1 " />
            Wind:
            <span className="font-medium ml-1">11 km/h</span>
          </div>
        </div>
      </div>

      <div
        className="flex flex-row items-center justify-center
       space-x-2 text-white text-sm py-3 "
      >
        <UilSun />
        <p className="font-light">
          Rise <span className="font-medium ml-1">06:45 AM</span>
        </p>
        <p className="font-light">|</p>
        <UilSun />
        <p className="font-light">
          Rise <span className="font-medium ml-1">06:45 AM</span>
        </p>
        <p className="font-light">|</p>
        <UilSun />
        <p className="font-light">
          Rise <span className="font-medium ml-1">06:45 AM</span>
        </p>
        <p className="font-light">|</p>
        <UilSun />
        <p className="font-light">
          Rise <span className="font-medium ml-1">06:45 AM</span>
        </p>
        <p className="font-light">|</p>
      </div>
    </div>
  );
}

export default TemperatureAndDetails;
