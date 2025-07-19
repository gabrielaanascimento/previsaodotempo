import React,{useState} from 'react'
import './styles.css'
import { api } from '../../services/api'

export const Header = ({setInfo, setLoading}) => {

  const [input, setInput] = useState('')


  const handleInput = async () => {
    try {
      if(input !== '') {
        const response = await api(input)
        setLoading(true)
        setInfo(response.data)
      }

    } catch (error) {
      console.log(error);
      
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
