import { TextInputField, Button, LogInIcon } from 'evergreen-ui'
import React from 'react'

function SignIn() {
  const [value, setValue] = React.useState('')

  return (
    <div>
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