import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import './InfoBox.css';

export default function InfoBox({mainResult}) { 
    const INIT_URL = "https://images.unsplash.com/photo-1746962321201-2bb6239e2a9c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const HOT_URL = "https://images.unsplash.com/photo-1561986545-7761b7e94d80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3VtbWVyJTIwc2t5fGVufDB8fDB8fHww";
    const COLD_URL = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const RAINY_URL = "https://media.istockphoto.com/id/1429701799/photo/raindrops-on-asphalt-rain-rainy-weather-downpour.webp?a=1&b=1&s=612x612&w=0&k=20&c=jc45vpqNDgrvRZAn2foO82IhW9rUeXbQfxvLZaDW8H8=";

    return (
        <div className="info">
            <h1>Weather Info - {mainResult.weather}</h1>
            <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            
            image={
              mainResult.humidity > 80 ? RAINY_URL : mainResult.temp > 30 ? HOT_URL : mainResult.temp < 15 ? COLD_URL : INIT_URL
            }
            title="green iguana"
            />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {mainResult.city}
              {
                mainResult.humidity > 80 ? <ThunderstormIcon/> : 
                mainResult.temp > 30 ? <SunnyIcon /> :
                mainResult.temp < 15 ? <AcUnitIcon /> : null
              }

            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>

            <p>Temperature = {mainResult.temp}&deg;</p>
            <p>Humidity = {mainResult.humidity}</p>
            <p>Min Temp = {mainResult.tempMin}&deg;</p>
            <p>Max Temp = {mainResult.tempMax}&deg;</p>
            <p>The weather can be described as <strong>{mainResult.weather}</strong> feels like {mainResult.feels_like}&deg;</p>

            </Typography>
          </CardContent>
        </Card>
        </div>
    </div>
  );
}