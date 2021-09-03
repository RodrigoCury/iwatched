import React, { useEffect } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import { Container } from './UIContainer'
import useApi from 'components/utils/useApi'
import Card from 'components/Card/Card'
import useHorizontalScroll from 'components/utils/useHorizontalScroll'

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
`
const Title = styled.h3`
  color: #000;
`

const ViewMore = styled(Link)`
  color: #706FD3;
  font-weight: bold;
  font-size: 14px;
  content: "Ver tudo";
  &:hover {
    text-decoration: underline;
  }
`
const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  padding: 10px 0;
  overflow-x: scroll;
  overflow-y: hidden;

  &::-webkit-scrollbar {
    display: none;
  }
`

const Trending = ({title, url, ...restProps}) => {

  // eslint-disable-next-line no-unused-vars
  const pqp = {urls: [
    'https://api.themoviedb.org/3/movie/latest?api_key=<<api_key>>&language=pt-BR',
    'https://api.themoviedb.org/3/movie/now_playing?api_key=<<api_key>>&language=pt-BR&page=1'
  ],}

  const scrollRef = useHorizontalScroll()

  const [load, requestInfo] = useApi({
    url,
    params: {
      api_key: '4d751774b43dab4d91f60e7ee588cf1f',
      language: "pt-BR",
    }
  })

  useEffect(() => {
    load()
  }, [])
  
  useEffect(() => {
    console.log(requestInfo)
  }, [requestInfo])

  return (
    <Container quarter>
      <Header>
        <Title>{title}</Title>
        <ViewMore to=''>Veja Tudo</ViewMore>
      </Header>
      <CardContainer ref={scrollRef}>
        {
          requestInfo.error
            ? <Title>{`Houve um erro ao pegar a lista de ${title}`}</Title>
            : (requestInfo.loading || requestInfo.data == null)
              ? <Title>Carregando...</Title>
              : requestInfo.data.results.map(movie => (
                <Card {...restProps} movie={movie} key={movie.id} />
              ))
        }
      </CardContainer>
    </Container>
  )
}

Trending.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
}

export default Trending