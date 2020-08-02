import axios from 'axios';

export const createReview = (review)=>{
    return axios.post('/api/reviews/create',review)
}