import React from 'react';
import {AppContext} from '../AppProvider'
// functional component
export default function Welcome({firstVisit}) {
    return(
       <AppContext.Consumer>
           {
               ({firstVisit}) =>
                   firstVisit ? <div>
                       Welcome to cryptodash, please select your favorite coins to begin.{' '}
                   </div> : null
           }
       </AppContext.Consumer>
    )
    }

/*export default function () {
    return(
        <div>Hello you!</div>
    )
}*/
