
import CityWeather from "./CityWeather"
function Weather(props) {
    console.log(props.weather)
    return (
        <>
            <CityWeather weather={props.weather} city={props.city} />
            <div className="btn">
            <button onClick={() => props.fetchweather('Hyderabad')}>HYDERABAD</button>
            <button onClick={() => props.fetchweather('Bhubaneswar')}>BHUBANESWAR</button>
            <button onClick={() => props.fetchweather('Bangalore')}>BANGALORE</button>
            <button onClick={() => props.fetchweather('Chennai')}>CHENNAI</button>
            </div>
       
        </>

    )
}

export default Weather