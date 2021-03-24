import React from 'react';
import styled, { css } from 'styled-components';

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
        color: blue;
    `}
`

function ControlButton({name, active}) {
    return( 
    <ControlButtonElem active={active}>
        {toPropercase(name)}
    </ControlButtonElem>
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