import { Link, TextInputField, Button, LogInIcon } from 'evergreen-ui'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import classes from './index.module.scss'

function SignIn() {
  const [value, setValue] = React.useState('')

  return (
    <div className={classes['sign-in']}>
      <TextInputField
        label="E-mail"
        placeholder="Digite seu e-mail"
        required
      />
      <TextInputField
        label="Senha"
        placeholder="Digite sua senha"
        required
      />
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
    </div>
  )
}

export default SignIn