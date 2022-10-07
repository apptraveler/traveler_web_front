import { Pane, Tablist, Tab, Paragraph } from 'evergreen-ui'
import StressImage from '@images/Stress.svg';
import { useState } from 'react'
import DestinyInfo from '@components/DestinyInfo';
import classes from './index.module.scss'

interface IDashboardTabsProps {
  onSelectTab: (index: number) => void
}

function DashboardTabs (props: IDashboardTabsProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [tabs] = useState(['Para você', 'Mais buscados', 'Favoritos'])

  function setCurrentTab(index: number) {
    setSelectedIndex(index)
    props.onSelectTab(index)
  }

  return (
    <Tablist>
      {tabs.map((tab, index) => (
        <Tab
          appearance='primary'
          key={tab}
          id={tab}
          onSelect={() => setCurrentTab(index)}
          isSelected={index === selectedIndex}
          aria-controls={`panel-${tab}`}
          fontSize='15px'
        >
          {tab}
        </Tab>
      ))}
    </Tablist>
  )
}

export default DashboardTabs