import { Pane } from 'evergreen-ui'
import ProfileSidesheet from '@components/ProfileSidesheet'
import DashboardList from '@components/DashboardList'
import DashboardTabs from '@components/DashboardTabs'
import { useState } from 'react'

function MainLayout(props: any) {
  const [currentTab, setCurrentTab] = useState(0)
  
  function handleTabSelection (index: number) {
    setCurrentTab(index)
  }

  return (
    <Pane height='100%' width='100%' padding='1rem'>
      <Pane
        marginBottom='2rem'
        display='flex'
        justifyContent='space-between'
        alignItems='center'
      >
        <ProfileSidesheet></ProfileSidesheet>
        <DashboardTabs onSelectTab={handleTabSelection}></DashboardTabs>
      </Pane>
      <DashboardList currentTab={currentTab}></DashboardList>
    </Pane>
  )
}

export default MainLayout