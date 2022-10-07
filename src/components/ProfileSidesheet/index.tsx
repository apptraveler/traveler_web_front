import { Pane, Avatar, SideSheet, Button, Paragraph, UserIcon, Badge, Heading } from 'evergreen-ui'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import PhotographerImage from '@images/profiles/photographer.svg';

function ProfileSidesheet () {
  const navigate = useNavigate()
  const [isShown, setIsShown] = useState(false)

  function redirectToProfileForm() {
    navigate('/profile-form')
  }

  return (
    <>
      <SideSheet position='left' isShown={isShown} onCloseComplete={() => setIsShown(false)}>
        <Pane padding='1rem'>
          <Pane
            display='flex'
            flexDirection='column' 
            justifyContent='center'
            alignItems='center'
            marginTop='2rem'
            marginBottom='2rem'
          >
            <Avatar
              name="Igor Duarte"
              size={80}
              marginBottom='1rem'
              color="blue"
            />
            <Paragraph marginBottom='1rem' size='large'>Igor Duarte</Paragraph>
            <Badge color="blue">
              Fotógrafo
            </Badge>
          </Pane>
          <Pane
            display='flex'
            flexDirection='column' 
            justifyContent='center'
            marginTop='2rem'
            marginBottom='2rem'
          >
            <Heading fontSize='18px' marginBottom='1rem'>Mais sobre seu Perfil</Heading>
            <Paragraph marginBottom='1rem' size='large'>O perfil de fótografo gosta de tirar fotos de tudo que vê pela frente, registrar os momentos é o que é importante, detalhes pra você são a chave.</Paragraph>
            <img width='50%' src={PhotographerImage} alt="aboutphoto" align-self='center' />
          </Pane>
          <Pane
            display='flex'
            flexDirection='column' 
            justifyContent='center'
            marginTop='2rem'
            marginBottom='2rem'
          >
            <Paragraph
              size='large'
              marginBottom='1rem'
              color="muted"
            >
              Não concorda? Refaça nosso formulário de identificação de perfil.
            </Paragraph>
            <Button
              size='medium'
              appearance="primary"
              onClick={() => redirectToProfileForm()}
            >
              Refazer
            </Button>
          </Pane>
        </Pane>
      </SideSheet>
      <Button size="large" appearance='primary' iconAfter={UserIcon} onClick={() => setIsShown(true)}>Ver Perfil</Button>
    </>
  )
}

export default ProfileSidesheet