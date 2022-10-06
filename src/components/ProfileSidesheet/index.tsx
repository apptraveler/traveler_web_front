import { Pane, Avatar, SideSheet, Button, Paragraph, UserIcon } from 'evergreen-ui'
import { useState } from 'react'

function ProfileSidesheet () {
  const [isShown, setIsShown] = useState(false)
  return (
    <>
      <SideSheet position='left' isShown={isShown} onCloseComplete={() => setIsShown(false)}>
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
          <Paragraph size={18}>Igor Duarte</Paragraph>
        </Pane>
      </SideSheet>
      <Button size="large" iconAfter={UserIcon} onClick={() => setIsShown(true)}>Ver Perfil</Button>
    </>
  )
}

export default ProfileSidesheet