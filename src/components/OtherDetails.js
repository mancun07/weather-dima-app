import React from 'react'
import OtherDetailsItem from './OtherDetailsItem'
import { useSelector } from 'react-redux'

const OtherDetails = () => {

    const weather = useSelector(state => state.city.weather)

    return (
        <div>
            <OtherDetailsItem title={'Восход солнца'} data={weather.sys.sunrise}/>
            <OtherDetailsItem title={'Звход солнца'} data={weather.sys.sunset}/>
            <OtherDetailsItem title={'Влажность'} data={`${weather.main.humidity} %`}/>
            <OtherDetailsItem title={'Ветер'} data={`${weather.wind.speed} м/c`}/>
            <OtherDetailsItem title={'Ощущается как'} data={`${weather.main.feels_like} °C`}/>
            <OtherDetailsItem title={'Видимость'} data={`${weather.visibility} км`}/>
        </div>
    )
}

export default OtherDetails
