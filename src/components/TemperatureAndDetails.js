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
import { iconUrlFromCode } from "./services/weatherService";
import { formatToLocalTime } from "./services/weatherService";

function TemperatureAndDetails({ weather, units }) {
  const sunrise = formatToLocalTime(
    weather.sunrise,
    weather.timezone,
    "hh:mm a"
  );
  const sunset = formatToLocalTime(weather.sunset, weather.timezone, "hh:mm a");

  return (
    <div>
      <div
        className="flex items-center justify-center py-6 textxl
       text-cyan-300"
      >
        <p>{weather.details}</p>
      </div>
      <div
        className="flex flex-row items-center justify-between
       text-white py-3 "
      >
        <img src={iconUrlFromCode(weather.icon)} alt="" className="w-20" />
        <p className="text-5xl">{weather.temp.toFixed()}°</p>
        <div className="flex flex-col space-y-2">
          <div
            className="flex font-light text-sm items-center 
          justify-center"
          >
            <UilTemperature size={18} className="mr-1 " />
            Real fell:
            <span className="font-medium ml-1">
              {weather.feels_like.toFixed()}°
            </span>
          </div>
          <div
            className="flex font-light text-sm items-center 
          justify-center"
          >
            <UilTear size={18} className="mr-1 " />
            Humidity:
            <span className="font-medium ml-1">{weather.humidity}%</span>
          </div>
          <div
            className="flex font-light text-sm items-center 
          justify-center"
          >
            <UilWind size={18} className="mr-1 " />
            Wind:
            <span className="font-medium ml-1">
              {weather.speed.toFixed()} {units === "metric" ? "km/h" : "mph"}
            </span>
          </div>
        </div>
      </div>

      <div
        className="flex flex-row items-center justify-center
       space-x-2 text-white text-sm py-3 "
      >
        <UilSun />
        <p className="font-light">
          Rise: <span className="font-medium ml-1">{sunrise}</span>
        </p>
        <p className="font-light">|</p>
        <UilSunset />
        <p className="font-light">
          Set: <span className="font-medium ml-1">{sunset}</span>
        </p>
        <p className="font-light">|</p>
        <UilArrowUp />
        <p className="font-light">
          High:{" "}
          <span className="font-medium ml-1">
            {weather.temp_max.toFixed()}°
          </span>
        </p>
        <p className="font-light">|</p>
        <UilArrowDown />
        <p className="font-light">
          Low:{" "}
          <span className="font-medium ml-1">
            {weather.temp_min.toFixed()}°
          </span>
        </p>
      </div>
    </div>
  );
}

export default TemperatureAndDetails;
