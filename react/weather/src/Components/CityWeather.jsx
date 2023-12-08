

function CityWeather(props) {
    console.log(props.weather)
    return (
        <>
            <h1 id="heading">Weather Report</h1>
            <div className="name">
            <h2 >City Name:{props.city}</h2>
            <h3 >Temp in K :{props.weather.length == 0 ? 0 : props.weather}</h3>
            </div>
            
        </>

    )
}

export default CityWeather