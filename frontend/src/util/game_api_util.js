import axios from 'axios';

export const getGame = (game) => {
  
    return axios.post('/api/games/showGame', game);
}
export  const findGames=(game)=>{
    return axios.post('/api/games/search',game)
}
export const Helltaker = () => {
    return axios.get('/api/games/index');
}
export const getRandom = () =>{
    return axios.get('/api/games/randomGames')
}
export const getPopular=()=>{
    return axios.get('/api/games/popular');
}
export const getTopSellers=()=>{
    return axios.get('/api/games/topSellers');
}
export const getReleaseDate=()=>{
    return axios.get('/api/games/releaseDate');
}
export const getTopRated=()=>{
    return axios.get('/api/games/topRated')
}
