import React from "react"
import styled from "styled-components"
import Card from "components/Card/Card"
import PropTypes from 'prop-types'
import SearchTitle from "../UITitles/SearchTitle"

export const Container = styled.div`
  ${props => props.quarter && "width: 50%"}
  
  padding-top: 25px;
  background: ${props => {
    if(props.search) { return 'linear-gradient(119.1deg, #3450E0 0%, rgba(255, 0, 0, 0.71) 100%)'}
    if(props.welcome) { return 'linear-gradient(90deg, #706FD3 0%, #34ACE0 100%)'}
    return "transparent";
  }};
  ${props => props.flex && "display: flex; flex-direction: column; justify-content: center; align-items: center;"}
  ${props => props.welcome && "min-height: 350px;"}
  }}
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