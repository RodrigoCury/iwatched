import React from "react"
import styled from "styled-components"
import {Link} from "react-router-dom"
// import PropTypes from "prop-types"

const Title = styled(Link)`
    color: #34ace0;
    font-size: 40px;
    text-decoration: none;
    font-weight: bold;
`

const Header = styled.header`
    display: flex;
    align-items: flex-start;
    margin-bottom: 25px;
`
export default function UIHeader() {
    return (
        <Header>
            <Title to='/'>iWatched</Title>
        </Header>
    )
}

UIHeader.propTypes = {
}