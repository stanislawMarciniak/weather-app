import "./App.css";
import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import Forecast from "./components/Forecast";
import getFormatedWeatherData from "./components/services/weatherService";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [weather, setWeather] = useState(null);
  const [units, setUnits] = useState("metric");
  const [degrees, setDegrees] = useState("°F");
  const [city, setCity] = useState({ q: "warsaw" });
  const [backgroundStyle, setBackgroundStyle] = useState("");

  useEffect(() => {
    degrees === "°C" ? setDegrees("°F") : setDegrees("°C");
  }, [units]);

  useEffect(() => {
    const message = city.q ? city.q : "current location";

    toast.info("Fetching weather for " + message);

    const fetchWeather = () => {
      getFormatedWeatherData({ ...city, units })
        .then((data) => {
          toast.success(
            `Successfully fetched weather for ${data.name}, ${data.country}`
          );
          setWeather(data);
        })
        .catch(() => toast.error(`Error: Failed to fetch weather`));
    };
    fetchWeather();
  }, [units, city]);

  useEffect(() => {
    setBackgroundStyle(formatBackground());
  }, [weather]);

  const formatBackground = () => {
    if (!weather) return "from-cyan-700 to-blue-700";
    const threshold = units === "metric" ? 20 : 68;
    const gradient =
      weather.temp > threshold
        ? "from-yellow-700 to-orange-700"
        : "from-cyan-700 to-blue-700";
    return gradient;
  };

  return (
    <div
      className={`
      ${backgroundStyle}
    mx-auto max-w-screen-md mt-4 py-5 px-32 
    bg-gradient-to-br 
    h-fit shadow-xl shadow-gray-400`}
    >
      <TopButtons setCity={setCity} />
      <Inputs setUnits={setUnits} setCity={setCity} />
      {weather && (
        <>
          <TimeAndLocation weather={weather} />
          <TemperatureAndDetails
            weather={weather}
            units={units}
            degrees={degrees}
          />
          <Forecast title="hourly forecast" weather={weather.hourly} />
          <Forecast title="daily forecast" weather={weather.daily} />

          <ToastContainer autoClose={3000} theme="colored" newestOnTop={true} />
        </>
      )}
    </div>
  );
}

export default App;
