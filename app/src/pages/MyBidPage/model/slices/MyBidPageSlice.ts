import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MyBidPageSchema } from '../types/MyBidPageSchema';

const initialState: MyBidPageSchema = {
    
};

export const MyBidPageSlice = createSlice({
    name: 'MyBidPage',
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

export const { actions: MyBidPageActions } = MyBidPageSlice;
export const { reducer: MyBidPageReducer } = MyBidPageSlice;