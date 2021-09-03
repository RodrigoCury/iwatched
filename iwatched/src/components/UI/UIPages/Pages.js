import React, { useState } from "react";
import useApi from "components/utils/useApi";
import UIInput from "components/UI/UIInput";
import PropTypes from "prop-types";
import UIHeader from "components/UI/UIHeader";
import { Container, CardContainer } from "../UIContainer/UIContainer";

export const BasePageNoSearch = ({ children }) => (
  <>
    <UIHeader />
    <Container>{children}</Container>
  </>
);

export const BasePage = ({ children }) => {
  const [search, setSearch] = useState("");
  const [searchFlag, setSearchFlag] = useState(false);
  const [query, setQuery] = useState("");

  const [fetchMovies, movies] = useApi({
    url: "https://api.themoviedb.org/3/search/movie",
    method: "GET",
    params: {
      api_key: "4d751774b43dab4d91f60e7ee588cf1f",
      query: search,
    },
  });

  function Search(ev) {
    if (ev.key === "Enter" && search !== "") {
      setQuery(search);
      setSearchFlag(true);
      fetchMovies();
    }
  }

  function onChange(ev) {
    if (ev.target.value === "") {
      setSearchFlag(false);
    }
    setSearch(ev.target.value);
  }

  return (
    <>
      <UIHeader />
      <UIInput
        name="movie-input"
        value={search}
        onChange={onChange}
        onKeyPress={Search}
        placeholder="Pesquisar..."
        large
      />
      {searchFlag && (movies.data || movies.loading || movies.error) ? (
        <CardContainer search data={movies} query={query ?? null} />
      ) : (
        children
      )}
    </>
  );
};

BasePage.propTypes = {
  children: PropTypes.any,
};

BasePageNoSearch.propTypes = {
  children: PropTypes.any,
};
