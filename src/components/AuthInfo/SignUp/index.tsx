import { TextInputField, Button, NewPersonIcon } from 'evergreen-ui'
import React from 'react'

function SignIn() {
  const [value, setValue] = React.useState('')

  return (
    <div>
      <TextInputField
        label="Nome"
        placeholder="Digite seu nome"
        required
      />
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
      <TextInputField
        label="Confirmação de senha"
        placeholder="Confirme sua senha"
        required
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
    </div>
  )
}

export default SignIn