import { StepBackwardIcon, TextInputField, Button, LogInIcon } from 'evergreen-ui'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import classes from './index.module.scss'

function ForgotPassword() {
  const [value, setValue] = React.useState('')

  return (
    <div className={classes['forgot-password']}>
      <TextInputField
        label="E-mail"
        placeholder="Digite seu e-mail"
        required
      />
      <Button
        width={'100%'}
        marginY={8} 
        marginRight={12}
        iconAfter={LogInIcon}
        appearance='primary'
      >
        Recuperar Senha
      </Button>
      <Button
        is={RouterLink}
        width={'100%'}
        marginY={8} 
        marginRight={12}
        iconBefore={StepBackwardIcon}
        appearance='default'
        to="/auth"
      >
        Voltar
      </Button>
    </div>
  )
}

export default ForgotPassword