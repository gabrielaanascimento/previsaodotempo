import axios from 'axios'

export const api = async (city) => {
    try {
        if(city) {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=eec9ca7bbc8191b0fae03aee91961989&lang=pt_br&units=metric`)
            return response.data;
        }
        return null;
    } catch (error) {
        console.log('Erro ao fazer a chamada para api:', error);
        return null;
    }
}

export const apiForecast = async (city) => {
    try {
        if(city) {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=eec9ca7bbc8191b0fae03aee91961989&lang=pt_br&units=metric`)
            return response.data;
        }
        return null;
    } catch (error) {
        console.log('Erro ao fazer a chamada para api:', error);
        return null;
    }
}