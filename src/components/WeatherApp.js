import { useEffect, useState } from 'react';
import WeatherForm from './WeatherForm';
import WeatherMainInfo from './WeatherMainInfo';
import styles from './WeatherApp.module.css';
import Header from './Header';
import Loading from './Loading';






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

      setTimeout(() => {

      }, 2000);
      setWeather(json);
    } catch (error) {
     
    }
  }

  function handleChangeCity(city) {
    setWeather(null);
    loadInfo(city);
  }

  return (
    <div className={styles.weatherContainer}>
      <Header />
      <WeatherForm onChangeCity={handleChangeCity} />
      {weather ? <WeatherMainInfo weather={weather} /> : <Loading />}
      <footer style={{ paddingBottom: '20px'}}>
        <p className="footerText">© 2023 Weather Widget App. All rights reserved.</p>
      </footer>
    </div>
  );
}
