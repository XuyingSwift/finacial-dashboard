import React from 'react';
// context provides a way to pass data through the component tree without having to pass props down manually at every level
// share data that can be global
// data needs to be acessible by many components at different nesting level
export const AppContext = React.createContext();

export default class AppProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'settings',
            setPage: this.setPage
        }
    }
    setPage = page => this.setState({page})

    render() {
        return(
            // provider component accepts a value prop to be passed to consuming components that are descendants of this provider
            <AppContext.Provider value={this.state}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}