import React from 'react';
import './styles.css';
import nublado from '../../assets/nublado.png';
import nevoa from '../../assets/nevoa.png';
import sol from '../../assets/sol.png';
import chuva from '../../assets/chuva.png';
import neve from '../../assets/neve.png';
import trovoada from '../../assets/trovoada.png';
import noite from '../../assets/noite.png'; 

export const Main = ({name, temp, sensacao, umidade, pressao, description, main, dt, sunrise, sunset}) => {

  const isNight = (currentTime, sunriseTime, sunsetTime) => {
    return currentTime < sunriseTime || currentTime >= sunsetTime;
  };

  const currentPeriodIsNight = isNight(dt, sunrise, sunset);

  const icon = (mainCondition, isNightTime) => {
    console.log(isNightTime);
    

    if (isNightTime && mainCondition === 'Clear') {
      return noite;
    }

    switch (mainCondition) {
      case 'Clear':
        return sol; 
      case 'Clouds':
        return nublado;
      case 'Rain':
      case 'Drizzle':
        return chuva;
      case 'Thunderstorm':
        return trovoada;
      case 'Snow':
        return neve;
      case 'Mist':
      case 'Smoke':
      case 'Haze':
      case 'Dust':
      case 'Fog':
      case 'Sand':
      case 'Ash':
      case 'Squall':
      case 'Tornado':
        return nevoa;
      default:
        return sol; 
    }
  };

  const info = (sensacao, umidade, pressao) => (
      <div className='info'>
                <p><span>Sensação<br/>térmica:</span><br/>{Math.floor(sensacao)}°C</p>
                <p><span>Umidade:</span><br/>{umidade}%</p>
                <p><span>Pressão:</span><br/>{pressao}</p>
      </div>
  )

  return (
    <div className='containerMain'>
        <div className='main'>
            <h2 className='name'>{name}</h2>
            <div className='temp'>
                <img src={icon(main, currentPeriodIsNight)} alt="Ícone do tempo" />
                <p>{Math.floor(temp)}°C</p>
            </div>
            <p className='description'>{description}</p>
            {info(sensacao, umidade, pressao)}
        </div>
    </div>
  );
};