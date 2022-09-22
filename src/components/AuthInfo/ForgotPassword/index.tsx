import { StepBackwardIcon, TextInputField, Button, LogInIcon } from 'evergreen-ui'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import classes from './index.module.scss'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { authSchema } from '@utils/validation'

function ForgotPassword() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(authSchema)
  });

  const onSubmit = (data: any) => {
    setFormData(data)
  };

  const [formData, setFormData] = React.useState({
    email: ''
  })

  return (
    <form
      className={classes['forgot-password']}
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextInputField
        className="teste -form"
        label="E-mail"
        placeholder="Digite seu e-mail"
        required
        isInvalid={!!errors.email}
        validationMessage={!!errors.email ? errors.email.message : undefined}
        {...register("email")}
      />
      <Button
        className="button -fullWidth"
        marginY={8} 
        marginRight={12}
        iconAfter={LogInIcon}
        appearance='primary'
        type="submit"
      >
        Recuperar Senha
      </Button>
      <Button
        className="button -fullWidth"
        is={RouterLink}
        marginY={8} 
        marginRight={12}
        iconBefore={StepBackwardIcon}
        appearance='default'
        to="/auth"
      >
        Voltar
      </Button>
    </form>
  )
}

export default ForgotPassword