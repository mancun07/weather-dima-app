import { createSlice } from '@reduxjs/toolkit'

const citySlice = createSlice({
    name: 'city',
    initialState: {
        weather: null,
        hourlyWeather: null,
        dailyWeather: null,
    },
    reducers: {
        addWeather(state, action) {
            state.weather = action.payload
            state.weather.main.temp = (state.weather.main.temp - 273.15).toFixed(0)
            state.weather.main.temp_max = (state.weather.main.temp_max - 273.15).toFixed(0)
            state.weather.main.feels_like = (state.weather.main.feels_like - 273.15).toFixed(0)
            state.weather.visibility = state.weather.visibility/1000

            const unixTimestamp = state.weather.sys.sunrise
            const milliseconds = unixTimestamp * 1000 
            const dateObject = new Date(milliseconds)   
            const humanDateFormat = (dateObject.getHours() < 10 ? '0' : '' ) + dateObject.getHours() + ':' + (dateObject.getMinutes() < 10 ? '0' : '') + dateObject.getMinutes()
            state.weather.sys.sunrise = humanDateFormat

            const unixTimestamp2 = state.weather.sys.sunset
            const milliseconds2 = unixTimestamp2 * 1000 
            const dateObject2 = new Date(milliseconds2)
            const humanDateFormat2 = (dateObject2.getHours() < 10 ? '0' : '' ) + dateObject2.getHours() + ':' + (dateObject2.getMinutes() < 10 ? '0' : '') + dateObject2.getMinutes()
            state.weather.sys.sunset = humanDateFormat2
        },
        addHourlyWeather(state, action) {
            state.hourlyWeather = action.payload 
            state.hourlyWeather.hourly.forEach(el => {
                el.temp = (el.temp - 273.15).toFixed()
            })
            state.hourlyWeather.current.temp = (state.hourlyWeather.current.temp - 273.15).toFixed()
        },
        addDailyWeather(state, action) {
            state.dailyWeather = action.payload
            state.dailyWeather.daily.forEach(el => {
                el.temp.day = (el.temp.day - 273.15).toFixed()
            })
    },
    }
})


export const cityActions = citySlice.actions;

export default citySlice;