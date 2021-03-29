import React from 'react'
import styled from 'styled-components'
import { greenBoxShadow, lightBlueBackground, redBoxShadow, subtleBoxShadow } from './Styles'

const Tile = styled.div`
    ${subtleBoxShadow};
    ${lightBlueBackground};
    padding: 10px;
`

export const SelectedTile = styled(Tile)`
   &:hover{
       cursor: pointer;
       ${greenBoxShadow};
   } 
`

export const DeletableTile = styled(SelectedTile)`
   &:hover{
       cursor: pointer;
       ${redBoxShadow};
   } 
`

export const DisabledTile = styled(Tile)`
   pointer-events: none;
   opacity: 0.4;
`

export default Tile