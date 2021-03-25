// state container
import React from 'react'

const cc = require('cryptocompare');

export const AppContext = React.createContext();

export class AppProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'dashboard',
            ...this.saveSetting(),
            setPage : this.setPage,
            confirmFav: this.confirmFav

        }
    }
    componentDidMount = () => {
        this.fetchCoins();
    }
    fetchCoins = async () => {
        let coinList = (await cc.coinList()).Data;
        //this.setState({coinList})
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
}
