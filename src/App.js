import { Header } from "./componentes/Header";
import './App.css'
import { Main } from "./componentes/Main";
import React, {useEffect, useState} from "react";
import loadingImg from './assets/loading.gif'

function App() {
  const [info, setInfo] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    console.log(info);
  },[info]);

  return (
    <div className="App">
      <Header setInfo={setInfo} setLoading={setLoading}/>
      {loading ? (
        <img src={loadingImg} alt="Carregando..." className="loading"/>
      ) : (
        info && info.main ? (
          <Main 
            name={info.name || ''}
            temp={info.main.temp || ''}
            pressao={info.main.pressure || ''}
            sensacao={info.main.feels_like || ''}
            umidade={info.main.humidity || ''}
            description={info.weather[0].description || ''}
            main={info.weather[0].main || ''}
            dt={info.dt || ''}               
            sunrise={info.sys.sunrise || ''} 
            sunset={info.sys.sunset || ''}   
          />
        ) : (
          '' 
        )
      )}
    </div>
  );
}

export default App;