import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const InputDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 15px 0;
`

const Input = styled.input`
    width: calc(100% - 20px);
    padding: 5px 10px;
    border-radius: 8px;
    font-size: 25px;
    color: #2c2c54;
    
    &::placeholder {
        color: #2c2c54;
        opacity: 1;
    }
`

const Label = styled.label`
    font-size: 20px;
    margin-bottom: 10px;
    margin-left: 5px;
    color: white;
`

export default function UIInput({label, name, id, ...restProps }) {

    return (
        <InputDiv className={"form-field"}>
            {label && (
                <Label htmlFor={id ?? name}>{label}</Label>
            )}
            <Input name={name} id={id ?? name} {...restProps} />
        </InputDiv>
    )
}

UIInput.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
}