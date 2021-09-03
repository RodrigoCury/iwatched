import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const style = `
    padding: 5px 10px;
    color: #FFF;
    background: #706fd3;
    align-self: center;
    text-decoration: none;
    font-weight: bold;
    font-size: 20px;
    border-radius: 4px;
    border: none;
    transition: 300ms;
    -webkit-box-shadow: 0px 0px 15px -3px #706fd3;
    box-shadow: 0px 0px 15px -3px #706fd3;

    &:hover {
        -webkit-box-shadow: 0px 0px 10px -3px #706fd3;
        box-shadow: 0px 0px 10px -3px #706fd3;
    }

    &:active {
        -webkit-box-shadow: 0px 0px 15px -3px #706fd3;
        box-shadow:  0px 0px 15px -3px #706fd3;
    }

`;

const ButtonTypes = {
  button: styled.button`
    ${style}
  `,
  a: styled.a`
    ${style}
  `,
  Link: styled(Link)`
    ${style}
  `,
};

const UIButton = ({ component, children, ...restProps }) => {
  const Button = ButtonTypes[component];
  return <Button {...restProps}>{children}</Button>;
};

UIButton.defaultProps = {
  component: "a",
};

UIButton.propTypes = {
  type: PropTypes.string,
  component: PropTypes.string,
  children: PropTypes.any,
};

export default UIButton;
