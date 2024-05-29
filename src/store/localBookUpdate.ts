import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {Book} from "../Models/Book.ts";

export interface LibraryState {
    bookList: string[];
    bookById: { [id: string]: Book }
}

const initialState: LibraryState = {
    bookList: [],
    bookById: {}
}

export const librarySlice = createSlice({
    name: 'library',
    initialState,
    reducers: {
        addBook: (state, action) => {
            state.bookList = [...new Set([...state.bookList, action.payload])]
        },
        removeBook: (state, action) => {
            state.bookList = state.bookList.filter(bookId => bookId !== action.payload)
        },
        addBookById: (state, action: PayloadAction<Book>) => {
            state.bookById[action.payload.key] = {
                ...action.payload, ...state.bookById[action.payload.key],
                status: false
            }
        },
        toggleBookReadStatus: (state, action: PayloadAction<string>) => {
            state.bookById[action.payload].status = !state.bookById[action.payload].status;
        }
    },
})

// Action creators are generated for each case reducer function
export const {addBook, removeBook, addBookById, toggleBookReadStatus} = librarySlice.actions

export default librarySlice.reducer