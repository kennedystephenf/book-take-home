import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {UsersList} from "../Models/ApiWrappers.ts";


// Define a service using a base URL and expected endpoints
export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://reqres.in/api/' }),
    endpoints: (builder) => ({
        getUsers: builder.query<UsersList, void>({
            query: () => `/users`
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetUsersQuery } = userApi