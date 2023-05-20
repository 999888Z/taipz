import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';




export const shazamCoreApi = createApi({

reducerPath: 'shazamCoreApi',
baseQuery: fetchBaseQuery({

    baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
    prepareHeaders: (headers) => {
        headers.set('X-RapidAPI-Key', '563cd7bb84msh36be0b04c2484e7p12f67fjsne1e8a5eb28ed');

        return headers;
        
    },

}),
endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => '/charts/world' }),
    getSongDetails: builder.query({ query: ({ songid }) => `/tracks/details?track_id=${songid}` }),
    getSongRelated: builder.query({ query: ({ songid }) => `/tracks/related?track_id=${songid}` }),
}),


});

export const {
    useGetTopChartsQuery,
    useGetSongDetailsQuery,
    useGetSongRelatedQuery,
} = shazamCoreApi;