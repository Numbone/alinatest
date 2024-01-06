import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NewBidPageSchema } from '../types/NewBidPageSchema';
import { BidSchema } from '@/entities/BidSelect';

const initialState: BidSchema = {
    isLoading: false,
    error: undefined,
};

export const NewBidPageSlice = createSlice({
    name: 'NewBidPage',
    initialState,
    reducers: {
        setBid: (state, action: PayloadAction<NewBidPageSchema>) => {
            state.form = {
                ...state.form,
                ...action.payload,
            };
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

export const { actions: NewBidPageActions } = NewBidPageSlice;
export const { reducer: NewBidPageReducer } = NewBidPageSlice;
