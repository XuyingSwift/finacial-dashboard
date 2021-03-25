import React from 'react'
import {AppContext} from '../AppProvider'

// not to access undefined variables
// loading indicater

export default function(props) {
    return <AppContext.Consumer>
        {
            ({coinList}) => {
                if (!coinList) {
                    return <div>Loading coing</div>
                }
                return <div>{props.children}</div>
            }
        }
    </AppContext.Consumer>
}