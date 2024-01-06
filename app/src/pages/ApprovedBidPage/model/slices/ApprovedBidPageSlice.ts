import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ApprovedBidPageSchema } from '../types/ApprovedBidPageSchema';

const initialState: ApprovedBidPageSchema = {
    
};

export const ApprovedBidPageSlice = createSlice({
    name: 'ApprovedBidPage',
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

export const { actions: ApprovedBidPageActions } = ApprovedBidPageSlice;
export const { reducer: ApprovedBidPageReducer } = ApprovedBidPageSlice;