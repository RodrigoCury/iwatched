import React from "react";
import UIButton from "components/UI/UIButton";
import UIInput from "components/UI/UIInput";
import styled from "styled-components";
import { Body } from "components/UI/UIBody";
import PropTypes from "prop-types";

export const Form = styled.form`
  margin: 20px auto;
  max-width: 400px;
  width: 50%;
  display: flex;
  flex-direction: column;
`;
const H1 = styled.h1`
  color: white;
  text-align: center;
`;

export default function UIForm({ fields, title, onSubmit, buttons }) {
  return (
    <Form onSubmit={onSubmit}>
      {title && <H1>{title}</H1>}
      {fields.map((tag) => (
        <UIInput {...tag} key={tag.id} />
      ))}
      <Body>
        {buttons.map((tag, idx) => (
          <UIButton {...tag} key={idx}>
            {tag.innerText}
          </UIButton>
        ))}
      </Body>
    </Form>
  );
}

UIForm.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
  onSubmit: PropTypes.func,
  buttons: PropTypes.arrayOf(PropTypes.object),
};
