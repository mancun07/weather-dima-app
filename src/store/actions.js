import {cityActions} from './citySlice'
import {uiActions} from './uiSlice'

const key = '28b0799543359e8e6ed8330d199b4ccc'

export const actionsfetchDataHandler = (userValue) => {
    return async (dispatch) => {
        const fetchDataHandler = async () => {
          const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userValue}&appid=${key}&lang=ru`)
          if (!response.ok) {
            throw new Error({message: 'There is a server error'})
          }
          const data = await response.json()
          dispatch(cityActions.addWeather(data))
          return data
          }

          const fetch2DataHandler = async (data) => {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&exclude=daily&lang=ru&appid=${key}`)
            console.log(response.ok)
            if (!response.ok) {
              throw new Error({message: 'There is a server error'})
            }
            const data2 = await response.json()
            dispatch(cityActions.addHourlyWeather(data2))
            return data2
          }

          const fetch3DataHandler = async (data) => {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&exclude=hourly&appid=${key}&lang=ru`)
            if (!response.ok) {
              throw new Error({message: 'There is a server error'})
            }
            const data3 = await response.json()
            dispatch(cityActions.addDailyWeather(data3))
            return data3
          }

      // const fetchWeatherHandler = async (cityKey) => {
      //   const response2 = await fetch(`http://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${key}&language=ru`)
      //   if (!response2.ok) {
      //     throw new Error({message: 'There is a server error'})
      //   }
      //   const data2 = await response2.json() 
      //   dispatch(cityActions.addWeather(data2))
      //   return data2
      // }

      // fetchDataHandler()
      // .then(data => fetch2DataHandler(data))
      // .catch(err => console.log(err))
      try {
        dispatch(uiActions.setLoading(true))
        const data = await fetchDataHandler()
        await fetch2DataHandler(data)
        await fetch3DataHandler(data)
      } catch (error) {
        dispatch(uiActions.showNotification({
          message:'Хуйню не вводи блядь!'
        }))  
      }
            dispatch(uiActions.setLoading(false))


    // just another option below of using then/catch

      // dispatch(uiActions.setLoading(true))
      // fetchDataHandler()
      // .then(data => fetchWeatherHandler(data))
      // .catch(err => {
      //   dispatch(uiActions.showNotification({
      //     message:'не вводи фигню всякую!'
      //   }))  
      // })
      // dispatch(uiActions.setLoading(false))
  
    }
}






