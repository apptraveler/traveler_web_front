import MainLayout from '@layouts/MainLayout';
import DashboardList from '@components/DashboardList';
import DashboardTabs from '@components/DashboardTabs';
import { useState } from 'react';

const Dashboard = (props: any) => {
  const [currentTab, setCurrentTab] = useState(0)
  
  function handleTabSelection (index: number) {
    setCurrentTab(index)
  }
  
  return (      
    <MainLayout
      top={<DashboardTabs onSelectTab={handleTabSelection}/>}
      main={<DashboardList currentTab={currentTab}/>}
    />
  )
}

export default Dashboard;