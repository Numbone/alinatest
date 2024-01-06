import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { DashboardPageSchema } from '../types/DashboardPageSchema';

const initialState: DashboardPageSchema = {
    active: false,
};

export const DashboardPageSlice = createSlice({
    name: 'DashboardPage',
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

export const { actions: DashboardPageActions } = DashboardPageSlice;
export const { reducer: DashboardPageReducer } = DashboardPageSlice;
