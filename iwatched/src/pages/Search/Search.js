import React from 'react'
import UIContainer from '../../components/UI/UIContainer'
import {Header, Title} from '../../components/UI/UIHeader'

const Container = ({ children }) => {
    return (
        <UIContainer>
            <Header>
                <Title to='/'>iWatched</Title>
            </Header>
        </UIContainer>
    )
}

export default Container