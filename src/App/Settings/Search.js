import React from 'react';
import styled from 'styled-components';
import { AppContext } from '../AppProvider';
import {backgroundColor2, fontSize2} from '../Shared/Styles'
import _, { result, set } from 'lodash'
import { coinList } from 'cryptocompare';
import fuzzy from 'fuzzy'

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

 const hanleFilter = _.debounce((inputValue, coinList, setFilteredCoins) => {
     // get all of the coin symbols
     let coinSymbols = Object.keys(coinList);
     // get all the coin name, map symbol to name
     let coinNames = coinSymbols.map(sym => coinList[sym].CoinName);
     let coinSymbolsNames = coinSymbols.concat(coinNames)
     let fuzzyResults = fuzzy.filter(inputValue, coinSymbolsNames, {}).map(result => result.string);
     
     let filterCoins = _.pickBy(coinList, (result, symKey) => {
         let coinName = result.CoinName;
       return( _.includes(fuzzyResults, symKey) || _.includes(fuzzyResults, coinName) )
     })
     setFilteredCoins(filterCoins)
 }, 500);

function filterCoins(e, setFilteredCoins, coinList) {
    let inputValue = e.target.value;
    if(!inputValue) {
        setFilteredCoins(null)
        return;
    }
    hanleFilter(inputValue, coinList, setFilteredCoins)
}

function Search() {
    return(
        <AppContext.Consumer>
            {({setFilteredCoins, coinList}) =>
                 <SearchGrid>
                    <h1>Search all coins</h1>
                    <SearchInput onKeyUp={(e) => filterCoins(e, setFilteredCoins, coinList)}/>
                </SearchGrid>
            }        
        </AppContext.Consumer>
    )
}

export default Search