import { StateSchema } from '@/app/providers/StoreProvider';

export const getDashboardPageGraphicLine = (state: StateSchema) => {
    return state.graphMultiPart?.setGraphicLine;
};

export const getDashboardPageGraphicBar = (state: StateSchema) => {
    return state.graphMultiPart?.setGraphicBar;
};

export const getDashboardPageGraphicMulti = (state: StateSchema) => {
    return state.graphMultiPart?.setGraphicMulti;
};

export const getDashboardPageGraphicPie = (state: StateSchema) => {
    return state.graphMultiPart?.setGraphicPie;
};
