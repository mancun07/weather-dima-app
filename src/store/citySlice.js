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
        },
        addHourlyWeather(state, action) {
            state.hourlyWeather = action.payload 
        },
        addDailyWeather(state, action) {
            state.dailyWeather = action.payload
        }
    }
})


export const cityActions = citySlice.actions;

export default citySlice;