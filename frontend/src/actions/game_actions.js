export const RECEIVE_GAME = "RECIEVE_GAME";

export const recieveGame = (game) =>{
    return({
        type: RECEIVE_GAME,
        game: game
    })
};