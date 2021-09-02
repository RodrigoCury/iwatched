import React from 'react'
import styled from 'styled-components'
import { Container } from 'components/UI/UIContainer/UIContainer'
import PropTypes from 'prop-types'

const Welcome = styled.h1`
  color: #FFFFFF;
  font-size: 40px;
  text-align: center;
  margin-bottom: 25px
  `
  
  const P = styled.p`
  color: #FFF;
  text-align: center;
  margin-bottom: 15px
`

const WelcomeDiv = ({token}) => {
  return (
    <Container welcome flex>
      {
        token !== null
          ? <Welcome>{`Bem-Vindo ao iWatched, ${token.user}!`}</Welcome>
          : <Welcome>{`Bem-Vindo ao iWatched!`}</Welcome>
      }
      <P>Acompanhe os Filmes e Séries que assistiu e quer assistir com iWatched</P>
      <P>Saiba quando assistiu e o que achou dos seus filmes favoritos</P>
      <P>Fique for dentro de o que a crítica mundial achou do filme</P>
    </Container>
  )
}

WelcomeDiv.propTypes = {
  token: PropTypes.object
}

export default WelcomeDiv