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
        },
        addHourlyWeather(state, action) {
            state.hourlyWeather = action.payload 
            state.hourlyWeather.hourly.map(el => {
                el.temp = (el.temp - 273.15).toFixed(0)
                return el
            })  
        },
        addDailyWeather(state, action) {
            state.dailyWeather = action.payload
    },
    }
})


export const cityActions = citySlice.actions;

export default citySlice;