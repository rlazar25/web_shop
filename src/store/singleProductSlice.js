import { createSlice } from "@reduxjs/toolkit";

const singleProductSlice = createSlice({
    name: "singleProduct",
    initialState: {
        product: {}
    },
    reducers: {
        setProduct: (state, action) => {
            state.product = action.payload
        },
        addReviewAction: (state, action) => {
            const copyReviews = [...state.product.reviews]
            copyReviews.push(action.payload);
            state.product.reviews = copyReviews
        }
    }
})

export const {setProduct, addReviewAction} = singleProductSlice.actions
export default singleProductSlice.reducer