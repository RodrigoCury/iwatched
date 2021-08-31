import React from 'react'
import styled from 'styled-components'
import UIContainer from './UIContainer'
import UIHeader from './UIHeader'
import PropTypes from 'prop-types'

export const Body = styled.div`
    width: 100%;
    margin: 10px 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
`
export default function UIBody ({ children }) {
    return (
        <UIContainer>
            <UIHeader/>
            <Body>
                {children}
            </Body>
        </UIContainer>
    )
}

UIBody.propTypes = {
    children: PropTypes.any,
}