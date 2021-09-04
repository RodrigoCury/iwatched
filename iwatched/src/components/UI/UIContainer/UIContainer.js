import React from "react";
import styled from "styled-components";
import Card from "components/Card/Card";
import PropTypes from "prop-types";
import SearchTitle from "../UITitles/SearchTitle";
import useHorizontalScroll from "components/utils/useHorizontalScroll";

export const Container = styled.div`
  ${(props) => {
    if (props.quarter) {
      return "width: calc(50% - 20px) ; padding: 0 10px;";
    } else {
      return "width: calc(100% - 20px); padding: 0 10px;";
    }
  }}

  background: ${(props) => {
    if (props.search) {
      return "linear-gradient(119.1deg, #3450E0 0%, rgba(255, 0, 0, 0.71) 100%)";
    }
    if (props.welcome) {
      return "linear-gradient(90deg, #706FD3 0%, #34ACE0 100%)";
    }
    if (props.trendingMovies) {
      return "linear-gradient(296.81deg, rgba(255, 255, 255, 0) 0%, rgba(198, 116, 232, 0.74) 63.02%, #8B00CD 100%);";
    }
    if (props.trendingSeries) {
      return "linear-gradient(104.18deg, rgba(255, 255, 255, 0.79) 10.09%, rgba(255, 255, 255, 0) 100%);";
    }
    if (props.type && props.type === "movie") {
      return "linear-gradient(151.39deg, #34ACE0 19.37%, rgba(255, 135, 135, 0.51) 59.61%, #FF8787 84.49%);";
    }
    if (props.type && props.type === "series") {
      return "linear-gradient(119.1deg, #34ACE0 0%, #FFFFFF 100%);";
    }
    return "transparent";
  }};
  ${(props) =>
    props.trend &&
    `
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;`}
  ${(props) =>
    props.flex &&
    "display: flex; flex-direction: column; justify-content: center; align-items: center;"}
  ${(props) => props.welcome && "min-height: 350px;"}
`;
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
`;

const ScrollableContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  overflow-x: scroll;
  overflow-y: hidden;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CardContainer = ({
  title,
  error,
  data,
  loading,
  query,
  ...restProps
}) => {
  if (error) {
    return <SearchTitle>{error}</SearchTitle>;
  }

  if (data === null) {
    return <SearchTitle>Carregando...</SearchTitle>;
  }

  if (data.results.length === 0) {
    return <SearchTitle>Nenhum item Encontrado</SearchTitle>;
  }

  return (
    <Container {...restProps}>
      {title && <SearchTitle>{title}</SearchTitle>}
      {query && <SearchTitle>{`Resultados para ${query}`}</SearchTitle>}
      <StyledCardContainer {...restProps}>
        {data.results.map((movie) => (
          <Card {...restProps} movie={movie} key={movie.id} />
        ))}
      </StyledCardContainer>
      {loading ? <SearchTitle>Carregando Mais</SearchTitle> : undefined}
    </Container>
  );
};
CardContainer.propTypes = {
  data: PropTypes.object,
  title: PropTypes.string,
  query: PropTypes.string,
  restProps: PropTypes.object,
  error: PropTypes.any,
  loading: PropTypes.bool,
};

export const ScrollableCardContainer = ({
  title,
  error,
  data,
  loading,
  query,
  ...restProps
}) => {
  const scrollRef = useHorizontalScroll();

  if (error) {
    return <SearchTitle>{error}</SearchTitle>;
  }

  if (data === null || loading) {
    return <SearchTitle>Carregando...</SearchTitle>;
  }

  if (data.results.length === 0) {
    <SearchTitle>Nenhum item Encontrado</SearchTitle>;
  }

  return (
    <Container {...restProps}>
      {title && <SearchTitle>{title}</SearchTitle>}
      {query && <SearchTitle>{`Resultados para ${query}`}</SearchTitle>}
      <ScrollableContainer ref={scrollRef} {...restProps}>
        {data.results.map((movie) => (
          <Card movie={movie} key={movie.id} {...restProps} />
        ))}
      </ScrollableContainer>
    </Container>
  );
};

ScrollableCardContainer.propTypes = {
  data: PropTypes.object,
  title: PropTypes.string,
  query: PropTypes.string,
  restProps: PropTypes.object,
  error: PropTypes.any,
  loading: PropTypes.bool,
};
