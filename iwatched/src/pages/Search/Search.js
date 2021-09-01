import Card from "components/Card/Card";
import React, { useState } from "react";
import UIBody, { Body } from "components/UI/UIBody";
import useApi from "components/utils/useApi";
import UIInput from "components/UI/UIInput";

const Container = () => {
  const [search, setSearch] = useState("");
  
  const [fetchMovies, movies] = useApi({
    url: "https://api.themoviedb.org/3/search/movie",
    method: "GET",
    params: {
      api_key: '4d751774b43dab4d91f60e7ee588cf1f',
      query: search
    },
  });

  return (
    <UIBody>
      <UIInput
        name="movie-input"
        value={search}
        onChange={(ev) => setSearch(ev.target.value)}
        onKeyPress={(ev) => ev.key === "Enter" && fetchMovies()}
        placeholder="Pesquisar..."
        large
      ></UIInput>
      <Body>
        {movies.data &&
          !movies.loading &&
          movies.data.results.map((movie) => <Card movie={movie} key={movie.id} />)}
        {movies.loading && <h1>Carregando...</h1>}
        {movies.error && <h3>Houve um erro ao Contatar o Servidor</h3>}
      </Body>
    </UIBody>
  );
};

export default Container;
