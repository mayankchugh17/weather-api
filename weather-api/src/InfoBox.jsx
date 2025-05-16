import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';

export default function InfoBox({mainResult}) { 
    const INIT_URL = "https://images.unsplash.com/photo-1746962321201-2bb6239e2a9c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    return (
        <div className="info">
            <h1>Weather Info - {mainResult.weather}</h1>
            <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={INIT_URL}
            title="green iguana"
            />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {mainResult.city}
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