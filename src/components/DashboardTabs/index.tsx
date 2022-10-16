import { Pane, Tablist, Tab, Paragraph } from 'evergreen-ui'
import StressImage from '@images/Stress.svg';
import { useState } from 'react'
import DestinyInfo from '@components/DestinyInfo';
import classes from './index.module.scss'
import ContentSlideXAnimation from '@animations/ContentSlideX';

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
    <Tablist display='flex' width='80%' justifyContent='end'>
      <ContentSlideXAnimation>
        {tabs.map((tab, index) => (
          <Tab
            marginRight='10px'
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
      </ContentSlideXAnimation>
    </Tablist>
  )
}

export default DashboardTabs