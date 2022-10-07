import { Pane } from 'evergreen-ui'
import ProfileSidesheet from '@components/ProfileSidesheet'
import DashboardList from '@components/DashboardList'

function MainLayout(props: any) {
  return (
    <Pane height='100%' width='100%' padding='1rem'>
      <Pane marginBottom='2rem'>
        <ProfileSidesheet></ProfileSidesheet>
      </Pane>
      <DashboardList></DashboardList>
    </Pane>
  )
}

export default MainLayout