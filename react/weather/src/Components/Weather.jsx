
import CityWeather from "./CityWeather"
function Weather(props) {
    console.log(props.weather)
  return (
    <>
    <CityWeather weather={props.weather} city={props.city}/>
    <button onClick={()=>props.fetchweather('hyderabad')}>HYDERABAD</button>
    <button onClick={()=>props.fetchweather('Bhubaneswar')}>BHUBANESWAR</button>
    <button onClick={()=>props.fetchweather('Bangalore')}>BANGALORE</button>
    <button onClick={()=>props.fetchweather('Chennai')}>CHENNAI</button>
    </>
    
  )
}

export default Weather