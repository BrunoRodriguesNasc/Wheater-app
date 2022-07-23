const normalizeWheater = (json) => {

    const wheater = {
        city: json.location.name,
        country: json.location.country,
        temperatureC: json.current.temp_c,
        humidity: json.current.humidity,
        temperatureF: json.current.temp_f,
        condition: json.current.condition.text,
        windKph: json.current.wind_kph,
        windMph: json.current.wind_mph,
        pressure: json.current.pressure_mb,
        visibilityKm: json.current.vis_km,
        visibilityMiles: json.current.vis_miles,
        forecast: json.forecast.forecastday.map(day => {
            return {
                date: day.date,
                condition: day.day.condition.text,
                temperatureC: day.day.avgtemp_c,
                temperatureF: day.day.avgtemp_f,
                maxTemperatureC: day.day.maxtemp_c,
                maxTemperatureF: day.day.maxtemp_f,
                minTemperatureC: day.day.mintemp_c,
                minTemperatureF: day.day.mintemp_f,
                humidity: day.day.avghumidity,
                windKph: day.day.maxwind_kph,
                windMph: day.day.maxwind_mph,
                pressure: day.day.maxpressure_mb,
                visibilityKm: day.day.maxvis_km,
                visibilityMiles: day.day.maxvis_miles,
            }  
        })
    };

    return wheater;
}

module.exports = normalizeWheater;