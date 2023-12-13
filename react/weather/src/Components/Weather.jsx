
import { useState } from "react"
import CityWeather from "./CityWeather"
function Weather(props) {
    //console.log(props.weather)
    const [name, setName] = useState('')
    function onChangehandler(e) {
        //console.log(e.target.value)
        setName(e.target.value)
    }
    function onClickHandler(e) {
        e.preventDefault()
        props.fetchweather(name);
        setName('')
        if (name.trim().length == 0) {
            setName('')
        }
    }
    function onClearHandler(e) {
        e.preventDefault();
        props.clearcity();
        setName('')
    }


    return (
        <>
            <CityWeather weather={props.weather} city={props.city} />
            <div className="btn">
                <input type="text" placeholder="Enter City Name" onChange={onChangehandler} value={name} />
                <button onClick={onClickHandler}>Search</button>
                <button onClick={onClearHandler}>Clear</button>



                {/* <button onClick={() => props.fetchweather('Hyderabad')}>HYDERABAD</button>
            <button onClick={() => props.fetchweather('Bhubaneswar')}>BHUBANESWAR</button>
            <button onClick={() => props.fetchweather('Bangalore')}>BANGALORE</button>
            <button onClick={() => props.fetchweather('Chennai')}>CHENNAI</button> */}
            </div>

        </>

    )
}

export default Weather