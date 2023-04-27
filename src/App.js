import "./App.css";
import UilReact from "@iconscout/react-unicons/icons/uil-react";
import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import Forecast from "./components/Forecast";
import getFormatedWeatherData, {
  formatToLocalTime,
} from "./components/services/weatherService";
import { useState } from "react";

function App() {
  const [weather, setWeather] = useState(null);

  useState(() => {
    const fetchWeather = () => {
      getFormatedWeatherData({ q: "london", units: "metric" }).then((data) =>
        setWeather(data)
      );
    };

    fetchWeather();
  }, []);

  console.log(weather?.hourly);

  return (
    <div
      className="
    mx-auto max-w-screen-md mt-4 py-5 px-32 
    bg-gradient-to-br from-cyan-700 to-blue-700 
    h-fit shadow-xl shadow-gray-400"
    >
      <TopButtons />
      <Inputs />
      {weather && (
        <>
          <TimeAndLocation weather={weather} />
          <TemperatureAndDetails weather={weather} />
          <Forecast title="hourly forecast" weather={weather.hourly} />
          <Forecast title="daily forecast" weather={weather.daily} />
        </>
      )}
    </div>
  );
}

export default App;
