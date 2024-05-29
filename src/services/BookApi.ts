import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {Book, SearchResponse} from "../Models/Book.ts";


// Define a service using a base URL and expected endpoints
export const bookApi = createApi({
    reducerPath: 'bookApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://openlibrary.org'}),
    endpoints: (builder) => ({
        getBookSearch: builder.query<SearchResponse, string>({
            query: (search) => {
                return {
                    url: '/search.json', params: {
                        q: search,
                        offset: 0,
                        limit: 3
                    }
                }
            }
        }),
        getBookById: builder.query<Book, string>({
            query: (bookId) => {
                return {
                    url: `${bookId}.json`
                }
            }
        }),
    }),
})

// https://openlibrary.org/search.json?q=the+lord+of+the+rings

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useGetBookSearchQuery, useLazyGetBookSearchQuery, useGetBookByIdQuery} = bookApi