import * as APIutil from "../util/review_api_util";
export const RECEIVE_REVIEW="RECEIVE_REVIEW"

const receiveReview=(review)=>{
    return({
        type: RECEIVE_REVIEW,
        review: review
    })
}

export const editReview = (review) => dispatch=>{
    return APIutil.editReview(review).then(dispatch(receiveReview(review)))
}