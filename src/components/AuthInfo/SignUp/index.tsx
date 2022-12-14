import { TextInputField, Button, NewPersonIcon, toaster } from 'evergreen-ui'
import React from 'react'
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { signUpSchema } from '@utils/validation'
import { Register, IRegisterForm, IRegisterResponse } from '@services/authentication';

import { useDispatch } from 'react-redux'
import { setAuthToken } from '@store/authentication'
import {useNavigate } from 'react-router-dom'

function SignIn() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm<IRegisterForm>({
    resolver: yupResolver(signUpSchema)
  });

  const [formData, setFormData] = React.useState({
    email: ''
  })

  const [isLoading, setIsLoading] = React.useState(false)

  const onSubmit: SubmitHandler<IRegisterForm> = async (data) => {
    setIsLoading(true)
    setFormData(data)
    const registerData = {
      email: data.email,
      fullName: data.name,
      password: data.password,
    }
    await Register(registerData)
      .then((response: IRegisterResponse) => {
        if (response.success) {
          toaster.success('Usuário criado com sucesso', { duration: 3 })
          const token = response.data.token
          dispatch(setAuthToken(token))
          navigate('/profile-form')
        }
      })
      .finally(() => {
        setIsLoading(false)
      })
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextInputField
        label="Nome"
        placeholder="Digite seu nome"
        required
        isInvalid={!!errors.name}
        validationMessage={!!errors.name ? errors.name.message : undefined}
        {...register("name")}
      />
      <TextInputField
        label="E-mail"
        placeholder="Digite seu e-mail"
        required
        isInvalid={!!errors.email}
        validationMessage={!!errors.email ? errors.email.message : undefined}
        {...register("email")}
      />
      <TextInputField
        label="Senha"
        type="password"
        placeholder="Digite sua senha"
        required
        isInvalid={!!errors.password}
        autoComplete='on'
        validationMessage={!!errors.password ? errors.password.message : undefined}
        {...register("password")}
      />
      <TextInputField
        label="Confirmação de senha"
        type="password"
        placeholder="Confirme sua senha"
        required
        isInvalid={!!errors.confirmPassword}
        autoComplete='on'
        validationMessage={!!errors.confirmPassword ? errors.confirmPassword.message : undefined}
        {...register("confirmPassword")}
      />
      <Button
        width={'100%'}
        marginY={8}
        isLoading={isLoading}
        marginRight={12}
        iconAfter={NewPersonIcon}
        appearance='primary'
      >
        Cadastrar
      </Button>
    </form>
  )
}

export default SignIn