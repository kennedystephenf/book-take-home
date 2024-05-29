import {useSelector} from "react-redux";
import {RootState} from "../store/store.ts";
import {LibraryBookItem} from "./LibraryBookItem.tsx";
import Grid from "@mui/material/Unstable_Grid2";
import {Divider, Typography} from "@mui/material";
import styled from "@emotion/styled";

const BookGrid = styled(Grid)`
    margin-top: 1rem;
`

export const LibraryBookList = () => {
    const userLibrary = useSelector((state: RootState) =>
        state.library.bookList
    )

    return (<>
        <Typography component="h2" variant='h4'>Your Book Library</Typography>
        <Divider/>
        <BookGrid container spacing={2}>
            {userLibrary.map((bookId) => <Grid xs={12} sm={6} md={4}><LibraryBookItem bookKey={bookId}
                                                                                      key={`userLib${bookId}`}/></Grid>)}
        </BookGrid>
    </>);
}