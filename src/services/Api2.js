import axios from 'axios';

const Api2 = axios.create({
    baseURL: 'http://localhost:3333'
})

export default Api2;