import axios from 'axios';

const api = axios.create({
    baseURL : 'https://markbase.herokuapp.com'
})

export default api;