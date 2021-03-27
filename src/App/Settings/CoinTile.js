import React from 'react';
import {AppContext} from '../AppProvider'
import CoinImage from '../Shared/CoinImage';
import { SelectedTile, DeletableTile, DisabledTile } from '../Shared/Tile';
import CoinHeaderGrid from './CoinHeaderGrid';

export default function({coinKey, topSection}) {
    return (
        <AppContext.Consumer>
            {
                ({coinList}) => {
                    let coin = coinList[coinKey];
                    let TileClass = SelectedTile;
                    if (topSection){
                        TileClass = DeletableTile;
                    }
                    return <TileClass>
                        <CoinHeaderGrid topSection={topSection} name={coin.CoinName} symbol={coin.Symbol}/>
                        <CoinImage coin={coin}/>
                    </TileClass>

                }
            }
        </AppContext.Consumer>
    )
}