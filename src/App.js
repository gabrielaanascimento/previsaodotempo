import { Header } from "./componentes/Header";
import './App.css'
import { Main } from "./componentes/Main";
import React, {useEffect, useState} from "react";
import loadingImg from './assets/loading.gif'
import { MainForecast5days } from "./componentes/MainForecast5days";

function App() {
  const [info, setInfo] = useState(null);
  const [forecast, setForecast] = useState(null)
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
   // console.log(forecast);
  },[info]);

  return (
    <div className="App">
      <Header setInfo={setInfo} setLoading={setLoading} setForecast={setForecast}/>
      {loading ? (
        <img src={loadingImg} alt="Carregando..." className="loading"/>
      ) : (
        info && info.main ? (
          <>
          <Main 
            name={info.name || ''}
            temp={info.main.temp || ''}
            vento={info.wind.speed || ''}
            sensacao={info.main.feels_like || ''}
            umidade={info.main.humidity || ''}
            description={info.weather[0].description || ''}
            icon={info.weather[0].icon || ''}  
          />
          <MainForecast5days days={forecast}/>
          </>
        ) : (
          '' 
        )
      )}
    </div>
  );
}

export default App;