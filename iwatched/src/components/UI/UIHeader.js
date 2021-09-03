import React, { useContext } from "react";
import StoreContext from "components/Store/Context";
import styled from "styled-components";
import { Link } from "react-router-dom";
import UIUserHeader from "./UIUserHeader";

const Title = styled(Link)`
  color: #ffffff;
  font-size: 30px;
  text-decoration: none;
  font-weight: bold;
  align-self: center;
`;

const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 5px auto 10px auto;
  max-width: 1000px;
`;

export default function UIHeader() {
  function logOut() {
    setToken(null);
  }

  const { token, setToken } = useContext(StoreContext);

  return (
    <Header>
      <Title to="/">iWatched</Title>
      <UIUserHeader token={token} logOut={logOut} />
    </Header>
  );
}
