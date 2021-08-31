import React, { useState } from 'react'
import styled from 'styled-components'
import { TiHeartFullOutline, TiHeartOutline } from "react-icons/ti";
import PropTypes from 'prop-types'

function heartIt(grade){
    const listOfHearts = []
    for (let i = grade ; i>0 ; i--){
        listOfHearts.push(TiHeartFullOutline)
    }
    for (let i = (5-grade); i>0; i--){
        listOfHearts.push(TiHeartOutline)
    }
    return listOfHearts
}

const CardDiv = styled.div`
    width: 200px;
    heigth: auto;
    -webkit-border-radius: 20px;
    -webkit-border-top-right-radius: 5px;
    -webkit-border-bottom-left-radius: 5px;
    -moz-border-radius: 20px;
    -moz-border-radius-topright: 5px;
    -moz-border-radius-bottomleft: 5px;
    border-radius: 20px;
    border-top-right-radius: 5px;
    border-bottom-left-radius: 5px;
    padding: 10px;
    background: rgb(172,0,254);
    background: linear-gradient(0deg, rgba(172,0,254,1) 0%, rgba(169,108,199,1) 26%, rgba(0,212,255,1) 100%);
    transition: 1000ms;
    margin-bottom: 15px;
`

const CardImg = styled.img`
    width: 100%;
    display: block;
`

const MovieTitle = styled.a`
    text-decoration: none;
    color: white;
    max-height: 35px;
    overflow-y: hidden;
    text-overflow: ellipsis;
    text-align: center;
`

MovieTitle.defaultProps = {
    rel : "noopener noreferrer",
    target: "_blank"
}

const CardDescription = styled.div`
    height: 60px;
    margin-top: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const HeartDiv = styled.div`
    display:flex;
    justify-content: center;
`

const Card = ({ movie }) => {

    const [grade, setGrade] = useState(movie.hearts)

    return (
        <CardDiv>
            <CardImg src={movie.imageUrl} />
            <CardDescription movie={movie}>
                <MovieTitle href={movie.href} >{movie.name}</MovieTitle>
                <HeartDiv>
                    {heartIt(grade).map((Heart, idx) => (<Heart key={idx} onClick={() => setGrade(idx+1)}/>))}
                </HeartDiv>
            </CardDescription>
        </CardDiv>
    )
}

Card.propTypes = {
    movie: PropTypes.object,
};

export default Card