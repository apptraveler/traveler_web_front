import { Pane, Avatar, SideSheet, Button, Paragraph, UserIcon, Badge, Heading, MenuClosedIcon } from 'evergreen-ui'
import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from 'react-redux'
import { setAuthToken } from '@store/authentication'
import { useIsMobile } from '@hooks/dynamicStyle';
import { getProfileInfo } from '@services/traveler';
import ProfilePhoto from '@components/ProfilePhoto';

function ProfileSidesheet () {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [isShown, setIsShown] = useState(false)
  const [fullName, setFullName] = useState('')
  const [profileInfo, setProfileInfo] = useState({
    id: '',
    name: '',
    description: ''
  })
  const authToken = useSelector((state: any) => state.auth.token)

  function redirectToProfileForm() {
    navigate('/profile-form')
  }

  function logout() {
    dispatch(setAuthToken(''))
  }


  function setProfileType() {
    getProfileInfo(authToken)
      .then((response: any) => {
        if (response.success) {
          console.log(response)
          setFullName(response.data.fullName)
          setProfileInfo({
            id: response.data.profile.id,
            name: response.data.profile.name,
            description: 'teste'
          })
        }
      })
  }

  useEffect(() => {
    setProfileType()
  }, [])

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
            <Paragraph marginBottom='1rem' size='large'>{fullName}</Paragraph>
            <Badge color="blue">
              { profileInfo.name }
            </Badge>
          </Pane>
          <Pane
            display='flex'
            flexDirection='column' 
            justifyContent='center'
          >
            <Heading fontSize='18px' marginBottom='1rem'>Mais sobre seu Perfil</Heading>
            <Paragraph marginBottom='1rem' size='large'>O perfil de fótografo gosta de tirar fotos de tudo que vê pela frente, registrar os momentos é o que é importante, detalhes pra você são a chave.</Paragraph>
            <ProfilePhoto profileId={profileInfo.id}/>
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