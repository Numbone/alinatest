import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GraphMultiPartSchema } from '../types/graphMultiPartSchema';
import { CurrencyType } from '@/shared/types';
import { DataTime } from '@/shared/types/data';

const initialState: GraphMultiPartSchema = {
    setGraphicLine: CurrencyType.DOLLAR,
    setGraphicBar: DataTime.YEAR,
    setGraphicMulti: DataTime.YEAR,
    setGraphicPie: DataTime.DAY,
};

export const graphMultiPartSlice = createSlice({
    name: 'graphMultiPart',
    initialState,
    reducers: {

        setDashboardLine: (state, action: PayloadAction<CurrencyType>) => {
            state.setGraphicLine = action.payload;
        },
        setDashboardBar: (state, action: PayloadAction<DataTime>) => {
            state.setGraphicBar = action.payload;
        },
        setDashboardMulti: (state, action: PayloadAction<DataTime>) => {
            state.setGraphicMulti = action.payload;
        },
        setDashboardPie: (state, action: PayloadAction<DataTime>) => {
            state.setGraphicPie = action.payload;
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

export const { actions: graphMultiPartActions } = graphMultiPartSlice;
export const { reducer: graphMultiPartReducer } = graphMultiPartSlice;
