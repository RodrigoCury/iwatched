import {
  CardContainer,
  Container,
} from "components/UI/UIContainer/UIContainer";
import UIInfiniteScroll from "components/UI/UIInfiniteScroll/UIInfiniteScroll";
import { BasePage } from "components/UI/UIPages/Pages";
import { ApiKey } from "components/utils/apiKey";
import useApi from "components/utils/useApi";
import React, { useEffect, useState } from "react";
// import PropTypes from 'prop-types'
// import styled from 'styled-components'
import { useParams, useHistory } from "react-router-dom";

const lists = {
  topRatedMovies: ["/movie/top_rated", "movie"],
  popularMovies: ["/movie/popular", "movie"],
  upcomingMovies: ["/movie/upcoming", "movie"],
  inTheater: ["/movie/now_playing", "movie"],
  topRatedSeries: ["/tv/top_rated", "series"],
  popularSeries: ["/tv/popular", "series"],
  onTheAir: ["/tv/on_the_air", "series"],
  airingToday: ["/tv/airing_today", "series"],
};

const baseParams = {
  api_key: ApiKey,
};

const ViewAll = () => {
  const { list } = useParams();
  const history = useHistory();

  if (!Object.keys(lists).includes(list)) {
    history.push("/");
  }

  const [page, setPage] = useState(1);
  const [load, requestInfo] = useApi({
    url: "https://api.themoviedb.org/3" + lists[list][0],
    params: {
      ...baseParams,
      page: page,
    },
  });

  function fetchMore() {
    const newPage = page + 1;

    load({
      isFetchMore: true,
      params: {
        ...baseParams,
        page: newPage,
      },
      updateRequestData: (newRequestData, previousRequestData) => {
        const allData = {
          ...newRequestData,
          data: {
            results: [
              ...previousRequestData.data.results,
              ...newRequestData.data.results,
            ],
          },
        };
        return allData;
      },
    });

    setPage(newPage);
  }

  useEffect(() => {
    load();
  }, [list]);

  useEffect(() => {
    console.log(requestInfo);
  }, [requestInfo]);

  return (
    <BasePage>
      <Container trend type={lists[list][1]}>
        <CardContainer {...requestInfo} />
      </Container>
      {requestInfo.data && !requestInfo.loading && page < requestInfo.total && (
        <UIInfiniteScroll fetchMore={fetchMore} />
      )}
    </BasePage>
  );
};

export default ViewAll;
