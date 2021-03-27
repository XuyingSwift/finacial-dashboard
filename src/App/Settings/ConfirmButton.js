import React from 'react'
import styled from 'styled-components';
import {AppContext} from '../AppProvider'

const ConfirmButtonStyled = styled.div`
  margin: 20px;
  color: darkred;
  cursor: pointer;
`

const CenterDiv = styled.div`
  display: grid;
  justify-content: center;
`

function ConfirmButton(){
    return(
        <AppContext.Consumer>
            {
                ({confirmFav}) =>
                    <CenterDiv>
                        <ConfirmButtonStyled onClick={confirmFav}>
                            Confirm Favorites
                        </ConfirmButtonStyled>
                    </CenterDiv>
            }
        </AppContext.Consumer>
    )
}

export default ConfirmButton