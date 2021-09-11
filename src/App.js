import { useEffect } from 'react'
import Layout from './components/Layout';
import UserSearch from "./components/UserSearch";
import Weather from './components/Weather';
import WeatherDetails from './components/WeatherDetails';
import DailyWeather from './components/DailyWeather';
import { useSelector, useDispatch } from 'react-redux';
import {actionsfetchDataHandler} from './store/actions'
import {uiActions} from './store/uiSlice'
import Notification from './components/Notification';
import Loading from './components/Loading';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import TodayInfo from './components/TodayInfo';
import OtherDetails from './components/OtherDetails';

// "homepage": "https://mancun07.github.io/weather-app",

function App() {

  const dispatch = useDispatch()
  const weather = useSelector(state => state.city.weather)
  const hourlyWeather = useSelector(state => state.city.hourlyWeather)
  const dailyWeather = useSelector(state => state.city.dailyWeather)
  const notification = useSelector(state => state.ui.notification)
  const loading = useSelector(state => state.ui.loading)

  useEffect(() => {
      dispatch(actionsfetchDataHandler('Санкт-Петербург'))
  }, [dispatch])


  useEffect(() => {
    let timer = setTimeout(() => {
      dispatch(uiActions.clearNotification())
    }, 3000)
    return () => clearTimeout(timer)
  }, [dispatch, notification])


  // const unixTimestamp = 1631264400

  // const milliseconds = unixTimestamp * 1000 
  
  // const dateObject = new Date(milliseconds)

  // console.log(dateObject)
  
  // const humanDateFormat = dateObject.toLocaleString()
//   const humanDateFormat = dateObject.getDay()
// console.log(humanDateFormat)


  return (
      <Layout>
        {/* <Router>
          <Switch> */}
        {loading && <Loading/>}
        {!loading && notification && <Notification message={notification.message}/>}
        {!loading && weather && <Weather/>}
        {!loading && hourlyWeather && <WeatherDetails />}
        <UserSearch/>
        {!loading && dailyWeather && <DailyWeather />}
        {!loading && weather && <TodayInfo />}
        {!loading && weather && <OtherDetails />}
          {/* </Switch>
        </Router> */}
      </Layout>
  );
}

export default App;
