

function CityWeather(props) {
    console.log(props.weather)
  return (
    <>
<h2>{props.city}</h2>
    <h3>Temp in K :{props.weather.length==0 ? 0 : props.weather}</h3>
    </>

  )
}

export default CityWeather