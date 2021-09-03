import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import UIButton from "./UIButton";

const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

const UserH2 = styled.h3`
  color: #fff;
  margin-right: 10px;
`;

function capitalize(text) {
  return text
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

const UIUserHeader = ({ token, logOut }) => {
  return (
    <Div>
      {token && token.token ? (
        <Div>
          <UserH2>Bem vindo: {capitalize(token.user)}</UserH2>
          <UIButton component="button" type="button" onClick={logOut}>
            Sair
          </UIButton>
        </Div>
      ) : (
        <UIButton component="Link" to="/login">
          Login
        </UIButton>
      )}
    </Div>
  );
};

UIUserHeader.propTypes = {
  token: PropTypes.object,
  logOut: PropTypes.func.isRequired,
};

export default UIUserHeader;
