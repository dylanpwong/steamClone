import axios from 'axios';

export const createReview = (review)=>{
    return axios.post('/api/reviews/create',review)
}
export const editReview = (review)=>{
    return axios.patch('/api/reviews/editReview',review)
}