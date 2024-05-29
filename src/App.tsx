import {FormEvent, useState} from 'react'
import './App.css'
import {useLazyGetBookSearchQuery} from "./services/BookApi.ts";
import {Button, Container, TextField, Typography} from "@mui/material";
import {BookList} from "./components/BookList.tsx";
import {LibraryBookList} from "./components/LibraryBookList.tsx";
import styled from "@emotion/styled";

const Search = styled.div`
    display: flex;
    flex-direction: column;
    padding: 50px;
    justify-content: center;
`

const FormLayoutWrapper = styled.form`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
`
const AppHeader = styled.div`
    background-color: #CBCBD9B9;
    width: 100vw;
    height: 100px;
    box-shadow: 2px 2px 2px 1px rgb(0 0 0 / 20%)
`

const BackgroundContainer = styled.main`
    background-color: bisque;
    display: flex;
`

const MainContainer = styled(Container)`
    background-color: white;
    min-height: calc(100vh - 100px);
`

function App() {
    const [trigger, result] = useLazyGetBookSearchQuery();
    const [searchInputString, setSearchInputString] = useState('');
    const [queryString, setQueryString] = useState('');

    const submitSearch = (evt: FormEvent) => {
        evt.preventDefault();
        if (searchInputString) {
            trigger(searchInputString);
            setQueryString(searchInputString);
        }

    }

    return (
        <>
            <AppHeader/>
            <BackgroundContainer>
                <MainContainer>
                    <Search>
                        <Typography variant='h6' component='h3'>Search for books to add to the library</Typography>
                        <FormLayoutWrapper onSubmit={submitSearch}>
                            <TextField id="book-search" label="Book search" value={searchInputString}
                                       onChange={e => setSearchInputString(e.target.value)}/>
                            <Button type={"submit"} variant="contained">Search</Button>
                        </FormLayoutWrapper>

                        {
                            !result.isLoading &&
                            <BookList listQuery={queryString}/>
                        }
                    </Search>
                    <Container>
                        <LibraryBookList/>
                    </Container>
                </MainContainer>
            </BackgroundContainer>
        </>
    )
}

export default App
