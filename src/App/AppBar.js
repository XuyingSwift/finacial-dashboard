import React from 'react';
import styled, { css } from 'styled-components';
import {AppContext} from './AppProvider'

const Bar = styled.div`
    display: grid;
    margin-bottom: 40px;
    grid-template-columns: 180px auto 100px 100px;
`

const Logo = styled.div`
    font-size: 1.5em;
`

const ControlButtonElem = styled.div`
    cursor: pointer;
    ${props => props.active && css`
      color: darkorange;
    `}
`

function ControlButton({name, active}) {
    return(
        <AppContext.Consumer>
            {({page, setPage}) => (
                <ControlButtonElem
                    active={page === name}
                    onClick={() => setPage(name)}
                >
                    {toProperCase(name)}
                </ControlButtonElem>
                )
            }
        </AppContext.Consumer>

    )
}

function toProperCase(name) {
    return name.charAt(0).toUpperCase() + name.substr(1);
}

function AppBar() {
    return <Bar>
        <Logo> PiqueDash </Logo>
        <div/>
        <ControlButton active name="dashboard"/>
        <ControlButton name="settings"/>
</Bar>
}

export default AppBar