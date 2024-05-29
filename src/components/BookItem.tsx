import {Box, Button, Card, CircularProgress, Typography} from "@mui/material";
import {useGetBookByIdQuery} from "../services/BookApi.ts";
import {useDispatch} from "react-redux";
import {addBook} from "../store/localBookUpdate.ts";
import styled from "@emotion/styled";

const BookBox = styled(Box)`
    display: flex;
    flex-direction: column;
    gap: .5rem;
    padding: 1rem;
`

const BookImage = styled.img`
    max-height: 200px;
    object-fit: contain;
`

export const BookItem = (props: {
    title: string;
    author_name: string[];
    bookKey: string;
    addToLibrary: () => void;
}) => {

    const {data, error, isLoading} = useGetBookByIdQuery(props.bookKey);
    const dispatch = useDispatch();
    const {
        title,
        author_name,
        bookKey,
        addToLibrary
    } = props;
    console.log(data);
    return (
        <>
            {isLoading &&
                <CircularProgress/>}
            {!isLoading && !error && data &&
                <Card className="book-item">
                    <BookBox>
                        {
                            data?.covers &&
                            <BookImage alt={title}
                                       src={`https://covers.openlibrary.org/b/id/${data?.covers[0]}-M.jpg`}/>
                        }

                        <Typography variant='h5' component='h2'>{title}</Typography>
                        <Typography variant='h6' component='h3'>{author_name[0]}</Typography>
                        <Button variant='outlined' onClick={() => {
                            addToLibrary();
                            dispatch(addBook(bookKey));
                        }

                        }>Add to List</Button>
                    </BookBox>
                </Card>
            }
        </>

    )
}