import { rtkApi } from '@/shared/api/rtkApi';
import { Graph } from '../types/graph';

const graphApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getGraphGraphLine: build.query<Graph[], string>({
            query: (limit) => ({
                url: '/graph/1',
            }),
        }),
        getGraphGraphPie: build.query<Graph[], string>({
            query: (limit) => ({
                url: `/graph/pie/${limit}`,
            }),
        }),
        getGraphGraphBar: build.query<Graph[], string>({
            query: (limit) => ({
                url: '/graph/1',
            }),
        }),
        getGraphGraphMulti: build.query<Graph[], string>({
            query: (limit) => ({
                url: `/graph/multi/${limit}`,
            }),
        }),
    }),
});

export const {
    useGetGraphGraphBarQuery,
    useGetGraphGraphMultiQuery,
    useLazyGetGraphGraphBarQuery,
    useLazyGetGraphGraphMultiQuery,
} = graphApi;
