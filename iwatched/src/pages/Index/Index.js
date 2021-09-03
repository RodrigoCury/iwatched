import React, { useContext } from "react";
import { BasePage } from "components/UI/UIPages/Pages";
import StoreContext from "components/Store/Context";
import WelcomeDiv from "components/WelcomeDiv/WelcomeDiv";
import { Container } from "components/UI/UIContainer/UIContainer";
import Trending from "components/UI/UIContainer/Trending";

const Index = () => {
  const { token } = useContext(StoreContext);

  return (
    <BasePage>
      <WelcomeDiv token={token} />
      <Container trendingMovies trend>
        <Trending
          url="https://api.themoviedb.org/3/movie/top_rated"
          title="Filmes Melhor Avaliados"
          topRated
        />
        <Trending
          url="https://api.themoviedb.org/3/movie/popular"
          title="Filmes Favoritos da Comunidade"
          popular
        />
        <Trending
          url="https://api.themoviedb.org/3/movie/upcoming"
          title="Próximos Lançamentos"
          upcoming
        />
        <Trending
          url="https://api.themoviedb.org/3/movie/now_playing"
          title="Nos Cinemas"
          inTheater
        />
      </Container>
      <Container trendingSeries trend>
        <Trending
          url="https://api.themoviedb.org/3/tv/top_rated"
          title="Séries Melhor Avaliadas"
          topRated
        />
        <Trending
          url="https://api.themoviedb.org/3/tv/popular"
          title="Séries Favoritas da Comunidade"
          popular
        />
        <Trending
          url="https://api.themoviedb.org/3/tv/on_the_air"
          title="Séries No Ar"
          upcoming
        />
        <Trending
          url="https://api.themoviedb.org/3/tv/airing_today"
          title="Séries No Ar Hoje"
          inTheater
        />
      </Container>
    </BasePage>
  );
};

export default Index;
