
import './App.css';
import Weather from './Components/Weather';
import CityWeather from './Components/CityWeather';
import { useState, useEffect } from 'react';
import axios from 'axios';


function App() {
  const [weather, setWeather] = useState([])
  const [city, setCity] = useState('')
  // useEffect(() => {
  //   fetchweather("hyderabad")
  // },[])
  function fetchweather(cityname) {
    setCity(cityname);
    //console.log(cityname)
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=efdc704b8de053b27f35ed59631c9235`
    axios.get(url)
      .then((res) => {
        //console.log(res.data.main.temp)
        setWeather(res.data.main.temp)
        //setWeather(res.data.main)

      })
      .catch((err)=>{console.log(err)})
  }




  return (
    <>
      <Weather weather={weather} fetchweather={fetchweather} city={city}/>
      
    </>
  );
}

export default App;
