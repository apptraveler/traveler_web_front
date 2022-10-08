import { TextInputField, Button, NewPersonIcon } from 'evergreen-ui'
import React from 'react'
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { signUpSchema } from '@utils/validation'
import { Register, IRegisterParams } from '@services/authentication';

function SignIn() {
  const { register, handleSubmit, formState: { errors } } = useForm<IRegisterParams>({
    resolver: yupResolver(signUpSchema)
  });

  const [formData, setFormData] = React.useState({
    email: ''
  })

  const [submitError, setSubmitError] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)

  const onSubmit: SubmitHandler<IRegisterParams> = async (data) => {
    setFormData(data)
    await Register(data)
      .then((response: any) => {
        console.log(response)
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
        placeholder="Digite sua senha"
        required
        isInvalid={!!errors.password}
        validationMessage={!!errors.password ? errors.password.message : undefined}
        {...register("password")}
      />
      <TextInputField
        label="Confirmação de senha"
        placeholder="Confirme sua senha"
        required
        isInvalid={!!errors.confirmPassword}
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