import Grid from '@mui/material/Unstable_Grid2';
import {useGetBookSearchQuery} from "../services/BookApi.ts";
import {Book} from "../Models/Book.ts";
import {BookItem} from "./BookItem.tsx";
import {useDispatch} from "react-redux";
import {addBookById} from "../store/localBookUpdate.ts";


export const BookList = (props: { listQuery: string }) => {
    const {data: bookData, isLoading} = useGetBookSearchQuery(props.listQuery);
    const dispatch = useDispatch();
    return (
        <Grid container spacing={2}>
            {bookData?.docs.map((book: Book) => (
                <Grid xs={12} sm={4}>
                    <BookItem bookKey={book.key}
                              key={`${book.key}`}
                              author_name={book.author_name} title={book.title}
                              addToLibrary={() => dispatch(addBookById(book))}
                    />
                </Grid>))}
        </Grid>
    )
}