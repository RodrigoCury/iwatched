import React, { useContext, useState, useEffect } from "react";
import { useHistory, Redirect } from "react-router-dom";
import UIForm from "components/Form/Form";
import StoreContext from "components/Store/Context";
import useApi from "components/utils/useApi";
import { BasePageNoSearch } from "components/UI/UIPages/Pages";

const initialFormValues = {
  user: "",
  password: "",
};

const Login = () => {
  const history = useHistory();

  const [formValues, setFormValues] = useState(initialFormValues);
  const { token, setToken } = useContext(StoreContext)

  const [call, requestInfo] = useApi({
    url: "http://localhost:3340/users",
    params: {
      user: formValues.user
    }
  })


  function onChange(ev) {
    const { value, name } = ev.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  }

  function onSubmit(event) {
    event.preventDefault();
    call()
  }

  useEffect(() => {
    if (requestInfo.data && !requestInfo.loading){
      const {username, password, id, token} = requestInfo.data[0];

      if(formValues.user == username && password == formValues.password){
        setToken({
          id,
          user: username,
          token: token,
        })
        history.push('/')
      } else {
        console.log("no pass")
      }
      return
    }

    if(requestInfo.error){
      console.log(requestInfo.error);
    }

  }, [requestInfo])

  function cancel() {
    history.push("/");
  }

  const fields = [
    {
      id: "user",
      name: "user",
      label: "Usuário",
      type: "text",
      placeholder: "Usuário...",
      onChange,
      value: formValues.user,
    },
    {
      id: "password",
      name: "password",
      label: "Senha",
      placeholder: "Senha...",
      type: "password",
      onChange,
      value: formValues.password,
    },
  ];

  const buttons = [
    {
      component: "button",
      type: "submit",
      innerText: "Entrar",
    },
    {
      component: "button",
      type: "button",
      innerText: "Voltar",
      onClick: cancel,
    },
  ];

  if (token && token.token) {
      return (<Redirect to="/"/>)
  }

  return (
    <BasePageNoSearch>
      <UIForm
        onSubmit={onSubmit}
        fields={fields}
        title="Login"
        buttons={buttons}
      />
    </BasePageNoSearch>    
  )
}

export default Login;
