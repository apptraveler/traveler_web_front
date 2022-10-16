import MainLayout from '@layouts/MainLayout';
import DashboardCard from '@components/DashboardCard';
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
      main={<DashboardCard currentTab={currentTab}/>}
    />
  )
}

export default Dashboard;