import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import './SearchBox.css';

export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState("");

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "56228ea8e17d6efd0e3920af63b1b145";

    let getWeatherInfo = async () => {
       let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`);
       let JSONresponse = await response.json();
       
       let mainResult = {
        city : city,
        temp : JSONresponse.main.temp,
        tempMin : JSONresponse.main.temp_min,
        tempMax : JSONresponse.main.temp_max,
        humidity : JSONresponse.main.humidity,
        feels_like : JSONresponse.main.feels_like,
        weather : JSONresponse.weather[0].description,
       };
       return mainResult;
    }

    let handleChange = (event) => {
        setCity(event.target.value);
    }

    let handleSubmit = async (event) => { 
        event.preventDefault();
        console.log(city);
        setCity("");
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo);    
    }   
        return(
            <div className='search-box'>
                <form onSubmit={handleSubmit}>
                      <TextField id="outlined-basic" label="Outlined" variant="outlined" value={city} onChange={handleChange}> </TextField>
                     <br /><br /><br />
                     <Button variant="contained" type="submit">Search</Button>
                </form>
            </div>
        )
}