// BASE DA URL https://api.themoviedb.org/3
// https://api.themoviedb.org/3/movie/550?api_key=a3ef50865e921d2a0d3da7d458c6376c
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
});


export default api; 