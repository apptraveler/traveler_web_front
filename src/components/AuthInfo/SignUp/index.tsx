import { TextInputField, Button, NewPersonIcon } from 'evergreen-ui'
import React from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { authSchema } from '@utils/validation'

function SignIn() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(authSchema)
  });

  const [formData, setFormData] = React.useState({
    email: ''
  })

  const [submitError, setSubmitError] = React.useState(false)

  const onSubmit = (data: any) => {
    setFormData(data)
    setSubmitError(true)
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