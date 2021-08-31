import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import UIBody from "components/UI/UIBody"
import UIForm from "components/Form/Form"

const initialFormValues = {
    user: "",
    password: "",
}



const Login = () => {

    const [formValues, setFormValues] = useState(initialFormValues)

    function onSubmit(event) {
        event.preventDefault()
        console.log(formValues,)
    }

    const history = useHistory()

    function cancel() {
        history.push('/')
    }

    const fields = [
        {
            id: "user",
            name: "user",
            label: "Usuário",
            type: "text",
            placeholder: "Usuário...",
            onChange: (ev) => setFormValues({
                ...formValues,
                [ev.target.id] : ev.target.value
            }),
            value: formValues.user
        },
        {
            id: "password",
            name: "password",
            label: "Senha",
            placeholder: "Senha...",
            type: "password",
            onChange: (ev) => setFormValues({
                ...formValues,
                [ev.target.id] : ev.target.value
            }),
            value: formValues.password
        },
    ]

    const buttons = [
        {
            component: "button",
            type: "submit",
            innerText: "Entrar"
        },
        {
            component: "button",
            type: "button",
            innerText: "Voltar",
            onClick: cancel,
        },
    ]

    return (
        <UIBody>
            <UIForm onSubmit={onSubmit} fields={fields} title="Login" buttons={buttons}/>
        </UIBody>
    )
}

export default Login