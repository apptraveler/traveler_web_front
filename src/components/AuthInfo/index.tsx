import classes from './index.module.scss'
import { Pane, Tablist, Tab } from 'evergreen-ui'
import React from 'react'
import SignIn from '@components/AuthInfo/SignIn'
import SignUp from '@components/AuthInfo/SignUp'

interface CardProps {
  title?: string
  description?: string
}

function Card (props: CardProps) {
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const [tabs] = React.useState(['Login', 'Cadastre-se'])

  return (
    <div className={classes.card}>
      {props.title && <h1 className={classes.title}>{props.title}</h1>}
      {props.description && <h2 className={classes.description}>{props.description}</h2>}
      <Tablist marginBottom={16}>
        {tabs.map((tab, index) => (
          <Tab
            key={tab}
            id={tab}
            onSelect={() => setSelectedIndex(index)}
            isSelected={index === selectedIndex}
            aria-controls={`panel-${tab}`}
            appearance='primary'
            className={classes.tab}
          >
            {tab}
          </Tab>
        ))}
      </Tablist>
      {tabs.map((tab, index) => (
        <Pane
          className={classes['tab-pane']}
          key={tab}
          id={`panel-${tab}`}
          role="tabpanel"
          aria-labelledby={tab}
          aria-hidden={index !== selectedIndex}
          display={index === selectedIndex ? 'block' : 'none'}
        >
          {index === 0 && <SignIn />}
          {index === 1 && <SignUp />}
        </Pane>
      ))}
    </div>
  )
}

export default Card