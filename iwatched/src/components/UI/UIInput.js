import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const InputDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`

const Input = styled.input`
    
`

const Label = styled.label`

`

export default function UIInput({label, name, id, placeholder, onChange}) {
    return (
        <InputDiv>
            <Label htmlFor={name}>{label}</Label>
            <Input name={name} id={id || name} placeholder={placeholder} onChange={onChange ? onChange : null}/>
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