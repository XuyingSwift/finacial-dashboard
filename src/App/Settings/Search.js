import React from 'react';
import styled from 'styled-components';
import {backgroundColor2, fontSize2} from '../Shared/Styles'
const SearchGrid = styled.div`
    display: grid;
    grid-template-columns: 200px 1fr;
 `
 const SearchInput = styled.input`
    ${backgroundColor2}
    ${fontSize2}
    border: 1px solid;
    height: 25px;
    color: white;
    place-self: center left;
 `

function Search() {
    return(
        <SearchGrid>
            <h1>Search all coins</h1>
            <SearchInput/>
        </SearchGrid>
    )
}

export default Search