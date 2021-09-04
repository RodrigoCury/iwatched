import React, { useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Container } from "./UIContainer";
import useApi from "components/utils/useApi";
import { ApiKey } from "components/utils/apiKey";
import { ScrollableCardContainer } from "./UIContainer";

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
`;
const Title = styled.h3`
  color: #000;
  margin: 0;
  padding: 0;
`;

const ViewMore = styled(Link)`
  color: #706fd3;
  font-weight: bold;
  font-size: 14px;
  content: "Ver tudo";
  &:hover {
    text-decoration: underline;
  }
`;

const Trending = ({ to, title, url, ...restProps }) => {
  const [load, requestInfo] = useApi({
    url,
    params: {
      api_key: ApiKey,
      language: "pt-BR",
    },
  });

  useEffect(() => {
    load();
  }, []);

  // useEffect(() => {
  //   console.log(requestInfo);
  // }, [requestInfo]);

  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <ViewMore to={`/viewAll/${to}`}>Veja Tudo</ViewMore>
      </Header>
      <ScrollableCardContainer
        data={requestInfo.data}
        error={requestInfo.error}
        loading={requestInfo.loading}
        {...restProps}
      ></ScrollableCardContainer>
    </Container>
  );
};

Trending.propTypes = {
  title: PropTypes.string,
  to: PropTypes.string,
  url: PropTypes.string,
};

export default Trending;
