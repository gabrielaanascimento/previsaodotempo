import { Header } from "./componentes/Header";
import './App.css'
import { Main } from "./componentes/Main";
import React, {useEffect, useState} from "react";
import loadingImg from './assets/loading.gif'

function App() {
  const [info, setInfo] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    console.log(info);
    setLoading(false)
  },[info])

  return (
    <div className="App">
      <Header setInfo={setInfo} setLoading={setLoading}/>
      {info && info.main?(
        <Main 
      name={info.name?info.name:''}
      temp={info.main.temp?info.main.temp:''}
      pressao={info.main.pressure?info.main.pressure:''}
      sensacao={info.main.feels_like?info.main.feels_like:''}
      umidade={info.main.humidity?info.main.humidity:''}
      />
      ):(
        ''
      )}
      {loading? (
        <img src={loadingImg} />
      ):('')}
    </div>
  );
}

export default App;
