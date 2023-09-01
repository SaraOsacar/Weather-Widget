import { useEffect, useState } from 'react';
import WeatherForm from './WeatherForm';
import WeatherMainInfo from './WeatherMainInfo';
import styles from './WeatherApp.module.css';


export default function WeatherApp() {
  const [weather, setWeather] = useState(null);

  useEffect(()=>{
    loadInfo();
  }, []);

  useEffect(()=>{
    document.title = `Weather | ${weather?.location.name ?? ""}`;
  }, [weather]); // de esta manera cada vez que renderice una nueva ubicación titulará la pestaña según ciudad

  async function loadInfo(city = 'london') {
    try {
      const request = await fetch(
        `${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`
      );
      const json = await request.json();
      console.log(json);
      setWeather(json);
    } catch (error) {
     
    }
  }

  function handleChangeCity(city) {
    setWeather(null);
    loadInfo(city);
  }

  return (
    <div className={styles.weatherContainer} >
      <WeatherForm onChangeCity={handleChangeCity} />
      <WeatherMainInfo weather={weather}/>
    </div>
  );
}
