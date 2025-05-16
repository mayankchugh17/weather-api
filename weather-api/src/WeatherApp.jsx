import SearchBar from "./SearchBox.jsx";
import InfoBox from "./InfoBox.jsx";
import { useState } from "react";

export default function WeatherApp()
{
    let [weatherInfo, setWeatherInfo] = useState({
        city : "Ambala",
        temp : 25.05,
        tempMin : 25.05,
        tempMax : 25.05,
        humidity : 47,
        feels_like : 24.87,
        weather : "haze",
    })
    return (
        <div style={{ textAlign: "center" }}>
            <h1>Weather App by Mayank</h1>
            <SearchBar />
            <InfoBox mainResult={weatherInfo} />
        </div>
    );
}