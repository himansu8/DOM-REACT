
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
    if (cityname.trim().length == 0) {
      alert("Please Enter Valid City Name")
      return;
    }
    else {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=efdc704b8de053b27f35ed59631c9235`
      axios.get(url)
        .then((res) => {
          //console.log(res.data.main.temp)
          setWeather(res.data.main.temp)
          //setWeather(res.data.main)

        })
        .catch((err) => { console.log(err) })
    }

  }

  function clearcity() {
    setWeather([])
    setCity('')

  }


  return (
    <div id="total">
      <Weather weather={weather} fetchweather={fetchweather} city={city} clearcity={clearcity} />
      <div id="img">
        <img src='https://openweathermap.org/themes/openweathermap/assets/img/logo_white_cropped.png' />
      </div>
      <div id="img1">
        <img src='https://yt3.googleusercontent.com/ytc/APkrFKaOF8bry3IPW4Faz-DEB7d42kU-HMKjDW6BaFaBkw=s176-c-k-c0x00ffffff-no-rj' />
      </div>


    </div>
  );
}

export default App;
