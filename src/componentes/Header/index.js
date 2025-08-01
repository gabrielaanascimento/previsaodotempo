import React,{useState} from 'react'
import './styles.css'
import { api, apiForecast } from '../../services/api'

export const Header = ({setInfo, setLoading, setForecast}) => {

  const [input, setInput] = useState('')


  const handleInput = async () => {
    if (input.trim() === '') {
      setInfo(null);
      return;
    }

    setLoading(true);

    try {
      const weatherData = await api(input);
      const weatherDataForecast = await apiForecast(input);
      
      
      if (weatherData && weatherDataForecast) {
        setInfo(weatherData);
        setForecast(weatherDataForecast)
      } else {
        setInfo(null);
      }

    } catch (error) {
      console.error("Erro inesperado na busca da API:", error);
      setInfo(null);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className='containerHeader'>
        <h1>Previsão do Tempo</h1>
        
        <div className='input'>
            <input 
            type='text'
            placeholder='Digite o nome da cidade'
            onChange={(e) => setInput(e.target.value)}
            value={input}
            />
            <button 
            onClick={handleInput}
            >
            Buscar
            </button>
        </div>
        
    </div>
  )
}