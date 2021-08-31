import Card from 'components/Card/Card'
import React, {useEffect} from 'react'
import UIContainer from 'components/UI/UIContainer'
import {Header, Title} from 'components/UI/UIHeader'
import { UIBody } from 'components/UI/UIBody'
import useApi from 'components/utils/useApi'

const Container = () => {

    const [fetchMovies, movies] = useApi({
        url: "http://localhost:3340/movies",
        method: "GET",
        params: {
            _sort: "id",
            _order: "desc"
        }
    })

    useEffect(() => {
        fetchMovies({})
    }, [])

    return (
        <UIContainer>
            <Header>
                <Title to='/'>iWatched</Title>
            </Header>
            <UIBody>
                {movies.data && 
                !movies.loading &&
                    movies.data.map(movie => (
                        <Card movie={movie} key={movie.id}/>
                    ))
                }
                {movies.loading && <h1>Carregando...</h1>}
                {movies.error && <h3>Houve um erro ao Contatar o Servidor</h3>}
            </UIBody>
        </UIContainer>
    )
}

export default Container