import React from 'react'
import styled from 'styled-components';
import {AppContext} from '../AppProvider'
import {fontSize1, greenBoxShadow, color3} from '../Shared/Styles'

const ConfirmButtonStyled = styled.div`
  margin: 20px;
  color: ${color3};
  cursor: pointer;
  ${fontSize1};
  padding: 5px;
  &:hover {
      ${greenBoxShadow}
  }
`

const CenterDiv = styled.div`
  display: grid;
  justify-content: center;
`

<<<<<<< HEAD
function ConfirmButton(){
=======
 function ConfirmButton (){
>>>>>>> e590f2f3cdb17da4e4e966e6e8ebf312463ad470
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