import React from 'react'
import './styles.css'

export const Main = ({name, temp, sensacao, umidade, pressao}) => {

  return (
    <div className='containerMain'>
        <div className='main'>
            <h2 className='name'>{name}</h2>
            <div className='temp'>
                <img src='https://cdn-icons-png.flaticon.com/512/4554/4554713.png' />
                <p>{Math.floor(temp)}°C</p>
            </div>
            <div className='info'>
                <p><span>Sensação térmica:</span><br/>{Math.floor(sensacao)}°C</p>
                <p><span>Umidade:</span><br/>{umidade}%</p>
                <p><span>Pressão:</span><br/>{pressao}</p>
            </div>
        </div>
    </div>
  )
}
