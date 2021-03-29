import React from 'react'
import _ from 'lodash'


const cc = require('cryptocompare');
cc.setApiKey('720fc39e46514a4398ba5304ae3761ae79a9dd460682821ea24a8c16b1a4d02d')

export const AppContext = React.createContext();
 
const MAX_COIN = 10;

export class AppProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'dashboard',
            favorites: ['BTC', 'ETH', 'XMR', 'DOGE'],
            ...this.saveSetting(),
            setPage : this.setPage,
            confirmFav: this.confirmFav,
            addCoin: this.addCoin,
            removeCoin: this.removeCoin,
            isInFavorites: this.isInFavorites,
            setFilteredCoins: this.setFilteredCoins
        }
    }

    fetchPrices = async() => {
        let coinList = (await cc.coinList()).Data;
        this.setState(coinList)

    }

    fetchPrices = async () => {
        if(this.state.firstVisit) return;
        let prices = await this.prices();
        prices = prices.filter(price => Object.keys(price).length);
        this.setState({prices});
      }

      prices = async () => {
        let returnData = [];
        for(let i = 0; i < this.state.favorites.length; i++){
          try {
            let priceData = await cc.priceFull(this.state.favorites[i], 'USD');
            returnData.push(priceData);
          } catch (e){
            console.warn('Fetch price error: ', e);
          }
        }
        return returnData;
      }
    

    setFilteredCoins = (filteredCoins) => this.setState({filteredCoins});

    isInFavorites = key => _.includes(this.state.favorites, key)

    removeCoin = key => {
        let favorites = [...this.state.favorites];
        this.setState({favorites:_.pull(favorites, key)})
    }

    addCoin = key => {
        let favorites = [...this.state.favorites];
        if (favorites.length < MAX_COIN) {
            favorites.push(key);
            this.setState({favorites});
        }
    }
    componentDidMount = () => {
        this.fetchCoins();
        this.fetchPrices();
    }
    fetchCoins = async () => {
        let coinList = (await cc.coinList()).Data;
        this.setState({coinList})
        console.log(coinList)
    }
    confirmFav= () => {
        console.log("hello")
        this.setState(
            {
                firstVisit: false,
                page: 'dashboard'
            }, () =>  {
                this.fetchPrices();
            }
        );
        localStorage.setItem('cryptoDash', JSON.stringify(
            {
                favorites: this.state.favorites
            }
        ));

    }
    saveSetting() {
      let cryptoDashData = JSON.parse(localStorage.getItem('cryptoDash'));
         if(!cryptoDashData) {
           return ({
               page: 'settings',
               firstVisit: true
           }) 
       }
       let {favorites} = cryptoDashData;
       return {favorites};

    }

    setPage = page => this.setState({page})


    render(){
        return (
            <AppContext.Provider value={this.state}>
                {this.props.children}
            </AppContext.Provider>
            )
        }
    }
