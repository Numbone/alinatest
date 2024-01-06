import { Bid } from '@/entities/BidSelect';
import { rtkApi } from '@/shared/api/rtkApi';

const BidsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        addBids: build.mutation<Bid, Bid>({
            query: (arg) => ({
                url: '/bids',
                body: arg,
                method: 'POST',
            }),
        }),
        getBids: build.query<Bid[], number>({
            query: (page) => ({
                url: '/bids',
                params: {
                    _page: page,
                    _limit: 20,
                },
            }),
            providesTags: () => ['bids'],
        }),
        deleteBids: build.mutation<Bid[], number>({
            query: (page) => ({
                url: `/bids/${page}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['bids'],
        }),
    }),
});

export const { useAddBidsMutation, useGetBidsQuery, useDeleteBidsMutation } = BidsApi;
