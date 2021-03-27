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
}
