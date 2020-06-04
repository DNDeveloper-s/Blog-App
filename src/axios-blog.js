import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://192.168.43.38:5000/blog'
});

export default instance;