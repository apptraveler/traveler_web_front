import classes from './index.module.scss'
import { Paragraph, Pane, Tablist, Tab } from 'evergreen-ui'
import React from 'react'

interface CardProps {
  title?: string
  description?: string
}

function Card (props: CardProps) {
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const [tabs] = React.useState(['Login', 'Cadastre-se'])

  return (
    <div className={classes.card}>
      <h1 className={classes.title}>{props.title}</h1>
      <h2 className={classes.description}>{props.description}</h2>
      <Tablist marginBottom={16}>
        {tabs.map((tab, index) => (
          <Tab
            key={tab}
            id={tab}
            onSelect={() => setSelectedIndex(index)}
            isSelected={index === selectedIndex}
            aria-controls={`panel-${tab}`}
            appearance='primary'
            className='teste'
          >
            {tab}
          </Tab>
        ))}
      </Tablist>
      {tabs.map((tab, index) => (
        <Pane
          key={tab}
          id={`panel-${tab}`}
          role="tabpanel"
          aria-labelledby={tab}
          aria-hidden={index !== selectedIndex}
          display={index === selectedIndex ? 'block' : 'none'}
        >
          {tab}
        </Pane>
      ))}
    </div>
  )
}

export default Card