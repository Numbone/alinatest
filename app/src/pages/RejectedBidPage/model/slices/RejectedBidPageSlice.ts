import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RejectedBidPageSchema } from '../types/RejectedBidPageSchema';

const initialState: RejectedBidPageSchema = {
    
};

export const RejectedBidPageSlice = createSlice({
    name: 'RejectedBidPage',
    initialState,
    reducers: {
        template: (state, action: PayloadAction<string>) => {
           
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(, (state) => {
    //             state.error = undefined;
    //             state.isLoading = true;
    //         })
    //         .addCase(, (state) => {
    //             state.isLoading = false;
    //         })
    //         .addCase(, (state, action) => {
    //             state.isLoading = false;
    //             state.error = action.payload;
    //         });
    // },
});

export const { actions: RejectedBidPageActions } = RejectedBidPageSlice;
export const { reducer: RejectedBidPageReducer } = RejectedBidPageSlice;