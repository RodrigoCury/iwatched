import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const InputDiv = styled.div`
  width: ${(props) => (props.large ? "100%" : "auto")};
  ${(props) => props.large ? "max-width: 1000px;" : ""}
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 15px auto;
  color: #706FD3;
`;

const Input = styled.input`
  width: calc(100% - 30px);
  height: 30px;
  padding: 5px 15px;
  border-radius: 24px;
  font-size: 25px;
  color: #706FD3 !important;
  border: 2px solid white;

  &::placeholder {
    color: #706FD3;
    opacity: 1;
  }

  &:focus{
    color: #706FD3;
  }
`;

const Label = styled.label`
  font-size: 20px;
  margin-bottom: 10px;
  margin-left: 5px;
  color: white;
`;

export default function UIInput({ label, name, id, large, ...restProps }) {
  console.log(large);

  return (
    <InputDiv className={"form-field"} large={large}>
      {label && <Label htmlFor={id ?? name}>{label}</Label>}
      <Input name={name} id={id ?? name} {...restProps} />
    </InputDiv>
  );
}

UIInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  large: PropTypes.any,
};
