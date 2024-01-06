import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ChartSchema } from '../types/ChartSchema';

const initialState: ChartSchema = {
    
};

export const ChartSlice = createSlice({
    name: 'Chart',
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

export const { actions: ChartActions } = ChartSlice;
export const { reducer: ChartReducer } = ChartSlice;