import * as APIutil from "../util/review_api_util";
export const RECEIVE_REVIEW="RECEIVE_REVIEW"

const receiveReview=(review)=>{
    return({
        type: RECEIVE_REVIEW,
        review: review
    })
}

export const editReview = (review) => dispatch=>{
    return APIutil.editReview(review).then(res=>dispatch(receiveReview(res)))
}
export const createReview = review=>dispatch=>{
    return APIutil.createReview(review).then(res=>dispatch(receiveReview(res)))
}