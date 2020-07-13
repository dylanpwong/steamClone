import axios from 'axios';

export const getGame = (game) => {
    return axios.post('/api/games/showGame', game);
}

export const Helltaker = () => {
    return axios.get('/api/games/index');
}
export const getRandom = () =>{
    return axios.get('/api/games/randomGames')
}