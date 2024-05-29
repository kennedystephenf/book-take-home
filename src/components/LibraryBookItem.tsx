import {Box, Button, Card, Chip, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {removeBook, toggleBookReadStatus} from "../store/localLibrarySlice.ts";
import {RootState} from "../store/store.ts";
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

export const LibraryBookItem = (props: {
    bookKey: string;
}) => {
    const localBookData = useSelector((state: RootState) =>
        state.library.bookById[props.bookKey]
    )
    const dispatch = useDispatch();

    return (
        <Card className="book-item">
            {
                localBookData &&
                <BookBox>
                    <Chip label={localBookData.status ? 'Read' : 'Unread'}
                          color={localBookData.status ? 'success' : 'default'}/>
                    <BookImage alt={localBookData.title}
                               src={`https://covers.openlibrary.org/b/olid/${localBookData.cover_edition_key}-M.jpg`}/>
                    <Typography variant='h5' component='h2'>{localBookData.title}</Typography>
                    <Typography variant='h6' component='h3'>{localBookData.author_name[0]}</Typography>
                    <Button variant='outlined' onClick={() => {

                        dispatch(removeBook(props.bookKey));
                    }

                    }>Remove From List</Button>
                    <Button variant='outlined' onClick={() => {

                        dispatch(toggleBookReadStatus(props.bookKey));
                    }

                    }>Toggle Read Status</Button>
                </BookBox>
            }

        </Card>
    )
}