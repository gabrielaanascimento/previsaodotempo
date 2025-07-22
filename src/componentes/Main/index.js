import React from 'react';
import './styles.css';


export const Main = ({name, temp, sensacao, umidade, vento, description, icon}) => {


  const info = (sensacao, umidade, vento) => (
      <div className='info'>
                <p><span>Sensação<br/>térmica:</span><br/>{Math.floor(sensacao)}°C</p>
                <p><span>Umidade:</span><br/>{umidade}%</p>
                <p><span>Vento:</span><br/>{Math.floor(vento*3.6)} km/h</p>
      </div>
  )

  return (
    <div className='containerMain'>
        <div className='main'>
            <h2 className='name'>{name}</h2>
            <div className='temp'>
                <img src={`http://openweathermap.org/img/wn/${icon}.png`} alt="Ícone do tempo" />
                <p>{Math.floor(temp)}°C</p>
            </div>
            <p className='description'>{description}</p>
            {info(sensacao, umidade, vento)}

        </div>
    </div>
  );
};