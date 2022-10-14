import { Link, TextInputField, Button, LogInIcon, toaster } from 'evergreen-ui'
import React from 'react'
import { Link as RouterLink, useNavigate } from 'react-router-dom'
import classes from './index.module.scss'
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { signInSchema } from '@utils/validation'
import { Login, ILoginParams, ILoginResponse } from '@services/authentication';

import { useSelector, useDispatch } from 'react-redux'
import { setAuthToken } from '@store/authentication'

function SignIn() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm<ILoginParams>({
    resolver: yupResolver(signInSchema)
  });

  const [formData, setFormData] = React.useState({
    email: '',
    password: ''
  })

  const [isLoading, setIsLoading] = React.useState(false)

  const onSubmit: SubmitHandler<ILoginParams> = async (data: any) => {
    setIsLoading(true)
    setFormData(data)

    Login(data)
      .then((response: ILoginResponse) => {
        if (response.success) {
          toaster.success('Login realizado com sucesso', { duration: 3 })
          const token = response.data.token
          dispatch(setAuthToken(token))
        }
        const conditionalRedirect = true ? '/profile-form' : '/dashboard'
        navigate(conditionalRedirect)
      })
      .finally(() => {
        setIsLoading(false)
      })
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
        validationMessage={!!errors.email ? errors.email.message : undefined}
        required
        {...register("email")}
      />
      <TextInputField
        label="Senha"
        type="password"
        placeholder="Digite sua senha"
        isInvalid={!!errors.password}
        validationMessage={!!errors.password ? errors.password.message : undefined}
        autoComplete='on'
        required
        {...register("password")}
      />
      <Link
        is={RouterLink}
        className={classes.link}
        size='small'
        to="/forgot-password"
      >
        Esqueci minha senha
      </Link>
      <Button
        width={'100%'}
        type='submit'
        isLoading={isLoading}
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