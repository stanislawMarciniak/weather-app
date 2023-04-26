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
    const fetchWeather = async () => {
      await getFormatedWeatherData({ q: "borchówka", units: "metric" }).then(
        (data) => setWeather(data)
      );
    };

    fetchWeather();
  }, []);

  console.log(weather);

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
          <TimeAndLocation
            secs={weather.dt}
            zone={weather.timezone}
            city={weather.name}
            country={weather.country}
          />
          <TemperatureAndDetails
            details={weather.details}
            icon={weather.icon}
            temp={weather.temp}
            tempReal={weather.feels_like}
            humidity={weather.humidity}
            wind={weather.speed}
            sunrise={formatToLocalTime(
              weather.sunrise,
              weather.timezone,
              "hh:mm a"
            )}
            sunset={formatToLocalTime(
              weather.sunset,
              weather.timezone,
              "hh:mm a"
            )}
            tempMax={weather.temp_max}
            tempMin={weather.temp_min}
          />
        </>
      )}

      <Forecast title="hourly forecast" />
      <Forecast title="daily forecast" />
    </div>
  );
}

export default App;
