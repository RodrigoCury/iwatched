import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'


const CardDiv = styled.div`
    max-width: 200px;
    heigth: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
    background: ${
        props => {
            if (props.normal ) { return "linear-gradient(180deg, rgba(255, 255, 255, 0) 23.96%, rgba(169, 108, 199, 0.74) 60.94%, #AC00FE 100%);" }
            if (props.favorite) { return "linear-gradient(180deg, rgba(255, 255, 255, 0) 23.96%, rgba(255, 121, 63, 0.74) 60.94%, #FEF400 100%);" }
            if (props.watched) { return "linear-gradient(180deg, rgba(255, 255, 255, 0) 23.96%, #706FD3 60.94%, #34ACE0 100%) ;" }
            if (props.toWatch) { return "linear-gradient(180deg, rgba(255, 255, 255, 0) 23.96%, rgba(255, 82, 82, 0.74) 60.94%, #B33939 100%) ;" }
            if (props.topRated) { return "linear-gradient(180deg, rgba(255, 255, 255, 0) 23.96%, #2BC8BE 60.94%, #F2276F 100%) ;" }
            if (props.popular) { return "linear-gradient(180deg, rgba(255, 255, 255, 0) 23.96%, rgba(199, 174, 108, 0.74) 60.94%, #FE0000 100%) ;" }
            if (props.upcoming) { return "linear-gradient(180deg, rgba(255, 255, 255, 0) 23.96%, rgba(255, 113, 206, 0.74) 60.94%, #B967FF 100%) ;" }
            if (props.inTheater) { return "linear-gradient(180deg, rgba(255, 255, 255, 0) 23.96%, rgba(198, 116, 232, 0.74) 60.94%, #8595E8 100%) ;" }
            return "linear-gradient(180deg, rgba(255, 255, 255, 0) 23.96%, rgba(169, 108, 199, 0.74) 60.94%, #AC00FE 100%);"
        }
    };
    transition: 450ms;
    margin: 10px 15px;

    &:hover {
        transform: scale(1.08);
    }
`

const ImgDiv = styled.div`
    min-width: 200px;
    min-height: 300px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const CardImg = styled.img`
    width: 100%;
    object-fit: contain;
`

const MovieTitle = styled.p`
    text-decoration: none;
    color: white;
    overflow-y: hidden;
    text-overflow: ellipsis;
    text-align: center;
    min-height: 35px;
`

MovieTitle.defaultProps = {
    rel : "noopener noreferrer",
    target: "_blank"
}

const CardDescription = styled.a`
    text-decoration: none;
    height: 60px;
    margin-top: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const onNoPoster = (e)=>{e.target.onerror = null; e.target.src="data:image/png;base64,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"}

const Card = ({ movie, ...restProps }) => {


    return (
        <CardDiv {...restProps}>
            <ImgDiv>
                <CardImg src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title ?? movie.name} onError={onNoPoster}/>
            </ImgDiv>
            <CardDescription href={`https://www.themoviedb.org/movie/${movie.id}`} target="_blank" rel='noopener noreferrer nofollow' >
                <MovieTitle >{movie.title ?? movie.name}</MovieTitle>
            </CardDescription>
        </CardDiv>
    )
}

Card.propTypes = {
    movie: PropTypes.object,
};

export default Card