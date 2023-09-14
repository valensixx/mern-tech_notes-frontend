import { createApi, fetchBaseQuerty} from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi ({
    baseQuery: fetchBaseQuerty({ beseUrl: 'http://localhost:3500' }),
    tagTypes: ['Note', 'User'],
    endpoints: builder => ({})
});