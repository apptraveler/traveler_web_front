import { Pane } from 'evergreen-ui'
import ProfileSidesheet from '@components/ProfileSidesheet'

function MainLayout(props: any) {
  return (
    <Pane height='100%' width='100%' padding='1rem'>
      <ProfileSidesheet></ProfileSidesheet>
      {props.children}
    </Pane>
  )
}

export default MainLayout