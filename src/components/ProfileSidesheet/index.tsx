import { Pane, Avatar, SideSheet, Button, Paragraph, UserIcon, Badge, Heading, MenuClosedIcon } from 'evergreen-ui'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import PhotographerImage from '@images/profiles/photographer.svg';
import classes from './index.module.scss'

import { useDispatch } from 'react-redux'
import { setAuthToken } from '@store/authentication'
import { useIsMobile } from '@hooks/dynamicStyle';

function ProfileSidesheet () {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [isShown, setIsShown] = useState(false)

  function redirectToProfileForm() {
    navigate('/profile-form')
  }

  function logout() {
    dispatch(setAuthToken(''))
  }

  return (
    <>
      <SideSheet
        position='left'
        isShown={isShown}
        onCloseComplete={() => setIsShown(false)}
        width={useIsMobile() ? '100%': '650px'}
      >
        <Pane
          height='100%'
          padding='2rem'
          display='flex'
          flexDirection='column'
          justifyContent='space-around'
        >
          {useIsMobile() &&
            <Pane
              textAlign='end'
            >
              <Button
                textAlign='end'
                marginY={8}
                intent='danger'
                marginRight={12}
                iconAfter={MenuClosedIcon}
                onClick={() => setIsShown(false)}
              >
                Close
              </Button>
            </Pane>
          }
          <Pane
            display='flex'
            flexDirection='column' 
            justifyContent='center'
            alignItems='center'
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
          >
            <Heading fontSize='18px' marginBottom='1rem'>Mais sobre seu Perfil</Heading>
            <Paragraph marginBottom='1rem' size='large'>O perfil de fótografo gosta de tirar fotos de tudo que vê pela frente, registrar os momentos é o que é importante, detalhes pra você são a chave.</Paragraph>
            <img className={classes.image} src={PhotographerImage} alt="aboutphoto" />
          </Pane>
          <Pane
            display='flex'
            flexDirection='column' 
            justifyContent='center'
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
              marginBottom='3rem'
              appearance="primary"
              onClick={() => redirectToProfileForm()}
            >
              Refazer
            </Button>
            <Button
              size='medium'
              intent='danger'
              appearance='primary'
              onClick={() => logout()}
            >
              Sair
            </Button>
          </Pane>
        </Pane>
      </SideSheet>
      <Button size="large" appearance='primary' iconAfter={UserIcon} onClick={() => setIsShown(true)}>Ver Perfil</Button>
    </>
  )
}

export default ProfileSidesheet