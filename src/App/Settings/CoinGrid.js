import React from 'react'
import styled from 'styled-components'
import {AppContext} from '../AppProvider'
import Tile, { SelectedTile } from '../Shared/Tile'
import CoinTile from './CoinTile'

export const CoinGridStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
    grid-gap: 15px;
    margin-top: 40px;

`

function CoinGrid({topSection}) {
    return(
        <AppContext.Consumer>
            {
                ({coinList, favorites}) => <CoinGridStyled>
                   {getCoinToDisplay(coinList, topSection, favorites).map(coinKey => <CoinTile topSection={topSection} coinKey={coinKey}/>)} 
                </CoinGridStyled>
            }
        </AppContext.Consumer>
    )
}

function getCoinToDisplay(coinList, topSection, favorites) {
    return topSection ? favorites : Object.keys(coinList).slice(0, topSection ? 10 : 100);
}

export default CoinGrid