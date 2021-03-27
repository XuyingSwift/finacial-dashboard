<<<<<<< HEAD
import React, {Component} from 'react';

export const AppContext = React.createContext();

export class AppProvider extends Component {

    constructor(props) {
        super(props);
        this.state = {
            page : 'dashboard',
            setPage : this.setPage,
            ...this.savedSettings,
            confirmFav: this.confirmFav
        }
    }

    confirmFav = () => {
        console.log("hello")
        this.setState({
            firstVisit: false,
            page: 'dashboard'
        });
        localStorage.setItem('cryptoDash', JSON.stringify({
            test: 'hello'
        }))
    }

    savedSettings(){
        let cryptoDashData = JSON.parse(localStorage.getItem('cryptoDash'));
        if (!cryptoDashData){
            return({
                page: 'settings',
                firstVisit: true
            })
        }
        return {}
    }

    setPage = page => {this.setState({page})}

    render() {
        return(
            <AppContext.Provider value = {this.state}>
                {this.props.children}
            </AppContext.Provider>
        );
    }
=======
// state container
import React from 'react'

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
            confirmFav: this.confirmFav

        }
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
            }
        );
        localStorage.setItem('cryptoDash', JSON.stringify(
            {
                test: "hello"
            }
        ));

    }
    saveSetting() {
      let cryptoDashData = JSON.parse(localStorage.getItem('cryptoDash'));
         if(cryptoDashData) {
           return ({
               page: 'settings',
               firstVisit: true
           })
       }
       return {}

    }

    setPage = page => this.setState({page})


    render(){
        return (
            <AppContext.Provider value={this.state}>
                {this.props.children}
            </AppContext.Provider>
            )
        }
>>>>>>> e590f2f3cdb17da4e4e966e6e8ebf312463ad470
}
