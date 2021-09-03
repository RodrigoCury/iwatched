import React from "react"
import styled from "styled-components"
import Card from "components/Card/Card"
import PropTypes from 'prop-types'
import SearchTitle from "../UITitles/SearchTitle"

export const Container = styled.div`
  ${props => {if (props.quarter)  {return "width: calc(50% - 20px) ; padding: 0 10px;"}}}
  
  background: ${props => {
    if(props.search) { return 'linear-gradient(119.1deg, #3450E0 0%, rgba(255, 0, 0, 0.71) 100%)'}
    if(props.welcome) { return 'linear-gradient(90deg, #706FD3 0%, #34ACE0 100%)'}
    if(props.trendingMovies) { return `linear-gradient(296.81deg, rgba(255, 255, 255, 0) 0%, rgba(198, 116, 232, 0.74) 63.02%, #8B00CD 100%);`}
    if(props.trendingSeries) { return `linear-gradient(104.18deg, rgba(255, 255, 255, 0.79) 10.09%, rgba(255, 255, 255, 0) 100%);`}
    return "transparent";
  }};
  ${props => props.trend && `
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;`}
  ${props => props.flex && "display: flex; flex-direction: column; justify-content: center; align-items: center;"}
  ${props => props.welcome && "min-height: 350px;"}

`
export const StyledCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  &::after {
    content: "";
    justify-content: flex-start;
  }
`

export const CardContainer = ({ title, data, query, ...restProps}) => (
  <Container {...restProps}>
    <SearchTitle>
      {
        data.error 
          ? data.error
          : data.loading
            ? "Carregando..."
            : query 
              ? `Resultados para: ${query}`
              : title 
      }
    </SearchTitle>
    <StyledCardContainer {...restProps}>
      {data.error
        ? <h3>Houve um erro ao Contatar o Servidor</h3>
        : data.loading 
        ? <h1>Carregando...</h1>
        : <>
            {data.data.results.map((movie) => <Card movie={movie} normal key={movie.id} />)}
          </>
      }
    </StyledCardContainer>
  </Container>
)

CardContainer.propTypes = {
  data: PropTypes.object,
  title: PropTypes.string,
  query: PropTypes.string,
  restProps: PropTypes.object,
}