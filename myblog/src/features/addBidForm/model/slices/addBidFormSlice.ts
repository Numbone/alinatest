import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddBidFormSchema } from '../types/addBidFormSchema';

const initialState: AddBidFormSchema = {
    
};

export const addBidFormSlice = createSlice({
    name: 'addBidForm',
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

export const { actions: addBidFormActions } = addBidFormSlice;
export const { reducer: addBidFormReducer } = addBidFormSlice;