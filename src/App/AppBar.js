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
        text-shadow: 0px 0px 60px #03ff03;
    `}
`

function ControlButton({name}) {
    return(
        <AppContext.Consumer>
            {
                ({page, setPage}) => (
                    <ControlButtonElem
                        active={page === name}
                        onClick={() => setPage(name)}
                    >
                        {toPropercase(name)}
                    </ControlButtonElem>
                )
            }
        </AppContext.Consumer>

    )
}

function toPropercase(name) {
    return name.charAt(0).toUpperCase() + name.substr(1);
}

function AppBar() {
    return <Bar>
        <Logo> CryptoDash </Logo>
        <div/>
        <ControlButton name="dashboard"/>
        <ControlButton name="settings"/>
</Bar>
}

export default AppBar