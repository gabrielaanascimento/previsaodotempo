import React from 'react';
import './styles.css';


export const MainForecast5days = ({days}) => {
  
    let dailyForecast = {}

    for(let forecast of days.list){
    const date = new Date(forecast.dt * 1000).toLocaleDateString()

    if(!dailyForecast[date]){
      dailyForecast[date] = forecast 
    }
    }

    const nextFiveDays = Object.values(dailyForecast).slice(1,6)

    const convertDate = (date) => {
      const newDate = new Date(date.dt * 1000).toLocaleDateString('pt-BR', {weekday: 'short', day: '2-digit'})
      return newDate
    }

  return (
    <div className='containerMainForecast'>
        <div className='mainForecast'>
          <p className='titleForecast'>Próximos 5 dias</p>
          <div className='days'>
           {nextFiveDays.map(forecast => (
            <div className='day' key={forecast.dt}>
              <p style={{textTransform: 'capitalize'}}>{convertDate(forecast)}</p>
              <img src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`} alt="Ícone do tempo" />
              <p style={{textTransform: 'capitalize'}}>{forecast.weather[0].description}</p>
              <p>{Math.round(forecast.main.temp_min)}°C min / {Math.round(forecast.main.temp_max)}°C max</p>
            </div>
           ))}
           </div>
        </div>
    </div>
  );
};