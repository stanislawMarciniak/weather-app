import "./App.css";
import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import Forecast from "./components/Forecast";
import getFormatedWeatherData from "./components/services/weatherService";
import { useEffect, useState } from "react";

function App() {
  const [weather, setWeather] = useState(null);
  const [units, setUnits] = useState("metric");
  const [city, setCity] = useState("london");

  useEffect(() => {
    const fetchWeather = () => {
      getFormatedWeatherData({ q: city, units }).then((data) => {
        setWeather(data);
      });
    };

    fetchWeather();
  }, [units, city]);

  return (
    <div
      className="
    mx-auto max-w-screen-md mt-4 py-5 px-32 
    bg-gradient-to-br from-cyan-700 to-blue-700 
    h-fit shadow-xl shadow-gray-400"
    >
      <TopButtons setCity={setCity} />
      <Inputs setUnits={setUnits} />
      {weather && (
        <>
          <TimeAndLocation weather={weather} />
          <TemperatureAndDetails weather={weather} units={units} />
          <Forecast title="hourly forecast" weather={weather.hourly} />
          <Forecast title="daily forecast" weather={weather.daily} />
        </>
      )}
    </div>
  );
}

export default App;
