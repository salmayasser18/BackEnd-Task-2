
const forecast = require("./functions/forecast")
const geocode = require("./functions/geocode")
const country = process.argv[2]


geocode(country, (error, dataGeo) => {
    if (error)
        console.log("Error : ", error)
    else {
        forecast(dataGeo.longitude, dataGeo.latitude, (error, dataForecast) => {
            if (error)
                console.log("Error : ", error)
            else
                console.log(dataForecast + "\nLongitude: " + dataGeo.longitude +"\nLatitude: " + dataGeo.latitude)
        })
    }

})