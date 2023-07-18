## Weather App

This project is a WebSocket application that allows two players on different devices to play Tic Tac Toe in real-time while also providing a chat feature for communication between the players. Additionally, the application includes a login and registration page, utilizing cookies for user authentication. Link: [Weather App](https://weather-forecast-app-sm.netlify.app/).
## Technologies Used

- React
- Tailwind
- OpenWeather API

## Features

- Get weather forecasts for a searched city.
- Get weather forecasts for the user's current location (requires geolocation access).

## Prerequisites

Before using the application, ensure you have the following:

- Node.js (https://nodejs.org) installed on your machine.
- An API key from OpenWeather API (https://openweathermap.org/) to access weather data.

## Installation

1. Clone this repository to your local machine:

```bash
[git clone https://github.com/stanislawMarciniak/tictactoe_online.git](https://github.com/stanislawMarciniak/weather-app.git)
```
2. Navigate to the client directory:
   
```bash
cd tictactoe_online/client
```
3. Install the required dependencies:
```bash
npm install
```
4. Create a `.env` file in the root of the project and add your OpenWeather API key:
   
```bash
REACT_APP_API_KEY=your_openweather_api_key
```

### Running the Application

1. Start the development server:
```bash
npm start
```
2. The Weather App will be accessible at `http://localhost:3000` in your web browser.

## How to Use

1. On the home page, enter the name of the city you want to get weather forecasts for.
2. Click the "Search" button, and the app will display the current weather and the forecast for the next few days.
3. Alternatively, you can click the "Use My Location" button to get weather forecasts for your current location (requires geolocation access).
