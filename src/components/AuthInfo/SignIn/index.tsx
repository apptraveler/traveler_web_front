import { Link, TextInputField, Button, LogInIcon, InlineAlert } from 'evergreen-ui'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import classes from './index.module.scss'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

function SignIn() {
  const [formData, setFormData] = React.useState({
    email: ''
  })

  const [submitError, setSubmitError] = React.useState(false)

  const schema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required()
  }).required();

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data: any) => {
    setFormData(data)
    setSubmitError(true)
  };

  return (
    <form
      className={classes['sign-in']}
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextInputField
        label="E-mail"
        placeholder="Digite seu e-mail"
        isInvalid={!!errors.email}
        validationMessage={!!errors.email ? 'Insira um e-mail válido' : undefined}
        required
        {...register("email")}
      />
      <TextInputField
        label="Senha"
        placeholder="Digite sua senha"
        isInvalid={!!errors.password}
        validationMessage={!!errors.password ? 'Senha obrigatória' : undefined}
        required
        {...register("password")}
      />
      {submitError && <InlineAlert
        intent="danger"
        marginBottom={20}
      >
        E-mail ou senha incorretos
      </InlineAlert>}
      <Link
        is={RouterLink}
        className={classes.link}
        size={1}
        to="/forgot-password"
      >
        Esqueci minha senha
      </Link>
      <Button
        width={'100%'}
        marginY={8} 
        marginRight={12}
        iconAfter={LogInIcon}
        appearance='primary'
      >
        Entrar
      </Button>
    </form>
  )
}

export default SignIn