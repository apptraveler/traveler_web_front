import { StepBackwardIcon, TextInputField, Button, LogInIcon } from 'evergreen-ui'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import classes from './index.module.scss'
import { useForm } from "react-hook-form";
import { validateEmail } from "@utils/validators"

function ForgotPassword() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [formData, setFormData] = React.useState({
    email: ''
  })

  const onSubmit = (data: any) => {
    setFormData(data)
  };

  console.log(watch("email")); 

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
        isInvalid={validateEmail(formData.email)}
        {...register("email", { required: true })}
      />
      <Button
        width={'100%'}
        marginY={8} 
        marginRight={12}
        iconAfter={LogInIcon}
        appearance='primary'
        type="submit"
      >
        Recuperar Senha
      </Button>
      <input type="submit" />
      <Button
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